import type { Metadata } from 'next';
import { Outfit, Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-outfit',
  display: 'swap',
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-plus-jakarta',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'ChooZetu | Premium Mobile Toilet Rental in Kenya',
  description:
    'Pure Comfort, Anywhere. High-end VIP restroom trailers, executive portable loos, and on-site event sanitation services across Nairobi, Naivasha, Mombasa, and Nakuru.',
  openGraph: {
    title: 'ChooZetu | Premium Mobile Toilet Rental Kenya',
    description: 'Pure Comfort, Anywhere. Modern VIP restroom trailers & executive loos in Kenya.',
    url: 'https://choozetu.co.ke',
    siteName: 'ChooZetu',
    locale: 'en_KE',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ChooZetu - Pure Comfort, Anywhere',
    description: 'Kenya’s premier mobile toilet rental platform for luxury weddings, VIP events, and construction sites.',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${outfit.variable} ${plusJakarta.variable}`}>
      <body className="min-h-screen bg-[#020B1D] text-[#E2E8F0] antialiased selection:bg-cyan-500/30 selection:text-cyan-200">
        {children}
      </body>
    </html>
  );
}
