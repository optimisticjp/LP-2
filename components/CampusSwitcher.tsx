'use client';

import { useRef, useState } from 'react';
import Link from 'next/link';
import Img from '@/components/Img';
import { Icon } from '@/components/icons';
import { schools, type School } from '@/data/schools';

// Group campuses by their real board value, in a fixed display order.
const boardOrder = ['CBSE', 'GSEB', 'GSEB & CBSE'];
const boardGroups = boardOrder
  .map((board) => ({ board, list: schools.filter((s) => s.board === board) }))
  .filter((g) => g.list.length > 0);

const areaOptions = [...schools.map((s) => s.shortName), 'Other Surat area'];
const boardSelectOptions = ['CBSE', 'GSEB', 'Not sure'];
const gradeOptions = ['Nursery/KG', '1-5', '6-8', '9-10', '11-12', 'Not sure'];

type Tab = 'location' | 'board';
const TABS: { id: Tab; label: string }[] = [
  { id: 'location', label: 'By Location' },
  { id: 'board', label: 'By Board' },
];

const selectCls =
  'mt-1 w-full rounded-xl border border-cloud bg-white px-3 py-2.5 text-base text-ink transition-colors focus:border-brand-400 focus:outline-none';

function CampusCard({ s }: { s: School }) {
  return (
    <article className="card flex h-full flex-col overflow-hidden">
      <div className="relative aspect-[16/10] overflow-hidden">
        <Img src={s.thumb} alt={`${s.name} campus`} className="h-full w-full object-cover" />
        <span className="pill absolute left-3 top-3 bg-white/90 text-brand-700 shadow-soft">{s.board}</span>
      </div>
      <div className="flex flex-1 flex-col p-4">
        <h4 className="text-base font-bold text-ink">{s.shortName}</h4>
        <p className="mt-1 flex items-center gap-1.5 text-sm text-ink-muted">
          <Icon name="pin" className="h-4 w-4 shrink-0 text-brand-500" />
          <span className="truncate">{s.location}</span>
        </p>
        <div className="mt-auto flex flex-col gap-2 pt-4">
          <Link href={`/schools/${s.slug}`} className="btn-primary w-full">
            View Campus
          </Link>
          <a href={s.admissionLink} target="_blank" rel="noopener noreferrer" className="btn-secondary w-full">
            Admission Enquiry
          </a>
        </div>
      </div>
    </article>
  );
}

