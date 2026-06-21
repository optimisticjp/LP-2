'use client';

import { useMemo, useState } from 'react';
import GalleryFilter from '@/components/GalleryFilter';
import { galleryCategories, galleryItems, type GalleryCategory } from '@/data/gallery';

type FilterValue = GalleryCategory | 'All';

const PAGE_SIZE = 8;

export default function GalleryGrid({ limit }: { limit?: number }) {
  const [active, setActive] = useState<FilterValue>('All');
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);

  const categories: FilterValue[] = ['All', ...galleryCategories];

  const filteredItems = useMemo(() => {
    return active === 'All' ? galleryItems : galleryItems.filter((item) => item.category === active);
  }, [active]);

  const items =
    typeof limit === 'number'
      ? filteredItems.slice(0, limit)
      : filteredItems.slice(0, visibleCount);

  const hasMore = typeof limit !== 'number' && visibleCount < filteredItems.length;

  const handleFilterChange = (category: FilterValue) => {
    setActive(category);
    setVisibleCount(PAGE_SIZE);
  };

  return (
    <div className="space-y-8">
      <GalleryFilter categories={categories} active={active} onChange={handleFilterChange} />

      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
        {items.map((item, index) => (
          <figure
            key={`${item.src}-${index}`}
            className="overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-slate-200"
            style={{
              contentVisibility: 'auto',
              containIntrinsicSize: '260px',
            } as React.CSSProperties}
          >
            <div className="aspect-[4/3] overflow-hidden bg-slate-100">
              <img
                src={item.src}
                alt={item.caption}
                width={480}
                height={360}
                loading={index < 2 ? 'eager' : 'lazy'}
                decoding="async"
                fetchPriority={index < 2 ? 'high' : 'low'}
                className="h-full w-full object-cover"
              />
            </div>
          </figure>
        ))}
      </div>

      {hasMore ? (
        <div className="flex justify-center">
          <button
            type="button"
            onClick={() => setVisibleCount((count) => count + PAGE_SIZE)}
            className="rounded-full bg-brand-600 px-6 py-3 text-sm font-bold text-white shadow-sm transition hover:bg-brand-700"
          >
            Load more
          </button>
        </div>
      ) : null}
    </div>
  );
}
