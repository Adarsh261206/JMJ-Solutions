import * as Icons from 'lucide-react';
import SectionHeader from '../../shared/SectionHeader';
import ScrollReveal from '../../shared/ScrollReveal';
import { INDUSTRIES } from '../../../utils/constants';

const iconMap = {
  Building2: Icons.Building2,
  ShoppingBag: Icons.ShoppingBag,
  Building: Icons.Building,
  GraduationCap: Icons.GraduationCap,
  Warehouse: Icons.Warehouse,
  UtensilsCrossed: Icons.UtensilsCrossed,
  HeartPulse: Icons.HeartPulse,
  Factory: Icons.Factory,
};

export default function Industries() {
  return (
    <section id="industries" className="py-20 md:py-28 bg-white">
      <div className="container-page">
        <SectionHeader
          title="Industries We Serve"
          subtitle="Our expertise spans across diverse sectors. We understand the unique security challenges of each industry."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {INDUSTRIES.map((industry, i) => {
            const Icon = iconMap[industry.icon] || Icons.Building2;
            return (
              <ScrollReveal key={industry.name} delay={i * 0.03}>
                <div className="group relative rounded-2xl overflow-hidden h-64 border border-border hover:shadow-xl transition-all duration-300">
                  <img
                    src={industry.image}
                    alt={industry.name}
                    width={600}
                    height={400}
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/90 via-primary-dark/40 to-transparent group-hover:from-primary-dark/95 transition-all duration-300" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <div className="w-10 h-10 rounded-lg bg-white/20 backdrop-blur-sm flex items-center justify-center mb-3 group-hover:bg-accent transition-colors duration-300">
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                    <h3 className="font-bold text-white text-lg mb-1">{industry.name}</h3>
                    <p className="text-white/70 text-sm leading-relaxed">{industry.description}</p>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
