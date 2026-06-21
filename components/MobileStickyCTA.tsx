import Link from 'next/link';
import { school, whatsappLink } from '@/data/school';

export default function MobileStickyCTA() {
  return (
    <nav
      aria-label="Quick admission actions"
      className="fixed inset-x-0 bottom-0 z-40 border-t border-brand-100 bg-white/95 backdrop-blur md:hidden"
    >
      <div className="grid grid-cols-3 divide-x divide-brand-50">
        <a
          href={`tel:${school.contact.phoneTel}`}
          className="flex flex-col items-center gap-0.5 py-2.5 text-xs font-semibold text-brand-700"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7} className="h-5 w-5" aria-hidden="true">
            <path d="M3 5c0 8.3 6.7 15 15 15a2 2 0 0 0 2-2v-2.4a1 1 0 0 0-.8-1l-3.3-.7a1 1 0 0 0-1 .3l-1 1.2a12 12 0 0 1-5-5l1.2-1a1 1 0 0 0 .3-1L9 5.8a1 1 0 0 0-1-.8H5a2 2 0 0 0-2 2Z" strokeLinejoin="round" />
          </svg>
          Call
        </a>
        <a
          href={whatsappLink()}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center gap-0.5 py-2.5 text-xs font-semibold text-leaf-600"
        >
          <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5" aria-hidden="true">
            <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.46 1.32 4.96L2 22l5.25-1.38a9.9 9.9 0 0 0 4.79 1.22c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2Zm-4.6 6.16c.2 0 .4 0 .6.01.21.01.46-.07.71.53.26.63.88 2.17.96 2.33.08.16.13.34.03.55-.1.21-.15.34-.31.52-.16.18-.33.41-.47.55-.16.15-.32.32-.14.63.18.31.81 1.33 1.74 2.16 1.19 1.06 2.2 1.39 2.51 1.55.31.16.5.13.68-.08.19-.21.79-.92 1-1.23.21-.32.42-.26.71-.16.29.11 1.83.86 2.14 1.02.31.16.52.24.6.37.08.13.08.76-.18 1.49-.26.73-1.51 1.4-2.11 1.49-.54.08-1.23.12-1.98-.12-.45-.15-1.04-.34-1.79-.66-3.16-1.36-5.22-4.54-5.38-4.75-.16-.21-1.29-1.71-1.29-3.26 0-1.55.81-2.32 1.1-2.63.29-.31.63-.39.84-.39Z" />
          </svg>
          WhatsApp
        </a>
        <Link
          href="/admissions"
          className="flex flex-col items-center gap-0.5 bg-gold-400 py-2.5 text-xs font-bold text-ink"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="h-5 w-5" aria-hidden="true">
            <path d="M12 4v16M4 12h16" strokeLinecap="round" />
          </svg>
          Apply
        </Link>
      </div>
    </nav>
  );
}
