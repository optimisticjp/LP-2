import type { Metadata } from 'next';
import Container from '@/components/Container';
import { site } from '@/data/site';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'How L. P. Savani Group of Schools collects, uses and protects information shared through this website.',
  alternates: { canonical: '/privacy-policy' },
};

export default function PrivacyPolicyPage() {
  return (
    <section className="bg-white py-14 sm:py-18">
      <Container size="tight">
        <p className="eyebrow">Legal</p>
        <h1 className="mt-3 text-4xl font-extrabold text-ink">Privacy Policy</h1>
        <div className="mt-3 rounded-xl bg-mist px-4 py-3 text-sm text-ink-soft">
          This is template wording for the prototype. Please review it with the school before publishing.
        </div>

        <div className="prose-content mt-8 space-y-6 text-ink-soft">
          <p>
            {site.name} (&ldquo;we&rdquo;, &ldquo;us&rdquo;) respects your privacy. This policy explains
            what information we collect through this website and how we use it.
          </p>

          <div>
            <h2 className="text-xl font-bold text-ink">Information we collect</h2>
            <p className="mt-2">
              When you submit an enquiry, contact or campus visit form, we collect the details you choose to
              share, such as your name, your child&rsquo;s name, phone number, email, preferred grade and
              campus, and any message you send. These forms are for enquiries only.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-ink">How we use information</h2>
            <p className="mt-2">
              We use the information to respond to your enquiry, guide you through admissions, arrange campus
              visits, and share relevant information about our schools. We do not sell your information.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-ink">Data sharing</h2>
            <p className="mt-2">
              Enquiry details may be shared with the relevant campus admission office so the right team can
              assist you. We do not share your information with unrelated third parties for marketing.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-ink">Cookies</h2>
            <p className="mt-2">
              This website may use cookies to support its basic functioning and to understand how the site is
              used. You can control cookies through your browser settings. See our Cookie Policy for more.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-ink">Contact</h2>
            <p className="mt-2">
              For any question about this policy or your information, please contact us at{' '}
              <a href={`mailto:${site.generalEmail}`} className="font-medium text-brand-700 hover:underline">
                {site.generalEmail}
              </a>
              .
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
