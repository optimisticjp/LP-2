import Link from 'next/link';
import Container from '@/components/Container';
import SectionHeading from '@/components/SectionHeading';
import Img from '@/components/Img';
import FAQAccordion from '@/components/FAQAccordion';
import { Icon } from '@/components/icons';
import { images } from '@/data/images';
import type { FAQ } from '@/data/faqs';

// Palanpor-only showcase. Rendered exclusively for the Palanpor branch page
// (guarded in BranchLanding by school.slug === 'palanpor'). All content here is
// specific to L. P. Savani School, Palanpor and must not appear on other campuses.

type Pride = { name: string; role: string; image: string };
type Expert = { name: string; descriptor: string; session: string; image: string };
type Leader = { pull: string; message: string; name: string; role: string };

const pride: Pride[] = [
  {
    name: 'Dr. Mudhrika S Patel',
    role: 'MBBS · Head of Department, United Green Hospital',
    image: images.prideMudhrika,
  },
  {
    name: 'Dr. Vatsal Bharatkumar Patel',
    role: 'MBBS · Medical Officer, PHC Adhoi, Bhachau, Kutch',
    image: images.prideVatsal,
  },
  {
    name: 'Jemish Harshadbhai Parmar',
    role: 'Assistant Technical Manager',
    image: images.prideJemish,
  },
  {
    name: 'Darsh Prajapati',
    role: 'Actor',
    image: images.prideDarsh,
  },
];

const experts: Expert[] = [
  {
    name: 'Dr. Gnanvatsal Swami Ji',
    descriptor: 'Spiritual leader',
    session: 'Session: समत्व — “From Burnout to Balance: Rise Above Stress”',
    image: images.palanporEvent3,
  },
  {
    name: 'Mr. Ashish Vidyarthi',
    descriptor: 'National award-winning actor and motivational speaker',
    session: 'Session: Parivartan 2.0 — “Inspire Today, Transform Tomorrow”',
    image: images.expertAshish,
  },
  {
    name: 'Dr. P. S. Rathore',
    descriptor: 'Motivational speaker, coach and corporate strategist',
    session: 'Session: Parivartan 1.0 — “Your attitude today, your success tomorrow”',
    image: images.palanporEvent1,
  },
  {
    name: 'Mr. Jay Vasavada',
    descriptor: 'Gujarati writer, orator and columnist',
    session: 'Session: Karalo Exam Mutthi mein! — “Dream, Believe, Achieve”',
    image: images.palanporEvent2,
  },
];

const leadership: Leader[] = [
  {
    pull: 'Education breeds confidence. Confidence breeds hope, and hope breeds peace.',
    message:
      'We strive to develop students with competence, compassion, conscience and commitment, focusing on character building and personality development so young minds face a changing world with confidence and integrity.',
    name: 'Shri Mavjibhai Savani',
    role: 'Chairman',
  },
  {
    pull: 'At L. P. Savani, excellence is not an option, it is a culture.',
    message:
      'We envision a learning community where individual talent shines and collective success is celebrated, empowering students with knowledge, strong values, cultural roots and 21st-century skills to thrive and contribute meaningfully to the nation.',
    name: 'Dr. Dharmendra Savani',
    role: 'Vice Chairman',
  },
];

const palanporFaqs: FAQ[] = [
  {
    q: 'Which curriculum does L. P. Savani School, Palanpor follow?',
    a: 'The school follows the CBSE curriculum, aligned with the National Education Policy (NEP), blending strong academics with values, life skills and 21st-century learning.',
  },
  {
    q: 'Where is the Palanpor campus located?',
    a: 'The campus is located at Palanpor, near Canal Road, Surat, making it convenient for families across the surrounding neighbourhoods.',
  },
  {
    q: 'What is the admission process?',
    a: 'Admissions are open through a simple enquiry and registration process. You can book a campus visit or contact the school’s admissions team, who will guide you through eligibility, documents and the next steps.',
  },
  {
    q: 'What values does the school nurture?',
    a: 'The school focuses on character building and personality development, nurturing competence, compassion, conscience and commitment alongside strong cultural roots.',
  },
  {
    q: 'What extracurricular activities are offered?',
    a: 'Students take part in expert sessions, cultural and motivational events, sports and a range of co-curricular activities that build confidence, creativity and well-rounded growth.',
  },
  {
    q: 'What makes the Palanpor campus unique?',
    a: 'Palanpor combines the trust of the L. P. Savani group with its own learning community, inspiring expert sessions and a focus on helping every child turn imagination into reality.',
  },
];

