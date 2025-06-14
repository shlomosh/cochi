import { useState, useCallback, useRef, FC } from 'react'
import Cropper from 'react-easy-crop'
import { useDropzone } from 'react-dropzone'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Slider } from '@/components/ui/slider'
import { Upload, RotateCcw, Check, X, ZoomIn, ZoomOut } from 'lucide-react'

interface CropArea {
  x: number
  y: number
  width: number
  height: number
}

interface ImageEditorProps {
  onImageSave: (croppedImage: string) => void
  onCancel?: () => void
  maxFileSize?: number // in MB
}

export const ImageEditor: FC<ImageEditorProps> = ({ 
  onImageSave,
  onCancel,
  maxFileSize = 5
}) => {
  const [imageSrc, setImageSrc] = useState<string | null>(null)
  const [crop, setCrop] = useState({ x: 0, y: 0 })
  const [zoom, setZoom] = useState(1)
  const [croppedAreaPixels, setCroppedAreaPixels] = useState<CropArea | null>(null)
  const [isProcessing, setIsProcessing] = useState(false)
  const [error, setError] = useState<string | null>(null)
  
  const canvasRef = useRef<HTMLCanvasElement>(null)

  // Handle file drop/upload
  const onDrop = useCallback((acceptedFiles: File[]) => {
    const file = acceptedFiles[0]
    if (!file) return

    // Validate file size
    if (file.size > maxFileSize * 1024 * 1024) {
      setError(`File size must be less than ${maxFileSize}MB`)
      return
    }

    // Validate file type
    if (!file.type.startsWith('image/')) {
      setError('Please upload an image file')
      return
    }

    setError(null)
    const reader = new FileReader()
    reader.addEventListener('load', () => {
      setImageSrc(reader.result as string)
    })
    reader.readAsDataURL(file)
  }, [maxFileSize])

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'image/*': ['.jpeg', '.jpg', '.png', '.webp']
    },
    multiple: false,
    maxSize: maxFileSize * 1024 * 1024
  })

  // Handle crop completion
  const onCropComplete = useCallback((_croppedArea: any, croppedAreaPixels: CropArea) => {
    setCroppedAreaPixels(croppedAreaPixels)
  }, [])

  // Create cropped image
  const createCroppedImage = useCallback(async (): Promise<string> => {
    if (!imageSrc || !croppedAreaPixels) return ''

    const canvas = canvasRef.current
    if (!canvas) return ''

    const ctx = canvas.getContext('2d')
    if (!ctx) return ''

    return new Promise((resolve, reject) => {
      const image = new Image()
      image.onload = () => {
        // Set canvas size to the desired output size (160x240)
        canvas.width = 160
        canvas.height = 240

        // Calculate scaling to fit the crop area into 160x240
        // const scaleX = 160 / croppedAreaPixels.width
        // const scaleY = 240 / croppedAreaPixels.height

        // Draw the cropped image onto the canvas
        ctx.drawImage(
          image,
          croppedAreaPixels.x,
          croppedAreaPixels.y,
          croppedAreaPixels.width,
          croppedAreaPixels.height,
          0,
          0,
          160,
          240
        )

        // Convert to base64
        const croppedImageUrl = canvas.toDataURL('image/jpeg', 0.8)
        resolve(croppedImageUrl)
      }
      image.onerror = reject
      image.src = imageSrc
    })
  }, [imageSrc, croppedAreaPixels])

  // Save cropped image
  const handleSave = async () => {
    if (!croppedAreaPixels) return

    setIsProcessing(true)
    try {
      const croppedImage = await createCroppedImage()
      onImageSave(croppedImage)
    } catch (error) {
      setError('Failed to process image')
    } finally {
      setIsProcessing(false)
    }
  }

  // Reset to upload state
  const handleReset = () => {
    setImageSrc(null)
    setCrop({ x: 0, y: 0 })
    setZoom(1)
    setCroppedAreaPixels(null)
    setError(null)
  }

  // Zoom controls
  const handleZoomIn = () => setZoom(prev => Math.min(prev + 0.1, 3))
  const handleZoomOut = () => setZoom(prev => Math.max(prev - 0.1, 1))

  if (!imageSrc) {
    return (
      <Card className="w-full max-w-md mx-auto">
        <div className="p-6">
          <div
            {...getRootProps()}
            className={`
              border-2 border-dashed rounded-lg p-8 text-center cursor-pointer transition-colors
              ${isDragActive 
                ? 'border-blue-400 bg-blue-50' 
                : 'border-gray-300 hover:border-gray-400'
              }
            `}
          >
            <input {...getInputProps()} />
            <Upload className="w-12 h-12 mx-auto mb-4 text-gray-400" />
            <p className="text-lg font-medium mb-2">Upload Photo</p>
            <p className="text-sm text-gray-500 mb-4">
              {isDragActive
                ? 'Drop the image here...'
                : 'Drag & drop an image here, or click to select'
              }
            </p>
            <p className="text-xs text-gray-400">
              Supports: JPEG, PNG, WebP (max {maxFileSize}MB)
            </p>
          </div>
          
          {error && (
            <div className="mt-4 p-3 bg-red-50 border border-red-200 rounded-md">
              <p className="text-sm text-red-600">{error}</p>
            </div>
          )}
          
          {onCancel && (
            <div className="mt-4 flex justify-center">
              <Button variant="outline" onClick={onCancel}>
                Cancel
              </Button>
            </div>
          )}
        </div>
      </Card>
    )
  }

  return (
    <Card className="w-full max-w-md mx-auto">
      <div className="p-4">
        <div className="mb-4">
          <h3 className="text-lg font-medium mb-2">Edit Photo</h3>
          <p className="text-sm text-gray-500">
            Adjust the crop area to fit 2:3 ratio (160×240px)
          </p>
        </div>

        {/* Cropper Container */}
        <div className="relative w-full h-80 bg-gray-100 rounded-lg overflow-hidden mb-4">
          <Cropper
            image={imageSrc}
            crop={crop}
            zoom={zoom}
            aspect={3/4}
            onCropChange={setCrop}
            onZoomChange={setZoom}
            onCropComplete={onCropComplete}
            showGrid={true}
            cropShape="rect"
          />
        </div>

        {/* Zoom Controls */}
        <div className="mb-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium">Zoom</span>
            <div className="flex gap-2">
              <Button
                size="sm"
                variant="outline"
                onClick={handleZoomOut}
                disabled={zoom <= 1}
              >
                <ZoomOut className="w-4 h-4" />
              </Button>
              <Button
                size="sm"
                variant="outline"
                onClick={handleZoomIn}
                disabled={zoom >= 3}
              >
                <ZoomIn className="w-4 h-4" />
              </Button>
            </div>
          </div>
          <Slider
            value={[zoom]}
            onValueChange={(value) => setZoom(value[0])}
            min={1}
            max={3}
            step={0.1}
            className="w-full"
          />
        </div>

        {/* Action Buttons */}
        <div className="flex gap-2">
          <Button
            variant="outline"
            onClick={handleReset}
            className="flex-1"
          >
            <RotateCcw className="w-4 h-4 mr-2" />
            Reset
          </Button>
          
          {onCancel && (
            <Button
              variant="outline"
              onClick={onCancel}
              className="flex-1"
            >
              <X className="w-4 h-4 mr-2" />
              Cancel
            </Button>
          )}
          
          <Button
            onClick={handleSave}
            disabled={!croppedAreaPixels || isProcessing}
            className="flex-1"
          >
            <Check className="w-4 h-4 mr-2" />
            {isProcessing ? 'Processing...' : 'Save'}
          </Button>
        </div>

        {error && (
          <div className="mt-4 p-3 bg-red-50 border border-red-200 rounded-md">
            <p className="text-sm text-red-600">{error}</p>
          </div>
        )}
      </div>
      
      {/* Hidden canvas for image processing */}
      <canvas ref={canvasRef} style={{ display: 'none' }} />
    </Card>
  )
}
