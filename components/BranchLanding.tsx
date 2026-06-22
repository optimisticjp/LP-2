import Link from 'next/link';
import Container from '@/components/Container';
import SectionHeading from '@/components/SectionHeading';
import Img from '@/components/Img';
import Badge from '@/components/Badge';
import ImageCard from '@/components/ImageCard';
import CTASection from '@/components/CTASection';
import PalanporShowcase from '@/components/PalanporShowcase';
import { Icon, type IconName } from '@/components/icons';
import type { School } from '@/data/schools';
import { whatsappLink } from '@/data/site';

export default function BranchLanding({ school }: { school: School }) {
  const phone = school.phones[0];
  // Open the campus location in Google Maps (same source as the embedded map).
  const directionsUrl = school.mapEmbed.replace('&output=embed', '').replace('?output=embed', '');

  const facts: { icon: IconName; label: string; value: string }[] = [
    { icon: 'map', label: 'Board', value: school.board },
    { icon: 'pin', label: 'Location', value: school.location },
    school.established
      ? { icon: 'star', label: 'Established', value: school.established }
      : { icon: 'star', label: 'Heritage', value: 'Part of a 20+ year group' },
    { icon: 'building', label: 'Part of', value: 'L. P. Savani Group of Schools' },
  ];

  return (
    <>
      {/* Hero */}
      <section className="relative bg-deepNavy text-white">
        <div className="absolute inset-0">
          <Img src={school.hero} alt={`${school.name} campus`} className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-deepNavy/95 via-deepNavy/80 to-deepNavy/45" />
        </div>
        <Container className="relative py-16 sm:py-20">
          <Link
            href="/schools"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-100 hover:text-white"
          >
            <Icon name="arrow" className="h-4 w-4 rotate-180" /> All schools
          </Link>
          <div className="mt-5 flex flex-wrap gap-2">
            <Badge tone="white" icon="pin">
              {school.location}
            </Badge>
            <Badge tone="white" icon="map">
              {school.board}
            </Badge>
            {school.established ? <Badge tone="white">Since {school.established}</Badge> : null}
            {school.flagship ? <Badge tone="gold">Flagship campus</Badge> : null}
          </div>
          <h1 className="mt-4 max-w-3xl text-3xl font-extrabold leading-tight sm:text-5xl">{school.name}</h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-brand-100 sm:text-lg">{school.tagline}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href={school.admissionLink} target="_blank" rel="noopener noreferrer" className="btn-gold">
              Start Admission Enquiry
            </a>
            <a href={`tel:${phone.tel}`} className="btn-white">
              <Icon name="phone" className="h-4 w-4" /> Call
            </a>
            <a
              href={whatsappLink(`Hi, I have an admission enquiry for ${school.name}.`)}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp"
            >
              <Icon name="whatsapp" className="h-4 w-4" /> Chat on WhatsApp
            </a>
          </div>
        </Container>
      </section>

      {/* Quick facts band */}
      <section className="bg-white">
        <Container className="py-8 sm:py-10">
          <div className="grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-4">
            {facts.map((f) => (
              <div
                key={f.label}
                className="flex h-full items-start gap-3 rounded-2xl border border-cloud bg-white p-4 shadow-soft sm:p-5"
              >
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-brand-50 text-brand-600">
                  <Icon name={f.icon} className="h-5 w-5" />
                </span>
                <span className="min-w-0">
                  <span className="block text-xs font-semibold uppercase tracking-wider text-ink-muted">
                    {f.label}
                  </span>
                  <span className="mt-0.5 block text-sm font-bold leading-snug text-ink">{f.value}</span>
                </span>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Overview */}
      <section className="bg-white section-y">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[1.5fr_1fr]">
            <div>
              <SectionHeading eyebrow="Overview" title={`About ${school.shortName}`} />
              <div className="mt-5 space-y-4 text-ink-soft">
                {school.blurb.map((p, i) => (
                  <p key={i} className="leading-relaxed">
                    {p}
                  </p>
                ))}
              </div>

              {school.leadership && school.leadership.length > 0 ? (
                <div className="mt-8 rounded-2xl border border-cloud bg-mist p-5">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-brand-600">Campus leadership</h3>
                  <ul className="mt-3 grid gap-3 sm:grid-cols-2">
                    {school.leadership.map((p) => (
                      <li key={p.name} className="flex items-center gap-3">
                        <span className="grid h-10 w-10 place-items-center rounded-full bg-brand-700 text-sm font-bold text-white">
                          {p.name.split(' ').map((w) => w[0]).slice(0, 2).join('')}
                        </span>
                        <span>
                          <span className="block text-sm font-semibold text-ink">{p.name}</span>
                          <span className="block text-xs text-ink-muted">{p.role}</span>
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              ) : null}
            </div>

            {/* Highlights */}
            <aside className="rounded-3xl border border-cloud bg-white p-6 shadow-soft">
              <h3 className="text-sm font-bold text-ink">Campus highlights</h3>
              <ul className="mt-4 space-y-3">
                {school.highlights.map((h) => (
                  <li key={h} className="flex items-start gap-2.5 text-sm text-ink-soft">
                    <Icon name="check" className="mt-0.5 h-4 w-4 shrink-0 text-leaf-500" />
                    {h}
                  </li>
                ))}
              </ul>
              <div className="mt-5 border-t border-cloud pt-5">
                <a href={school.admissionLink} target="_blank" rel="noopener noreferrer" className="btn-primary w-full">
                  Start your enquiry
                </a>
              </div>
            </aside>
          </div>
        </Container>
      </section>

      {/* Why this campus */}
      <section className="bg-mist section-y">
        <Container>
          <SectionHeading
            eyebrow="Why this campus"
            title={`What makes ${school.shortName} special`}
            className="mb-10"
          />
          <div className="grid gap-4 sm:grid-cols-2">
            {school.whyThisCampus.map((w, i) => (
              <div key={w.title} className="card card-hover h-full p-6">
                <span className="text-sm font-bold text-gold-600">{String(i + 1).padStart(2, '0')}</span>
                <h3 className="mt-2 text-base font-bold text-ink">{w.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">{w.body}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Facilities */}
      <section className="bg-white section-y">
        <Container>
          <SectionHeading
            eyebrow="Facilities"
            title="Facilities at this campus"
            subtitle="A glimpse of the spaces students learn and grow in. Specific facilities vary by campus — the admission office is glad to share the latest details."
            className="mb-8"
          />
          <div className="flex flex-wrap gap-2.5">
            {school.facilities.map((f) => (
              <span
                key={f}
                className="inline-flex items-center gap-2 rounded-full border border-cloud bg-mist px-4 py-2 text-sm font-medium text-ink-soft"
              >
                <Icon name="check" className="h-4 w-4 text-brand-500" />
                {f}
              </span>
            ))}
          </div>
        </Container>
      </section>

      {/* Gallery strip / student life */}
      <section className="bg-mist section-y">
        <Container>
          <SectionHeading eyebrow="Student life" title="A look around the campus" className="mb-8" />
          <div className="grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3">
            {school.gallery.map((src, i) => (
              <ImageCard key={`${src}-${i}`} src={src} aspect={i === 0 ? 'aspect-square' : 'aspect-[4/3]'} />
            ))}
          </div>
        </Container>
      </section>

      {school.slug === 'palanpor' && <PalanporShowcase />}

      {/* Contact block */}
      <section className="bg-white section-y">
        <Container>
          <div className="grid gap-8 lg:grid-cols-2">
            <div>
              <SectionHeading eyebrow="Contact" title={`Reach ${school.shortName}`} />
              <div className="mt-6 space-y-4">
                <p className="flex items-start gap-3 text-ink-soft">
                  <Icon name="pin" className="mt-0.5 h-5 w-5 shrink-0 text-brand-500" />
                  {school.address}
                </p>
                <p className="flex flex-wrap items-center gap-x-3 gap-y-1 text-ink-soft">
                  <Icon name="phone" className="h-5 w-5 text-brand-500" />
                  {school.phones.map((p) => (
                    <a key={p.tel} href={`tel:${p.tel}`} className="font-medium text-brand-700 hover:underline">
                      {p.label}
                    </a>
                  ))}
                </p>
                {school.email ? (
                  <p className="flex items-center gap-3 text-ink-soft">
                    <Icon name="mail" className="h-5 w-5 text-brand-500" />
                    <a href={`mailto:${school.email}`} className="font-medium text-brand-700 hover:underline">
                      {school.email}
                    </a>
                  </p>
                ) : null}
              </div>
              <div className="mt-6 flex flex-wrap gap-3">
                <a href={`tel:${phone.tel}`} className="btn-primary">
                  <Icon name="phone" className="h-4 w-4" /> Call campus
                </a>
                <a
                  href={whatsappLink(`Hi, I have an admission enquiry for ${school.name}.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-whatsapp"
                >
                  <Icon name="whatsapp" className="h-4 w-4" /> Chat on WhatsApp
                </a>
              </div>
              <Link
                href="/contact"
                className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-600 hover:text-brand-700"
              >
                All campus contacts
                <Icon name="arrow" className="h-4 w-4" />
              </Link>
            </div>
            <div className="flex flex-col gap-3">
              <div className="overflow-hidden rounded-2xl border border-cloud shadow-soft">
                <iframe
                  src={school.mapEmbed}
                  title={`Map of ${school.name}`}
                  loading="lazy"
                  className="h-[300px] w-full sm:h-[360px]"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
              <a
                href={directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary w-full justify-center sm:w-auto"
              >
                <Icon name="pin" className="h-4 w-4" /> Get Directions
              </a>
            </div>
          </div>
        </Container>
      </section>

      {/* Part of the group */}
      <section className="bg-mist py-12">
        <Container>
          <div className="flex flex-col items-start justify-between gap-5 rounded-3xl border border-cloud bg-white p-7 sm:flex-row sm:items-center">
            <div className="flex items-start gap-4">
              <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-brand-50 text-brand-600">
                <Icon name="globe" className="h-6 w-6" />
              </span>
              <div>
                <h3 className="text-lg font-bold text-ink">
                  {school.hasDedicatedWebsite
                    ? `${school.shortName} also has its own website`
                    : 'One group, everything in one place'}
                </h3>
                <p className="mt-1 max-w-xl text-sm text-ink-soft">
                  {school.hasDedicatedWebsite
                    ? `Explore the dedicated ${school.shortName} website for even more, or keep browsing the L. P. Savani group experience here.`
                    : `Admissions, facilities, student life and campus contacts for ${school.shortName} all live here, within the trusted L. P. Savani Group of Schools.`}
                </p>
              </div>
            </div>
            {school.hasDedicatedWebsite ? (
              <a href={school.officialUrl} target="_blank" rel="noopener noreferrer" className="btn-primary shrink-0">
                Visit campus website
              </a>
            ) : (
              <Link href="/schools" className="btn-secondary shrink-0">
                Explore all campuses
              </Link>
            )}
          </div>
        </Container>
      </section>

      <CTASection
        className="pb-20"
        title={`Considering ${school.shortName} for your child?`}
        subtitle="Send an enquiry or book a visit. The campus team will be glad to help you take the next step."
      />
    </>
  );
}
