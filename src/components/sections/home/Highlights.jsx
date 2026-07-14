import { Shield, Building2, Users, Headphones } from 'lucide-react';
import { useCountUp } from '../../../hooks/useCountUp';
import ScrollReveal from '../../shared/ScrollReveal';

function Counter({ end, suffix, label, icon: Icon }) {
  const { count, ref } = useCountUp(end);
  return (
    <div ref={ref} className="text-center group">
      <div className="w-14 h-14 rounded-2xl bg-white/10 backdrop-blur-sm flex items-center justify-center mx-auto mb-4 shadow-lg ring-1 ring-white/20 group-hover:bg-accent transition-all duration-500">
        <Icon className="w-6 h-6 text-white" />
      </div>
      <div className="text-3xl md:text-4xl font-bold text-white mb-1">
        {count}{suffix}
      </div>
      <div className="text-white/60 text-sm group-hover:text-white transition-colors duration-300">{label}</div>
    </div>
  );
}

export default function Highlights() {
  return (
    <section className="relative py-16 md:py-20 bg-primary overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.05)_0%,transparent_70%)] pointer-events-none" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <div className="container-page relative">
        <ScrollReveal className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          <Counter end={10} suffix="+" icon={Shield} label="Years of Experience" />
          <Counter end={500} suffix="+" icon={Building2} label="Projects Completed" />
          <Counter end={150} suffix="+" icon={Users} label="Happy Clients" />
          <Counter end={24} suffix="/7" icon={Headphones} label="Support Available" />
        </ScrollReveal>
      </div>
    </section>
  );
}
