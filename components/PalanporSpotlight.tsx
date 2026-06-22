import Link from 'next/link';
import Container from '@/components/Container';
import Img from '@/components/Img';
import { schoolBySlug } from '@/data/schools';

// Homepage flagship spotlight for the Palanpor campus. Pulls its photo, link
// and admission form from the Palanpor school data so it stays in sync.
const palanpor = schoolBySlug('palanpor')!;

export default function PalanporSpotlight() {
  return (
    <section className="bg-white section-y">
      <Container>
        <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-14">
          {/* Photo — on top when stacked on mobile */}
          <div className="overflow-hidden rounded-2xl shadow-soft">
            <Img
              src={palanpor.hero}
              alt={`${palanpor.name} campus`}
              className="aspect-[4/3] w-full object-cover"
            />
          </div>

          {/* Details */}
          <div>
            <span className="eyebrow">Flagship campus</span>
            <h2 className="mt-3 text-3xl leading-tight text-ink sm:text-4xl">
              L. P. Savani School, Palanpor
            </h2>
            <p className="mt-3 text-lg font-bold text-gold-600">
              Yahan Har कल्पना Banegi हकीकत
            </p>
            <p className="mt-4 text-base leading-relaxed text-ink-soft">
              Since 2010, our flagship campus in Palanpor has nurtured young minds through creativity,
              values, academic excellence and innovation. With a CBSE-aligned approach, it encourages
              students to dream, explore and turn imagination into achievement.
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              <span className="pill bg-brand-50 text-brand-700">Since 2010</span>
              <span className="pill bg-brand-50 text-brand-700">CBSE</span>
              <span className="pill bg-brand-50 text-brand-700">Palanpor, Canal Road</span>
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Link href="/schools/palanpor" className="btn-primary w-full sm:w-auto">
                Explore Palanpor campus
              </Link>
              <a
                href={palanpor.admissionLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gold w-full sm:w-auto"
              >
                Admission Enquiry
              </a>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
