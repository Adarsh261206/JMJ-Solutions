import { Link } from 'react-router-dom';
import * as Icons from 'lucide-react';
import { ArrowRight } from 'lucide-react';
import SectionHeader from '../../shared/SectionHeader';
import Button from '../../shared/Button';
import ScrollReveal from '../../shared/ScrollReveal';
import { SERVICES } from '../../../utils/constants';

const iconMap = {
  Camera: Icons.Camera,
  DoorOpen: Icons.DoorOpen,
  Phone: Icons.Phone,
  Fingerprint: Icons.Fingerprint,
  ArrowLeftRight: Icons.ArrowLeftRight,
  Grid3x3: Icons.Grid3x3,
};

export default function ServicesSection() {
  return (
    <section id="services" className="py-20 md:py-28 bg-surface">
      <div className="container-page">
        <SectionHeader
          title="Our Services"
          subtitle="Comprehensive security solutions tailored to protect your premises. From surveillance to access control, we deliver excellence."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service, i) => {
            const Icon = iconMap[service.icon] || Icons.Shield;
            return (
              <ScrollReveal key={service.id} delay={i * 0.05}>
                <div className="group bg-white rounded-2xl p-8 border border-border hover:border-accent/30 transition-all duration-300 hover:shadow-xl">
                  <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-6 group-hover:bg-accent transition-colors duration-300">
                    <Icon className="w-7 h-7 text-accent group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h3 className="text-xl font-bold text-primary mb-3">{service.title}</h3>
                  <p className="text-text-secondary text-sm leading-relaxed mb-6">{service.shortDesc}</p>
                  <Link
                    to={`/services#${service.id}`}
                    className="inline-flex items-center gap-2 text-sm font-semibold text-accent hover:text-accent-light transition-colors"
                  >
                    Learn More <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </ScrollReveal>
            );
          })}
        </div>

        <ScrollReveal className="text-center mt-12">
          <Button to="/contact" variant="primary" size="lg">
            Request a Consultation
          </Button>
        </ScrollReveal>
      </div>
    </section>
  );
}
