import Link from 'next/link';
import { Icon } from '@/components/icons';
import { site } from '@/data/site';

export default function AnnouncementBar() {
  const mobileMessage = `Admissions open for ${site.admissionsYear} · Explore campuses across ${site.city}`;

  return (
    <div className="bg-brand-600 text-white">
      {/* Desktop (sm and up): centered single line — unchanged */}
      <div className="container-x hidden h-9 items-center justify-center gap-2 text-center text-[12.5px] font-medium sm:flex">
        <Icon name="sparkle" className="h-3.5 w-3.5 text-gold-300" />
        <span>
          Admissions open for {site.admissionsYear}
          <span className="mx-2 text-brand-200">|</span>
          Explore campuses across {site.city}
        </span>
        <Link
          href="/admissions"
          className="ml-1 inline-flex shrink-0 items-center gap-1 font-semibold text-gold-300 hover:text-gold-200"
        >
          Enquire
          <Icon name="arrow" className="h-3.5 w-3.5" />
        </Link>
      </div>

      {/* Mobile (below sm): seamless marquee + pinned, always-visible Enquire */}
      <div className="flex min-h-9 items-center gap-2 px-4 py-1.5 text-[12.5px] font-medium sm:hidden">
        {/* Scrolling track — overflow clipped so it never causes horizontal page scroll */}
        <div className="relative min-w-0 flex-1 overflow-hidden">
          <div className="flex w-max animate-marquee whitespace-nowrap motion-reduce:block motion-reduce:w-full motion-reduce:whitespace-normal">
            <span className="pr-8">{mobileMessage}</span>
            <span aria-hidden="true" className="pr-8 motion-reduce:hidden">
              {mobileMessage}
            </span>
          </div>
        </div>
        <Link
          href="/admissions"
          className="inline-flex shrink-0 items-center gap-1 font-semibold text-gold-300 hover:text-gold-200"
        >
          Enquire
          <Icon name="arrow" className="h-3.5 w-3.5" />
        </Link>
      </div>
    </div>
  );
}
