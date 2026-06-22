import Link from 'next/link';
import Img from '@/components/Img';
import Badge from '@/components/Badge';
import { Icon } from '@/components/icons';
import type { School } from '@/data/schools';

export default function SchoolCard({ school, showHighlights = false }: { school: School; showHighlights?: boolean }) {
  return (
    <article className="card card-hover group flex h-full flex-col overflow-hidden">
      <div className="relative aspect-[16/10] overflow-hidden">
        <Img
          src={school.thumb}
          alt={`${school.name} campus`}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute left-3 top-3 flex gap-2">
          <Badge tone="white" icon="map">
            {school.board}
          </Badge>
          {school.flagship ? <Badge tone="gold">Flagship</Badge> : null}
        </div>
      </div>

      <div className="flex flex-1 flex-col p-5">
        <h3 className="text-lg font-bold leading-snug text-ink">{school.name}</h3>
        <p className="mt-1.5 flex items-center gap-1.5 text-sm text-ink-muted">
          <Icon name="pin" className="h-4 w-4 text-brand-500" />
          {school.location}
        </p>
        <p className="mt-3 text-sm leading-relaxed text-ink-soft">{school.tagline}</p>

        {showHighlights ? (
          <ul className="mt-4 space-y-2">
            {school.highlights.slice(0, 3).map((h) => (
              <li key={h} className="flex items-start gap-2 text-sm text-ink-soft">
                <Icon name="check" className="mt-0.5 h-4 w-4 shrink-0 text-leaf-500" />
                {h}
              </li>
            ))}
          </ul>
        ) : null}

        <div className="mt-auto flex items-center gap-2 pt-5">
          <Link href={`/schools/${school.slug}`} className="btn-primary flex-1">
            View Campus
          </Link>
          <a href={school.admissionLink} target="_blank" rel="noopener noreferrer" className="btn-secondary">
            Start Admission Enquiry
          </a>
        </div>
      </div>
    </article>
  );
}
