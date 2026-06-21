import Link from 'next/link';

// Crafted wordmark. The group's official logo art is white-on-transparent, so a
// wordmark keeps the brand legible on both the white header and dark footer.
// Official asset URLs are kept in data/images.ts if you prefer to swap one in.
type Props = {
  variant?: 'dark' | 'light';
  className?: string;
};

export default function Logo({ variant = 'dark', className = '' }: Props) {
  const isLight = variant === 'light';
  const wordColor = isLight ? 'text-white' : 'text-ink';
  const subColor = isLight ? 'text-white/70' : 'text-brand-600';

  return (
    <Link
      href="/"
      aria-label="L. P. Savani Group of Schools, home"
      className={`group inline-flex items-center gap-3 ${className}`}
    >
      <span
        aria-hidden="true"
        className="grid h-11 w-11 shrink-0 place-items-center rounded-[14px] bg-brand-600 text-white shadow-soft ring-1 ring-white/10 transition-transform duration-300 group-hover:-translate-y-0.5"
      >
        <span className="font-display text-lg font-extrabold leading-none tracking-tight">LP</span>
      </span>
      <span className="flex flex-col leading-none">
        <span className={`font-display text-[15px] font-extrabold tracking-tight ${wordColor} sm:text-base`}>
          L. P. SAVANI
        </span>
        <span className={`mt-1 text-[10px] font-semibold uppercase tracking-[0.22em] ${subColor}`}>
          Group of Schools
        </span>
      </span>
    </Link>
  );
}
