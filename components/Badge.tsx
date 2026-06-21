import type { ReactNode } from 'react';
import { Icon, type IconName } from '@/components/icons';

type Tone = 'brand' | 'gold' | 'leaf' | 'neutral' | 'white' | 'outline';

const toneClass: Record<Tone, string> = {
  brand: 'bg-brand-50 text-brand-700',
  gold: 'bg-gold-50 text-gold-600',
  leaf: 'bg-leaf-50 text-leaf-600',
  neutral: 'bg-cloud text-ink-soft',
  white: 'bg-white/15 text-white backdrop-blur',
  outline: 'border border-brand-200 text-brand-700',
};

export default function Badge({
  children,
  tone = 'brand',
  icon,
  className = '',
}: {
  children: ReactNode;
  tone?: Tone;
  icon?: IconName;
  className?: string;
}) {
  return (
    <span className={`pill ${toneClass[tone]} ${className}`}>
      {icon ? <Icon name={icon} className="h-3.5 w-3.5" /> : null}
      {children}
    </span>
  );
}
