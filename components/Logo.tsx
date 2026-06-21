import Link from 'next/link';
import Img from '@/components/Img';
import { images } from '@/data/images';

type Props = {
  variant?: 'dark' | 'light';
  className?: string;
};

export default function Logo({ variant = 'dark', className = '' }: Props) {
  const isLight = variant === 'light';

  return (
    <Link
      href="/"
      aria-label="L. P. Savani Group of Schools, home"
      className={`inline-flex items-center ${className}`}
    >
      <span className={isLight ? 'rounded-xl bg-white px-3 py-2 shadow-soft' : ''}>
        <Img
          src={images.logoLight}
          alt="L. P. Savani Group of Schools"
          className="h-10 w-auto object-contain sm:h-12"
        />
      </span>
    </Link>
  );
}
