import * as Icons from 'lucide-react';
import SectionHeader from '../../shared/SectionHeader';
import ScrollReveal from '../../shared/ScrollReveal';
import { PROCESS_STEPS } from '../../../utils/constants';

const iconMap = {
  1: Icons.MessageSquare,
  2: Icons.ClipboardList,
  3: Icons.Wrench,
  4: Icons.CheckCircle2,
  5: Icons.Headphones,
};

export default function Process() {
  return (
    <section id="process" className="py-20 md:py-28 bg-background">
      <div className="container-page">
        <SectionHeader
          title="Our Process"
          subtitle="A streamlined, professional approach to delivering your security solution from concept to completion."
        />

        <div className="relative">
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-accent/30 to-transparent -translate-x-1/2" />

          <div className="space-y-12 md:space-y-16">
            {PROCESS_STEPS.map((step, i) => {
              const Icon = iconMap[step.step];
              return (
                <ScrollReveal key={step.step} direction={i % 2 === 0 ? 'left' : 'right'}>
                  <div className="flex gap-6 md:gap-8 relative z-10">
                    <div className="flex flex-col items-center shrink-0 w-16 md:w-20 relative">
                      <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-white border-4 border-primary flex items-center justify-center z-10">
                        <span className="text-xl md:text-2xl font-bold text-primary">{step.step}</span>
                      </div>
                      {i < PROCESS_STEPS.length - 1 && (
                        <div className="absolute top-14 left-1/2 w-0.5 h-full bg-border -translate-x-1/2 hidden lg:block" />
                      )}
                    </div>
                    <div className="flex-1 pt-2">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                        <Icon className="w-6 h-6 text-primary" />
                      </div>
                      <h3 className="text-xl font-bold text-primary mb-2">{step.title}</h3>
                      <p className="text-text-secondary leading-relaxed">{step.description}</p>
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}