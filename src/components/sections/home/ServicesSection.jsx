import { Link } from 'react-router-dom';
import { ArrowRight, Shield } from 'lucide-react';
import SectionHeader from '../../shared/SectionHeader';
import Button from '../../shared/Button';
import ScrollReveal from '../../shared/ScrollReveal';
import { PRODUCT_CATEGORIES, SERVICES } from '../../../utils/constants';

const categoryColors = {
  'CCTV Cameras': { from: 'from-blue-600', to: 'to-indigo-700', badge: 'bg-blue-500/20 text-blue-200' },
  'Recording & Storage': { from: 'from-purple-600', to: 'to-violet-700', badge: 'bg-purple-500/20 text-purple-200' },
  'Access Control': { from: 'from-emerald-600', to: 'to-teal-700', badge: 'bg-emerald-500/20 text-emerald-200' },
  'Communication': { from: 'from-amber-600', to: 'to-orange-700', badge: 'bg-amber-500/20 text-amber-200' },
};

function CategorySection({ category, index }) {
  const catProducts = SERVICES.filter((s) => category.productIds.includes(s.id));
  if (!catProducts.length) return null;
  const colors = categoryColors[category.name] || { from: 'from-primary', to: 'to-primary-dark', badge: '' };

  return (
    <div className="mb-16 last:mb-0">
      <ScrollReveal>
        <div className="group/banner mb-8">
          <div className={`relative overflow-hidden rounded-2xl border border-border/60 p-6 md:p-8 transition-all duration-500 hover:shadow-lg hover:border-transparent bg-white hover:bg-gradient-to-r ${colors.from} ${colors.to}`}>
            <div className="absolute top-0 right-0 w-48 h-48 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl opacity-0 group-hover/banner:opacity-100 transition-opacity duration-500" />
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2 blur-2xl opacity-0 group-hover/banner:opacity-100 transition-opacity duration-500" />
            <div className="relative z-10 flex items-center gap-4">
              <div className={`w-14 h-14 rounded-2xl flex items-center justify-center shrink-0 border transition-all duration-500 bg-surface ${colors.badge} border-border/60 group-hover/banner:bg-white/15 group-hover/banner:border-white/10`}>
                <span className={`font-bold text-xl transition-colors duration-500 text-text-secondary group-hover/banner:text-white`}>{index + 1}</span>
              </div>
              <div className="flex-1 min-w-0">
                <h3 className={`text-xl md:text-2xl font-bold transition-colors duration-500 text-text-primary group-hover/banner:text-white`}>{category.name}</h3>
                <p className={`text-sm mt-0.5 transition-colors duration-500 text-text-secondary group-hover/banner:text-white/80`}>{category.description}</p>
              </div>
              <Link
                to="/services"
                className="hidden sm:inline-flex items-center gap-2 text-xs font-semibold text-text-secondary group-hover/banner:text-white/90 hover:!text-white bg-surface group-hover/banner:bg-white/10 hover:!bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full border border-border/60 group-hover/banner:border-white/10 transition-all"
              >
                View All <ArrowRight className="w-3 h-3" />
              </Link>
            </div>
          </div>
        </div>
      </ScrollReveal>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
        {catProducts.map((service, i) => (
          <ScrollReveal key={service.id} delay={i * 0.04}>
            <Link to={`/product/${service.id}`} className="group block">
              <div className="bg-white rounded-2xl overflow-hidden shadow-lg shadow-black/5 ring-1 ring-black/5 hover:ring-accent/30 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1.5 h-full">
                <div className="relative h-52 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-3 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                    <h4 className="text-white font-bold text-lg drop-shadow-lg">{service.title}</h4>
                  </div>
                </div>
                <div className="p-5">
                  <p className="text-text-secondary text-sm leading-relaxed line-clamp-2 mb-4">{service.shortDesc}</p>
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {service.benefits.slice(0, 3).map((b) => (
                      <span key={b} className="text-[11px] font-medium bg-gradient-to-r from-accent/5 to-accent/10 text-accent px-2.5 py-1 rounded-full truncate max-w-full ring-1 ring-accent/10">
                        {b}
                      </span>
                    ))}
                  </div>
                  <span className="inline-flex items-center gap-2 text-sm font-semibold text-accent group-hover:text-accent-light transition-colors">
                    View Details <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </div>
            </Link>
          </ScrollReveal>
        ))}
      </div>
    </div>
  );
}

export default function ServicesSection() {
  return (
    <section id="services" className="py-20 md:py-28 bg-gradient-to-b from-surface via-white to-surface relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-64 bg-gradient-to-b from-accent/[0.03] to-transparent pointer-events-none" />
      <div className="absolute bottom-0 -left-20 w-80 h-80 bg-primary/[0.03] rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 -right-20 w-96 h-96 bg-accent/[0.02] rounded-full blur-3xl pointer-events-none" />
      <div className="container-page relative">
        <SectionHeader
          title="Our Products"
          subtitle="Premium-quality security and surveillance products for comprehensive protection of your home and business."
        />

        {PRODUCT_CATEGORIES.map((cat, i) => (
          <CategorySection key={cat.name} category={cat} index={i} />
        ))}

        <ScrollReveal className="text-center mt-8">
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-accent/5 to-accent/10 border border-accent/10 rounded-2xl px-8 py-5 shadow-lg shadow-accent/5">
            <Shield className="w-5 h-5 text-accent shrink-0" />
            <p className="text-sm text-text-secondary">
              Not sure which product fits your needs? <Link to="/contact" className="text-accent font-semibold hover:underline">Get a free consultation</Link>
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
