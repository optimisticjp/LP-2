'use client';

import { useState } from 'react';
import Link from 'next/link';
import Img from '@/components/Img';
import { Icon } from '@/components/icons';
import { schools } from '@/data/schools';

// Signature element: a premium campus finder. Parents pick a campus from the
// rail and see its key details update in place.
export default function CampusSwitcher() {
  const [active, setActive] = useState(0);
  const school = schools[active];

  return (
    <div className="overflow-hidden rounded-3xl border border-cloud bg-white shadow-card">
      <div className="grid lg:grid-cols-[300px_1fr]">
        {/* Rail */}
        <div className="border-b border-cloud bg-mist p-3 lg:border-b-0 lg:border-r">
          {/* Mobile: horizontal chips */}
          <div className="no-scrollbar flex gap-2 overflow-x-auto lg:hidden">
            {schools.map((s, i) => (
              <button
                key={s.slug}
                type="button"
                onClick={() => setActive(i)}
                aria-pressed={i === active}
                className={`shrink-0 rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
                  i === active ? 'bg-brand-600 text-white' : 'bg-white text-ink-soft'
                }`}
              >
                {s.shortName}
              </button>
            ))}
          </div>

          {/* Desktop: vertical list */}
          <ul className="hidden flex-col gap-1 lg:flex">
            {schools.map((s, i) => (
              <li key={s.slug}>
                <button
                  type="button"
                  onClick={() => setActive(i)}
                  aria-pressed={i === active}
                  className={`flex w-full items-center gap-3 rounded-xl px-3 py-3 text-left transition-colors ${
                    i === active ? 'bg-white shadow-soft' : 'hover:bg-white/60'
                  }`}
                >
                  <span
                    className={`grid h-9 w-9 shrink-0 place-items-center rounded-lg text-sm font-bold ${
                      i === active ? 'bg-brand-600 text-white' : 'bg-cloud text-brand-700'
                    }`}
                  >
                    {s.shortName.charAt(0)}
                  </span>
                  <span className="min-w-0">
                    <span className="block truncate text-sm font-semibold text-ink">{s.shortName}</span>
                    <span className="block truncate text-xs text-ink-muted">{s.board}</span>
                  </span>
                  {i === active ? (
                    <Icon name="chevronRight" className="ml-auto h-4 w-4 text-brand-500" />
                  ) : null}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Detail */}
        <div className="grid gap-0 sm:grid-cols-2">
          <div className="relative min-h-[220px] overflow-hidden">
            <Img
              src={school.hero}
              alt={`${school.name} campus`}
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/60 to-transparent" />
            <div className="absolute bottom-4 left-4 right-4 flex flex-wrap gap-2">
              <span className="pill bg-white/90 text-brand-700">{school.board}</span>
              {school.established ? (
                <span className="pill bg-white/90 text-brand-700">Est. {school.established}</span>
              ) : null}
            </div>
          </div>

          <div className="flex flex-col p-6">
            <p className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-brand-600">
              <Icon name="pin" className="h-3.5 w-3.5" />
              {school.location}
            </p>
            <h3 className="mt-2 text-xl font-bold leading-snug text-ink">{school.name}</h3>
            <p className="mt-2 text-sm leading-relaxed text-ink-soft">{school.tagline}</p>

            <ul className="mt-4 space-y-2">
              {school.highlights.slice(0, 3).map((h) => (
                <li key={h} className="flex items-start gap-2 text-sm text-ink-soft">
                  <Icon name="check" className="mt-0.5 h-4 w-4 shrink-0 text-leaf-500" />
                  {h}
                </li>
              ))}
            </ul>

            <div className="mt-auto flex flex-wrap gap-2 pt-5">
              <Link href={`/schools/${school.slug}`} className="btn-primary">
                Explore {school.shortName}
              </Link>
              <a href={school.admissionLink} target="_blank" rel="noopener noreferrer" className="btn-secondary">
                Enquire now
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
