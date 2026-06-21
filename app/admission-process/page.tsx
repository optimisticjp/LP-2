import type { Metadata } from 'next';
import Link from 'next/link';
import Container from '@/components/Container';
import SectionHeading from '@/components/SectionHeading';
import Badge from '@/components/Badge';
import Timeline from '@/components/Timeline';
import CTASection from '@/components/CTASection';
import { Icon, type IconName } from '@/components/icons';

export const metadata: Metadata = {
  title: 'Admission Process',
  description:
    'The L. P. Savani admission process explained step by step, from online application and assessment to interaction and admission offer. Clear, transparent and parent-friendly.',
  alternates: { canonical: '/admission-process' },
};

const groupProcess = [
  { title: 'Online application', body: 'Begin by filling out the enquiry or application form with essential details about your child and family.' },
  { title: 'Entrance assessment', body: 'Depending on the grade, a simple assessment helps teachers understand your child\u2019s current level.' },
  { title: 'Interaction', body: 'An interaction session helps the team get to know your child and their strengths and interests.' },
  { title: 'Admission offer', body: 'On successful completion, we extend a warm invitation for your child to join the L. P. Savani family.' },
];

const journey = [
  { title: 'Submit enquiry', body: 'Share your details and preferred campus to start the conversation.' },
  { title: 'Speak with an admission counsellor', body: 'The team gets in touch to answer questions and guide you.' },
  { title: 'Visit campus', body: 'See the school in person and meet the team.' },
  { title: 'Complete application', body: 'Fill in the application for your chosen campus and grade.' },
  { title: 'Document verification', body: 'Submit and verify the required documents.' },
  { title: 'Admission confirmation', body: 'Welcome to L. P. Savani.' },
];

const expect: { title: string; body: string; icon: IconName }[] = [
  { title: 'A friendly first step', body: 'The enquiry is short and simple. No pressure, just a starting point.', icon: 'heart' },
  { title: 'A comfortable assessment', body: 'Any assessment is designed to be a relaxed conversation, suited to the grade.', icon: 'book' },
  { title: 'Clear communication', body: 'You will know what happens at each step and what is needed from you.', icon: 'check' },
];

export default function AdmissionProcessPage() {
  return (
    <>
      <section className="bg-white">
        <Container className="py-14 sm:py-18">
          <Badge tone="brand" icon="check">
            Admission process
          </Badge>
          <h1 className="mt-5 max-w-3xl text-4xl font-extrabold leading-tight text-ink sm:text-5xl">
            A clear path from enquiry to joining day
          </h1>
          <p className="mt-4 max-w-2xl text-ink-soft sm:text-lg">
            Our admissions process is designed to be smooth, transparent and inclusive. Here is how it
            works, so you always know what comes next.
          </p>
        </Container>
      </section>

      <section className="bg-mist py-16">
        <Container>
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <SectionHeading eyebrow="The group process" title="Four simple stages" className="mb-8" />
              <Timeline items={groupProcess} accent="gold" />
            </div>
            <div>
              <SectionHeading eyebrow="Your full journey" title="From first enquiry to confirmation" className="mb-8" />
              <Timeline items={journey} />
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-white py-16">
        <Container>
          <SectionHeading eyebrow="What to expect" title="We keep it simple" align="center" className="mb-10" />
          <div className="grid gap-4 sm:grid-cols-3">
            {expect.map((e) => (
              <div key={e.title} className="card h-full p-6 text-center">
                <span className="mx-auto grid h-12 w-12 place-items-center rounded-xl bg-brand-50 text-brand-600">
                  <Icon name={e.icon} className="h-6 w-6" />
                </span>
                <h3 className="mt-4 font-bold text-ink">{e.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">{e.body}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link href="/admissions" className="btn-primary">
              Start your enquiry
            </Link>
          </div>
        </Container>
      </section>

      <CTASection className="pb-20" />
    </>
  );
}
