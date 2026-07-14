import { Shield, Building2, Users, Headphones } from 'lucide-react';
import { useCountUp } from '../../../hooks/useCountUp';
import ScrollReveal from '../../shared/ScrollReveal';

function Counter({ end, suffix, label, icon: Icon }) {
  const { count, ref } = useCountUp(end);
  return (
    <div ref={ref} className="text-center group">
      <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-accent/10 to-accent/5 flex items-center justify-center mx-auto mb-4 shadow-lg shadow-accent/10 ring-1 ring-accent/10 group-hover:from-accent group-hover:to-accent-light group-hover:text-white transition-all duration-500">
        <Icon className="w-6 h-6 text-accent group-hover:text-white transition-colors duration-500" />
      </div>
      <div className="text-3xl md:text-4xl font-bold text-primary mb-1">
        {count}{suffix}
      </div>
      <div className="text-text-secondary text-sm group-hover:text-accent transition-colors duration-300">{label}</div>
    </div>
  );
}

export default function Highlights() {
  return (
    <section className="relative py-16 md:py-20 bg-gradient-to-b from-white via-surface to-white overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(192,57,43,0.03)_0%,transparent_70%)] pointer-events-none" />
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
