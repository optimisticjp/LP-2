import type { Metadata } from 'next';
import Link from 'next/link';
import Container from '@/components/Container';
import SectionHeading from '@/components/SectionHeading';
import StatCard from '@/components/StatCard';
import Img from '@/components/Img';
import Badge from '@/components/Badge';
import CTASection from '@/components/CTASection';
import { Icon, type IconName } from '@/components/icons';
import { site } from '@/data/site';
import { images } from '@/data/images';

export const metadata: Metadata = {
  title: 'About the Group',
  description:
    'L. P. Savani Group of Schools is a premier education group in Surat with over 20 years of experience, 20,000+ students and 500+ faculty, committed to holistic, values-led education across six campuses.',
  alternates: { canonical: '/about' },
};

const pillars: { label: string; title: string; body: string; icon: IconName }[] = [
  {
    label: 'Mission',
    title: 'Empower students for a changing world',
    body: 'To equip students with the knowledge, skills and values that prepare them to face the challenges of a dynamic, ever-changing world.',
    icon: 'sparkle',
  },
  {
    label: 'Vision',
    title: 'Responsible, capable global citizens',
    body: 'To create global citizens who are academically proficient, socially responsible, empathetic, and equipped to contribute positively to society.',
    icon: 'globe',
  },
  {
    label: 'Values',
    title: 'Integrity, respect, empathy, inquiry',
    body: 'A nurturing, inclusive community where each student feels valued and supported, built on integrity, respect, empathy and a spirit of inquiry.',
    icon: 'heart',
  },
];

const leadership = [
  { name: 'Mavjibhai Savani', role: 'Chairman' },
  { name: 'Dharmendra Savani', role: 'Vice-Chairman' },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-white">
        <Container className="grid items-center gap-10 py-14 lg:grid-cols-2 lg:py-20">
          <div>
            <Badge tone="brand" icon="building">
              About the group
            </Badge>
            <h1 className="mt-5 text-4xl font-extrabold leading-tight text-ink sm:text-5xl">
              A trusted name in education across Surat
            </h1>
            <p className="mt-5 text-ink-soft sm:text-lg">
              L. P. Savani Group of Schools is a premier education group with a proud tradition of caring,
              supportive learning. Your child&rsquo;s progress is kept foremost in our minds, supported by
              staff who bring enthusiasm, dedication and strong teaching to every classroom.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/schools" className="btn-primary">
                Explore our schools
              </Link>
              <Link href="/admissions" className="btn-secondary">
                Admissions
              </Link>
            </div>
          </div>
          <Img
            src={images.studio5}
            alt="L. P. Savani learning environment"
            className="aspect-[4/3] w-full rounded-3xl object-cover shadow-lift"
          />
        </Container>
      </section>

      {/* Stats */}
      <section className="bg-white pb-8">
        <Container>
          <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
            {site.stats.map((s) => (
              <StatCard key={s.label} value={s.value} label={s.label} />
            ))}
          </div>
        </Container>
      </section>

      {/* Story */}
      <section className="bg-mist py-16">
        <Container>
          <div className="grid gap-10 lg:grid-cols-2">
            <div>
              <SectionHeading eyebrow="Our story" title="Two decades of holistic education" />
              <div className="mt-5 space-y-4 text-ink-soft">
                <p className="leading-relaxed">
                  With over twenty years of experience, L. P. Savani has built a reputation for academic
                  excellence delivered in a safe, caring environment. The group caters to more than 20,000
                  students with over 500 faculty members across its campuses.
                </p>
                <p className="leading-relaxed">
                  We bring a global perspective and a local touch, preparing students for a connected world
                  through a curriculum that instils not just academic knowledge but also the skills and
                  values needed to thrive.
                </p>
                <p className="leading-relaxed">
                  Above all, we work to create an environment in which every student is supported to reach
                  the highest levels of success, in academics and in character.
                </p>
              </div>
            </div>
            <Img
              src={images.studio1}
              alt="Students learning at an L. P. Savani campus"
              className="aspect-[4/3] w-full rounded-3xl object-cover shadow-card"
            />
          </div>
        </Container>
      </section>

      {/* Mission / Vision / Values */}
      <section className="bg-white py-16">
        <Container>
          <SectionHeading
            eyebrow="Educational philosophy"
            title="What guides us"
            align="center"
            className="mb-10"
          />
          <div className="grid gap-4 lg:grid-cols-3">
            {pillars.map((p) => (
              <div key={p.label} className="card h-full p-7">
                <span className="grid h-12 w-12 place-items-center rounded-xl bg-brand-50 text-brand-600">
                  <Icon name={p.icon} className="h-6 w-6" />
                </span>
                <p className="mt-4 text-xs font-bold uppercase tracking-wider text-gold-600">{p.label}</p>
                <h3 className="mt-1 text-lg font-bold text-ink">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">{p.body}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Leadership */}
      <section className="bg-mist py-16">
        <Container>
          <SectionHeading
            eyebrow="Leadership"
            title="Guided by a clear purpose"
            subtitle="The group is led with a vision of offering brilliance to every student and building a generation that takes pride in our heritage and culture."
            className="mb-10"
          />
          <div className="grid gap-4 sm:grid-cols-2 lg:max-w-2xl">
            {leadership.map((l) => (
              <div key={l.name} className="flex items-center gap-4 rounded-2xl border border-cloud bg-white p-5 shadow-soft">
                <span className="grid h-14 w-14 shrink-0 place-items-center rounded-full bg-brand-600 text-lg font-bold text-white">
                  {l.name.split(' ').map((w) => w[0]).slice(0, 2).join('')}
                </span>
                <div>
                  <div className="font-bold text-ink">{l.name}</div>
                  <div className="text-sm text-ink-muted">{l.role}</div>
                  <div className="text-xs text-ink-muted">L. P. Savani Group of Schools</div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <CTASection className="pb-20" />
    </>
  );
}
