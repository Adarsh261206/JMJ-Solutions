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
    <section className="py-20 md:py-28 bg-background">
      <div className="container-page">
        <SectionHeader
          title="Why Choose JMJ Solutions"
          subtitle="We don't just install security systems — we deliver peace of mind through expertise, quality, and unwavering support."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {WHY_CHOOSE_US.map((item, i) => {
            const Icon = iconMap[item.icon] || Icons.Shield;
            return (
              <ScrollReveal key={item.title} delay={i * 0.05}>
                <div className="bg-white rounded-2xl p-8 border border-border hover:border-accent/30 transition-all duration-300 hover:shadow-xl">
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-5">
                    <Icon className="w-6 h-6 text-accent" />
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