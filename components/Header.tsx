'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Logo from '@/components/Logo';
import MegaMenu from '@/components/MegaMenu';
import MobileMenu from '@/components/MobileMenu';
import { Icon } from '@/components/icons';
import { mainNav } from '@/data/navigation';
import { site } from '@/data/site';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [megaOpen, setMegaOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const triggerRef = useRef<HTMLDivElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMegaOpen(false);
    setMobileOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMegaOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  useEffect(() => {
    if (!megaOpen) return;
    const onPointerDown = (e: PointerEvent) => {
      const t = e.target as Node;
      if (triggerRef.current?.contains(t) || panelRef.current?.contains(t)) return;
      setMegaOpen(false);
    };
    const onScroll = () => setMegaOpen(false);
    document.addEventListener('pointerdown', onPointerDown);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      document.removeEventListener('pointerdown', onPointerDown);
      window.removeEventListener('scroll', onScroll);
    };
  }, [megaOpen]);

  const openMega = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setMegaOpen(true);
  };
  const scheduleCloseMega = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => setMegaOpen(false), 140);
  };

  const isActive = (href: string) =>
    href === '/' ? pathname === '/' : pathname.startsWith(href);

  return (
    <header
      className={`sticky top-0 z-40 transition-shadow ${scrolled ? 'shadow-soft' : ''} bg-white/95 backdrop-blur`}
    >
      <div className="container-x flex h-[68px] items-center justify-between gap-4">
        <Logo />

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
          {mainNav.map((l) =>
            l.label === 'Schools' ? (
              <div
                key={l.href}
                ref={triggerRef}
                className="relative"
                onMouseEnter={openMega}
                onMouseLeave={scheduleCloseMega}
              >
                <button
                  type="button"
                  onClick={() => setMegaOpen((v) => !v)}
                  aria-expanded={megaOpen}
                  aria-haspopup="true"
                  className={`relative flex items-center gap-1 rounded-btn-sm px-3.5 py-2 text-sm font-semibold transition-colors ${
                    isActive('/schools') || megaOpen ? 'text-brand-600' : 'text-ink-soft hover:text-brand-600'
                  } ${isActive('/schools') ? "after:absolute after:inset-x-3.5 after:bottom-1 after:h-0.5 after:rounded-full after:bg-red-500 after:content-['']" : ''}`}
                >
                  Schools
                  <Icon
                    name="chevronDown"
                    className={`h-3.5 w-3.5 transition-transform ${megaOpen ? 'rotate-180' : ''}`}
                  />
                </button>
              </div>
            ) : (
              <Link
                key={l.href}
                href={l.href}
                className={`relative rounded-btn-sm px-3.5 py-2 text-sm font-semibold transition-colors ${
                  isActive(l.href)
                    ? "text-brand-600 after:absolute after:inset-x-3.5 after:bottom-1 after:h-0.5 after:rounded-full after:bg-red-500 after:content-['']"
                    : 'text-ink-soft hover:text-brand-600'
                }`}
              >
                {l.label}
              </Link>
            )
          )}
        </nav>

        <div className="flex items-center gap-2">
          <Link href="/admissions" className="btn-primary hidden whitespace-nowrap sm:inline-flex">
            Start Admission Enquiry
          </Link>
          <button
            type="button"
            onClick={() => setMobileOpen(true)}
            aria-label="Open menu"
            className="grid h-10 w-10 place-items-center rounded-btn-sm border border-cloud text-ink lg:hidden"
          >
            <Icon name="menu" className="h-5 w-5" />
          </button>
        </div>
      </div>

      <div
        className={`absolute inset-x-0 top-full z-40 hidden lg:block ${megaOpen ? '' : 'pointer-events-none'}`}
        onMouseEnter={openMega}
        onMouseLeave={scheduleCloseMega}
      >
        <div
          className={`container-x transition-all duration-200 ${
            megaOpen ? 'translate-y-0 opacity-100' : '-translate-y-2 opacity-0'
          }`}
        >
          <div
            ref={panelRef}
            className="mt-2 max-h-[80vh] overflow-y-auto rounded-2xl border border-cloud bg-white p-5 shadow-lift"
          >
            <MegaMenu onNavigate={() => setMegaOpen(false)} />
          </div>
        </div>
      </div>

      <MobileMenu open={mobileOpen} onClose={() => setMobileOpen(false)} />

      <span className="sr-only">Admissions open for {site.admissionsYear}</span>
    </header>
  );
}
