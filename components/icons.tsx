import type { IconName } from '@/data/facilities';

type Props = { name: IconName; className?: string };

// Lightweight stroke icons so the project ships with zero icon dependencies.
const paths: Record<IconName, React.ReactNode> = {
  book: (
    <>
      <path d="M4 5a2 2 0 0 1 2-2h11v16H6a2 2 0 0 0-2 2V5Z" />
      <path d="M17 3v16" />
    </>
  ),
  beaker: (
    <>
      <path d="M9 3h6" />
      <path d="M10 3v6l-4.5 8A2 2 0 0 0 7.3 20h9.4a2 2 0 0 0 1.8-3L14 9V3" />
      <path d="M7.5 14h9" />
    </>
  ),
  monitor: (
    <>
      <rect x="3" y="4" width="18" height="12" rx="2" />
      <path d="M8 20h8M12 16v4" />
    </>
  ),
  cpu: (
    <>
      <rect x="6" y="6" width="12" height="12" rx="2" />
      <path d="M9 1v3M15 1v3M9 20v3M15 20v3M1 9h3M1 15h3M20 9h3M20 15h3" />
      <rect x="10" y="10" width="4" height="4" />
    </>
  ),
  bus: (
    <>
      <path d="M4 6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v9H4V6Z" />
      <path d="M4 11h16" />
      <circle cx="7.5" cy="18" r="1.6" />
      <circle cx="16.5" cy="18" r="1.6" />
    </>
  ),
  shield: (
    <>
      <path d="M12 3l7 3v5c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6l7-3Z" />
      <path d="M9.5 12l1.8 1.8L15 10" />
    </>
  ),
  heart: <path d="M12 20s-7-4.3-9.2-8.4C1.3 8.6 2.8 5.5 6 5.5c1.9 0 3.1 1 4 2.2.9-1.2 2.1-2.2 4-2.2 3.2 0 4.7 3.1 3.2 6.1C19 15.7 12 20 12 20Z" />,
  utensils: (
    <>
      <path d="M7 3v8M5 3v4a2 2 0 0 0 2 2v0M9 3v4a2 2 0 0 1-2 2M7 11v10" />
      <path d="M16 3c-1.7 0-3 1.8-3 4s1.3 4 3 4v10" />
    </>
  ),
  music: (
    <>
      <path d="M9 18V5l10-2v13" />
      <circle cx="6" cy="18" r="3" />
      <circle cx="16" cy="16" r="3" />
    </>
  ),
  dumbbell: (
    <>
      <path d="M6 7v10M3 9v6M18 7v10M21 9v6M6 12h12" />
    </>
  ),
  building: (
    <>
      <rect x="5" y="3" width="14" height="18" rx="1" />
      <path d="M9 7h2M13 7h2M9 11h2M13 11h2M9 15h2M13 15h2M10 21v-3h4v3" />
    </>
  ),
  palette: (
    <>
      <path d="M12 3a9 9 0 1 0 0 18c1.1 0 2-.9 2-2 0-1.2-1-1.7-1-2.8 0-.7.6-1.2 1.3-1.2H17a4 4 0 0 0 4-4c0-4.4-4-8-9-8Z" />
      <circle cx="7.5" cy="11" r="1" />
      <circle cx="11" cy="7.5" r="1" />
      <circle cx="15.5" cy="9" r="1" />
    </>
  ),
};

export function Icon({ name, className }: Props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.6}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {paths[name]}
    </svg>
  );
}
