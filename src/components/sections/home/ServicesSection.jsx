import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import SectionHeader from '../../shared/SectionHeader';
import Button from '../../shared/Button';
import ScrollReveal from '../../shared/ScrollReveal';
import { SERVICES } from '../../../utils/constants';

export default function ServicesSection() {
  return (
    <section id="services" className="py-20 md:py-28 bg-surface">
      <div className="container-page">
        <SectionHeader
          title="Our Products"
          subtitle="Premium-quality security and surveillance products for comprehensive protection of your home and business."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service, i) => (
            <ScrollReveal key={service.id} delay={i * 0.05}>
              <div className="group bg-white rounded-2xl overflow-hidden border border-border hover:border-accent/30 transition-all duration-300 hover:shadow-xl">
                <div className="relative h-52 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-white font-bold text-lg drop-shadow-lg">{service.title}</h3>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-text-secondary text-sm leading-relaxed mb-4 line-clamp-2">{service.shortDesc}</p>
                  <Link
                    to={`/product/${service.id}`}
                    className="inline-flex items-center gap-2 text-sm font-semibold text-accent hover:text-accent-light transition-colors"
                  >
                    View Details <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </ScrollReveal>
          ))}
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
