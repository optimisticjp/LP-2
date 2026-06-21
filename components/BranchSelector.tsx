'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Icon } from '@/components/icons';
import { schools } from '@/data/schools';

export default function BranchSelector() {
  const [active, setActive] = useState(0);
  const school = schools[active];

  return (
    <div className="rounded-3xl border border-cloud bg-white p-5 shadow-soft sm:p-6">
      <p className="eyebrow mb-3">Select your preferred campus</p>
      <div className="no-scrollbar -mx-1 flex gap-2 overflow-x-auto px-1 pb-1">
        {schools.map((s, i) => (
          <button
            key={s.slug}
            type="button"
            onClick={() => setActive(i)}
            aria-pressed={i === active}
            className={`shrink-0 rounded-full px-4 py-2 text-sm font-semibold transition-all ${
              i === active
                ? 'bg-brand-600 text-white shadow-soft ring-1 ring-brand-600/20'
                : 'bg-mist text-ink-soft ring-1 ring-transparent hover:bg-cloud hover:text-ink'
            }`}
          >
            {s.shortName}
          </button>
        ))}
      </div>

      <div className="mt-5 grid gap-4 rounded-2xl bg-mist p-5 sm:grid-cols-2">
        <div>
          <h3 className="text-base font-bold text-ink">{school.name}</h3>
          <p className="mt-2 flex items-start gap-2 text-sm text-ink-soft">
            <Icon name="pin" className="mt-0.5 h-4 w-4 shrink-0 text-brand-500" />
            {school.address}
          </p>
          <p className="mt-2 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-ink-soft">
            <Icon name="phone" className="h-4 w-4 text-brand-500" />
            {school.phones.map((p) => (
              <a key={p.tel} href={`tel:${p.tel}`} className="font-medium text-brand-700 hover:underline">
                {p.label}
              </a>
            ))}
          </p>
          <p className="mt-1.5 flex items-center gap-2 text-sm">
            <Icon name="map" className="h-4 w-4 text-brand-500" />
            <span className="font-medium text-brand-600">{school.board}</span>
          </p>
        </div>

        <div className="flex flex-col justify-center gap-2.5">
          <a
            href={school.admissionLink}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary w-full"
          >
            Start enquiry for {school.shortName}
          </a>
          <Link href={`/schools/${school.slug}`} className="btn-secondary w-full">
            View campus page
          </Link>
        </div>
      </div>
    </div>
  );
}
