import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Script from 'next/script';
import './globals.css';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/sections/Footer';
import { FloatingPromoButton } from '@/components/FloatingPromoButton';
import ClientProviders from '@/components/ClientProviders';

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://build2trade.com.au'),
  title: {
    default: 'Build2Trade',
    template: '%s | Build2Trade',
  },
  description: "Australia's First Digital Networking Platform For Builders & Tradies",
  openGraph: {
    siteName: 'Build2Trade',
    type: 'website',
  },
  icons: {
    icon: '/favicon.ico',
  },
  other: {
    'facebook-domain-verification': 'twhch855g4oq7cm9ixqw7pumfnfryz',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.className}>
      <body>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-BD62VFL3WE"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-BD62VFL3WE');
          `}
        </Script>
        <Script id="meta-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '1709394657091733');
            fbq('track', 'PageView');
          `}
        </Script>
        <noscript>
          <img height="1" width="1" style={{display:'none'}}
            src="https://www.facebook.com/tr?id=1709394657091733&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>
        <ClientProviders>
          <Navbar />
          {children}
          <Footer />
          <FloatingPromoButton />
        </ClientProviders>
      </body>
    </html>
  );
}
