import { Icon } from '@/components/icons';

export type TimelineItem = {
  title: string;
  body?: string;
  points?: string[];
  tag?: string;
};

// Numbered steps. Order carries meaning here (an admission journey / roadmap),
// so numbered markers are intentional.
export default function Timeline({ items, accent = 'brand' }: { items: TimelineItem[]; accent?: 'brand' | 'gold' }) {
  const dot = accent === 'gold' ? 'bg-gold-400 text-ink' : 'bg-brand-600 text-white';
  const line = accent === 'gold' ? 'bg-gold-200' : 'bg-brand-100';

  return (
    <ol className="relative">
      {items.map((item, i) => (
        <li key={item.title} className="relative flex gap-4 pb-8 last:pb-0">
          {i < items.length - 1 ? (
            <span className={`absolute left-[18px] top-10 h-[calc(100%-2rem)] w-px ${line}`} aria-hidden="true" />
          ) : null}
          <span className={`relative z-10 grid h-9 w-9 shrink-0 place-items-center rounded-full text-sm font-bold ${dot}`}>
            {i + 1}
          </span>
          <div className="pt-1">
            <div className="flex flex-wrap items-center gap-2">
              <h3 className="text-base font-bold text-ink">{item.title}</h3>
              {item.tag ? (
                <span className="pill bg-gold-50 text-[11px] text-gold-600">{item.tag}</span>
              ) : null}
            </div>
            {item.body ? <p className="mt-1.5 text-sm leading-relaxed text-ink-soft">{item.body}</p> : null}
            {item.points ? (
              <ul className="mt-2 space-y-1.5">
                {item.points.map((p) => (
                  <li key={p} className="flex items-start gap-2 text-sm text-ink-soft">
                    <Icon name="check" className="mt-0.5 h-4 w-4 shrink-0 text-leaf-500" />
                    {p}
                  </li>
                ))}
              </ul>
            ) : null}
          </div>
        </li>
      ))}
    </ol>
  );
}
