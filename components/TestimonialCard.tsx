import type { Testimonial } from '@/data/testimonials';

export default function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <figure className="card h-full p-6 sm:p-7">
      <div className="font-display text-4xl leading-none text-gold-400" aria-hidden="true">
        &ldquo;
      </div>
      <blockquote className="mt-2 text-ink-soft leading-relaxed">{testimonial.quote}</blockquote>
      <figcaption className="mt-5 flex items-center gap-3 border-t border-brand-50 pt-4">
        <span className="grid h-10 w-10 place-items-center rounded-full bg-brand-600 text-sm font-semibold text-white">
          {testimonial.author.charAt(0)}
        </span>
        <span className="text-sm">
          <span className="block font-semibold text-ink">{testimonial.author}</span>
          <span className="block text-ink-muted">Parent, {testimonial.relation}</span>
        </span>
      </figcaption>
    </figure>
  );
}
