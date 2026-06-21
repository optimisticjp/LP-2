import Link from 'next/link';
import type { ReactNode } from 'react';
import { Icon, type IconName } from '@/components/icons';

type Variant = 'primary' | 'secondary' | 'gold' | 'white' | 'ghost' | 'whatsapp';

type Props = {
  children: ReactNode;
  href?: string;
  variant?: Variant;
  className?: string;
  icon?: IconName;
  iconRight?: IconName;
  fullWidth?: boolean;
  type?: 'button' | 'submit';
  onClick?: () => void;
  ariaLabel?: string;
};

const variantClass: Record<Variant, string> = {
  primary: 'btn-primary',
  secondary: 'btn-secondary',
  gold: 'btn-gold',
  white: 'btn-white',
  ghost: 'btn-ghost',
  whatsapp: 'btn-whatsapp',
};

export default function Button({
  children,
  href,
  variant = 'primary',
  className = '',
  icon,
  iconRight,
  fullWidth = false,
  type = 'button',
  onClick,
  ariaLabel,
}: Props) {
  const cls = `${variantClass[variant]} ${fullWidth ? 'w-full' : ''} ${className}`;
  const inner = (
    <>
      {icon ? <Icon name={icon} className="h-4 w-4" /> : null}
      <span>{children}</span>
      {iconRight ? <Icon name={iconRight} className="h-4 w-4" /> : null}
    </>
  );

  if (href) {
    const external = /^https?:\/\//.test(href);
    if (external) {
      return (
        <a href={href} target="_blank" rel="noopener noreferrer" className={cls} aria-label={ariaLabel}>
          {inner}
        </a>
      );
    }
    return (
      <Link href={href} className={cls} aria-label={ariaLabel}>
        {inner}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={cls} aria-label={ariaLabel}>
      {inner}
    </button>
  );
}
