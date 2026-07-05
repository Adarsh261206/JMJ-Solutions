import SectionHeader from '../../shared/SectionHeader';
import ScrollReveal from '../../shared/ScrollReveal';

export default function Brands() {
  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="container-page">
        <SectionHeader
          title="Brands We Deal In"
          subtitle="We work with the world's leading security brands to bring you the best technology and reliability."
        />

        <ScrollReveal>
          <div className="rounded-2xl overflow-hidden shadow-lg border border-border">
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
