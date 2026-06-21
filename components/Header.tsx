'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Logo from '@/components/Logo';
import { navigation, type NavItem } from '@/data/navigation';

function DesktopNavItem({ item }: { item: NavItem }) {
  const [open, setOpen] = useState(false);
  const timeout = useRef<ReturnType<typeof setTimeout> | null>(null);
  const pathname = usePathname();

  const isActive = item.href
    ? pathname === item.href
    : item.children?.some((c) => c.href === pathname);

  function show() {
    if (timeout.current) clearTimeout(timeout.current);
    setOpen(true);
  }
  function hide() {
    timeout.current = setTimeout(() => setOpen(false), 120);
  }

  if (!item.children) {
    return (
      <Link
        href={item.href ?? '#'}
        className={`rounded-full px-3.5 py-2 text-sm font-medium transition-colors ${
          isActive ? 'text-brand-700' : 'text-ink-soft hover:text-brand-700'
        }`}
      >
        {item.label}
      </Link>
    );
  }

  return (
    <div className="relative" onMouseEnter={show} onMouseLeave={hide}>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-haspopup="true"
        aria-expanded={open}
        className={`flex items-center gap-1 rounded-full px-3.5 py-2 text-sm font-medium transition-colors ${
          isActive ? 'text-brand-700' : 'text-ink-soft hover:text-brand-700'
        }`}
      >
        {item.label}
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          className={`h-3.5 w-3.5 transition-transform ${open ? 'rotate-180' : ''}`}
          aria-hidden="true"
        >
          <path d="m6 9 6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
      <div
        className={`absolute left-1/2 top-full z-50 w-72 -translate-x-1/2 pt-3 transition-all duration-150 ${
          open ? 'visible opacity-100' : 'invisible -translate-y-1 opacity-0'
        }`}
      >
        <div className="overflow-hidden rounded-2xl border border-brand-50 bg-white p-2 shadow-card">
          {item.children.map((child) => (
            <Link
              key={child.href}
              href={child.href}
              className="block rounded-xl px-3 py-2.5 transition-colors hover:bg-mist"
            >
              <span className="block text-sm font-semibold text-ink">{child.label}</span>
              {child.desc ? <span className="block text-xs text-ink-muted">{child.desc}</span> : null}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openGroup, setOpenGroup] = useState<string | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close menus whenever the route changes.
  useEffect(() => {
    setMobileOpen(false);
    setOpenGroup(null);
  }, [pathname]);

  // Lock body scroll while the mobile menu is open.
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-shadow ${
        scrolled ? 'border-brand-50 bg-white/95 shadow-soft backdrop-blur' : 'border-transparent bg-white'
      }`}
    >
      <div className="container flex h-16 items-center justify-between gap-4 lg:h-[72px]">
        <Link href="/" aria-label="L. P. Savani School, Palanpor — home">
          <Logo />
        </Link>

        <nav className="hidden items-center gap-0.5 lg:flex" aria-label="Primary">
          {navigation.map((item) => (
            <DesktopNavItem key={item.label} item={item} />
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Link href="/admissions" className="btn-primary hidden px-5 py-2.5 lg:inline-flex">
            Apply now
          </Link>
          <button
            type="button"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
            className="grid h-10 w-10 place-items-center rounded-xl border border-brand-100 text-ink lg:hidden"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="h-5 w-5" aria-hidden="true">
              {mobileOpen ? (
                <path d="M6 6l12 12M18 6 6 18" strokeLinecap="round" />
              ) : (
                <path d="M3 6h18M3 12h18M3 18h18" strokeLinecap="round" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`lg:hidden ${mobileOpen ? 'block' : 'hidden'}`}
        id="mobile-menu"
      >
        <div className="max-h-[calc(100dvh-4rem)] overflow-y-auto border-t border-brand-50 bg-white px-4 pb-6 pt-3">
          <ul className="space-y-1">
            {navigation.map((item) => {
              if (!item.children) {
                return (
                  <li key={item.label}>
                    <Link
                      href={item.href ?? '#'}
                      className="block rounded-xl px-3 py-3 text-sm font-semibold text-ink hover:bg-mist"
                    >
                      {item.label}
                    </Link>
                  </li>
                );
              }
              const groupOpen = openGroup === item.label;
              return (
                <li key={item.label}>
                  <button
                    type="button"
                    onClick={() => setOpenGroup(groupOpen ? null : item.label)}
                    aria-expanded={groupOpen}
                    className="flex w-full items-center justify-between rounded-xl px-3 py-3 text-sm font-semibold text-ink hover:bg-mist"
                  >
                    {item.label}
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      className={`h-4 w-4 transition-transform ${groupOpen ? 'rotate-180' : ''}`}
                      aria-hidden="true"
                    >
                      <path d="m6 9 6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </button>
                  {groupOpen ? (
                    <ul className="ml-3 mt-1 space-y-1 border-l border-brand-50 pl-3">
                      {item.children.map((child) => (
                        <li key={child.href}>
                          <Link
                            href={child.href}
                            className="block rounded-lg px-3 py-2 text-sm text-ink-soft hover:bg-mist hover:text-brand-700"
                          >
                            {child.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  ) : null}
                </li>
              );
            })}
          </ul>
          <Link href="/admissions" className="btn-primary mt-4 w-full">
            Apply now
          </Link>
        </div>
      </div>
    </header>
  );
}
