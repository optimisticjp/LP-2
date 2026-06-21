import Img from '@/components/Img';

// Simple captioned image tile used in gallery strips and previews.
export default function ImageCard({
  src,
  caption,
  className = '',
  aspect = 'aspect-[4/3]',
}: {
  src: string;
  caption?: string;
  className?: string;
  aspect?: string;
}) {
  return (
    <figure className={`group relative overflow-hidden rounded-2xl ${aspect} ${className}`}>
      <Img
        src={src}
        alt={caption ?? 'L. P. Savani campus photo'}
        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
      />
      {caption ? (
        <>
          <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/0 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
          <figcaption className="absolute bottom-0 left-0 right-0 translate-y-2 p-4 text-sm font-medium text-white opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
            {caption}
          </figcaption>
        </>
      ) : null}
    </figure>
  );
}
