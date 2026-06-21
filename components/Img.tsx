import type { ImgHTMLAttributes } from 'react';

// Plain <img> wrapper. We use real remote media URLs (see data/images.ts), so
// this avoids next/image remote-config and keeps the static export simple.
// alt is required so every image stays accessible.
type Props = ImgHTMLAttributes<HTMLImageElement> & { alt: string };

export default function Img({ alt, loading = 'lazy', className = '', ...rest }: Props) {
  // eslint-disable-next-line @next/next/no-img-element
  return <img alt={alt} loading={loading} className={className} {...rest} />;
}
