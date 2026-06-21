import Link from 'next/link';
import Container from '@/components/Container';
import { school } from '@/data/school';

export default function NotFound() {
  return (
    <section className="bg-white">
      <Container className="flex min-h-[60vh] flex-col items-center justify-center py-20 text-center">
        <span className="font-display text-7xl font-semibold text-brand-600 sm:text-8xl">404</span>
        <h1 className="mt-4 text-2xl text-ink sm:text-3xl">This page could not be found</h1>
        <p className="mt-3 max-w-md text-ink-soft leading-relaxed">
          The link may be broken or the page may have moved. Let us get you back on track.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link href="/" className="btn-primary">
            Back to home
          </Link>
          <Link href="/admissions" className="btn-outline">
            Admissions {school.session}
          </Link>
          <Link href="/contact" className="btn-outline">
            Contact us
          </Link>
        </div>
      </Container>
    </section>
  );
}
