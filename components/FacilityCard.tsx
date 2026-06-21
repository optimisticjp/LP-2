import Image from 'next/image';
import { Icon } from '@/components/icons';
import type { Facility } from '@/data/facilities';

export default function FacilityCard({ facility }: { facility: Facility }) {
  return (
    <article className="card card-hover group h-full overflow-hidden">
      <div className="relative aspect-[3/2] overflow-hidden">
        <Image
          src={facility.image}
          alt={facility.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 380px"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <span className="absolute left-3 top-3 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-brand-700 backdrop-blur">
          {facility.category}
        </span>
      </div>
      <div className="p-5">
        <div className="flex items-center gap-3">
          <span className="grid h-10 w-10 place-items-center rounded-xl bg-brand-50 text-brand-600">
            <Icon name={facility.icon} className="h-5 w-5" />
          </span>
          <h3 className="text-lg text-ink">{facility.title}</h3>
        </div>
        <p className="mt-3 text-sm leading-relaxed text-ink-soft">{facility.description}</p>
      </div>
    </article>
  );
}
