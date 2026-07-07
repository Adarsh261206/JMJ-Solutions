import { Camera, DoorOpen, Phone, Fingerprint, ArrowLeftRight, Grid3x3, Wifi, ScanLine, Moon, Monitor, Check, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../components/shared/SEO';
import ScrollReveal from '../components/shared/ScrollReveal';
import { PRODUCT_CATEGORIES, SERVICES } from '../utils/constants';

const iconMap = {
  Camera,
  DoorOpen,
  Phone,
  Fingerprint,
  ArrowLeftRight,
  Grid3x3,
  Wifi,
  ScanLine,
  Moon,
  Monitor,
};

function CategorySection({ category, index }) {
  const catProducts = SERVICES.filter((s) => category.productIds.includes(s.id));
  if (!catProducts.length) return null;
  const isEven = index % 2 === 0;

  return (
    <section className={`py-16 md:py-20 ${isEven ? 'bg-white' : 'bg-muted'}`}>
      <div className="container-page">
        <ScrollReveal>
          <div className="flex items-center gap-4 mb-10">
            <div className="w-14 h-14 rounded-2xl bg-primary flex items-center justify-center">
              <span className="text-white font-bold text-xl">{index + 1}</span>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-primary">{category.name}</h2>
              <p className="text-text-secondary">{category.description}</p>
            </div>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {catProducts.map((service) => {
            const Icon = iconMap[service.icon];
            return (
              <ScrollReveal key={service.id}>
                <div className="group bg-white rounded-2xl overflow-hidden border border-border hover:border-accent/30 hover:shadow-xl transition-all duration-300">
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4 flex items-center gap-3">
                      {Icon && (
                        <div className="w-10 h-10 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center">
                          <Icon className="w-5 h-5 text-white" />
                        </div>
                      )}
                      <h3 className="text-white font-bold text-lg drop-shadow-lg">{service.title}</h3>
                    </div>
                  </div>
                  <div className="p-5">
                    <p className="text-text-secondary text-sm leading-relaxed mb-4 line-clamp-2">{service.shortDesc}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {service.benefits.slice(0, 3).map((b) => (
                        <span key={b} className="text-xs bg-accent/5 text-accent px-2.5 py-1 rounded-full font-medium truncate max-w-full">
                          {b}
                        </span>
                      ))}
                    </div>
                    <div className="flex gap-3">
                      <Link
                        to={`/product/${service.id}`}
                        className="flex-1 text-center bg-primary text-white font-semibold rounded-lg px-4 py-2.5 hover:bg-primary-light transition-colors text-sm"
                      >
                        View Details
                      </Link>
                      <Link
                        to="/contact"
                        className="flex-1 text-center bg-accent text-white font-semibold rounded-lg px-4 py-2.5 hover:bg-accent-light transition-colors text-sm"
                      >
                        Get Quote
                      </Link>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

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

      {PRODUCT_CATEGORIES.map((cat, i) => (
        <CategorySection key={cat.name} category={cat} index={i} />
      ))}
    </>
  );
}
