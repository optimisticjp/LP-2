import type { Metadata } from 'next';
import Image from 'next/image';
import Container from '@/components/Container';
import Reveal from '@/components/Reveal';
import SectionHeading from '@/components/SectionHeading';
import FacilityCard from '@/components/FacilityCard';
import CTASection from '@/components/CTASection';
import { Icon } from '@/components/icons';
import { facilities } from '@/data/facilities';

export const metadata: Metadata = {
  title: 'Campus & Facilities',
  description:
    'Smart classrooms, library, science and computer labs, sports and activity areas, transport, safety and dining at L. P. Savani School, Palanpor in Surat.',
};

const categories = ['Learning', 'Activity', 'Care'] as const;
const categoryIntro: Record<(typeof categories)[number], string> = {
  Learning: 'Spaces and tools that make lessons clear, hands-on and engaging.',
  Activity: 'Room to move, create and perform, so children grow beyond the books.',
  Care: 'The everyday support that keeps children safe, healthy and comfortable.',
};

const highlights = [
  { icon: 'shield' as const, label: 'CCTV and monitored entry' },
  { icon: 'bus' as const, label: 'Managed transport routes' },
  { icon: 'heart' as const, label: 'First-aid and medical support' },
  { icon: 'utensils' as const, label: 'Clean, supervised dining' },
];

export default function FacilitiesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-brand-900 text-white">
        <div className="absolute inset-0">
          <Image src="/images/campus-overview.jpg" alt="L. P. Savani School campus and facilities" fill priority sizes="100vw" className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-900/95 via-brand-900/85 to-brand-800/60" />
        </div>
        <Container className="relative py-16 sm:py-20">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-gold-300">Campus &amp; facilities</p>
          <h1 className="mt-3 max-w-3xl font-display text-4xl font-semibold leading-tight sm:text-5xl">
            A campus designed around the child
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-brand-100">
            Bright classrooms, well-equipped labs, space for sport and the arts, and the quiet,
            everyday care that helps children feel settled and safe.
          </p>
        </Container>
      </section>

      {/* Highlights strip */}
      <section className="border-b border-brand-50 bg-white">
        <Container className="py-8">
          <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
            {highlights.map((h) => (
              <div key={h.label} className="flex items-center gap-3 rounded-2xl border border-brand-50 bg-mist p-4">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-brand-600 text-white">
                  <Icon name={h.icon} className="h-5 w-5" />
                </span>
                <span className="text-sm font-semibold text-ink">{h.label}</span>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Facilities by category */}
      {categories.map((cat, idx) => {
        const items = facilities.filter((f) => f.category === cat);
        return (
          <section key={cat} className={idx % 2 === 0 ? 'bg-cream' : 'bg-white'}>
            <Container className="py-16 sm:py-20">
              <SectionHeading eyebrow={`${cat} spaces`} title={`${cat} facilities`} subtitle={categoryIntro[cat]} />
              <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {items.map((facility, i) => (
                  <Reveal key={facility.title} delay={(i % 3) * 80}>
                    <FacilityCard facility={facility} />
                  </Reveal>
                ))}
              </div>
            </Container>
          </section>
        );
      })}

      {/* Note */}
      <section className="bg-white">
        <Container size="tight" className="pb-16 sm:pb-20">
          <div className="rounded-2xl border border-brand-100 bg-brand-50/50 p-6 text-center">
            <p className="text-sm leading-relaxed text-ink-soft">
              Facilities reflect those published across the L. P. Savani group. For the exact
              facilities available at the Palanpor campus, please confirm with the school office or
              book a visit to see them in person.
            </p>
          </div>
        </Container>
      </section>

      <CTASection />
    </>
  );
}
