import Link from 'next/link';
import Img from '@/components/Img';
import { Icon } from '@/components/icons';
import { megaSchools } from '@/data/navigation';
import { whatsappLink } from '@/data/site';

export default function MegaMenu({ onNavigate }: { onNavigate?: () => void }) {
  return (
    <div className="grid gap-6 lg:grid-cols-[1fr_300px]">
      <div>
        <p className="eyebrow mb-3">Our campuses across Surat</p>
        <ul className="grid gap-2 sm:grid-cols-2">
          {megaSchools.map((s) => (
            <li key={s.slug}>
              <Link
                href={s.href}
                onClick={onNavigate}
                className="group flex items-center gap-3 rounded-xl border border-transparent p-2 transition-colors hover:border-cloud hover:bg-mist"
              >
                <Img
                  src={s.thumb}
                  alt={`${s.fullName} campus`}
                  className="h-14 w-16 shrink-0 rounded-lg object-cover"
                />
                <span className="min-w-0">
                  <span className="flex items-center gap-2">
                    <span className="truncate font-semibold text-ink">{s.name}</span>
                    {s.flagship ? (
                      <span className="pill bg-gold-50 text-[10px] text-gold-600">Flagship</span>
                    ) : null}
                  </span>
                  <span className="mt-0.5 flex items-center gap-1.5 text-xs text-ink-muted">
                    <Icon name="pin" className="h-3 w-3" />
                    <span className="truncate">{s.location}</span>
                    <span className="text-brand-300">|</span>
                    <span className="shrink-0 font-medium text-brand-600">{s.board}</span>
                  </span>
                </span>
                <Icon
                  name="arrow"
                  className="ml-auto h-4 w-4 shrink-0 text-brand-400 transition-transform group-hover:translate-x-0.5"
                />
              </Link>
            </li>
          ))}
        </ul>
        <Link
          href="/schools"
          onClick={onNavigate}
          className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-600 hover:text-brand-700"
        >
          View all schools and compare campuses
          <Icon name="arrow" className="h-4 w-4" />
        </Link>
      </div>

      <div className="flex flex-col justify-between rounded-2xl bg-brand-600 p-6 text-white">
        <div>
          <Icon name="sparkle" className="h-6 w-6 text-gold-300" />
          <h3 className="mt-3 text-lg font-bold leading-snug text-white">
            Not sure which branch is right?
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-brand-100">
            Tell us where you live and the board you prefer. Our admissions team will help you find
            the best fit.
          </p>
        </div>
        <div className="mt-5 flex flex-col gap-2">
          <Link href="/admissions" onClick={onNavigate} className="btn-gold w-full">
            Talk to Admissions
          </Link>
          <a
            href={whatsappLink('Hi, I would like help choosing the right L. P. Savani campus.')}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 text-sm font-semibold text-white/90 hover:text-white"
          >
            <Icon name="whatsapp" className="h-4 w-4" />
            Chat on WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}
