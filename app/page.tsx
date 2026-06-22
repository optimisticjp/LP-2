import Link from 'next/link';
import Container from '@/components/Container';
import SectionHeading from '@/components/SectionHeading';
import Reveal from '@/components/Reveal';
import Img from '@/components/Img';
import Badge from '@/components/Badge';
import StatCard from '@/components/StatCard';
import SchoolCard from '@/components/SchoolCard';
import CampusSwitcher from '@/components/CampusSwitcher';
import FacilityCard from '@/components/FacilityCard';
import GalleryGrid from '@/components/GalleryGrid';
import TestimonialCard from '@/components/TestimonialCard';
import CTASection from '@/components/CTASection';
import CampusMap from '@/components/CampusMap';
import PalanporSpotlight from '@/components/PalanporSpotlight';
import HeroCampusPicker from '@/components/HeroCampusPicker';
import { Icon, type IconName } from '@/components/icons';
import { schools } from '@/data/schools';
import { facilities } from '@/data/facilities';
import { site } from '@/data/site';
import { images } from '@/data/images';
import { communityVoices } from '@/data/testimonials';

const whyCards: { title: string; body: string; icon: IconName }[] = [
  { title: 'Academic foundation', body: 'A strong, structured academic core that keeps every child at the centre of learning.', icon: 'book' },
  { title: 'Values and life skills', body: 'Character, discipline and life skills woven through everyday school life.', icon: 'heart' },
  { title: 'Experienced faculty', body: 'Teachers who mentor and guide, known for their dedication and care.', icon: 'users' },
  { title: 'Modern infrastructure', body: 'Well-equipped classrooms, labs and activity spaces across campuses.', icon: 'building' },
  { title: 'Beyond the classroom', body: 'Sports, arts, music and activities that build confident, well-rounded students.', icon: 'palette' },
  { title: 'Parent-friendly admissions', body: 'A clear, supported admission journey from first enquiry to joining day.', icon: 'check' },
];

const learning: { title: string; body: string; icon: IconName }[] = [
  { title: 'Academics', body: 'A curriculum that blends classroom study with research and discovery.', icon: 'book' },
  { title: 'Activities', body: 'Clubs and activities that turn learning into an experience.', icon: 'sparkle' },
  { title: 'Values', body: 'Integrity, respect and empathy at the heart of school culture.', icon: 'heart' },
  { title: 'Technology', body: 'ICT and robotics that build real digital confidence.', icon: 'cpu' },
  { title: 'Sports', body: 'Indoor and outdoor spaces that make movement a daily habit.', icon: 'dumbbell' },
  { title: 'Arts', body: 'Art, music and dance that give every child room to express.', icon: 'palette' },
];

const parentGuide: { title: string; body: string; href: string; icon: IconName }[] = [
  { title: 'Branch overview', body: 'Compare all six campuses by location and board.', href: '/schools', icon: 'map' },
  { title: 'Admission process', body: 'A clear, step-by-step journey for parents.', href: '/admission-process', icon: 'check' },
  { title: 'Facilities', body: 'See the spaces where your child will learn and play.', href: '/infrastructure', icon: 'building' },
  { title: 'Contact details', body: 'Reach the right campus office directly.', href: '/contact', icon: 'phone' },
  { title: 'Book a campus visit', body: 'Arrange a convenient time to see a campus in person.', href: '/admissions#tour', icon: 'pin' },
  { title: 'Request a prospectus', body: 'Ask the admission office to share details for your campus.', href: '/contact', icon: 'book' },
];

