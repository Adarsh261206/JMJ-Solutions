import { Camera, DoorOpen, Phone, Fingerprint, ArrowLeftRight, Grid3x3, Check, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../components/shared/SEO';
import ScrollReveal from '../components/shared/ScrollReveal';
import { SERVICES } from '../utils/constants';

const iconMap = {
  Camera,
  DoorOpen,
  Phone,
  Fingerprint,
  ArrowLeftRight,
  Grid3x3,
};

export default function Services() {
  return (
    <>
      <SEO title="Our Products" />

      <section className="relative bg-primary-dark py-24 text-white overflow-hidden">
        <div className="absolute inset-0">
          <img src="/images/hero-2.jpg" alt="" className="w-full h-full object-cover opacity-30" />
          <div className="absolute inset-0 bg-gradient-to-r from-primary-dark/95 to-primary-dark/80" />
        </div>
        <div className="container-page relative z-10">
          <ScrollReveal>
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-6">
              <Shield className="w-4 h-4 text-accent-light" />
              <span className="text-white/80 text-sm font-medium">Premium Security Solutions</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Products & Services</h1>
            <p className="text-lg text-white/80 max-w-2xl">
              Comprehensive security and surveillance solutions tailored to your needs
            </p>
          </ScrollReveal>
        </div>
      </section>

      {SERVICES.map((service, i) => {
        const Icon = iconMap[service.icon];
        const isEven = i % 2 === 0;

        return (
          <section
            key={service.id}
            id={service.id}
            className={`py-20 ${isEven ? 'bg-white' : 'bg-muted'}`}
          >
            <div className="container-page">
              <div className={`grid md:grid-cols-2 gap-12 items-center ${isEven ? '' : 'md:direction-rtl'}`}>
                <ScrollReveal direction={isEven ? 'left' : 'right'}>
                  <div className="rounded-2xl overflow-hidden h-72 md:h-96 shadow-xl">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                </ScrollReveal>

                <ScrollReveal direction={isEven ? 'right' : 'left'}>
                  {Icon && (
                    <div className="w-14 h-14 bg-accent/10 rounded-xl flex items-center justify-center mb-4">
                      <Icon className="w-7 h-7 text-accent" />
                    </div>
                  )}
                  <h2 className="text-3xl font-bold text-primary mb-4">{service.title}</h2>
                  <p className="text-gray-600 mb-6">{service.description}</p>

                  <div className="mb-6">
                    <h4 className="font-semibold text-primary mb-3">Key Benefits</h4>
                    <ul className="space-y-2">
                      {service.benefits.map((benefit) => (
                        <li key={benefit} className="flex items-start gap-2 text-gray-600">
                          <Check className="w-5 h-5 text-accent mt-0.5 shrink-0" />
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-semibold text-primary mb-2">Industries Served</h4>
                    <div className="flex flex-wrap gap-2">
                      {service.industries.map((ind) => (
                        <span key={ind} className="text-xs bg-primary/10 text-primary px-3 py-1 rounded-full font-medium">
                          {ind}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-3">
                    <Link
                      to={`/product/${service.id}`}
                      className="inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-300 px-6 py-3 bg-primary text-white hover:bg-primary-light shadow-lg hover:shadow-xl active:scale-[0.98]"
                    >
                      View Product Page
                    </Link>
                    <Link
                      to="/contact"
                      className="inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-300 px-6 py-3 bg-accent text-white hover:bg-accent-light shadow-lg hover:shadow-xl active:scale-[0.98]"
                    >
                      Get a Free Quote
                    </Link>
                  </div>
                </ScrollReveal>
              </div>
            </div>
          </section>
        );
      })}
    </>
  );
}
