import type { GalleryCategory } from '@/data/gallery';

type FilterValue = GalleryCategory | 'All';

export default function GalleryFilter({
  categories,
  active,
  onChange,
}: {
  categories: FilterValue[];
  active: FilterValue;
  onChange: (c: FilterValue) => void;
}) {
  return (
    <div className="no-scrollbar -mx-1 flex gap-2 overflow-x-auto px-1 pb-1" role="tablist" aria-label="Gallery categories">
      {categories.map((c) => (
        <button
          key={c}
          type="button"
          role="tab"
          aria-selected={active === c}
          onClick={() => onChange(c)}
          className={`shrink-0 min-h-[44px] rounded-full px-4 py-2.5 text-sm font-semibold transition-colors ${
            active === c ? 'bg-brand-600 text-white' : 'bg-mist text-ink-soft hover:bg-cloud'
          }`}
        >
          {c}
        </button>
      ))}
    </div>
  );
}
