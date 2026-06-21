'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Icon } from '@/components/icons';
import { mainNav, megaSchools } from '@/data/navigation';
import { site, whatsappLink } from '@/data/site';

export default function MobileMenu({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [schoolsOpen, setSchoolsOpen] = useState(true);

  return (
    <div
      className={`fixed inset-0 z-50 lg:hidden ${open ? '' : 'pointer-events-none'}`}
      aria-hidden={!open}
    >
      {/* Backdrop */}
      <button
        type="button"
        aria-label="Close menu"
        onClick={onClose}
        className={`absolute inset-0 bg-ink/40 transition-opacity duration-300 ${
          open ? 'opacity-100' : 'opacity-0'
        }`}
      />

      {/* Panel */}
      <div
        className={`absolute right-0 top-0 flex h-full w-[86%] max-w-sm flex-col bg-white shadow-lift transition-transform duration-300 ${
          open ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex items-center justify-between border-b border-cloud px-5 py-4">
          <span className="font-display text-sm font-bold tracking-tight text-ink">Menu</span>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close menu"
            className="grid h-9 w-9 place-items-center rounded-btn-sm border border-cloud text-ink hover:bg-mist"
          >
            <Icon name="close" className="h-5 w-5" />
          </button>
        </div>

        <nav className="flex-1 overflow-y-auto px-3 py-3" aria-label="Mobile">
          <ul className="flex flex-col">
            {mainNav
              .filter((l) => l.label !== 'Schools')
              .map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    onClick={onClose}
                    className="block rounded-xl px-4 py-3 text-[15px] font-semibold text-ink hover:bg-mist"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
          </ul>

          {/* Mobile school selector */}
          <div className="mt-2 rounded-xl bg-mist p-1">
            <button
              type="button"
              onClick={() => setSchoolsOpen((v) => !v)}
              aria-expanded={schoolsOpen}
              className="flex w-full items-center justify-between rounded-lg px-3 py-2.5 text-[15px] font-semibold text-ink"
            >
              Our Schools
              <Icon
                name="chevronDown"
                className={`h-4 w-4 transition-transform ${schoolsOpen ? 'rotate-180' : ''}`}
              />
            </button>
            {schoolsOpen ? (
              <ul className="flex flex-col gap-0.5 pb-1">
                {megaSchools.map((s) => (
                  <li key={s.slug}>
                    <Link
                      href={s.href}
                      onClick={onClose}
                      className="flex items-center justify-between rounded-lg px-3 py-2.5 text-sm text-ink-soft hover:bg-white"
                    >
                      <span>
                        <span className="font-medium text-ink">{s.name}</span>
                        <span className="ml-2 text-xs text-ink-muted">{s.board}</span>
                      </span>
                      <Icon name="chevronRight" className="h-4 w-4 text-brand-400" />
                    </Link>
                  </li>
                ))}
                <li>
                  <Link
                    href="/schools"
                    onClick={onClose}
                    className="block rounded-lg px-3 py-2 text-sm font-semibold text-brand-600 hover:bg-white"
                  >
                    Compare all campuses
                  </Link>
                </li>
              </ul>
            ) : null}
          </div>
        </nav>

        <div className="grid grid-cols-2 gap-2 border-t border-cloud p-4">
          <a href={`tel:${site.primaryPhoneTel}`} className="btn-secondary">
            <Icon name="phone" className="h-4 w-4" /> Call
          </a>
          <a
            href={whatsappLink('Hi, I have an admission enquiry for L. P. Savani.')}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp"
          >
            <Icon name="whatsapp" className="h-4 w-4" /> WhatsApp
          </a>
          <Link href="/admissions" onClick={onClose} className="btn-primary col-span-2">
            Apply for {site.admissionsYear}
          </Link>
        </div>
      </div>
    </div>
  );
}
