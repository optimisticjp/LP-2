'use client';

import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import Link from 'next/link';
import Logo from '@/components/Logo';
import Img from '@/components/Img';
import { Icon } from '@/components/icons';
import { mainNav, megaSchools } from '@/data/navigation';
import { site, whatsappLink } from '@/data/site';

export default function MobileMenu({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [mounted, setMounted] = useState(false);
  const [schoolsOpen, setSchoolsOpen] = useState(true);

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open, onClose]);

  if (!mounted) return null;

  const overlay = (
    <div className={`fixed inset-0 z-[100] lg:hidden ${open ? '' : 'pointer-events-none'}`} aria-hidden={!open}>
      <button
        type="button"
        aria-label="Close menu"
        onClick={onClose}
        className={`absolute inset-0 bg-ink/50 transition-opacity duration-300 ${open ? 'opacity-100' : 'opacity-0'}`}
      />

      <div
        className={`absolute inset-y-0 right-0 flex w-[86%] max-w-sm flex-col bg-white shadow-lift transition-transform duration-300 ${
          open ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex items-center justify-between border-b border-cloud px-4 py-3">
          <Logo mark="emblem" />
          <button
            type="button"
            onClick={onClose}
            aria-label="Close menu"
            className="grid h-11 w-11 place-items-center rounded-btn-sm border border-cloud text-ink hover:bg-mist"
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

          <div className="mt-2 rounded-xl bg-mist p-1">
            <button
              type="button"
              onClick={() => setSchoolsOpen((v) => !v)}
              aria-expanded={schoolsOpen}
              className="flex w-full items-center justify-between rounded-lg px-3 py-3 text-[15px] font-semibold text-ink"
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
                      className="flex items-center gap-3 rounded-lg p-2 hover:bg-white"
                    >
                      <Img
                        src={s.thumb}
                        alt={`${s.fullName} campus`}
                        className="h-11 w-12 shrink-0 rounded-md object-cover"
                      />
                      <span className="min-w-0 flex-1">
                        <span className="flex items-center gap-1.5">
                          <span className="truncate text-sm font-semibold text-ink">{s.name}</span>
                          {s.flagship ? (
                            <span className="pill bg-gold-50 text-[10px] text-gold-600">Flagship</span>
                          ) : null}
                        </span>
                        <span className="mt-0.5 flex items-center gap-1.5 text-xs text-ink-muted">
                          <Icon name="pin" className="h-3 w-3 shrink-0" />
                          <span className="truncate">{s.location}</span>
                          <span className="text-brand-300">|</span>
                          <span className="shrink-0 font-medium text-brand-600">{s.board}</span>
                        </span>
                      </span>
                      <Icon name="chevronRight" className="h-4 w-4 shrink-0 text-brand-400" />
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

          {/* Need help choosing — compact help card (scrolls with the menu) */}
          <div className="mt-3 rounded-xl bg-brand-600 p-4 text-white">
            <p className="text-sm font-bold">Not sure which campus?</p>
            <p className="mt-1 text-xs leading-relaxed text-brand-100">
              Tell us your area and preferred board — we&rsquo;ll help you find the right fit.
            </p>
            <div className="mt-3 flex flex-col gap-2">
              <Link href="/admissions" onClick={onClose} className="btn-gold w-full">
                Talk to Admissions
              </Link>
              <a
                href={whatsappLink('Hi, I would like help choosing the right L. P. Savani campus.')}
                target="_blank"
                rel="noopener noreferrer"
                onClick={onClose}
                className="inline-flex items-center justify-center gap-2 text-sm font-semibold text-white/90 hover:text-white"
              >
                <Icon name="whatsapp" className="h-4 w-4" />
                Chat on WhatsApp
              </a>
            </div>
          </div>
        </nav>

        <div
          className="grid grid-cols-2 gap-2 border-t border-cloud p-4"
          style={{ paddingBottom: 'max(1rem, env(safe-area-inset-bottom))' }}
        >
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

  return createPortal(overlay, document.body);
}
