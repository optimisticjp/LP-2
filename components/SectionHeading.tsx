import type { ReactNode } from 'react';

type Props = {
  eyebrow?: string;
  title: ReactNode;
  subtitle?: ReactNode;
  align?: 'left' | 'center';
  light?: boolean;
  className?: string;
};

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = 'left',
  light = false,
  className = '',
}: Props) {
  const isCenter = align === 'center';
  return (
    <div
      className={`${isCenter ? 'mx-auto max-w-2xl text-center' : 'max-w-2xl'} ${className}`}
    >
      {eyebrow ? (
        <span className={`eyebrow ${light ? 'text-gold-300' : ''} ${isCenter ? 'justify-center' : ''}`}>
          {eyebrow}
        </span>
      ) : null}
      <h2
        className={`mt-3 text-3xl leading-tight sm:text-4xl ${
          light ? 'text-white' : 'text-ink'
        }`}
      >
        {title}
      </h2>
      {subtitle ? (
        <p className={`mt-4 text-base leading-relaxed ${light ? 'text-brand-100' : 'text-ink-soft'}`}>
          {subtitle}
        </p>
      ) : null}
    </div>
  );
}
