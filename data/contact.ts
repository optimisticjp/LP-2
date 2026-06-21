import { schools } from './schools';
import { site } from './site';

export const officeHours = 'Monday to Saturday, 9:00 AM to 4:00 PM';

export const contactNote =
  'Each campus has its own admission office. For the fastest response, contact the campus closest to you or send an enquiry and the right team will get back to you.';

// Branch contact cards reuse the single source of truth in schools.ts.
export const branchContacts = schools.map((s) => ({
  slug: s.slug,
  name: s.name,
  shortName: s.shortName,
  board: s.board,
  location: s.location,
  address: s.address,
  phones: s.phones,
  email: s.email,
  href: `/schools/${s.slug}`,
  mapEmbed: s.mapEmbed,
}));

export const groupContact = {
  enquiryPhoneLabel: site.primaryPhoneLabel,
  enquiryPhoneTel: site.primaryPhoneTel,
  whatsapp: site.primaryWhatsapp,
  email: site.generalEmail,
  hours: officeHours,
};