export default function PalanporShowcase() {
  return (
    <>
      {/* A — Our pride */}
      <section className="bg-white section-y">
        <Container>
          <SectionHeading
            eyebrow="Our pride"
            title="Our pride, their success"
            subtitle="We nurture talent, build strong values and guide learners toward excellence. Their success is the true measure of our pride."
            align="center"
            className="mb-10"
          />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {pride.map((p) => (
              <figure key={p.name} className="card flex h-full flex-col p-5 text-center">
                <Img
                  src={p.image}
                  alt={p.name}
                  className="mx-auto aspect-square w-full max-w-[180px] rounded-2xl object-cover"
                />
                <figcaption className="mt-4 flex flex-1 flex-col">
                  <h3 className="text-base font-bold text-ink">{p.name}</h3>
                  <p className="mt-1 text-sm text-ink-muted">{p.role}</p>
                </figcaption>
              </figure>
            ))}
          </div>
          <p className="mt-6 text-center text-sm text-ink-muted">
            Alumni details as shared by the school.
          </p>
        </Container>
      </section>

      {/* B — Learning from experts */}
      <section className="bg-mist section-y">
        <Container>
          <SectionHeading
            eyebrow="Beyond the classroom"
            title="Learning from experts"
            subtitle="Students learn directly from inspiring voices and experts from across the country."
            align="center"
            className="mb-10"
          />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {experts.map((e) => (
              <article key={e.name} className="card flex h-full flex-col overflow-hidden">
                <div className="aspect-[4/3] overflow-hidden">
                  <Img src={e.image} alt={e.name} className="h-full w-full object-cover" />
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <h3 className="text-base font-bold text-ink">{e.name}</h3>
                  <p className="mt-1 text-sm text-ink-muted">{e.descriptor}</p>
                  <p className="mt-3 text-xs text-ink-soft">{e.session}</p>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>

      {/* C — Leadership message */}
      <section className="bg-white section-y">
        <Container>
          <SectionHeading
            eyebrow="Leadership"
            title="A message from our leadership"
            align="center"
            className="mb-10"
          />
          <div className="grid gap-4 lg:grid-cols-2">
            {leadership.map((l) => (
              <figure key={l.name} className="card flex h-full flex-col p-6 sm:p-7">
                <Icon name="quote" className="h-7 w-7 text-gold-300" />
                <blockquote className="mt-4 text-lg font-bold leading-snug text-ink">
                  “{l.pull}”
                </blockquote>
                <p className="mt-4 flex-1 text-sm text-ink-soft">{l.message}</p>
                <figcaption className="mt-5 border-t border-brand-50 pt-4">
                  <span className="block font-bold text-ink">{l.name}</span>
                  <span className="text-sm text-ink-muted">{l.role}</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </Container>
      </section>

      {/* D — Virtual tour CTA */}
      <section className="bg-deepNavy section-y text-white">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold leading-tight text-white sm:text-4xl">
              Explore the campus from anywhere, anytime
            </h2>
            <p className="mt-4 text-brand-100">
              See L. P. Savani School, Palanpor up close before you visit.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Link href="/admissions#tour" className="btn-gold">
                Book a campus visit
              </Link>
              <Link href="/contact" className="btn-white">
                Request a virtual tour
              </Link>
            </div>
            <p className="mt-5 text-xs text-brand-200">
              Official virtual tour link to be connected with the school.
            </p>
          </div>
        </Container>
      </section>

      {/* E — FAQ */}
      <section className="bg-mist section-y">
        <Container size="tight">
          <SectionHeading
            eyebrow="FAQ"
            title="Frequently asked questions"
            align="center"
            className="mb-8"
          />
          <FAQAccordion items={palanporFaqs} />
        </Container>
      </section>

      {/* F — Built to scale (quiet, management-facing note) */}
      <section className="bg-white section-y">
        <Container size="tight">
          <div className="mx-auto max-w-2xl rounded-2xl border border-cloud p-8 text-center sm:p-10">
            <span className="mx-auto grid h-11 w-11 place-items-center rounded-full bg-brand-50 text-brand-600">
              <Icon name="globe" className="h-5 w-5" />
            </span>
            <span className="eyebrow mt-5 justify-center">Built to scale</span>
            <h2 className="mt-3 text-3xl leading-tight text-ink sm:text-4xl">
              How every campus website can look
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-ink-soft">
              This Palanpor page lives within the L. P. Savani group site and shows what a dedicated
              campus website can be: a strong identity, simple admissions, galleries, events and
              updates, all in one premium experience. Each campus can have its own, built to this
              same standard.
            </p>
          </div>
        </Container>
      </section>
    </>
  );
}
