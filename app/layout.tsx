import type { Metadata } from 'next';
import './globals.css';
import { school } from '@/data/school';
import AnnouncementBar from '@/components/AnnouncementBar';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import MobileStickyCTA from '@/components/MobileStickyCTA';

const siteUrl = 'https://lpsavani-palanpor.example.com';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${school.fullName} | Admissions Open ${school.session}`,
    template: `%s | ${school.name}, ${school.branch}`,
  },
  description:
    'L. P. Savani School, Palanpor is a nurturing CBSE-style campus in Surat with smart classrooms, science and computer labs, sports and strong values. Admissions for 2026-27 are open.',
  keywords: [
    'L. P. Savani School Palanpor',
    'school in Palanpor',
    'best school in Surat',
    'schools near Canal Road Surat',
    'admission 2026-27 Surat',
    'L. P. Savani Palanpor admission',
  ],
  authors: [{ name: school.fullName }],
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: siteUrl,
    siteName: school.fullName,
    title: `${school.fullName} | Admissions Open ${school.session}`,
    description:
      'A nurturing campus in Palanpor, Surat where children learn, lead and grow with confidence. Enquire about admissions for 2026-27.',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: school.fullName,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${school.fullName} | Admissions Open ${school.session}`,
    description:
      'A nurturing campus in Palanpor, Surat. Admissions for 2026-27 are open.',
    images: ['/images/og-image.jpg'],
  },
  robots: { index: true, follow: true },
  alternates: { canonical: siteUrl },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,500;9..144,600;9..144,700&family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <a href="#main" className="skip-link">
          Skip to content
        </a>
        <AnnouncementBar />
        <Header />
        <main id="main" className="pb-20 md:pb-0">
          {children}
        </main>
        <Footer />
        <WhatsAppButton />
        <MobileStickyCTA />
      </body>
    </html>
  );
}
