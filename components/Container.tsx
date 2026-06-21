import type { ReactNode } from 'react';

type Props = {
  children: ReactNode;
  className?: string;
  size?: 'default' | 'tight';
};

export default function Container({ children, className = '', size = 'default' }: Props) {
  const base = size === 'tight' ? 'container max-w-5xl' : 'container';
  return <div className={`${base} ${className}`}>{children}</div>;
}
