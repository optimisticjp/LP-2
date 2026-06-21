type Props = {
  value: string;
  label: string;
  sub?: string;
  light?: boolean;
};

export default function StatCard({ value, label, sub, light = false }: Props) {
  return (
    <div
      className={`rounded-2xl border p-6 text-center sm:p-7 ${
        light
          ? 'border-white/15 bg-white/10 backdrop-blur'
          : 'border-brand-50 bg-white shadow-soft'
      }`}
    >
      <div
        className={`font-display text-4xl font-semibold sm:text-5xl ${
          light ? 'text-gold-300' : 'text-brand-600'
        }`}
      >
        {value}
      </div>
      <div className={`mt-2 text-sm font-semibold ${light ? 'text-white' : 'text-ink'}`}>
        {label}
      </div>
      {sub ? (
        <div className={`mt-1 text-xs ${light ? 'text-brand-100' : 'text-ink-muted'}`}>{sub}</div>
      ) : null}
    </div>
  );
}
