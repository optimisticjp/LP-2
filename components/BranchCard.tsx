import Link from 'next/link';
import type { Branch } from '@/data/branches';

export default function BranchCard({ branch }: { branch: Branch }) {
  const ctaLabel = branch.current ? 'You are here' : 'Explore branch';
  const linkProps = branch.external
    ? { href: branch.url, target: '_blank', rel: 'noopener noreferrer' }
    : { href: branch.url };

  return (
    <article className="card card-hover relative flex h-full flex-col p-6">
      {branch.current ? (
        <span className="absolute right-5 top-5 rounded-full bg-leaf-50 px-3 py-1 text-xs font-semibold text-leaf-600">
          This campus
        </span>
      ) : null}
      <p className="text-xs font-semibold uppercase tracking-[0.16em] text-gold-500">
        {branch.area}
      </p>
      <h3 className="mt-2 text-xl text-ink">{branch.name}</h3>
      <p className="mt-3 flex-1 text-sm leading-relaxed text-ink-soft">{branch.blurb}</p>
      <Link
        {...linkProps}
        className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-brand-600 hover:text-brand-700"
        aria-disabled={branch.current}
      >
        {ctaLabel}
        {!branch.current ? <span aria-hidden="true">&rarr;</span> : null}
      </Link>
    </article>
  );
}
