import Link from 'next/link';
import Logo from '@/components/Logo';
import { Icon } from '@/components/icons';
import { footerColumns } from '@/data/navigation';
import { site, whatsappLink } from '@/data/site';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-ink text-white">
      <div className="container-x py-14">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_2.6fr]">
          <div>
            <Logo variant="light" mark="wide" />
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-white/70">
              One trusted education group with campuses across {site.city}, sharing a commitment to
              academic excellence, values and holistic growth.
            </p>
            <div className="mt-6 flex flex-col gap-2 text-sm">
              <a
                href={`tel:${site.primaryPhoneTel}`}
                className="inline-flex items-center gap-2 text-white/80 hover:text-white"
              >
                <Icon name="phone" className="h-4 w-4 text-gold-300" />
                {site.primaryPhoneLabel}
              </a>
              <a
                href={`mailto:${site.generalEmail}`}
                className="inline-flex items-center gap-2 text-white/80 hover:text-white"
              >
                <Icon name="mail" className="h-4 w-4 text-gold-300" />
                {site.generalEmail}
              </a>
              <a
                href={whatsappLink('Hi, I have an enquiry for L. P. Savani Group of Schools.')}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-white/80 hover:text-white"
              >
                <Icon name="whatsapp" className="h-4 w-4 text-gold-300" />
                Chat on WhatsApp
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-8 min-[420px]:grid-cols-2 lg:grid-cols-4">
            {footerColumns.map((col) => (
              <div key={col.title}>
                <h3 className="text-xs font-bold uppercase tracking-[0.16em] text-gold-300">
                  {col.title}
                </h3>
                <ul className="mt-4 flex flex-col gap-1">
                  {col.links.map((l) => (
                    <li key={l.href}>
                      <Link
                        href={l.href}
                        className="block py-1.5 text-sm leading-relaxed text-white/70 transition-colors hover:text-white"
                      >
                        {l.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-x flex flex-col items-center justify-between gap-3 py-5 text-xs text-white/55 sm:flex-row">
          <p>&copy; {year} {site.name}. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <Link href="/privacy-policy" className="hover:text-white">Privacy Policy</Link>
            <Link href="/cookie-policy" className="hover:text-white">Cookie Policy</Link>
            <Link href="/proposal" className="hover:text-white">Digital Proposal</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
