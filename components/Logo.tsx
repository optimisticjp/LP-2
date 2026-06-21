type Props = { light?: boolean; className?: string };

export default function Logo({ light = false, className = '' }: Props) {
  return (
    <span className={`flex items-center gap-2.5 ${className}`}>
      <svg viewBox="0 0 48 48" className="h-10 w-10 shrink-0" role="img" aria-label="L. P. Savani School">
        <defs>
          <linearGradient id="lpsBadge" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#1b4d97" />
            <stop offset="100%" stopColor="#13233f" />
          </linearGradient>
        </defs>
        <rect x="2" y="2" width="44" height="44" rx="12" fill="url(#lpsBadge)" />
        <path d="M12 33c4-1 8-1 12 0 4-1 8-1 12 0" stroke="#d8a23a" strokeWidth="1.6" fill="none" strokeLinecap="round" />
        <text
          x="24"
          y="25"
          textAnchor="middle"
          fontFamily="Georgia, 'Times New Roman', serif"
          fontSize="15"
          fontWeight="700"
          letterSpacing="0.5"
          fill="#e3bd6e"
        >
          LPS
        </text>
      </svg>
      <span className="leading-tight">
        <span className={`block font-display text-lg font-semibold ${light ? 'text-white' : 'text-ink'}`}>
          L. P. Savani
        </span>
        <span className="block text-[11px] font-semibold uppercase tracking-[0.2em] text-gold-500">
          Palanpor &middot; Surat
        </span>
      </span>
    </span>
  );
}
