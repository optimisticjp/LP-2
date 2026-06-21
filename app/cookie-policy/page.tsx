import type { Metadata } from 'next';
import Container from '@/components/Container';
import { site } from '@/data/site';

export const metadata: Metadata = {
  title: 'Cookie Policy',
  description: 'How L. P. Savani Group of Schools uses cookies on this website.',
  alternates: { canonical: '/cookie-policy' },
};

export default function CookiePolicyPage() {
  return (
    <section className="bg-white py-14 sm:py-18">
      <Container size="tight">
        <p className="eyebrow">Legal</p>
        <h1 className="mt-3 text-4xl font-extrabold text-ink">Cookie Policy</h1>
        <div className="mt-3 rounded-xl bg-mist px-4 py-3 text-sm text-ink-soft">
          This is template wording for the prototype. Please review it with the school before publishing.
        </div>

        <div className="mt-8 space-y-6 text-ink-soft">
          <p>
            This Cookie Policy explains how {site.name} uses cookies on this website. Cookies are small text
            files stored on your device that help websites work and provide useful information.
          </p>

          <div>
            <h2 className="text-xl font-bold text-ink">How we use cookies</h2>
            <p className="mt-2">
              We may use cookies to keep the website functioning correctly, remember basic preferences, and
              understand how visitors use the site so we can improve it.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-ink">Managing cookies</h2>
            <p className="mt-2">
              You can control or delete cookies through your browser settings. If you are unsure whether you
              need them, it is generally recommended to leave cookies enabled, as some support services you
              use on the site.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-ink">Updates</h2>
            <p className="mt-2">
              We may update this policy from time to time. Any changes will be reflected on this page.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
