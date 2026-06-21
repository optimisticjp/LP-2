import Link from 'next/link';
import Container from '@/components/Container';
import SectionHeading from '@/components/SectionHeading';
import { Icon } from '@/components/icons';
import { schools } from '@/data/schools';

// A stylized, abstract "map-style" overview — intentionally NOT a real map and
// NOT positioned at real coordinates. Pin cards link to each branch page.
export default function CampusMap() {
  return (
    <section className="relative overflow-hidden bg-brand-50 section-y">
      {/* Soft, decorative map-like backdrop in brand tints */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <svg
          className="h-full w-full"
          viewBox="0 0 800 400"
          preserveAspectRatio="xMidYMid slice"
          fill="none"
        >
          <path
            d="M-40 300 C 160 240 260 350 430 270 S 720 190 880 240"
            className="text-brand-200"
            stroke="currentColor"
            strokeWidth="2"
            strokeDasharray="2 10"
            strokeLinecap="round"
          />
          <path
            d="M-40 130 C 180 90 320 190 520 120 S 760 60 880 110"
            className="text-brand-100"
            stroke="currentColor"
            strokeWidth="2"
            strokeDasharray="2 10"
            strokeLinecap="round"
          />
          <circle cx="120" cy="300" r="70" className="text-brand-100" fill="currentColor" opacity="0.5" />
          <circle cx="660" cy="120" r="90" className="text-brand-100" fill="currentColor" opacity="0.4" />
        </svg>
      </div>

      <Container className="relative">
        <SectionHeading
          eyebrow="Across Surat"
          title="Campuses across Surat"
          subtitle="A map-style overview of where you'll find us. Pick a campus to explore it in detail."
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

        <p className="mx-auto mt-8 max-w-xl text-center text-sm text-ink-muted">
          Map-style view for guidance. Exact directions will be linked once confirmed with each campus office.
        </p>
      </Container>
    </section>
  );
}
