import Link from 'next/link';
import { Icon } from '@/components/icons';
import { site, whatsappLink } from '@/data/site';

// Sticky bottom action bar for mobile only.
export default function MobileStickyCTA() {
  const items = [
    { label: 'Call', href: `tel:${site.primaryPhoneTel}`, icon: 'phone' as const, external: true },
    {
      label: 'WhatsApp',
      href: whatsappLink('Hi, I have an admission enquiry for L. P. Savani.'),
      icon: 'whatsapp' as const,
      external: true,
    },
    { label: 'Visit', href: '/admissions#tour', icon: 'pin' as const, external: false },
    { label: 'Apply', href: '/admissions', icon: 'check' as const, external: false, primary: true },
  ];

  return (
    <nav
      aria-label="Quick actions"
      className="fixed inset-x-0 bottom-0 z-30 border-t border-cloud/80 bg-white/95 backdrop-blur shadow-[0_-2px_10px_rgba(11,35,68,0.05)] lg:hidden"
      style={{ paddingBottom: 'env(safe-area-inset-bottom)' }}
    >
      <ul className="grid grid-cols-4">
        {items.map((it) =>
          it.external ? (
            <li key={it.label}>
              <a
                href={it.href}
                target={it.href.startsWith('http') ? '_blank' : undefined}
                rel={it.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="flex flex-col items-center gap-1 whitespace-nowrap py-2.5 text-xs font-semibold text-ink-soft"
              >
                <Icon name={it.icon} className="h-[18px] w-[18px] text-brand-600" />
                {it.label}
              </a>
            </li>
          ) : (
            <li key={it.label}>
              <Link
                href={it.href}
                className={`flex flex-col items-center gap-1 whitespace-nowrap py-2.5 text-xs font-semibold ${
                  it.primary ? 'bg-brand-600 text-white rounded-xl mx-1 my-1.5' : 'text-ink-soft'
                }`}
              >
                <Icon
                  name={it.icon}
                  className={`h-[18px] w-[18px] ${it.primary ? 'text-white' : 'text-brand-600'}`}
                />
                {it.label}
              </Link>
            </li>
          )
        )}
      </ul>
    </nav>
  );
}
