import type { Metadata } from 'next';
import Container from '@/components/Container';
import SectionHeading from '@/components/SectionHeading';
import Badge from '@/components/Badge';
import GalleryGrid from '@/components/GalleryGrid';
import CTASection from '@/components/CTASection';

export const metadata: Metadata = {
  title: 'Gallery',
  description:
    'A look at life across L. P. Savani campuses in Surat: classrooms, labs, sports, arts, activities, events and student life. Browse photos by category.',
  alternates: { canonical: '/gallery' },
};

export default function GalleryPage() {
  return (
    <>
      <section className="bg-white">
        <Container className="py-14 sm:py-18">
          <Badge tone="brand" icon="sparkle">
            Gallery
          </Badge>
          <h1 className="mt-5 max-w-3xl text-4xl font-extrabold leading-tight text-ink sm:text-5xl">
            Life across our campuses
          </h1>
          <p className="mt-4 max-w-2xl text-ink-soft sm:text-lg">
            Moments of learning, activity and celebration from across the L. P. Savani group. Filter by
            category to explore.
          </p>
        </Container>
      </section>

      <section className="bg-mist section-y">
        <Container>
          <SectionHeading eyebrow="Browse" title="Photo gallery" className="mb-8" />
          <GalleryGrid />
        </Container>
      </section>

      <CTASection className="pb-20" />
    </>
  );
}
