import SectionHeader from '../../shared/SectionHeader';
import ScrollReveal from '../../shared/ScrollReveal';
import { BRANDS } from '../../../utils/constants';

export default function Brands() {
  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="container-page">
        <SectionHeader
          title="Our Channel Partners"
          subtitle="We work with the world's leading security brands to bring you the best technology and reliability."
        />

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
          {BRANDS.map((brand, i) => (
            <ScrollReveal key={brand.name} delay={i * 0.03}>
              <div className="h-16 flex items-center justify-center p-4">
                <div className="text-2xl md:text-3xl font-bold text-primary/60 hover:text-primary transition-colors duration-300">
                  {brand.name}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}