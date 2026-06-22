import type { Metadata } from 'next';
import Container from '@/components/Container';
import SectionHeading from '@/components/SectionHeading';
import Badge from '@/components/Badge';
import FacilityCard from '@/components/FacilityCard';
import CTASection from '@/components/CTASection';
import { Icon } from '@/components/icons';
import { facilities, facilityCategories, experiencePillars } from '@/data/facilities';

export const metadata: Metadata = {
  title: 'Infrastructure & Facilities',
  description:
    'Explore the infrastructure across L. P. Savani campuses: science and ICT labs, robotics, library, auditorium, sports grounds, art, music and dance studios, dining and care. Facilities vary by campus.',
  alternates: { canonical: '/infrastructure' },
};

export default function InfrastructurePage() {
  return (
    <>
      <section className="bg-white">
        <Container className="py-14 sm:py-18">
          <Badge tone="brand" icon="building">
            Infrastructure
          </Badge>
          <h1 className="mt-5 max-w-3xl text-4xl font-extrabold leading-tight text-ink sm:text-5xl">
            Spaces thoughtfully designed for learning
          </h1>
          <p className="mt-4 max-w-2xl text-ink-soft sm:text-lg">
            Our campuses are crafted to inspire curiosity, foster growth and support the holistic
            development of every student, with spacious classrooms and well-equipped facilities.
          </p>
          <p className="mt-4 inline-flex items-start gap-2 rounded-2xl bg-mist px-4 py-3 text-sm text-ink-soft">
            <Icon name="sparkle" className="mt-0.5 h-4 w-4 shrink-0 text-gold-500" />
            Facilities may vary by campus. Please contact the admission office for branch-specific details.
          </p>
        </Container>
      </section>

      {facilityCategories.map((cat, idx) => {
        const items = facilities.filter((f) => f.category === cat.key);
        return (
          <section key={cat.key} className={idx % 2 === 0 ? 'bg-mist section-y' : 'bg-white section-y'}>
            <Container>
              <SectionHeading eyebrow={`0${idx + 1}`} title={cat.label} className="mb-8" />
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {items.map((f) => (
                  <FacilityCard key={f.title} title={f.title} description={f.description} image={f.image} icon={f.icon} />
                ))}
              </div>
            </Container>
          </section>
        );
      })}

      {/* Campus experience pillars */}
      <section className="bg-deepNavy section-y text-white">
        <Container>
          <SectionHeading
            light
            eyebrow="The campus experience"
            title="More than classrooms"
            subtitle="Every space plays a part in a balanced, well-rounded education."
            align="center"
            className="mb-10"
          />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {experiencePillars.map((p) => (
              <div key={p.title} className="rounded-2xl border border-white/10 bg-white/5 p-5 text-center">
                <span className="mx-auto grid h-11 w-11 place-items-center rounded-xl bg-white/10 text-gold-300">
                  <Icon name={p.icon} className="h-5 w-5" />
                </span>
                <h3 className="mt-3 text-sm font-bold text-white">{p.title}</h3>
                <p className="mt-1.5 text-xs leading-relaxed text-brand-100">{p.body}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <CTASection className="pt-12 sm:pt-16 pb-20" />
    </>
  );
}
