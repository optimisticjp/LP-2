// Group-level site configuration.
// Edit admissionsYear once a year. The primary phone/WhatsApp below are the
// default contact used by the floating button and sticky bar; school staff can
// point these at whichever line should receive group-level enquiries.

export const site = {
  name: 'L. P. Savani Group of Schools',
  shortName: 'L. P. Savani',
  tagline: 'Shaping confident learners across Surat',
  description:
    'L. P. Savani Group of Schools brings academic excellence, modern infrastructure, values and holistic growth together across multiple campuses in Surat. Explore every school, understand admissions and book a campus visit from one place.',
  admissionsYear: '2026-27',
  city: 'Surat',
  region: 'Gujarat',

  // Update before going live (used for SEO canonical + social tags).
  url: 'https://lpsavani-group.example.com',

  // Default group enquiry line (currently the Palanpor admissions number — a
  // real, working line). Change to your preferred central number any time.
  primaryPhoneLabel: '+91 99049 02626',
  primaryPhoneTel: '+919904902626',
  primaryWhatsapp: '919904902626',
  generalEmail: 'lpspalanpor@gmail.com',

  groupWebsite: 'https://lpsavani.org/',

  stats: [
    { value: '20,000+', label: 'Students across campuses' },
    { value: '500+', label: 'Faculty members' },
    { value: '20+', label: 'Years of educational experience' },
    { value: '6', label: 'Campuses across Surat' },
  ],
} as const;

// Build a wa.me link with an optional pre-filled message.
export function whatsappLink(message?: string, number: string = site.primaryWhatsapp) {
  const base = `https://wa.me/${number}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}
