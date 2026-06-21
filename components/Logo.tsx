import Link from 'next/link';
import Img from '@/components/Img';
import { images } from '@/data/images';

type Props = {
  variant?: 'dark' | 'light';
  // 'responsive' = wide mark on sm and up, emblem below sm.
  // 'wide' / 'emblem' force a single mark (footer / mobile drawer).
  mark?: 'responsive' | 'wide' | 'emblem';
  className?: string;
};

const ALT = 'L. P. Savani Group of Schools';
// Height-based sizing; width/height attrs preserve intrinsic ratio (no layout shift).
const markCls = 'h-10 w-auto object-contain sm:h-12';

export default function Logo({ variant = 'dark', mark = 'responsive', className = '' }: Props) {
  const wide = (
    <Img src={images.logoWide} width={573} height={342} loading="eager" alt={ALT} className={markCls} />
  );
  const emblem = (
    <Img src={images.logoEmblem} width={271} height={336} loading="eager" alt={ALT} className={markCls} />
  );

  let inner;
  if (mark === 'wide') inner = wide;
  else if (mark === 'emblem') inner = emblem;
  else
    inner = (
      <>
        <span className="flex sm:hidden">{emblem}</span>
        <span className="hidden sm:flex">{wide}</span>
      </>
    );

  return (
    <Link href="/" aria-label={`${ALT}, home`} className={`inline-flex items-center ${className}`}>
      <span
        className={
          variant === 'light'
            ? 'inline-flex items-center rounded-xl bg-white px-3 py-2 shadow-soft'
            : 'inline-flex items-center px-1'
        }
      >
        {inner}
      </span>
    </Link>
  );
}
