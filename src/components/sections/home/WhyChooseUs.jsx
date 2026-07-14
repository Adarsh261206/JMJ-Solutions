import * as Icons from 'lucide-react';
import SectionHeader from '../../shared/SectionHeader';
import ScrollReveal from '../../shared/ScrollReveal';
import { WHY_CHOOSE_US } from '../../../utils/constants';

const iconMap = {
  Shield: Icons.Shield,
  BadgeCheck: Icons.BadgeCheck,
  Zap: Icons.Zap,
  Award: Icons.Award,
  IndianRupee: Icons.IndianRupee,
  Headphones: Icons.Headphones,
};

export default function WhyChooseUs() {
  return (
    <section className="py-20 md:py-28 bg-gradient-to-b from-surface via-white to-surface relative overflow-hidden">
      <div className="absolute top-10 left-10 w-60 h-60 bg-accent/[0.04] rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-60 h-60 bg-primary/[0.04] rounded-full blur-3xl pointer-events-none" />
      <div className="container-page relative">
        <SectionHeader
          title="Why Choose JMJ Solutions"
          subtitle="We don't just install security systems — we deliver peace of mind through expertise, quality, and unwavering support."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {WHY_CHOOSE_US.map((item, i) => {
            const Icon = iconMap[item.icon] || Icons.Shield;
            return (
              <ScrollReveal key={item.title} delay={i * 0.05}>
                <div className="group bg-white rounded-2xl p-8 shadow-lg shadow-black/5 ring-1 ring-black/5 hover:ring-accent/20 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent/10 to-accent/5 flex items-center justify-center mb-5 ring-1 ring-accent/10 group-hover:from-accent group-hover:to-accent-light group-hover:ring-accent/30 transition-all duration-500">
                    <Icon className="w-6 h-6 text-accent group-hover:text-white transition-colors duration-500" />
                  </div>
                  <h3 className="text-lg font-bold text-primary mb-2">{item.title}</h3>
                  <p className="text-text-secondary text-sm leading-relaxed">{item.description}</p>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
