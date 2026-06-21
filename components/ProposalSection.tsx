import type { ReactNode } from 'react';

// Numbered section header for the proposal page. The number reflects the real
// running order of the pitch, so it carries meaning.
export default function ProposalSection({
  index,
  eyebrow,
  title,
  children,
}: {
  index: number;
  eyebrow?: string;
  title: string;
  children?: ReactNode;
}) {
  return (
    <section className="scroll-mt-28">
      <div className="flex items-baseline gap-4">
        <span className="font-display text-2xl font-extrabold text-brand-200">
          {String(index).padStart(2, '0')}
        </span>
        <div>
          {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
          <h2 className="mt-1 text-2xl font-bold leading-tight text-ink sm:text-3xl">{title}</h2>
        </div>
      </div>
      {children ? <div className="mt-6 pl-0 sm:pl-10">{children}</div> : null}
    </section>
  );
}
