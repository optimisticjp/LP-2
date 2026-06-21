import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import Container from '@/components/Container';
import Reveal from '@/components/Reveal';
import SectionHeading from '@/components/SectionHeading';
import StatCard from '@/components/StatCard';
import FacilityCard from '@/components/FacilityCard';
import TestimonialCard from '@/components/TestimonialCard';
import CTASection from '@/components/CTASection';
import { Icon } from '@/components/icons';
import { school, groupStats, whatsappLink } from '@/data/school';
import { facilities } from '@/data/facilities';
import { testimonials } from '@/data/testimonials';
import { galleryItems } from '@/data/gallery';

export const metadata: Metadata = {
  title: `Admissions Open ${school.session}`,
  description:
    'L. P. Savani School, Palanpor is a nurturing campus in Surat with smart classrooms, science and computer labs, sports, arts and strong values. Enquire about admissions for 2026-27 today.',
};

const whyPoints = [
  {
    icon: 'monitor' as const,
    title: 'Learning that makes sense',
    text: 'Concept-first teaching with smart classrooms, so children understand ideas instead of memorising them.',
  },
  {
    icon: 'heart' as const,
    title: 'Known and cared for',
    text: 'Smaller groups and attentive teachers mean every child is seen, supported and encouraged each day.',
  },
  {
    icon: 'dumbbell' as const,
    title: 'More than marks',
    text: 'Sport, music, art and clubs sit alongside academics so confidence and character grow together.',
  },
  {
    icon: 'shield' as const,
    title: 'Safe and well run',
    text: 'Monitored entry, CCTV, trained staff and clear routines keep the campus calm and secure.',
  },
];

const beforeAfter = [
  {
    before: 'Mornings are a struggle and school feels like a chore.',
    after: 'Your child wakes up ready, because the day ahead feels interesting.',
  },
  {
    before: 'You hear almost nothing about how your child is really doing.',
    after: 'Teachers know your child by name and keep you in the loop.',
  },
  {
    before: 'Studies crowd out sport, art and time to just be a child.',
    after: 'Academics and activities share the week in a healthy balance.',
  },
  {
    before: 'You are not sure the campus is as safe as it should be.',
    after: 'You drop off knowing the campus is secure and well supervised.',
  },
];