export default function HomePage() {
  return (
    <>
      {/* 1. Hero */}
      <section className="relative overflow-hidden bg-white">
        {/* Decorative orbs */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-32 -top-32 h-[36rem] w-[36rem] rounded-full bg-brand-50 opacity-70 blur-3xl"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-20 left-1/3 h-72 w-72 rounded-full bg-gold-50 opacity-50 blur-3xl"
        />

        <Container className="relative grid items-center gap-10 py-14 lg:grid-cols-2 lg:gap-16 lg:py-24">

          {/* ── LEFT COLUMN ── */}
          <div className="animate-fade-up">
            <Badge tone="brand" icon="sparkle">
              One group, multiple campuses across {site.city}
            </Badge>

            <h1 className="mt-5 text-4xl font-extrabold leading-[1.08] tracking-tight text-ink sm:text-5xl lg:text-[3.4rem]">
              Shaping confident learners across {site.city}
            </h1>

            <p className="mt-5 max-w-xl text-base leading-relaxed text-ink-soft sm:text-lg">
              Explore L. P. Savani Group of Schools, where academic excellence, modern infrastructure,
              values and student growth come together across multiple campuses.
            </p>

            {/* Trust line */}
            <p className="mt-6 text-xs font-semibold uppercase tracking-[0.18em] text-ink-muted">
              {site.stats[0].value}&nbsp;students &nbsp;|&nbsp; {site.stats[1].value}&nbsp;faculty &nbsp;|&nbsp; {site.stats[2].value}&nbsp;years &nbsp;|&nbsp; Campuses across {site.city}
            </p>

            {/* CTA row — clear hierarchy */}
            <div className="mt-7 flex flex-wrap items-center gap-3">
              <Link href="/schools" className="btn-primary">
                Explore Schools
              </Link>
              <Link href="/admissions" className="btn-gold">
                Start Admission Enquiry
              </Link>
              <Link
                href="/admissions#tour"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-600 underline-offset-2 hover:underline"
              >
                Book a campus tour
                <Icon name="arrow" className="h-4 w-4" />
              </Link>
            </div>

            {/* Campus picker */}
            <HeroCampusPicker />
          </div>

          {/* ── RIGHT COLUMN ── */}
          <div className="animate-fade-up [animation-delay:150ms]">
            <div className="relative">
              {/* Main image */}
              <div className="relative overflow-hidden rounded-3xl shadow-lift ring-1 ring-ink/10">
                <Img
                  src={images.heroPrimary}
                  alt="Students engaged in learning at an L. P. Savani campus in Surat"
                  className="aspect-[4/5] w-full object-cover sm:aspect-[4/3] lg:aspect-[5/6]"
                />
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 bg-gradient-to-t from-deepNavy/35 via-deepNavy/5 to-transparent"
                />
              </div>

              {/* Secondary offset image — overlapping bottom-right corner, hidden on mobile */}
              <div className="absolute -bottom-5 -right-4 hidden rounded-2xl ring-4 ring-white shadow-card sm:block">
                <Img
                  src={images.heroSecondary}
                  alt="Students in a group activity session at the Adajan campus"
                  className="h-36 w-36 rounded-2xl object-cover md:h-44 md:w-44"
                />
              </div>

              {/* Floating glass chip — 20,000+ students, bottom-left */}
              <div className="absolute -bottom-5 left-4 hidden animate-float items-center gap-3 rounded-2xl bg-white/80 px-4 py-3 shadow-card backdrop-blur-md sm:flex">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-brand-600 text-white">
                  <Icon name="users" className="h-5 w-5" />
                </span>
                <div>
                  <div className="text-sm font-extrabold leading-none text-ink">{site.stats[0].value}</div>
                  <div className="mt-0.5 text-xs text-ink-muted">students across campuses</div>
                </div>
              </div>

              {/* Floating gold chip — admissions year, top-right */}
              <div className="absolute right-4 top-6 hidden animate-float-delayed rounded-2xl bg-gold-400 px-4 py-3 text-ink shadow-card md:block">
                <div className="text-xs font-semibold uppercase tracking-wider">Admissions</div>
                <div className="text-lg font-extrabold leading-none">{site.admissionsYear}</div>
              </div>
            </div>
          </div>

        </Container>
      </section>

      {/* 2. Fast facts */}
      <section className="bg-white pb-6">
        <Container>
          <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
            {site.stats.map((s, i) => (
              <StatCard
                key={s.label}
                value={s.value}
                label={['Students', 'Faculty', 'Years', 'Campuses'][i] ?? s.label}
              />
            ))}
          </div>
        </Container>
      </section>

      {/* 3. Campus finder */}
      <section className="bg-white section-y">
        <Container>
          <SectionHeading
            eyebrow="Which campus is right for your child?"
            title="Find your campus"
            subtitle="Browse every campus by location or board, or use the quick helper to find the right fit. Every campus shares the same L. P. Savani commitment to learning and care."
            align="center"
            className="mb-10"
          />
          <CampusSwitcher />
        </Container>
      </section>

      {/* 3b. Campuses across Surat — map-style overview */}
      <CampusMap />

      {/* 3c. Flagship spotlight — Palanpor */}
      <PalanporSpotlight />

      {/* 4. Why L. P. Savani */}
      <section className="bg-mist section-y">
        <Container>
          <SectionHeading
            eyebrow="Why L. P. Savani"
            title="A balanced education, built around your child"
            subtitle="From academics and technology to sports, arts and life skills, the L. P. Savani experience is designed for balanced growth."
            className="mb-10"
          />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {whyCards.map((c, i) => (
              <Reveal key={c.title} delay={i * 40}>
                <div className="card h-full p-6">
                  <span className="grid h-12 w-12 place-items-center rounded-xl bg-brand-50 text-brand-600">
                    <Icon name={c.icon} className="h-6 w-6" />
                  </span>
                  <h3 className="mt-4 text-lg font-bold text-ink">{c.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-soft">{c.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* 5. Explore Our Schools */}
      <section className="bg-white section-y">
        <Container>
          <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
            <SectionHeading
              eyebrow="Our campuses"
              title="Explore our schools"
              subtitle="Six campuses across Surat, each with its own character and the same shared standards."
            />
            <Link href="/schools" className="btn-secondary hidden sm:inline-flex">
              View all schools
            </Link>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {schools.map((s) => (
              <SchoolCard key={s.slug} school={s} />
            ))}
          </div>
        </Container>
      </section>

      {/* 6. Learning experience */}
      <section className="relative overflow-hidden bg-deepNavy section-y text-white">
        <Container>
          <SectionHeading
            light
            eyebrow="The learning experience"
            title="A day at L. P. Savani"
            subtitle="Learning here reaches beyond textbooks, into the spaces, activities and values that help children grow."
            className="mb-10"
          />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {learning.map((l) => (
              <div key={l.title} className="rounded-2xl border border-white/10 bg-white/5 p-6">
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-white/10 text-gold-300">
                  <Icon name={l.icon} className="h-5 w-5" />
                </span>
                <h3 className="mt-4 text-lg font-bold text-white">{l.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-brand-100">{l.body}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* 7. Infrastructure preview */}
      <section className="bg-white section-y">
        <Container>
          <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
            <SectionHeading
              eyebrow="Infrastructure"
              title="Spaces designed for learning"
              subtitle="Real facilities from across the group. Specific spaces vary by campus."
            />
            <Link href="/infrastructure" className="btn-secondary hidden sm:inline-flex">
              See all facilities
            </Link>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {facilities.slice(0, 4).map((f) => (
              <FacilityCard key={f.title} title={f.title} description={f.description} image={f.image} icon={f.icon} />
            ))}
          </div>
        </Container>
      </section>

      {/* 8. Gallery preview */}
      <section className="bg-mist section-y">
        <Container>
          <SectionHeading
            eyebrow="Gallery"
            title="Life across our campuses"
            subtitle="A glimpse of learning, activity and celebration at L. P. Savani."
            align="center"
            className="mb-10"
          />
          <GalleryGrid limit={8} />
          <div className="mt-8 text-center">
            <Link href="/gallery" className="btn-primary">
              View full gallery
            </Link>
          </div>
        </Container>
      </section>

      {/* 9. Parent decision guide */}
      <section className="bg-white section-y">
        <Container>
          <SectionHeading
            eyebrow="For parents"
            title="Everything parents need before visiting a campus"
            subtitle="A simple path through the information that matters most when choosing a school."
            className="mb-10"
          />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {parentGuide.map((g) => (
              <Link
                key={g.title}
                href={g.href}
                className="card card-hover group flex items-start gap-4 p-5"
              >
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-brand-50 text-brand-600">
                  <Icon name={g.icon} className="h-5 w-5" />
                </span>
                <span>
                  <span className="flex items-center gap-1.5 font-bold text-ink">
                    {g.title}
                    <Icon name="arrow" className="h-4 w-4 text-brand-400 transition-transform group-hover:translate-x-0.5" />
                  </span>
                  <span className="mt-1 block text-sm leading-relaxed text-ink-soft">{g.body}</span>
                </span>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      {/* 10. Community voices */}
      <section className="bg-mist section-y">
        <Container>
          <SectionHeading
            eyebrow="Community voices"
            title="What our community says"
            subtitle="Parents, students and teachers on what makes L. P. Savani feel like family."
            align="center"
            className="mb-10"
          />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {communityVoices.map((v) => (
              <TestimonialCard key={v.role + v.name} quote={v.quote} name={v.name} role={v.role} />
            ))}
          </div>
        </Container>
      </section>

      {/* 11. Digital upgrade */}
      <section className="bg-white section-y">
        <Container>
          <div className="flex flex-col gap-8 rounded-3xl border border-cloud bg-gradient-to-br from-brand-50 to-white p-6 sm:p-10 lg:grid lg:grid-cols-2 lg:items-center lg:gap-12">
            <div>
              <Badge tone="gold" icon="sparkle">
                A better digital experience
              </Badge>
              <h2 className="mt-4 text-[1.7rem] font-bold leading-snug text-ink sm:text-3xl">
                One place for every parent
              </h2>
              <p className="mt-4 text-ink-soft">
                Instead of jumping between separate sites and pages, parents can explore every campus,
                understand admissions, see facilities and reach the right branch, all from one trusted
                website built for mobile.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Link href="/proposal" className="btn-primary w-full sm:w-auto">
                  See the vision
                </Link>
                <Link href="/about" className="btn-secondary w-full sm:w-auto">
                  About the group
                </Link>
              </div>
            </div>
            <ul className="grid gap-3">
              {[
                'Discover all campuses from one menu',
                'A clear, centralised admission journey',
                'Facilities and student life, shown with impact',
                'Quick call, WhatsApp and apply actions on mobile',
              ].map((t) => (
                <li key={t} className="flex items-center gap-3 rounded-xl bg-white p-4 shadow-soft">
                  <Icon name="check" className="h-5 w-5 shrink-0 text-leaf-500" />
                  <span className="text-sm font-medium text-ink">{t}</span>
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      {/* 12. Final CTA */}
      <CTASection className="pb-20" />
    </>
  );
}
