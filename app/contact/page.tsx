import type { Metadata } from 'next';
import Container from '@/components/Container';
import Reveal from '@/components/Reveal';
import SectionHeading from '@/components/SectionHeading';
import AdmissionForm from '@/components/AdmissionForm';
import FAQAccordion from '@/components/FAQAccordion';
import CTASection from '@/components/CTASection';
import { Icon } from '@/components/icons';
import { school, whatsappLink } from '@/data/school';
import { generalFaqs } from '@/data/faqs';

export const metadata: Metadata = {
  title: 'Contact Us',
  description:
    'Contact L. P. Savani School, Palanpor on Canal Road, Surat. Call, email or message us on WhatsApp, find us on the map and send an admission enquiry.',
};

const contactCards = [
  {
    icon: 'building' as const,
    label: 'Visit us',
    lines: school.contact.addressLines,
    action: { href: school.contact.mapUrl, text: 'Get directions', external: true },
  },
  {
    icon: 'heart' as const,
    label: 'Call us',
    lines: [school.contact.phoneDisplay, school.contact.officeHours],
    action: { href: `tel:${school.contact.phoneTel}`, text: 'Call now', external: false },
  },
  {
    icon: 'book' as const,
    label: 'Email us',
    lines: [school.contact.email, 'We reply within working hours'],
    action: { href: `mailto:${school.contact.email}`, text: 'Send an email', external: false },
  },
];

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-brand-900 text-white">
        <Container className="py-16 sm:py-20">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-gold-300">Contact us</p>
          <h1 className="mt-3 max-w-3xl font-display text-4xl font-semibold leading-tight sm:text-5xl">
            We are here to help. Reach out anytime.
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-brand-100">
            Whether you have a question about admissions, want to visit, or just need directions,
            our team is glad to assist.
          </p>
        </Container>
      </section>

      {/* Contact cards */}
      <section className="bg-white">
        <Container className="py-16 sm:py-20">
          <div className="grid gap-6 lg:grid-cols-3">
            {contactCards.map((card, i) => (
              <Reveal key={card.label} delay={i * 90}>
                <div className="card h-full p-6">
                  <span className="grid h-12 w-12 place-items-center rounded-2xl bg-brand-50 text-brand-600">
                    <Icon name={card.icon} className="h-6 w-6" />
                  </span>
                  <h3 className="mt-4 text-lg text-ink">{card.label}</h3>
                  <div className="mt-2 space-y-0.5 text-sm leading-relaxed text-ink-soft">
                    {card.lines.map((line) => (
                      <p key={line}>{line}</p>
                    ))}
                  </div>
                  <a
                    href={card.action.href}
                    {...(card.action.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                    className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-brand-600 hover:text-brand-700"
                  >
                    {card.action.text}
                    <span aria-hidden="true">&rarr;</span>
                  </a>
                </div>
              </Reveal>
            ))}
          </div>

          {/* WhatsApp strip */}
          <div className="mt-6 flex flex-col items-center justify-between gap-4 rounded-2xl bg-leaf-50 p-6 sm:flex-row">
            <div className="flex items-center gap-4">
              <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-leaf-600 text-white">
                <Icon name="heart" className="h-6 w-6" />
              </span>
              <div>
                <p className="font-semibold text-ink">Prefer to message?</p>
                <p className="text-sm text-ink-soft">Chat with our admissions team on WhatsApp during office hours.</p>
              </div>
            </div>
            <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="btn-whatsapp shrink-0">
              Message on WhatsApp
            </a>
          </div>
        </Container>
      </section>

      {/* Map + form */}
      <section className="bg-cream">
        <Container className="py-16 sm:py-20">
          <div className="grid gap-10 lg:grid-cols-2">
            <Reveal>
              <span className="eyebrow">Find us</span>
              <h2 className="mt-3 text-2xl text-ink sm:text-3xl">On the map</h2>
              <p className="mt-3 text-sm text-ink-soft leading-relaxed">
                {school.contact.addressShort}
              </p>
              <div className="mt-6 overflow-hidden rounded-3xl border border-brand-100 shadow-soft">
                <iframe
                  src={school.contact.mapEmbed}
                  title={`Map showing ${school.fullName}`}
                  width="100%"
                  height="380"
                  style={{ border: 0 }}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                />
              </div>
            </Reveal>

            <Reveal delay={120}>
              <div className="card p-6 sm:p-8">
                <h3 className="text-xl text-ink">Send an enquiry</h3>
                <p className="mt-1 text-sm text-ink-muted">Our counsellor will get back to you soon.</p>
                <div className="mt-6">
                  <AdmissionForm />
                </div>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* General FAQ */}
      <section className="bg-white">
        <Container size="tight" className="py-16 sm:py-20">
          <SectionHeading
            align="center"
            eyebrow="Good to know"
            title="Quick questions"
            subtitle="A few things parents often ask. For anything else, just get in touch."
          />
          <div className="mt-10">
            <FAQAccordion items={generalFaqs} />
          </div>
        </Container>
      </section>

      <CTASection />
    </>
  );
}