const homeFacilities = facilities.slice(0, 6);
const galleryPreview = galleryItems.slice(0, 8);

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-brand-900 text-white">
        <div className="absolute inset-0">
          <Image
            src="/images/hero.jpg"
            alt="Students at L. P. Savani School, Palanpor"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-900/95 via-brand-900/80 to-brand-800/55" />
        </div>

        <Container className="relative py-20 sm:py-28 lg:py-32">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-sm font-semibold backdrop-blur">
              <span className="h-2 w-2 rounded-full bg-gold-400" />
              Admissions open for {school.session}
            </span>
            <h1 className="mt-5 font-display text-4xl font-semibold leading-[1.08] sm:text-5xl lg:text-6xl">
              A confident start for your child in Palanpor
            </h1>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-brand-100">
              {school.fullName} is a place where children learn with understanding, take part
              with joy and grow with confidence. Backed by the L. P. Savani group and more than
              two decades in education.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/admissions" className="btn-gold">
                Enquire about admissions
              </Link>
              <Link href="/admissions#campus-tour" className="btn-ghost">
                Book a campus tour
              </Link>
            </div>
            <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-brand-100">
              <a href={`tel:${school.contact.phoneTel}`} className="inline-flex items-center gap-2 font-semibold text-white hover:text-gold-300">
                <Icon name="heart" className="h-4 w-4" />
                {school.contact.phoneDisplay}
              </a>
              <span className="hidden h-4 w-px bg-white/25 sm:block" />
              <span>{school.contact.addressShort}</span>
            </div>
          </div>
        </Container>
      </section>

      {/* Trust stats */}
      <section className="border-b border-brand-50 bg-white">
        <Container className="py-12 sm:py-14">
          <p className="text-center text-sm font-semibold uppercase tracking-[0.16em] text-ink-muted">
            Part of the L. P. Savani group across Surat
          </p>
          <div className="mt-8 grid grid-cols-2 gap-4 lg:grid-cols-4">
            {groupStats.map((stat, i) => (
              <Reveal key={stat.label} delay={i * 80}>
                <StatCard value={stat.value} label={stat.label} sub={stat.sub} />
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Why choose */}
      <section className="bg-cream">
        <Container className="py-16 sm:py-20">
          <SectionHeading
            eyebrow="Why parents choose us"
            title="A school that puts your child first"
            subtitle="Everything here is built around one question: is this good for the child? Here is what that looks like day to day."
          />
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {whyPoints.map((point, i) => (
              <Reveal key={point.title} delay={i * 80}>
                <div className="card card-hover h-full p-6">
                  <span className="grid h-12 w-12 place-items-center rounded-2xl bg-brand-50 text-brand-600">
                    <Icon name={point.icon} className="h-6 w-6" />
                  </span>
                  <h3 className="mt-4 text-lg text-ink">{point.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-soft">{point.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Admission open band */}
      <section className="bg-white">
        <Container className="py-16 sm:py-20">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <Reveal>
              <span className="eyebrow">Admissions {school.session}</span>
              <h2 className="mt-3 text-3xl text-ink sm:text-4xl">
                Seats are limited. Early enquiries get the best start.
              </h2>
              <p className="mt-4 text-ink-soft leading-relaxed">
                We keep class sizes sensible so every child gets attention. That also means seats
                in each grade fill up. Send an enquiry now and our counsellor will guide you
                through eligibility, documents and a campus visit, with no pressure.
              </p>
              <ul className="mt-6 space-y-3">
                {[
                  'Simple, guided admission process',
                  'Talk to a real counsellor, not a call centre',
                  'Visit the campus before you decide',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-ink">
                    <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-leaf-50 text-leaf-600">
                      <Icon name="heart" className="h-3.5 w-3.5" />
                    </span>
                    <span className="text-sm leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link href="/admissions" className="btn-primary">
                  Start your enquiry
                </Link>
                <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="btn-whatsapp">
                  Ask on WhatsApp
                </a>
              </div>
            </Reveal>

            <Reveal delay={120}>
              <div className="relative overflow-hidden rounded-3xl shadow-card">
                <div className="relative aspect-[4/3]">
                  <Image
                    src="/images/admissions.jpg"
                    alt="Parents and child visiting the campus"
                    fill
                    sizes="(max-width: 1024px) 100vw, 560px"
                    className="object-cover"
                  />
                </div>
                <div className="absolute bottom-4 left-4 right-4 rounded-2xl bg-white/95 p-4 shadow-lift backdrop-blur">
                  <p className="text-sm font-semibold text-ink">Now enrolling for {school.session}</p>
                  <p className="mt-1 text-xs text-ink-muted">
                    Pre-primary through senior grades. Enquire to check seat availability.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Before vs After */}
      <section className="bg-brand-900 text-white">
        <Container className="py-16 sm:py-20">
          <SectionHeading
            light
            align="center"
            eyebrow="The difference a good school makes"
            title="From getting through the day to looking forward to it"
            subtitle="The right school changes the small moments at home. Here is the shift parents notice."
          />
          <div className="mx-auto mt-10 grid max-w-4xl gap-4">
            {beforeAfter.map((row, i) => (
              <Reveal key={row.after} delay={i * 70}>
                <div className="grid gap-3 rounded-2xl border border-white/10 bg-white/5 p-4 sm:grid-cols-2 sm:p-5">
                  <div className="flex items-start gap-3 rounded-xl bg-white/5 p-4">
                    <span className="mt-0.5 text-xs font-semibold uppercase tracking-wide text-brand-200">
                      Before
                    </span>
                    <p className="text-sm leading-relaxed text-brand-100">{row.before}</p>
                  </div>
                  <div className="flex items-start gap-3 rounded-xl bg-gold-400/10 p-4 ring-1 ring-gold-400/30">
                    <span className="mt-0.5 text-xs font-semibold uppercase tracking-wide text-gold-300">
                      With us
                    </span>
                    <p className="text-sm leading-relaxed text-white">{row.after}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Academic approach */}
      <section className="bg-white">
        <Container className="py-16 sm:py-20">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <Reveal className="order-2 lg:order-1">
              <div className="relative overflow-hidden rounded-3xl shadow-card">
                <div className="relative aspect-[4/3]">
                  <Image
                    src="/images/academics.jpg"
                    alt="A lesson in progress at the school"
                    fill
                    sizes="(max-width: 1024px) 100vw, 560px"
                    className="object-cover"
                  />
                </div>
              </div>
            </Reveal>
            <Reveal delay={120} className="order-1 lg:order-2">
              <span className="eyebrow">Our approach to learning</span>
              <h2 className="mt-3 text-3xl text-ink sm:text-4xl">
                Strong on basics, ready for what is next
              </h2>
              <p className="mt-4 text-ink-soft leading-relaxed">
                We focus on clear fundamentals in language, maths and science, then build the
                skills children need for a fast-changing world: thinking, questioning, working
                together and using technology well.
              </p>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {[
                  { t: 'Concept clarity', d: 'Understanding before memorising, in every subject.' },
                  { t: 'Reading habit', d: 'A library culture that builds strong readers early.' },
                  { t: 'STEM and digital', d: 'Labs, computers and robotics that spark curiosity.' },
                  { t: 'Life skills', d: 'Communication, teamwork and everyday problem solving.' },
                ].map((b) => (
                  <div key={b.t} className="rounded-2xl border border-brand-50 bg-mist p-4">
                    <h3 className="text-sm font-semibold text-ink">{b.t}</h3>
                    <p className="mt-1 text-xs leading-relaxed text-ink-soft">{b.d}</p>
                  </div>
                ))}
              </div>
              <Link href="/academics" className="btn-outline mt-7">
                Explore academics
              </Link>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Facilities preview */}
      <section className="bg-cream">
        <Container className="py-16 sm:py-20">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <SectionHeading
              eyebrow="Campus and facilities"
              title="Spaces designed for real learning"
              subtitle="Bright classrooms, well-equipped labs, sport and activity areas, and the everyday care that keeps children comfortable."
            />
            <Link href="/facilities" className="btn-outline hidden sm:inline-flex">
              View all facilities
            </Link>
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {homeFacilities.map((facility, i) => (
              <Reveal key={facility.title} delay={(i % 3) * 80}>
                <FacilityCard facility={facility} />
              </Reveal>
            ))}
          </div>
          <div className="mt-8 sm:hidden">
            <Link href="/facilities" className="btn-outline w-full justify-center">
              View all facilities
            </Link>
          </div>
        </Container>
      </section>

      {/* Student life preview */}
      <section className="bg-white">
        <Container className="py-16 sm:py-20">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <Reveal>
              <span className="eyebrow">Life beyond the classroom</span>
              <h2 className="mt-3 text-3xl text-ink sm:text-4xl">
                Where children find what they love
              </h2>
              <p className="mt-4 text-ink-soft leading-relaxed">
                Sport, music, dance, art, clubs and celebrations are part of the week, not an
                afterthought. This is where children discover strengths, make friends and build
                the confidence that lasts.
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {['Sports', 'Music & Dance', 'Art & Craft', 'Clubs', 'Annual Day', 'Festivals'].map((tag) => (
                  <span key={tag} className="rounded-full border border-brand-100 bg-brand-50 px-3 py-1 text-xs font-semibold text-brand-700">
                    {tag}
                  </span>
                ))}
              </div>
              <Link href="/student-life" className="btn-outline mt-7">
                See student life
              </Link>
            </Reveal>
            <Reveal delay={120}>
              <div className="grid grid-cols-2 gap-3">
                {['/images/facility-sports.jpg', '/images/facility-arts.jpg', '/images/gallery-event-1.jpg', '/images/student-life.jpg'].map((src, idx) => (
                  <div key={src} className={`relative overflow-hidden rounded-2xl shadow-soft ${idx % 3 === 0 ? 'aspect-[4/5]' : 'aspect-[4/4]'}`}>
                    <Image
                      src={src}
                      alt="Students taking part in activities"
                      fill
                      sizes="(max-width: 1024px) 50vw, 270px"
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Testimonials */}
      <section className="bg-cream">
        <Container className="py-16 sm:py-20">
          <SectionHeading
            align="center"
            eyebrow="What parents say"
            title="Trusted by families across Surat"
            subtitle="A few words from parents in the L. P. Savani family. Replace with your own community voices over time."
          />
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {testimonials.map((t, i) => (
              <Reveal key={t.quote} delay={(i % 4) * 70}>
                <TestimonialCard testimonial={t} />
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Gallery preview */}
      <section className="bg-white">
        <Container className="py-16 sm:py-20">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <SectionHeading
              eyebrow="A look around"
              title="Moments from our campus"
              subtitle="Learning, play, performance and friendship. A glimpse of everyday life here."
            />
            <Link href="/gallery" className="btn-outline hidden sm:inline-flex">
              Open the gallery
            </Link>
          </div>
          <div className="mt-10 grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-4">
            {galleryPreview.map((item) => (
              <figure key={item.src + item.caption} className="group relative aspect-[4/3] overflow-hidden rounded-xl bg-brand-50 shadow-soft">
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  sizes="(max-width: 768px) 50vw, 280px"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <figcaption className="absolute inset-x-0 bottom-0 translate-y-2 bg-gradient-to-t from-ink/85 to-transparent p-3 text-xs font-medium text-white opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                  {item.caption}
                </figcaption>
              </figure>
            ))}
          </div>
          <div className="mt-8 sm:hidden">
            <Link href="/gallery" className="btn-outline w-full justify-center">
              Open the gallery
            </Link>
          </div>
        </Container>
      </section>

      {/* Principal message */}
      <section className="bg-brand-50/60">
        <Container className="py-16 sm:py-20">
          <div className="grid items-center gap-10 lg:grid-cols-[0.8fr_1.2fr]">
            <Reveal>
              <div className="relative mx-auto max-w-sm overflow-hidden rounded-3xl shadow-card">
                <div className="relative aspect-[4/5]">
                  <Image
                    src="/images/principal.jpg"
                    alt={school.principal.name}
                    fill
                    sizes="(max-width: 1024px) 100vw, 380px"
                    className="object-cover"
                  />
                </div>
              </div>
            </Reveal>
            <Reveal delay={120}>
              <span className="eyebrow">A message from our Principal</span>
              <blockquote className="mt-4 font-display text-2xl leading-snug text-ink sm:text-3xl">
                &ldquo;Every child who walks through our gates carries something special. Our job
                is to notice it, nurture it and help it grow.&rdquo;
              </blockquote>
              <p className="mt-5 text-ink-soft leading-relaxed">
                At Palanpor we want school to feel safe, warm and full of possibility. We hold a
                steady line on academics while making room for sport, art and friendship, because
                a happy, confident child learns best. We would love to show you our campus and
                answer your questions in person.
              </p>
              <div className="mt-6">
                <p className="font-semibold text-ink">{school.principal.name}</p>
                <p className="text-sm text-ink-muted">{school.principal.title}</p>
              </div>
              <Link href="/about" className="btn-outline mt-7">
                More about the school
              </Link>
            </Reveal>
          </div>
        </Container>
      </section>

      <CTASection />
    </>
  );
}
