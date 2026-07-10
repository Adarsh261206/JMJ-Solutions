import { Shield, Play, ArrowRight, CheckCircle } from 'lucide-react';
import Button from '../../shared/Button';
import ScrollReveal from '../../shared/ScrollReveal';
import { COMPANY } from '../../../utils/constants';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex bg-white overflow-hidden">
      {/* Left Content */}
      <div className="relative z-10 w-full lg:w-[55%] flex items-center">
        <div className="w-full pt-28 pb-20 md:pt-36 md:pb-28 lg:pl-[max(2rem,calc((100vw-80rem)/2))] px-6 sm:px-8 lg:px-12">
          <div className="max-w-2xl">
            <ScrollReveal delay={0.1}>
              <div className="inline-flex items-center gap-2 bg-primary/5 border border-primary/10 rounded-full px-4 py-2 mb-6">
                <Shield className="w-4 h-4 text-accent" />
                <span className="text-text-secondary text-sm font-medium">{COMPANY.experience} of Excellence</span>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-primary leading-[1.1] mb-4">
                Your Trusted Partner in{' '}
                <span className="text-accent">Security & Surveillance</span>
              </h1>
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <p className="text-lg md:text-xl text-text-secondary max-w-xl mb-8 leading-relaxed">
                Mumbai's premier security solutions provider since 2015. We deliver world-class CCTV, access control, and surveillance systems tailored to protect what matters most to you.
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

            <ScrollReveal delay={0.5} className="mt-12 pt-8 border-t border-border/60">
              <div className="flex flex-wrap items-center gap-x-8 gap-y-3">
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
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>

      {/* Right Image */}
      <div className="hidden lg:block relative w-[45%] min-h-screen">
        <div className="absolute inset-0">
          <img
            src="/images/hero-2.jpg"
            alt="Security solutions"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-white" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white/20" />

        {/* Floating card */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 w-[calc(100%-3rem)] max-w-sm">
          <div className="bg-white/90 backdrop-blur-md rounded-2xl p-5 shadow-2xl border border-white/20">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center shrink-0">
                <Shield className="w-6 h-6 text-accent" />
              </div>
              <div>
                <p className="font-bold text-primary text-sm">End-to-End Security</p>
                <p className="text-text-secondary text-xs">Installation & 24/7 Support</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile image - shown below content */}
      <div className="lg:hidden relative w-full h-64 sm:h-80">
        <img
          src="/images/hero-2.jpg"
          alt="Security solutions"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-white via-white/10 to-transparent" />
      </div>
    </section>
  );
}
