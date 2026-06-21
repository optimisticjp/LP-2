import type { Metadata } from 'next';
import Link from 'next/link';
import Container from '@/components/Container';
import SectionHeading from '@/components/SectionHeading';
import Badge from '@/components/Badge';
import BranchSelector from '@/components/BranchSelector';
import ContactForm from '@/components/ContactForm';
import { Icon } from '@/components/icons';
import { branchContacts, officeHours, contactNote } from '@/data/contact';
import { schools } from '@/data/schools';
import { site, whatsappLink } from '@/data/site';

export const metadata: Metadata = {
  title: 'Contact Us',
  description:
    'Contact L. P. Savani Group of Schools. Find addresses, phone numbers and email for every campus across Surat, send an enquiry, or reach us on WhatsApp.',
  alternates: { canonical: '/contact' },
};

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-brand-700 text-white">
        <Container className="py-16 sm:py-20">
          <Badge tone="white" icon="phone">
            Contact us
          </Badge>
          <h1 className="mt-5 max-w-3xl text-4xl font-extrabold leading-tight sm:text-5xl">
            We&rsquo;re here to help you choose well
          </h1>
          <p className="mt-4 max-w-2xl text-brand-100 sm:text-lg">{contactNote}</p>
          <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-brand-100">
            <span className="inline-flex items-center gap-2">
              <Icon name="clock" className="h-4 w-4 text-gold-300" /> {officeHours}
            </span>
            <a href={`tel:${site.primaryPhoneTel}`} className="inline-flex items-center gap-2 hover:text-white">
              <Icon name="phone" className="h-4 w-4 text-gold-300" /> {site.primaryPhoneLabel}
            </a>
          </div>
        </Container>
      </section>

      {/* Branch selector */}
      <section className="bg-white pt-8 pb-14 sm:pb-20 lg:pb-24">
        <Container>
          <BranchSelector />
        </Container>
      </section>

      {/* Contact cards */}
      <section className="bg-mist section-y">
        <Container>
          <SectionHeading eyebrow="All campuses" title="Campus contacts" className="mb-10" />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {branchContacts.map((b) => (
              <div key={b.slug} className="card flex h-full flex-col p-5">
                <div className="flex items-center justify-between gap-2">
                  <h3 className="font-bold text-ink">{b.shortName}</h3>
                  <span className="pill bg-brand-50 text-brand-700">{b.board}</span>
                </div>
                <div className="mt-3 space-y-2 text-sm text-ink-soft">
                  <p className="flex items-start gap-2">
                    <Icon name="pin" className="mt-0.5 h-4 w-4 shrink-0 text-brand-500" />
                    {b.address}
                  </p>
                  <p className="flex flex-wrap items-center gap-x-2 gap-y-1">
                    <Icon name="phone" className="h-4 w-4 text-brand-500" />
                    {b.phones.map((p) => (
                      <a key={p.tel} href={`tel:${p.tel}`} className="font-medium text-brand-700 hover:underline">
                        {p.label}
                      </a>
                    ))}
                  </p>
                  {b.email ? (
                    <p className="flex items-center gap-2">
                      <Icon name="mail" className="h-4 w-4 text-brand-500" />
                      <a href={`mailto:${b.email}`} className="font-medium text-brand-700 hover:underline">
                        {b.email}
                      </a>
                    </p>
                  ) : null}
                </div>
                <div className="mt-auto flex items-center gap-3 pt-4">
                  <Link href={b.href} className="text-sm font-semibold text-brand-600 hover:text-brand-700">
                    View campus
                  </Link>
                  <a
                    href={b.mapEmbed.replace('&output=embed', '').replace('?output=embed', '')}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-sm font-semibold text-brand-600 hover:text-brand-700"
                  >
                    Directions <Icon name="arrowUpRight" className="h-3.5 w-3.5" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Form + map */}
      <section className="bg-white section-y">
        <Container>
          <div className="grid gap-8 lg:grid-cols-2">
            <div>
              <SectionHeading
                eyebrow="Send a message"
                title="General enquiry"
                subtitle="Have a question? Send it across and the right campus team will get back to you."
                className="mb-6"
              />
              <ContactForm />
            </div>
            <div className="flex flex-col">
              <SectionHeading eyebrow="Find us" title="On the map" className="mb-6" />
              <div className="flex-1 overflow-hidden rounded-2xl border border-cloud shadow-soft">
                <iframe
                  src={schools[0].mapEmbed}
                  title="L. P. Savani campus location"
                  loading="lazy"
                  className="h-full min-h-[360px] w-full"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* WhatsApp CTA */}
      <section className="bg-mist pb-20 pt-4">
        <Container>
          <div className="flex flex-col items-center justify-between gap-5 rounded-3xl bg-[#1faf54] p-8 text-center text-white sm:flex-row sm:p-10 sm:text-left">
            <div className="flex flex-col items-center gap-3 sm:flex-row sm:gap-4">
              <Icon name="whatsapp" className="h-10 w-10" />
              <div>
                <h3 className="text-xl font-bold">Message us on WhatsApp</h3>
                <p className="text-sm text-white/90">Quick questions get quick answers.</p>
              </div>
            </div>
            <a
              href={whatsappLink('Hi, I have a question about L. P. Savani Group of Schools.')}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-white w-full shrink-0 sm:w-auto"
            >
              Start a chat
            </a>
          </div>
        </Container>
      </section>
    </>
  );
}
