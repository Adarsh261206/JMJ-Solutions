import { useState, useEffect, useCallback } from 'react';
import { Shield, Play, ChevronLeft, ChevronRight } from 'lucide-react';
import Button from '../../shared/Button';
import ScrollReveal from '../../shared/ScrollReveal';
import { COMPANY } from '../../../utils/constants';

const slides = [
  {
    image: '/images/hero-1.jpg',
    title: 'Your Trusted Partner in',
    highlight: 'Security & Surveillance',
    description: "Mumbai's premier security solutions provider since 2015. We deliver world-class CCTV, access control, and surveillance systems tailored to protect what matters most to you.",
  },
  {
    image: '/images/hero-2.jpg',
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
    <section className="relative min-h-screen flex items-center overflow-hidden bg-primary-dark">
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
          <div className="absolute inset-0 bg-gradient-to-r from-primary-dark/95 via-primary-dark/80 to-primary-dark/60" />
        </div>
      ))}

      <div className="container-page relative z-10 pt-24 pb-20 md:pt-32 md:pb-28 w-full">
        <div className="max-w-4xl">
          {slides.map((slide, i) => (
            <div key={i} className={`transition-all duration-700 ${i === current ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8 absolute'}`}>
              {i === current && (
                <>
                  <ScrollReveal delay={0.1}>
                    <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-6">
                      <Shield className="w-4 h-4 text-accent-light" />
                      <span className="text-white/80 text-sm font-medium">{COMPANY.experience} of Excellence</span>
                    </div>
                  </ScrollReveal>

                  <ScrollReveal delay={0.2}>
                    <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] mb-6">
                      {slide.title}{' '}
                      <span className="text-accent-light">{slide.highlight}</span>
                    </h1>
                  </ScrollReveal>

                  <ScrollReveal delay={0.3}>
                    <p className="text-lg md:text-xl text-white/70 max-w-2xl mb-10 leading-relaxed">
                      {slide.description}
                    </p>
                  </ScrollReveal>

                  <ScrollReveal delay={0.4} className="flex flex-wrap gap-4">
                    <Button to="/contact" variant="primary" size="lg">
                      Get Free Quote
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

          <ScrollReveal delay={0.5} className="mt-16 flex flex-wrap gap-8 items-center">
            <div className="flex items-center gap-3">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-8 h-8 rounded-full bg-white/20 border-2 border-primary-dark flex items-center justify-center text-white text-[10px] font-bold">
                    {i}
                  </div>
                ))}
              </div>
              <span className="text-white/60 text-sm">Trusted by 150+ Clients</span>
            </div>
            <div className="flex items-center gap-6 text-white/60 text-sm">
              <span className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-success" /> CP Plus Partner</span>
              <span className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-accent-light" /> Hikvision Authorized</span>
            </div>
          </ScrollReveal>
        </div>
      </div>

      <button onClick={prev} className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-colors hidden md:flex" aria-label="Previous slide">
        <ChevronLeft className="w-5 h-5" />
      </button>
      <button onClick={next} className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-colors hidden md:flex" aria-label="Next slide">
        <ChevronRight className="w-5 h-5" />
      </button>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              i === current ? 'bg-white w-6' : 'bg-white/40 hover:bg-white/60'
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
}
