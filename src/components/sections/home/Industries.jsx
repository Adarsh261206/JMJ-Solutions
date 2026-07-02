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
    <section id="industries" className="py-20 md:py-28 bg-surface">
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
                <div className="bg-white rounded-2xl p-6 border border-border hover:border-accent/30 transition-all duration-300 hover:shadow-lg group">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                    <Icon className="w-6 h-6 text-primary group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h3 className="font-semibold text-primary mb-1">{industry.name}</h3>
                  <p className="text-text-secondary text-sm">{industry.description}</p>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}