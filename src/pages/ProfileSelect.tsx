import type { FC } from 'react';
import { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';

import { Page } from '@/components/Page.tsx';
import { Content } from '@/components/Content';
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

import { profilePage } from '@/locale/en-US';



import { Navigation, EffectCards } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';


const ProfileSelect: FC<{ selectCfg: { label: string, options: string[] }, disabled?: boolean }> = ({ selectCfg, disabled = false }) => {
    return (
        <Select disabled={disabled}>
            <SelectTrigger className="w-full">
                <SelectValue className="text-sm" placeholder={selectCfg.label} />
            </SelectTrigger>
            <SelectContent className="text-sm">
                <SelectGroup>
                    {
                        selectCfg.options.map((option) => (
                            <SelectItem key={option} value={option}>{option}</SelectItem>
                        ))
                    }
                </SelectGroup>
            </SelectContent>
        </Select>
    )   
}

const UserAvatarCarousel = () => {
    const [images, setImages] = useState<string[]>([]);

    useEffect(() => {
        const loadImages = async () => {
            const imageModules = await Promise.all([
                import('@/assets/sample/00.jpg'),
                import('@/assets/sample/01.jpg'),
                import('@/assets/sample/02.jpg'),
                import('@/assets/sample/03.jpg'),
                import('@/assets/sample/04.jpg'),
                import('@/assets/sample/05.jpg'),
                import('@/assets/sample/06.jpg'),
                import('@/assets/sample/07.jpg'),
                import('@/assets/sample/08.jpg'),
                import('@/assets/sample/09.jpg'),
            ]);
            
            setImages(imageModules.map(module => module.default));
        };

        loadImages();
    }, []);

    return (
        <div className="w-[180px] h-[180px]">
            <Swiper
                effect={'cards'}
                navigation={true}
                grabCursor={true}
                modules={[Navigation, EffectCards]}
                className="w-full h-full"
            >
                {images.map((item, index) => (
                    <SwiperSlide key={index} className="flex rounded-[4px] items-center justify-center">
                        <div className="flex items-center justify-center text-[22px] font-bold text-white">
                            <img 
                                src={item} 
                                alt={`Profile avatar ${index + 1}`} 
                                className="w-full h-full object-cover"
                                loading="lazy"
                            />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}

export const ProfileSelectPage: FC = () => {
    return (
        <Page back={true}>
            <Content className="justify-start">
                <div className="grid grid-cols-2 gap-2 w-full mt-5">
                    <div className="col-span-2 flex justify-center mb-5">
                        <UserAvatarCarousel />
                    </div>
                    <Input className="col-span-2 text-sm" type="text" placeholder={profilePage.nickName.label}/>
                    <Textarea className="col-span-2 text-sm" placeholder={profilePage.aboutMe.label} />
                    <ProfileSelect selectCfg={profilePage.age} />
                    <ProfileSelect selectCfg={profilePage.position} />
                    <ProfileSelect selectCfg={profilePage.bodyType} />
                    <ProfileSelect selectCfg={profilePage.endowment} />
                    <ProfileSelect selectCfg={profilePage.safety} />
                    <ProfileSelect selectCfg={profilePage.when} />
                    <ProfileSelect selectCfg={profilePage.hostingStatus} />
                    <ProfileSelect selectCfg={profilePage.travelDistance} disabled={true}/>
                </div>
            </Content>
        </Page>
    );
}
