import Link from 'next/link';
import Container from '@/components/Container';

export const metadata = { title: 'Page not found' };

export default function NotFound() {
  return (
    <Container className="flex min-h-[60vh] flex-col items-center justify-center py-20 text-center">
      <p className="eyebrow">Error 404</p>
      <h1 className="mt-3 text-4xl font-bold text-ink sm:text-5xl">We couldn&rsquo;t find that page</h1>
      <p className="mt-4 max-w-md text-ink-soft">
        The page you are looking for may have moved. Let&rsquo;s get you back to exploring our campuses.
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <Link href="/" className="btn-primary">
          Back to home
        </Link>
        <Link href="/schools" className="btn-secondary">
          Explore schools
        </Link>
      </div>
    </Container>
  );
}
