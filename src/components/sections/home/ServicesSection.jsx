import { useState, useRef, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronLeft, ChevronRight, Shield } from 'lucide-react';
import SectionHeader from '../../shared/SectionHeader';
import ScrollReveal from '../../shared/ScrollReveal';
import { PRODUCT_CATEGORIES, SERVICES } from '../../../utils/constants';

const catColors = {
  'CCTV Cameras': { dot: 'bg-blue-500', text: 'text-blue-600', bg: 'bg-blue-50', border: 'border-blue-200' },
  'Recording & Storage': { dot: 'bg-purple-500', text: 'text-purple-600', bg: 'bg-purple-50', border: 'border-purple-200' },
  'Access Control': { dot: 'bg-emerald-500', text: 'text-emerald-600', bg: 'bg-emerald-50', border: 'border-emerald-200' },
  'Communication': { dot: 'bg-amber-500', text: 'text-amber-600', bg: 'bg-amber-50', border: 'border-amber-200' },
};

export default function ServicesSection() {
  const [activeCat, setActiveCat] = useState('All');
  const scrollRef = useRef(null);

  const filtered = activeCat === 'All'
    ? SERVICES
    : SERVICES.filter((s) => PRODUCT_CATEGORIES.find((c) => c.name === activeCat)?.productIds.includes(s.id));

  const cats = [{ name: 'All', dot: 'bg-primary', text: 'text-primary', bg: 'bg-primary/10', border: 'border-primary/20' },
    ...PRODUCT_CATEGORIES.map((c) => ({ name: c.name, ...catColors[c.name] }))];

  const touchX = useRef(null);

  const scroll = (dir) => {
    if (!scrollRef.current) return;
    const amount = scrollRef.current.clientWidth * 0.8;
    scrollRef.current.scrollBy({ left: dir === 'left' ? -amount : amount, behavior: 'smooth' });
  };

  const onTouchStart = useCallback((e) => {
    touchX.current = e.touches[0].clientX;
  }, []);

  const onTouchEnd = useCallback((e) => {
    if (touchX.current === null) return;
    const diff = touchX.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 40) {
      scroll(diff > 0 ? 'right' : 'left');
    }
    touchX.current = null;
  }, []);

  return (
    <section id="services" className="py-20 md:py-28 bg-surface relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-64 bg-gradient-to-b from-white to-transparent pointer-events-none" />
      <div className="container-page relative">
        <SectionHeader
          title="Our Products"
          subtitle="Premium-quality security and surveillance products for comprehensive protection of your home and business."
        />

        {/* Category Filter */}
        <ScrollReveal className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {cats.map((cat) => (
            <button
              key={cat.name}
              onClick={() => setActiveCat(cat.name)}
              className={`flex items-center gap-2 px-5 py-3 rounded-full text-sm font-semibold border transition-all duration-300 cursor-pointer min-h-[44px] ${
                activeCat === cat.name
                  ? `${cat.bg} ${cat.text} ${cat.border} shadow-sm`
                  : 'bg-white text-text-secondary border-border/60 hover:border-border hover:shadow-sm'
              }`}
            >
              <span className={`w-2 h-2 rounded-full ${cat.dot}`} />
              {cat.name}
              <span className={`text-xs ml-0.5 ${activeCat === cat.name ? 'opacity-80' : 'text-text-secondary/60'}`}>
                ({cat.name === 'All' ? SERVICES.length : PRODUCT_CATEGORIES.find((c) => c.name === cat.name)?.productIds.length || 0})
              </span>
            </button>
          ))}
        </ScrollReveal>

        {/* Carousel */}
        <div className="relative group/carousel">
          <button
            onClick={() => scroll('left')}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-3 z-10 w-12 h-12 rounded-full bg-white shadow-lg ring-1 ring-black/5 flex items-center justify-center text-primary hover:bg-accent hover:text-white transition-all duration-300 opacity-0 group-hover/carousel:opacity-100"
            aria-label="Scroll products left"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={() => scroll('right')}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-3 z-10 w-12 h-12 rounded-full bg-white shadow-lg ring-1 ring-black/5 flex items-center justify-center text-primary hover:bg-accent hover:text-white transition-all duration-300 opacity-0 group-hover/carousel:opacity-100"
            aria-label="Scroll products right"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          <div
            ref={scrollRef}
            className="flex gap-5 overflow-hidden pb-4 -mx-4 px-4"
            onTouchStart={onTouchStart}
            onTouchEnd={onTouchEnd}
          >
            {filtered.map((service, i) => (
              <div key={service.id} className="shrink-0 w-[280px] sm:w-[300px] md:w-[320px]">
                <Link to={`/product/${service.id}`} className="group block h-full">
                  <div className="bg-white rounded-2xl overflow-hidden shadow-lg shadow-black/5 ring-1 ring-black/5 hover:ring-accent/30 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1.5 h-full flex flex-col">
                    <div className="relative h-48 overflow-hidden shrink-0">
                      <img
                        src={service.image}
                        alt={service.title}
                        width={400}
                        height={300}
                        className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                        loading="lazy"
                        decoding="async"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      <div className="absolute top-3 left-3">
                        <span className="text-[10px] font-semibold bg-white/90 backdrop-blur-sm text-text-primary px-2.5 py-1 rounded-full shadow-sm">
                          {PRODUCT_CATEGORIES.find((c) => c.productIds.includes(service.id))?.name || ''}
                        </span>
                      </div>
                    </div>
                    <div className="p-5 flex flex-col flex-1">
                      <h3 className="font-bold text-primary mb-2">{service.title}</h3>
                      <p className="text-text-secondary text-sm leading-relaxed line-clamp-2 mb-4 flex-1">{service.shortDesc}</p>
                      <div className="flex flex-wrap gap-1.5 mb-4">
                        {service.benefits.slice(0, 2).map((b) => (
                          <span key={b} className="text-[10px] font-medium bg-accent/5 text-accent px-2 py-1 rounded-full truncate max-w-full ring-1 ring-accent/10">
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
              </div>
            ))}
          </div>
        </div>

        {/* Dots */}
        <div className="flex items-center justify-center mt-6">
          {cats.slice(1).map((cat) => (
            <button
              key={cat.name}
              onClick={() => setActiveCat(cat.name)}
              className="flex items-center justify-center w-10 h-10"
              aria-label={`Show ${cat.name} products`}
            >
              <span className={`w-2 h-2 rounded-full transition-all duration-300 ${
                activeCat === cat.name ? `${cat.dot} w-6` : 'bg-border/60 hover:bg-border'
              }`} />
            </button>
          ))}
        </div>

        <ScrollReveal className="text-center mt-10">
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
