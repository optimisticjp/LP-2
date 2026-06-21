type Props = {
  quote: string;
  name: string;
  role: string;
};

function Star() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="h-4 w-4">
      <path d="M12 3.5l2.6 5.3 5.9.9-4.2 4.1 1 5.8L12 17l-5.3 2.7 1-5.8L3.5 9.7l5.9-.9L12 3.5Z" />
    </svg>
  );
}

export default function TestimonialCard({ quote, name, role }: Props) {
  const initials = name
    .split(' ')
    .map((w) => w[0])
    .slice(0, 2)
    .join('');

  return (
    <figure className="flex h-full flex-col rounded-2xl border border-cloud bg-white p-6 shadow-soft">
      <div className="flex items-center gap-0.5 text-gold-400" aria-label="Rated 5 out of 5">
        <Star />
        <Star />
        <Star />
        <Star />
        <Star />
      </div>
      <blockquote className="mt-4 flex-1 text-[15px] leading-relaxed text-ink-soft">
        &ldquo;{quote}&rdquo;
      </blockquote>
      <figcaption className="mt-5 flex items-center gap-3 border-t border-cloud pt-4">
        <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-brand-600 text-sm font-bold text-white">
          {initials}
        </span>
        <span className="min-w-0">
          <span className="block font-semibold text-ink">{name}</span>
          <span className="block text-xs text-ink-muted">{role}</span>
        </span>
      </figcaption>
    </figure>
  );
}
