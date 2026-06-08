import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
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
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.className}>
      <body>
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
