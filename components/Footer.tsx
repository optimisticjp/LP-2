import Link from 'next/link';
import Logo from '@/components/Logo';
import { school, whatsappLink } from '@/data/school';
import { footerLinks } from '@/data/navigation';
import { branches } from '@/data/branches';

function SocialLink({ href, label, children }: { href: string; label: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="grid h-9 w-9 place-items-center rounded-full border border-white/15 text-brand-100 transition-colors hover:border-gold-400 hover:text-gold-300"
    >
      {children}
    </a>
  );
}

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-brand-900 text-brand-100">
      <div className="container py-14">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Logo light />
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-brand-200">
              {school.tagline} A nurturing campus in Palanpor, Surat, part of the L. P. Savani group of
              schools.
            </p>
            <div className="mt-5 flex gap-2">
              <SocialLink href={school.social.facebook} label="Facebook">
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4" aria-hidden="true">
                  <path d="M13.5 21v-7h2.4l.4-2.8h-2.8V9.4c0-.8.2-1.4 1.4-1.4h1.5V5.5c-.3 0-1.2-.1-2.2-.1-2.2 0-3.7 1.3-3.7 3.8v2H8.2V14h2.3v7h3Z" />
                </svg>
              </SocialLink>
              <SocialLink href={school.social.instagram} label="Instagram">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} className="h-4 w-4" aria-hidden="true">
                  <rect x="4" y="4" width="16" height="16" rx="4.5" />
                  <circle cx="12" cy="12" r="3.5" />
                  <circle cx="17" cy="7" r="1" fill="currentColor" />
                </svg>
              </SocialLink>
              <SocialLink href={school.social.youtube} label="YouTube">
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4" aria-hidden="true">
                  <path d="M21.6 8.2a2.5 2.5 0 0 0-1.7-1.8C18.2 6 12 6 12 6s-6.2 0-7.9.4A2.5 2.5 0 0 0 2.4 8.2 26 26 0 0 0 2 12a26 26 0 0 0 .4 3.8 2.5 2.5 0 0 0 1.7 1.8C5.8 18 12 18 12 18s6.2 0 7.9-.4a2.5 2.5 0 0 0 1.7-1.8A26 26 0 0 0 22 12a26 26 0 0 0-.4-3.8ZM10 15V9l5 3-5 3Z" />
                </svg>
              </SocialLink>
            </div>
          </div>

          <div className="lg:col-span-2">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">Quick links</h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-brand-200 transition-colors hover:text-white">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">Our campuses</h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              {branches.map((b) =>
                b.external ? (
                  <li key={b.area}>
                    <a
                      href={b.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-brand-200 transition-colors hover:text-white"
                    >
                      {b.area} <span className="text-brand-400">&middot; {b.name.replace('L. P. Savani ', '')}</span>
                    </a>
                  </li>
                ) : (
                  <li key={b.area}>
                    <Link href={b.url} className="font-semibold text-gold-300 transition-colors hover:text-gold-200">
                      {b.area} <span className="font-normal text-brand-300">(this campus)</span>
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">Reach us</h3>
            <address className="mt-4 space-y-3 text-sm not-italic text-brand-200">
              <p className="leading-relaxed">{school.contact.addressLines.join(', ')}</p>
              <p>
                <a href={`tel:${school.contact.phoneTel}`} className="hover:text-white">
                  {school.contact.phoneDisplay}
                </a>
              </p>
              <p>
                <a href={`mailto:${school.contact.email}`} className="hover:text-white">
                  {school.contact.email}
                </a>
              </p>
              <p className="text-brand-300">{school.contact.officeHours}</p>
            </address>
            <div className="mt-4 flex flex-wrap gap-2">
              <Link href="/admissions" className="btn-gold px-4 py-2 text-xs">
                Apply now
              </Link>
              <a
                href={whatsappLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp px-4 py-2 text-xs"
              >
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container flex flex-col items-center justify-between gap-3 py-5 text-xs text-brand-300 sm:flex-row">
          <p>&copy; {year} L. P. Savani School, Palanpor. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <Link href="/mandatory-disclosure" className="hover:text-white">
              Mandatory Disclosure
            </Link>
            <Link href="/contact" className="hover:text-white">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
