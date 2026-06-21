import type { Metadata } from 'next';
import Image from 'next/image';
import Container from '@/components/Container';
import GalleryGrid from '@/components/GalleryGrid';
import CTASection from '@/components/CTASection';

export const metadata: Metadata = {
  title: 'Gallery',
  description:
    'Photos from across L. P. Savani School, Palanpor: campus, classrooms, labs, sports, events and activities. A glimpse of everyday life at our Surat campus.',
};

export default function GalleryPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-brand-900 text-white">
        <div className="absolute inset-0">
          <Image src="/images/gallery-campus-1.jpg" alt="L. P. Savani School, Palanpor gallery" fill priority sizes="100vw" className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-900/95 via-brand-900/85 to-brand-800/60" />
        </div>
        <Container className="relative py-16 sm:py-20">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-gold-300">Gallery</p>
          <h1 className="mt-3 max-w-3xl font-display text-4xl font-semibold leading-tight sm:text-5xl">
            A look around our campus
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-brand-100">
            Learning, play, performance and friendship. Browse moments from across the school, by
            category.
          </p>
        </Container>
      </section>

      {/* Grid */}
      <section className="bg-white">
        <Container className="py-16 sm:py-20">
          <GalleryGrid />
          <div className="mt-10 rounded-2xl border border-brand-100 bg-brand-50/50 p-6 text-center">
            <p className="text-sm leading-relaxed text-ink-soft">
              The photos here are placeholders to show the layout. Replace them with real campus
              photos for the best impression. See IMAGE_ASSETS_NEEDED.md for the full list.
            </p>
          </div>
        </Container>
      </section>

      <CTASection variant="soft" />
    </>
  );
}
