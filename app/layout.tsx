import type { Metadata } from 'next';
import { Fraunces, Inter } from 'next/font/google';
import './globals.css';
import AnnouncementBar from '@/components/AnnouncementBar';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingWhatsAppButton from '@/components/FloatingWhatsAppButton';
import MobileStickyCTA from '@/components/MobileStickyCTA';
import { brand } from '@/data/brand';
import { site } from '@/data/site';

// Body / UI typeface.
const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-inter',
  display: 'swap',
});

// Display / heading typeface — variable Fraunces with optical sizing on.
const fraunces = Fraunces({
  subsets: ['latin'],
  axes: ['opsz'],
  variable: '--font-fraunces',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: 'L. P. Savani Group of Schools | Best Schools in Surat',
    template: '%s | L. P. Savani Group of Schools',
  },
  description: site.description,
  keywords: [
    'L. P. Savani Group of Schools',
    'Best School in Surat',
    'School in Surat',
    'L. P. Savani admissions',
    'School in Palanpor',
    'School in Adajan',
    'School in Pal',
    'School in Vesu',
    'School in Dabholi',
    'School in Mota Varachha',
    'CBSE school in Surat',
    'GSEB school in Surat',
  ],
  applicationName: site.name,
  authors: [{ name: site.name }],
  openGraph: {
    type: 'website',
    title: 'L. P. Savani Group of Schools | Best Schools in Surat',
    description: site.description,
    siteName: site.name,
    images: [{ url: brand.assets.ogImage, width: 1200, height: 630, alt: site.name }],
    locale: 'en_IN',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'L. P. Savani Group of Schools',
    description: site.description,
    images: [brand.assets.ogImage],
  },
  robots: { index: true, follow: true },
};

export const viewport = {
  themeColor: '#14305c',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${fraunces.variable}`}>
      <head>
        <link rel="icon" href={brand.assets.favicon} />
        <link rel="apple-touch-icon" href={brand.assets.favicon} />
      </head>
      <body className="min-h-screen pb-16 lg:pb-0">
        <a href="#main" className="skip-link">
          Skip to content
        </a>
        <AnnouncementBar />
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <FloatingWhatsAppButton />
        <MobileStickyCTA />
      </body>
    </html>
  );
}