export default function CampusSwitcher() {
  const [tab, setTab] = useState<Tab>('location');
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);

  const [area, setArea] = useState('');
  const [board, setBoard] = useState('');
  const [grade, setGrade] = useState('');
  const [result, setResult] = useState<{ school?: School; message: string; note?: string } | null>(null);

  function onTabKey(e: React.KeyboardEvent, idx: number) {
    let next = idx;
    if (e.key === 'ArrowRight') next = (idx + 1) % TABS.length;
    else if (e.key === 'ArrowLeft') next = (idx - 1 + TABS.length) % TABS.length;
    else if (e.key === 'Home') next = 0;
    else if (e.key === 'End') next = TABS.length - 1;
    else return;
    e.preventDefault();
    setTab(TABS[next].id);
    tabRefs.current[next]?.focus();
  }

  function findCampus() {
    let school: School | undefined;
    // 1) Area match takes priority.
    if (area && area !== 'Other Surat area') {
      school = schools.find((s) => s.shortName === area);
    }
    // 2) Otherwise fall back to a board preference (prefer an exact-board campus).
    if (!school && board && board !== 'Not sure') {
      school = schools.find((s) => s.board === board) ?? schools.find((s) => s.board.includes(board));
    }
    const message = school
      ? `${school.shortName} looks like a strong fit based on your answers.`
      : 'Our admissions team can help you choose the right campus.';
    // Grade is collected but not used to filter (no per-campus grade data).
    const note =
      grade && grade !== 'Not sure'
        ? `The admissions team will confirm availability for ${grade} when you enquire.`
        : undefined;
    setResult({ school, message, note });
  }

  return (
    <div className="overflow-hidden rounded-3xl border border-cloud bg-white shadow-card">
      <div className="grid lg:grid-cols-[1fr_340px]">
        {/* Campus browser */}
        <div className="p-5 sm:p-6 lg:p-7">
          <div
            role="tablist"
            aria-label="Browse campuses"
            className="inline-flex rounded-full border border-cloud bg-mist p-1"
          >
            {TABS.map((t, i) => {
              const active = tab === t.id;
              return (
                <button
                  key={t.id}
                  ref={(el) => {
                    tabRefs.current[i] = el;
                  }}
                  role="tab"
                  id={`campus-tab-${t.id}`}
                  aria-selected={active}
                  aria-controls={`campus-panel-${t.id}`}
                  tabIndex={active ? 0 : -1}
                  onClick={() => setTab(t.id)}
                  onKeyDown={(e) => onTabKey(e, i)}
                  className={`min-h-[44px] rounded-full px-4 py-2.5 text-sm font-semibold transition-colors ${
                    active ? 'bg-brand-600 text-white shadow-soft' : 'text-ink-soft hover:text-ink'
                  }`}
                >
                  {t.label}
                </button>
              );
            })}
          </div>

          {/* By Location */}
          <div
            role="tabpanel"
            id="campus-panel-location"
            aria-labelledby="campus-tab-location"
            hidden={tab !== 'location'}
            className="mt-5"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              {schools.map((s) => (
                <CampusCard key={s.slug} s={s} />
              ))}
            </div>
          </div>

          {/* By Board */}
          <div
            role="tabpanel"
            id="campus-panel-board"
            aria-labelledby="campus-tab-board"
            hidden={tab !== 'board'}
            className="mt-5 space-y-7"
          >
            {boardGroups.map((g) => (
              <div key={g.board}>
                <h3 className="mb-3 flex flex-wrap items-center gap-x-2 text-sm font-bold uppercase tracking-wider text-ink-muted">
                  {g.board}
                  <span className="font-medium text-brand-300">·</span>
                  <span className="font-medium normal-case">
                    {g.list.length} {g.list.length === 1 ? 'campus' : 'campuses'}
                  </span>
                </h3>
                <div className="grid gap-4 sm:grid-cols-2">
                  {g.list.map((s) => (
                    <CampusCard key={s.slug} s={s} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Guidance — "Not sure?" helper */}
        <aside className="border-t border-cloud bg-mist p-5 sm:p-6 lg:border-l lg:border-t-0">
          <span className="inline-grid h-10 w-10 place-items-center rounded-xl bg-brand-50 text-brand-600">
            <Icon name="sparkle" className="h-5 w-5" />
          </span>
          <h3 className="mt-3 text-lg font-bold text-ink">Not sure which branch is right?</h3>
          <p className="mt-1.5 text-sm leading-relaxed text-ink-soft">
            Answer three quick questions and we&rsquo;ll point you to a campus. Nothing is sent anywhere.
          </p>

          <div className="mt-4 space-y-3">
            <label className="block">
              <span className="text-sm font-semibold text-ink">Where do you live?</span>
              <select value={area} onChange={(e) => setArea(e.target.value)} className={selectCls}>
                <option value="">Select area</option>
                {areaOptions.map((o) => (
                  <option key={o} value={o}>
                    {o}
                  </option>
                ))}
              </select>
            </label>
            <label className="block">
              <span className="text-sm font-semibold text-ink">Preferred board?</span>
              <select value={board} onChange={(e) => setBoard(e.target.value)} className={selectCls}>
                <option value="">Select board</option>
                {boardSelectOptions.map((o) => (
                  <option key={o} value={o}>
                    {o}
                  </option>
                ))}
              </select>
            </label>
            <label className="block">
              <span className="text-sm font-semibold text-ink">Child&rsquo;s grade?</span>
              <select value={grade} onChange={(e) => setGrade(e.target.value)} className={selectCls}>
                <option value="">Select grade</option>
                {gradeOptions.map((o) => (
                  <option key={o} value={o}>
                    {o}
                  </option>
                ))}
              </select>
            </label>
          </div>

          <button type="button" onClick={findCampus} className="btn-primary mt-4 w-full">
            Find my campus
          </button>

          {result ? (
            <div className="mt-4 rounded-2xl border border-brand-100 bg-white p-4 shadow-soft">
              <p className="flex items-start gap-2 text-sm font-semibold text-ink">
                <Icon
                  name={result.school ? 'check' : 'sparkle'}
                  className="mt-0.5 h-4 w-4 shrink-0 text-leaf-500"
                />
                {result.message}
              </p>
              {result.school ? (
                <div className="mt-3 rounded-xl border border-cloud bg-brand-50/60 p-3">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="font-bold text-ink">{result.school.shortName}</span>
                    <span className="pill bg-white text-brand-700">{result.school.board}</span>
                  </div>
                  <p className="mt-1.5 flex items-center gap-1.5 text-xs text-ink-muted">
                    <Icon name="pin" className="h-3.5 w-3.5 text-brand-500" />
                    {result.school.location}
                  </p>
                  <div className="mt-3 flex items-center gap-2">
                    <Link href={`/schools/${result.school.slug}`} className="btn-primary flex-1">
                      View Campus
                    </Link>
                    <a
                      href={result.school.admissionLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-secondary"
                    >
                      Admission Enquiry
                    </a>
                  </div>
                </div>
              ) : null}
              {result.note ? <p className="mt-2 text-xs leading-relaxed text-ink-muted">{result.note}</p> : null}
            </div>
          ) : null}

          <div className="mt-4 flex flex-col gap-2">
            <Link href="/admissions" className="btn-gold w-full">
              Talk to Admissions
            </Link>
            <Link href="/schools#compare" className="btn-secondary w-full">
              Compare Campuses
            </Link>
          </div>
        </aside>
      </div>
    </div>
  );
}
