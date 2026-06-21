import { Icon, type IconName } from '@/components/icons';

export default function ProposalCard({
  title,
  body,
  icon,
}: {
  title: string;
  body: string;
  icon?: IconName;
}) {
  return (
    <div className="card h-full p-5">
      {icon ? (
        <span className="grid h-11 w-11 place-items-center rounded-xl bg-brand-50 text-brand-600">
          <Icon name={icon} className="h-5 w-5" />
        </span>
      ) : null}
      <h3 className="mt-4 text-base font-bold text-ink">{title}</h3>
      <p className="mt-1.5 text-sm leading-relaxed text-ink-soft">{body}</p>
    </div>
  );
}
