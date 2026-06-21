'use client';

import { useMemo, useState } from 'react';
import Image from 'next/image';
import { galleryCategories, galleryItems, type GalleryCategory } from '@/data/gallery';

export default function GalleryGrid() {
  const [active, setActive] = useState<GalleryCategory>('All');

  const filtered = useMemo(
    () => (active === 'All' ? galleryItems : galleryItems.filter((g) => g.category === active)),
    [active]
  );

  return (
    <div>
      <div className="flex flex-wrap gap-2" role="group" aria-label="Filter gallery by category">
        {galleryCategories.map((cat) => {
          const isActive = active === cat;
          return (
            <button
              key={cat}
              type="button"
              onClick={() => setActive(cat)}
              aria-pressed={isActive}
              className={`rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
                isActive
                  ? 'bg-brand-600 text-white shadow-soft'
                  : 'border border-brand-100 bg-white text-brand-700 hover:bg-brand-50'
              }`}
            >
              {cat}
            </button>
          );
        })}
      </div>

      <div className="mt-8 grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3 lg:grid-cols-4">
        {filtered.map((item) => (
          <figure
            key={item.src + item.caption}
            className="group relative aspect-[4/3] overflow-hidden rounded-xl bg-brand-50 shadow-soft"
          >
            <Image
              src={item.src}
              alt={item.alt}
              fill
              sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 280px"
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <figcaption className="absolute inset-x-0 bottom-0 translate-y-2 bg-gradient-to-t from-ink/85 to-transparent p-3 text-xs font-medium text-white opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
              {item.caption}
            </figcaption>
          </figure>
        ))}
      </div>

      {filtered.length === 0 ? (
        <p className="mt-8 text-center text-sm text-ink-muted">No photos in this category yet.</p>
      ) : null}
    </div>
  );
}
