'use client';

import { useState } from 'react';
import Link from 'next/link';
import { schools } from '@/data/schools';

const flagship = schools.find((s) => s.flagship) ?? schools[0];

export default function HeroCampusPicker() {
  const [selectedSlug, setSelectedSlug] = useState(flagship.slug);
  const campus = schools.find((s) => s.slug === selectedSlug) ?? flagship;

  return (
    <div className="mt-8 border-t border-cloud pt-6">
      <p className="mb-3 text-xs font-semibold uppercase tracking-[0.16em] text-ink-muted">
        Choose your campus to begin
      </p>

      <div className="flex flex-wrap gap-2" role="group" aria-label="Campus selector">
        {schools.map((s) => {
          const active = s.slug === selectedSlug;
          return (
            <button
              key={s.slug}
              type="button"
              aria-pressed={active}
              onClick={() => setSelectedSlug(s.slug)}
              className={[
                'flex flex-col rounded-btn-sm border px-3 py-2 text-left text-xs transition-all duration-150',
                active
                  ? 'border-brand-600 bg-brand-600 font-semibold text-white shadow-soft'
                  : 'border-cloud bg-white font-medium text-ink hover:border-brand-200 hover:bg-mist',
              ].join(' ')}
            >
              <span className="leading-tight">{s.shortName}</span>
              <span
                className={`text-xs leading-tight ${active ? 'text-brand-200' : 'text-ink-muted'}`}
              >
                {s.board}
              </span>
            </button>
          );
        })}
      </div>

      <div className="mt-4 flex flex-wrap items-center gap-3">
        <Link href={`/schools/${campus.slug}`} className="btn-primary">
          Explore {campus.shortName}
        </Link>
        <a
          href={campus.admissionLink}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-secondary"
        >
          Admission Enquiry
        </a>
      </div>
    </div>
  );
}
