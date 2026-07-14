import SectionHeader from '../../shared/SectionHeader';
import ScrollReveal from '../../shared/ScrollReveal';

export default function Brands() {
  return (
    <section className="py-20 md:py-28 bg-surface relative overflow-hidden">
      <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
      <div className="container-page relative">
        <SectionHeader
          title="Brands We Deal In"
          subtitle="We work with the world's leading security brands to bring you the best technology and reliability."
        />

        <ScrollReveal>
          <div className="rounded-2xl overflow-hidden shadow-2xl shadow-black/10 ring-1 ring-black/5">
            <img
              src="/images/we-deals-brands.jpg"
              alt="Brands We Deal In"
              className="w-full h-auto object-contain"
              loading="lazy"
            />
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
