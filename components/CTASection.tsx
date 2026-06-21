import Link from 'next/link';
import { school, whatsappLink } from '@/data/school';

type Props = {
  title?: string;
  subtitle?: string;
  variant?: 'blue' | 'soft';
};

export default function CTASection({
  title = 'Give your child a confident start',
  subtitle = 'Admissions for 2026-27 are open. Enquire today, book a campus tour, or talk to our team directly.',
  variant = 'blue',
}: Props) {
  const isBlue = variant === 'blue';

  return (
    <section className={isBlue ? 'bg-brand-900' : 'bg-mist'}>
      <div className="container py-14 sm:py-16">
        <div
          className={`relative overflow-hidden rounded-3xl px-6 py-12 sm:px-12 sm:py-14 ${
            isBlue
              ? 'bg-gradient-to-br from-brand-700 via-brand-800 to-brand-900 text-white'
              : 'border border-brand-100 bg-white text-ink shadow-soft'
          }`}
        >
          {isBlue ? (
            <div
              className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-gold-400/20 blur-2xl"
              aria-hidden="true"
            />
          ) : null}
          <div className="relative max-w-2xl">
            <h2 className={`text-3xl sm:text-4xl ${isBlue ? 'text-white' : 'text-ink'}`}>{title}</h2>
            <p className={`mt-4 text-base leading-relaxed ${isBlue ? 'text-brand-100' : 'text-ink-soft'}`}>
              {subtitle}
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link href="/admissions" className="btn-gold">
                Apply now
              </Link>
              <Link href="/admissions#campus-tour" className={isBlue ? 'btn-ghost' : 'btn-outline'}>
                Book a campus tour
              </Link>
              <a href={`tel:${school.contact.phoneTel}`} className={isBlue ? 'btn-ghost' : 'btn-outline'}>
                Call admissions
              </a>
              <a
                href={whatsappLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp"
              >
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
