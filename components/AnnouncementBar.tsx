import Link from 'next/link';
import { school, whatsappLink } from '@/data/school';

export default function AnnouncementBar() {
  return (
    <div className="bg-brand-900 text-white">
      <div className="container flex flex-col items-center justify-between gap-1.5 py-2 text-center text-xs sm:flex-row sm:text-sm">
        <p className="flex items-center gap-2">
          <span className="inline-block h-1.5 w-1.5 animate-pulse rounded-full bg-gold-400" aria-hidden="true" />
          <span>
            <strong className="font-semibold text-gold-300">Admissions open</strong> for {school.session} at{' '}
            {school.branch}
          </span>
        </p>
        <div className="flex items-center gap-4">
          <a href={`tel:${school.contact.phoneTel}`} className="font-medium text-brand-100 hover:text-white">
            {school.contact.phoneDisplay}
          </a>
          <span className="hidden text-brand-300 sm:inline" aria-hidden="true">
            |
          </span>
          <a
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden font-medium text-brand-100 hover:text-white sm:inline"
          >
            WhatsApp us
          </a>
          <span className="hidden text-brand-300 sm:inline" aria-hidden="true">
            |
          </span>
          <Link href="/admissions" className="hidden font-semibold text-gold-300 hover:text-gold-200 sm:inline">
            Enquire
          </Link>
        </div>
      </div>
    </div>
  );
}
