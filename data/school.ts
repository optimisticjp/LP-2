// All factual details (address, phone, email, principal, group stats, branch list,
// admission form link) are taken from the public L. P. Savani group websites.
// Replace any placeholder marked "To be updated by school office" with verified data.

export const school = {
  name: 'L. P. Savani School',
  shortName: 'L. P. Savani',
  branch: 'Palanpor',
  fullName: 'L. P. Savani School, Palanpor',
  city: 'Surat',
  state: 'Gujarat',
  session: '2026-27',
  tagline: 'Preparing confident learners for a changing world.',
  intro:
    'A nurturing campus in Palanpor, Surat where children learn, participate, lead and grow with confidence. Part of the L. P. Savani group, with more than two decades of experience in education.',

  principal: {
    name: 'Dr. Kshitij Patel',
    title: 'Principal, L. P. Savani School, Palanpor',
  },

  contact: {
    phoneDisplay: '+91 99049 02626',
    phoneTel: '+919904902626',
    whatsapp: '919904902626',
    email: 'lpspalanpor@gmail.com',
    addressLines: [
      'L. P. Savani School',
      'T.P-8, Near Palanpur Jakat Naka, Canal Road',
      'Palanpor, Surat - 394510, Gujarat',
    ],
    addressShort: 'Canal Road, Palanpor, Surat - 394510, Gujarat',
    officeHours: 'Monday to Saturday, 9:00 AM to 4:00 PM',
    mapUrl: 'https://maps.google.com/?q=L.P.Savani+School+Palanpor+Surat',
    mapEmbed:
      'https://www.google.com/maps?q=L.P.Savani%20School%20Palanpor%20Canal%20Road%20Surat&output=embed',
  },

  // Live admission inquiry form hosted by the school's existing portal.
  admissionFormUrl:
    'https://lpsavanipalanpor.onlinevidyalaya.net/Pages/OnlineAdmission/AdmissionInquiryForm.aspx?OrgGroupId=2256',

  // Placeholder PDF shipped with the project — replace with the real prospectus.
  prospectusUrl: '/prospectus-placeholder.pdf',

  social: {
    facebook: 'https://www.facebook.com/',
    instagram: 'https://www.instagram.com/',
    youtube: 'https://www.youtube.com/',
  },
};

// Group-level figures published on lpsavani.org. Shown clearly as group numbers.
export const groupStats = [
  { value: '20+', label: 'Years of experience', sub: 'across the L. P. Savani group' },
  { value: '20,000+', label: 'Students', sub: 'in the L. P. Savani family' },
  { value: '500+', label: 'Faculty & mentors', sub: 'guiding every child' },
  { value: '6', label: 'Campuses in Surat', sub: 'one trusted group' },
];

export type WhatsAppOpts = { text?: string };

export function whatsappLink(opts: WhatsAppOpts = {}) {
  const base = `https://wa.me/${school.contact.whatsapp}`;
  const text =
    opts.text ??
    `Hello, I would like to know more about admissions at ${school.fullName} for ${school.session}.`;
  return `${base}?text=${encodeURIComponent(text)}`;
}
