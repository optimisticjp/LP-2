import { Icon } from '@/components/icons';

type Props = {
  quote: string;
  name: string;
  role: string;
};

export default function TestimonialCard({ quote, name, role }: Props) {
  return (
    <figure className="flex h-full flex-col rounded-2xl border border-cloud bg-white p-6 shadow-soft">
      <Icon name="quote" className="h-7 w-7 text-gold-300" />
      <blockquote className="mt-4 flex-1 text-[15px] leading-relaxed text-ink-soft">{quote}</blockquote>
      <figcaption className="mt-5 border-t border-cloud pt-4">
        <div className="font-semibold text-ink">{name}</div>
        <div className="text-xs text-ink-muted">{role}</div>
      </figcaption>
    </figure>
  );
}
