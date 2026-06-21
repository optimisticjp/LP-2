import { Icon } from '@/components/icons';
import { whatsappLink } from '@/data/site';

// Desktop floating action button. On mobile the sticky bottom bar covers this,
// so it is hidden below lg.
export default function FloatingWhatsAppButton() {
  return (
    <a
      href={whatsappLink('Hi, I would like to know more about admissions at L. P. Savani.')}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="group fixed bottom-6 right-6 z-30 hidden items-center gap-2 rounded-btn bg-[#22B455] px-4 py-3.5 text-sm font-semibold text-white shadow-lift transition-transform hover:-translate-y-0.5 lg:inline-flex"
    >
      <Icon name="whatsapp" className="h-5 w-5" />
      <span className="max-w-0 overflow-hidden whitespace-nowrap opacity-0 transition-all duration-300 group-hover:max-w-[140px] group-hover:opacity-100">
        Chat with us
      </span>
    </a>
  );
}
