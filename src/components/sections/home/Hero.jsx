import { useState, useEffect, useCallback } from 'react';
import { Shield, Play, ChevronLeft, ChevronRight, ArrowRight, CheckCircle } from 'lucide-react';
import Button from '../../shared/Button';
import ScrollReveal from '../../shared/ScrollReveal';
import { COMPANY } from '../../../utils/constants';

const slides = [
  {
    image: '/images/hero-2.jpg',
    title: 'Your Trusted Partner in',
    highlight: 'Security & Surveillance',
    description: "Mumbai's premier security solutions provider since 2015. We deliver world-class CCTV, access control, and surveillance systems tailored to protect what matters most to you.",
  },
  {
    image: '/images/hero-1.jpg',
    title: 'Complete Security Solutions for',
    highlight: 'Your Business & Home',
    description: 'From CCTV cameras to access control systems, we provide end-to-end security solutions with professional installation and 24/7 support.',
  },
  {
    image: '/images/hero-3.jpg',
    title: 'Smart Surveillance with',
    highlight: 'Remote Monitoring',
    description: 'Watch your property from anywhere in the world. Our modern systems offer live streaming, motion alerts, and cloud backup for complete peace of mind.',
  },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => setCurrent((p) => (p + 1) % slides.length), []);
  const prev = useCallback(() => setCurrent((p) => (p - 1 + slides.length) % slides.length), []);

  useEffect(() => {
    const timer = setInterval(next, 6000);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <section className="relative min-h-screen flex items-center bg-white overflow-hidden">
      {slides.map((slide, i) => (
        <div
          key={i}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            i === current ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <img
            src={slide.image}
            alt=""
            className="w-full h-full object-cover"
            loading={i === 0 ? 'eager' : 'lazy'}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/80 to-white/40" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white/60" />
        </div>
      ))}

      <div className="container-page relative z-10 pt-24 pb-20 md:pt-32 md:pb-28 w-full">
        <div className="max-w-3xl">
          {slides.map((slide, i) => (
            <div key={i} className={`transition-all duration-700 ${i === current ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8 absolute'}`}>
              {i === current && (
                <>
                  <ScrollReveal delay={0.1}>
                    <div className="inline-flex items-center gap-2 bg-primary/5 border border-primary/10 rounded-full px-4 py-2 mb-6">
                      <Shield className="w-4 h-4 text-accent" />
                      <span className="text-text-secondary text-sm font-medium">{COMPANY.experience} of Excellence</span>
                    </div>
                  </ScrollReveal>

                  <ScrollReveal delay={0.2}>
                    <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-primary leading-[1.1] mb-4">
                      {slide.title}{' '}
                      <span className="text-accent">{slide.highlight}</span>
                    </h1>
                  </ScrollReveal>

                  <ScrollReveal delay={0.3}>
                    <p className="text-lg md:text-xl text-text-secondary max-w-xl mb-8 leading-relaxed">
                      {slide.description}
                    </p>
                  </ScrollReveal>

                  <ScrollReveal delay={0.4} className="flex flex-wrap gap-4">
                    <Button to="/contact" variant="primary" size="lg">
                      Get Free Quote <ArrowRight className="w-4 h-4 ml-1.5" />
                    </Button>
                    <Button to="/services" variant="outline" size="lg">
                      <Play className="w-4 h-4 mr-2" />
                      Our Services
                    </Button>
                  </ScrollReveal>
                </>
              )}
            </div>
          ))}
        </div>

        <ScrollReveal delay={0.5} className="mt-16 flex flex-wrap items-center gap-x-8 gap-y-3">
          <div className="flex items-center gap-3">
            <div className="flex -space-x-2">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="w-9 h-9 rounded-full bg-primary/10 border-2 border-white flex items-center justify-center text-primary text-xs font-bold">
                  {i}
                </div>
              ))}
            </div>
            <span className="text-text-secondary text-sm font-medium">Trusted by <strong className="text-primary">150+</strong> Clients</span>
          </div>
          <div className="flex items-center gap-5 text-text-secondary text-sm">
            <span className="flex items-center gap-1.5"><CheckCircle className="w-4 h-4 text-success" /> CP Plus Partner</span>
            <span className="flex items-center gap-1.5"><CheckCircle className="w-4 h-4 text-accent" /> Hikvision Authorized</span>
          </div>
        </ScrollReveal>
      </div>

      <button onClick={prev} className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-white/80 backdrop-blur-sm border border-border shadow-lg flex items-center justify-center text-primary hover:bg-white transition-colors hidden md:flex" aria-label="Previous slide">
        <ChevronLeft className="w-5 h-5" />
      </button>
      <button onClick={next} className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-white/80 backdrop-blur-sm border border-border shadow-lg flex items-center justify-center text-primary hover:bg-white transition-colors hidden md:flex" aria-label="Next slide">
        <ChevronRight className="w-5 h-5" />
      </button>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`h-2 rounded-full transition-all duration-300 ${
              i === current ? 'bg-accent w-8' : 'bg-primary/20 hover:bg-primary/40 w-2'
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
