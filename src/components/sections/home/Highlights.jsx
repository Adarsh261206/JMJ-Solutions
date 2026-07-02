import { Shield, Building2, Users, Headphones } from 'lucide-react';
import { useCountUp } from '../../../hooks/useCountUp';
import ScrollReveal from '../../shared/ScrollReveal';

function Counter({ end, suffix, label, icon: Icon }) {
  const { count, ref } = useCountUp(end);
  return (
    <div ref={ref} className="text-center">
      <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mx-auto mb-4">
        <Icon className="w-6 h-6 text-accent" />
      </div>
      <div className="text-3xl md:text-4xl font-bold text-primary mb-1">
        {count}{suffix}
      </div>
      <div className="text-text-secondary text-sm">{label}</div>
    </div>
  );
}

export default function Highlights() {
  return (
    <section className="py-16 md:py-20 bg-surface">
      <div className="container-page">
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
