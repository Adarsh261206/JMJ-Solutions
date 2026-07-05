import { Search, ClipboardCheck, Camera, Monitor, Headphones } from 'lucide-react';
import SectionHeader from '../../shared/SectionHeader';
import ScrollReveal from '../../shared/ScrollReveal';
import { PROCESS_STEPS } from '../../../utils/constants';

const iconMap = {
  1: Search,
  2: ClipboardCheck,
  3: Camera,
  4: Monitor,
  5: Headphones,
};

export default function Process() {
  return (
    <section id="process" className="py-20 md:py-28 bg-primary-dark relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="container-page relative z-10">
        <SectionHeader
          title="How We Work"
          subtitle="Our proven 5-step process ensures your security system is designed, installed, and supported with precision and care."
          light
        />

        <div className="grid md:grid-cols-5 gap-6 relative">
          <div className="hidden md:block absolute top-16 left-[10%] right-[10%] h-0.5 bg-gradient-to-r from-accent/20 via-accent/50 to-accent/20" />

          {PROCESS_STEPS.map((step, i) => {
            const Icon = iconMap[step.step];
            return (
              <ScrollReveal key={step.step} delay={i * 0.1}>
                <div className="relative flex flex-col items-center text-center group">
                  <div className="relative z-10 w-16 h-16 rounded-full bg-white/10 backdrop-blur-sm border-2 border-accent/30 flex items-center justify-center mb-4 group-hover:bg-accent group-hover:border-accent transition-all duration-300">
                    <Icon className="w-7 h-7 text-white group-hover:text-white transition-colors" />
                  </div>
                  <div className="absolute -top-1 -right-1 w-7 h-7 rounded-full bg-accent flex items-center justify-center text-xs font-bold text-white z-20 shadow-lg">
                    {step.step}
                  </div>
                  <h3 className="text-white font-bold text-lg mb-2">{step.title}</h3>
                  <p className="text-white/60 text-sm leading-relaxed">{step.description}</p>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
