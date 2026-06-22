'use client';

import { useState, type ImgHTMLAttributes } from 'react';
import { Icon } from '@/components/icons';

// Plain <img> wrapper. We use real remote media URLs (see data/images.ts), so
// this avoids next/image remote-config and keeps the static export simple.
// alt is required so every image stays accessible. If the image fails to load,
// a branded navy/gold placeholder fills the same box instead of a broken icon.
type Props = ImgHTMLAttributes<HTMLImageElement> & { alt: string };

export default function Img({ alt, loading = 'lazy', className = '', ...rest }: Props) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div
        role="img"
        aria-label={alt}
        className={`flex items-center justify-center bg-gradient-to-br from-brand-700 to-brand-900 ${className}`}
      >
        <Icon name="building" className="h-10 w-10 text-gold-300" />
      </div>
    );
  }

  // eslint-disable-next-line @next/next/no-img-element
  return (
    <img
      alt={alt}
      loading={loading}
      className={className}
      {...rest}
      onError={() => setFailed(true)}
    />
  );
}
