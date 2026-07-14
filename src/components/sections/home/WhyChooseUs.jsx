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
    <section className="py-20 md:py-28 bg-primary-dark relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-white/5 rounded-full blur-3xl pointer-events-none" />
      <div className="container-page relative">
        <SectionHeader
          title="Why Choose JMJ Solutions"
          subtitle="We don't just install security systems — we deliver peace of mind through expertise, quality, and unwavering support."
          light
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {WHY_CHOOSE_US.map((item, i) => {
            const Icon = iconMap[item.icon] || Icons.Shield;
            return (
              <ScrollReveal key={item.title} delay={i * 0.05}>
                <div className="group bg-white/10 backdrop-blur-sm rounded-2xl p-8 ring-1 ring-white/10 hover:ring-accent/40 transition-all duration-300 hover:bg-white/15 hover:-translate-y-1">
                  <div className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center mb-5 ring-1 ring-accent/30 group-hover:bg-accent transition-all duration-500">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-white/60 text-sm leading-relaxed">{item.description}</p>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
