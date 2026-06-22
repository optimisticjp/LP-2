import Link from 'next/link';
import Container from '@/components/Container';
import SectionHeading from '@/components/SectionHeading';
import { Icon } from '@/components/icons';
import { schools } from '@/data/schools';

// A stylized, abstract "map-style" overview — intentionally NOT a real map and
// NOT positioned at real coordinates. Pin cards link to each branch page.
export default function CampusMap() {
  return (
    <section
      className="relative overflow-hidden section-y"
      style={{
        background:
          'radial-gradient(50% 42% at 86% 6%, rgba(244,196,48,0.17), rgba(244,196,48,0) 70%), radial-gradient(48% 42% at 8% 2%, rgba(56,138,221,0.16), rgba(56,138,221,0) 72%), linear-gradient(180deg, #0d2749 0%, #0a1f3e 100%)',
      }}
    >
      <Container className="relative">
        <SectionHeading
          light
          eyebrow="Across Surat"
          title="Campuses across Surat"
          subtitle="Real campuses across Surat, one trusted group. Pick a campus to explore it in detail."
          align="center"
          className="mb-10"
        />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {schools.map((s) => (
            <Link
              key={s.slug}
              href={`/schools/${s.slug}`}
              className="card card-hover group flex items-start gap-4 p-5"
            >
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-brand-50 text-brand-600">
                <Icon name="pin" className="h-5 w-5" />
              </span>
              <span className="min-w-0 flex-1">
                <span className="flex items-center gap-1.5">
                  <span className="truncate font-bold text-ink">{s.shortName}</span>
                  <Icon
                    name="arrow"
                    className="h-4 w-4 shrink-0 text-brand-400 transition-transform group-hover:translate-x-0.5"
                  />
                </span>
                <span className="mt-0.5 block truncate text-sm text-ink-muted">{s.location}</span>
                <span className="pill mt-2 inline-flex bg-brand-50 text-brand-700">{s.board}</span>
              </span>
            </Link>
          ))}
        </div>

        <p className="mx-auto mt-8 max-w-xl text-center text-sm text-brand-200">
          Six campuses across Surat, each with its own page and admissions team.
        </p>
      </Container>
    </section>
  );
}
