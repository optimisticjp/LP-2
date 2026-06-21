import Link from 'next/link';
import Img from '@/components/Img';
import { Icon } from '@/components/icons';
import { megaSchools, schoolsByBoard, parentActions } from '@/data/navigation';
import { whatsappLink } from '@/data/site';

export default function MegaMenu({ onNavigate }: { onNavigate?: () => void }) {
  return (
    <div className="grid gap-6 lg:grid-cols-[1fr_300px]">
      {/* Left: campus rows + schools by board */}
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
                      <span className="pill bg-gold-50 text-xs text-gold-600">Flagship</span>
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

        {/* Schools by board */}
        <div className="mt-5 border-t border-cloud pt-4">
          <p className="eyebrow mb-3">Schools by board</p>
          <div className="grid gap-x-4 gap-y-3 sm:grid-cols-3">
            {schoolsByBoard.map((g) => (
              <div key={g.board}>
                <p className="text-xs font-bold uppercase tracking-wider text-ink-muted">{g.board}</p>
                <ul className="mt-1.5 space-y-0.5">
                  {g.schools.map((s) => (
                    <li key={s.slug}>
                      <Link
                        href={s.href}
                        onClick={onNavigate}
                        className="block rounded-md px-2 py-1 text-sm text-ink-soft transition-colors hover:bg-mist hover:text-brand-700"
                      >
                        {s.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Right: popular parent actions + help card */}
      <div className="flex flex-col gap-4">
        <div className="rounded-2xl border border-cloud bg-white p-4 shadow-soft">
          <p className="eyebrow mb-2.5">Popular parent actions</p>
          <ul className="space-y-0.5">
            {parentActions.map((a) => (
              <li key={a.label}>
                <Link
                  href={a.href}
                  onClick={onNavigate}
                  className="group flex items-center gap-2.5 rounded-lg px-2 py-2 text-sm font-medium text-ink-soft transition-colors hover:bg-mist hover:text-brand-700"
                >
                  <span className="grid h-7 w-7 shrink-0 place-items-center rounded-md bg-brand-50 text-brand-600">
                    <Icon name={a.icon} className="h-4 w-4" />
                  </span>
                  <span className="min-w-0 flex-1 truncate">{a.label}</span>
                  <Icon
                    name="arrow"
                    className="h-3.5 w-3.5 shrink-0 text-brand-300 transition-transform group-hover:translate-x-0.5"
                  />
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-1 flex-col justify-between rounded-2xl bg-deepNavy p-6 text-white">
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
              onClick={onNavigate}
              className="inline-flex items-center justify-center gap-2 text-sm font-semibold text-white/90 hover:text-white"
            >
              <Icon name="whatsapp" className="h-4 w-4" />
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
