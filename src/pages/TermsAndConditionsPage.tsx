import { Page } from '@/components/Page.tsx';
import type { FC } from 'react';

export const TermsAndConditionsPage: FC = () => {
    return (
        <Page back={false}>
            <div className="flex justify-center w-full bg-white">
                <div className="relative w-[375px] h-[812px] overflow-hidden [background:linear-gradient(161deg,rgba(160,132,232,1)_0%,rgba(93,44,219,1)_100%)]">
                    Terms and Conditions
                </div>
            </div>
        </Page>
    );
  };