import type { IconName } from '@/components/icons';

export const proposalIntro = {
  eyebrow: 'For L. P. Savani management',
  title: 'A central digital platform for the entire L. P. Savani Group',
  lead: 'Parents research schools online long before they visit. This is a plan to bring every L. P. Savani campus together into one trusted website that builds confidence, organises information, and turns interest into admission enquiries.',
};

export const opportunity = {
  title: 'The opportunity',
  body: [
    'Most parents form a first impression of a school online. They compare campuses, look for facilities, check how to apply, and decide who to contact, often on a phone, in a single sitting.',
    'A clear, premium group website meets parents at that moment. It builds trust, answers their questions, and makes the next step obvious, which directly supports admissions across every campus.',
  ],
};

export const currentChallenges: { title: string; body: string }[] = [
  { title: 'Information is spread across several sites', body: 'Different campuses live on different websites and pages, so parents have to hunt across them to compare.' },
  { title: 'Branch discovery is not smooth', body: 'There is no single, simple way to see all campuses and find the right one by location and board.' },
  { title: 'The admission journey is not centralised', body: 'Enquiry links and steps differ by campus, which adds friction at the most important moment.' },
  { title: 'Facilities deserve more impact', body: 'Strong infrastructure and student life are not always presented in a way that does them justice.' },
  { title: 'The mobile experience can be stronger', body: 'Most parents browse on phones, so quick actions like call, WhatsApp and apply should be one tap away.' },
  { title: 'Local SEO is underused', body: 'Clear, campus-specific pages can help each branch show up when parents search locally.' },
];

export const proposedSolution: { title: string; body: string; icon: IconName }[] = [
  { title: 'One premium group website', body: 'A single, consistent home for the whole group, with each campus given its own identity.', icon: 'building' },
  { title: 'Schools mega menu', body: 'Every campus, with location and board, reachable from one menu on desktop and mobile.', icon: 'monitor' },
  { title: 'Campus finder', body: 'A simple way for parents to pick the right campus by area and board.', icon: 'map' },
  { title: 'Branch landing pages', body: 'A polished page for each campus covering overview, facilities, student life and contact.', icon: 'book' },
  { title: 'Centralised admissions', body: 'A clear, repeatable admission journey with enquiry forms in the right places.', icon: 'check' },
  { title: 'Mobile-first actions', body: 'Sticky call, WhatsApp and apply actions so parents can act in the moment.', icon: 'phone' },
];

export const prototypeHighlights: string[] = [
  'Group homepage with hero, fast facts and a campus finder',
  'Schools mega menu with all six campuses',
  'Six branch landing pages, with Palanpor shown in full detail',
  'A centralised admissions journey with forms and a parent checklist',
  'An infrastructure showcase and a filterable gallery',
  'A structure that is ready to grow into individual school websites',
];

export type Phase = { phase: string; title: string; points: string[]; tag: string };

export const roadmap: Phase[] = [
  {
    phase: 'Phase 1',
    title: 'Launch the group website',
    tag: 'This prototype',
    points: [
      'Premium group homepage and campus finder',
      'Branch landing pages for all six campuses',
      'Centralised admissions journey and contact',
    ],
  },
  {
    phase: 'Phase 2',
    title: 'Dedicated websites for each branch',
    tag: 'Next',
    points: [
      'A full website for each campus, starting with one pilot',
      'Campus-specific content, events and galleries',
      'Branch-wise local SEO so each school is found in its area',
    ],
  },
  {
    phase: 'Phase 3',
    title: 'Admissions and enquiry systems',
    tag: 'Later',
    points: [
      'Admission CRM and enquiry tracking',
      'WhatsApp integration for faster responses',
      'Enquiry dashboards for the admission team',
    ],
  },
  {
    phase: 'Phase 4',
    title: 'Parent portal and content engine',
    tag: 'Future',
    points: [
      'Parent portal for updates and communication',
      'News, events and gallery managed by the school',
      'A blog and SEO engine to grow visibility over time',
    ],
  },
];

export const businessBenefits: { title: string; body: string; icon: IconName }[] = [
  { title: 'Stronger parent trust', body: 'A premium, consistent presence that reflects the quality of the schools.', icon: 'heart' },
  { title: 'More admission enquiries', body: 'Clear journeys and well-placed forms that turn interest into contact.', icon: 'check' },
  { title: 'Better brand consistency', body: 'One identity across every campus and every page.', icon: 'building' },
  { title: 'Easier branch discovery', body: 'Parents find the right campus quickly, by area and board.', icon: 'map' },
  { title: 'Better local SEO', body: 'Campus-specific pages that help each school appear in local search.', icon: 'monitor' },
  { title: 'Easier future updates', body: 'Content kept separate from design, so updates stay simple.', icon: 'cpu' },
];

export const nextStep = {
  title: 'Suggested next step',
  body: 'Approve the group website build, and select one campus for a full dedicated website pilot. That gives the group a strong central platform now, and a clear path to grow from there.',
};
