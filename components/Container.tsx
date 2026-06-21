import type { ReactNode } from 'react';

type Props = {
  children: ReactNode;
  className?: string;
  size?: 'default' | 'tight';
};

export default function Container({ children, className = '', size = 'default' }: Props) {
  const base = size === 'tight' ? 'container-x max-w-5xl' : 'container-x';
  return <div className={`${base} ${className}`}>{children}</div>;
}
