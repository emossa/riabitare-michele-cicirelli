// types/meta-pixel.ts
declare global {
    interface Window {
        fbq: (
            method: 'init' | 'track' | 'trackCustom',
            eventName: string,
            params?: Record<string, unknown>
        ) => void;
        _fbq: unknown;
    }
}

export interface ViewEventParams {
    pageTitle?: string;
    pagePath?: string;
    pageCategory?: string;
    [key: string]: unknown;
}

export interface FormEventParams {
    formId?: string;
    formName?: string;
    formCategory?: string;
    formType?: string;
    success?: boolean;
    failureReason?: string;
    [key: string]: unknown;
}

// app/components/MetaPixel.tsx
'use client';

import Script from 'next/script';
import { usePathname, useSearchParams } from 'next/navigation';
import { useEffect } from 'react';
import { trackPageView } from '@/lib/utils';

const PIXEL_ID: string = process.env.NEXT_PUBLIC_META_PIXEL_ID || '';

if (!PIXEL_ID) {
    console.warn('Meta Pixel ID is not defined in environment variables');
}

export default function MetaPixel(): JSX.Element {
    const pathname = usePathname();
    const searchParams = useSearchParams();

    useEffect(() => {
        if (pathname) {
            // Track detailed page view on route change
            trackPageView({
                pagePath: pathname,
                pageTitle: document.title,
            });
        }
    }, [pathname, searchParams]);

    return (
        <>
            <Script
                id="meta-pixel-base"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{
                    __html: `
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '${PIXEL_ID}');
            fbq('track', 'PageView');
          `,
                }}
            />
            <noscript>
                <img
                    height="1"
                    width="1"
                    style={{ display: 'none' }}
                    src={`https://www.facebook.com/tr?id=${PIXEL_ID}&ev=PageView&noscript=1`}
                    alt=""
                />
            </noscript>
        </>
    );
}
