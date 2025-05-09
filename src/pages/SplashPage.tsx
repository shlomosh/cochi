import { Page } from '@/components/Page.tsx';
import { Button } from '@/components/ui/button';
import type { FC } from 'react';
import peachImage from '@/assets/peach.png';
import { Link } from '@/components/Link/Link';

export const SplashPage: FC = () => {
    return (
        <Page back={false}>
            <div className="flex justify-center w-full bg-white">
                <div className="relative w-[375px] h-[812px] overflow-hidden [background:linear-gradient(161deg,rgba(160,132,232,1)_0%,rgba(93,44,219,1)_100%)]">
                    {/* Background image with overlay */}
                    <div className="absolute inset-0 bg-cover bg-center bg-[url(assets/pexels-koolshooters-6621600.jpg)]">
                        <div className="h-full w-full [background:linear-gradient(180deg,rgba(0,0,0,0.67)_0%,rgba(0,0,0,0.65)_100%)]" />
                    </div>
                    {/* Content container */}
                    <div className="relative h-full flex flex-col items-center justify-end pb-6">
                        {/* Logo and tagline section */}
                        <div className="flex flex-col items-center mb-12">
                            <div className="relative">
                                <div className="relative">
                                    <div className="[font-family:'Ramabhadra-Regular',Helvetica] font-normal text-[#f4e0f3] text-[66px] tracking-[0.33px] leading-[55px] whitespace-nowrap text-center">
                                        COCHI
                                    </div>
                                    <img
                                        className="w-[82px] h-[82px] object-cover absolute left-[14%] top-[-41%]"
                                        alt="Peach"
                                        src={peachImage}
                                    />
                                </div>
                            </div>
                            <div className="[font-family:'Questrial-Regular',Helvetica] font-normal text-[#f4e0f3] text-2xl tracking-[0.12px] leading-[55px] whitespace-nowrap mt-2">
                                Find your Vibe, Anytime.
                            </div>
                        </div>
                        {/* Terms and conditions text */}
                        <div className="[font-family:'Questrial-Regular',Helvetica] font-normal text-[#aab1ff] text-xs text-center tracking-[0.01px] leading-[18px] [text-shadow:0px_4px_4px_#00000040] mb-4 underline">
                            <Link to="/read-terms-conditions">Read Terms &amp; Conditions</Link>
                        </div>
                        {/* Login button */}
                        <Button className="w-[327px] h-[42px] rounded-[32px] bg-primary-500 text-neutral-100 font-body-medium-semi-bold font-[number:var(--body-medium-semi-bold-font-weight)] text-[length:var(--body-medium-semi-bold-font-size)]">
                            Accept Terms &amp; Login
                        </Button>
                    </div>
                </div>
            </div>
        </Page>
    );
  };