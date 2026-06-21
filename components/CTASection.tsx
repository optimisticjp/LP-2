import Link from 'next/link';
import Container from '@/components/Container';
import { Icon } from '@/components/icons';
import { site, whatsappLink } from '@/data/site';

type Props = {
  title?: string;
  subtitle?: string;
  className?: string;
};

// Reusable closing call-to-action band used across pages.
export default function CTASection({
  title = 'Ready to find the right campus for your child?',
  subtitle = 'Explore every L. P. Savani campus, understand admissions and book a visit. We are here to help you take the next step.',
  className = '',
}: Props) {
  return (
    <section className={`bg-white ${className}`}>
      <Container>
        <div className="relative overflow-hidden rounded-3xl bg-deepNavy px-6 py-12 text-white sm:px-12 sm:py-16">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-brand-600/60 blur-2xl"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-20 -left-10 h-56 w-56 rounded-full bg-gold-400/20 blur-2xl"
          />
          <div className="relative mx-auto max-w-2xl text-center">
            <span className="eyebrow justify-center text-gold-300">Admissions {site.admissionsYear}</span>
            <h2 className="mt-3 text-3xl font-bold leading-tight text-white sm:text-4xl">{title}</h2>
            <p className="mx-auto mt-4 max-w-xl text-brand-100">{subtitle}</p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <Link href="/admissions" className="btn-gold">
                Apply Now
              </Link>
              <Link href="/admissions#tour" className="btn-white">
                Book a Campus Tour
              </Link>
              <a
                href={whatsappLink('Hi, I would like to talk to the L. P. Savani admissions team.')}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-semibold text-white/90 hover:text-white"
              >
                <Icon name="whatsapp" className="h-4 w-4" />
                Talk to Admissions
              </a>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
