import Img from '@/components/Img';
import { Icon, type IconName } from '@/components/icons';

type Props = {
  title: string;
  description: string;
  image: string;
  icon: IconName;
};

export default function FacilityCard({ title, description, image, icon }: Props) {
  return (
    <article className="card card-hover group overflow-hidden">
      <div className="relative aspect-[4/3] overflow-hidden">
        <Img
          src={image}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <span className="absolute left-3 top-3 grid h-10 w-10 place-items-center rounded-xl bg-white/90 text-brand-600 shadow-soft backdrop-blur">
          <Icon name={icon} className="h-5 w-5" />
        </span>
      </div>
      <div className="p-5">
        <h3 className="text-base font-bold text-ink">{title}</h3>
        <p className="mt-1.5 text-sm leading-relaxed text-ink-soft">{description}</p>
      </div>
    </article>
  );
}
