'use client';

import { useMemo, useState } from 'react';
import ImageCard from '@/components/ImageCard';
import GalleryFilter from '@/components/GalleryFilter';
import { galleryCategories, galleryItems, type GalleryCategory } from '@/data/gallery';

type FilterValue = GalleryCategory | 'All';

export default function GalleryGrid({ limit }: { limit?: number }) {
  const [active, setActive] = useState<FilterValue>('All');
  const categories: FilterValue[] = ['All', ...galleryCategories];

  const items = useMemo(() => {
    const filtered = active === 'All' ? galleryItems : galleryItems.filter((g) => g.category === active);
    return typeof limit === 'number' ? filtered.slice(0, limit) : filtered;
  }, [active, limit]);

  return (
    <div>
      <GalleryFilter categories={categories} active={active} onChange={setActive} />
      <div className="mt-6 grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3 lg:grid-cols-4">
        {items.map((item, i) => (
          <ImageCard
            key={`${item.src}-${i}`}
            src={item.src}
            caption={item.caption}
            aspect={i % 5 === 0 ? 'aspect-square' : 'aspect-[4/3]'}
          />
        ))}
      </div>
    </div>
  );
}
