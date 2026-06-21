import Link from 'next/link';
import { Icon } from '@/components/icons';
import { site } from '@/data/site';

export default function AnnouncementBar() {
  return (
    <div className="bg-brand-600 text-white">
      <div className="container-x flex h-9 items-center justify-center gap-2 text-center text-[12.5px] font-medium">
        <Icon name="sparkle" className="hidden h-3.5 w-3.5 text-gold-300 sm:block" />
        <span className="truncate">
          Admissions open for {site.admissionsYear}
          <span className="mx-2 text-brand-200">|</span>
          Explore campuses across {site.city}
        </span>
        <Link
          href="/admissions"
          className="ml-1 hidden shrink-0 items-center gap-1 font-semibold text-gold-300 hover:text-gold-200 sm:inline-flex"
        >
          Enquire
          <Icon name="arrow" className="h-3.5 w-3.5" />
        </Link>
      </div>
    </div>
  );
}
