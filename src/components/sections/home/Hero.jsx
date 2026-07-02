import { Shield, Play } from 'lucide-react';
import Button from '../../shared/Button';
import ScrollReveal from '../../shared/ScrollReveal';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-primary-dark">
      <div className="absolute inset-0 bg-gradient-to-br from-primary-dark via-primary to-primary-dark opacity-95" />
      <div className="absolute inset-0 opacity-10" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
      }} />

      <div className="container-page relative z-10 pt-24 pb-20 md:pt-32 md:pb-28">
        <div className="max-w-4xl">
          <ScrollReveal delay={0.1}>
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-6">
              <Shield className="w-4 h-4 text-accent-light" />
              <span className="text-white/80 text-sm font-medium">{10}+ Years of Excellence</span>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] mb-6">
              Your Trusted Partner in{' '}
              <span className="text-accent-light">Security &amp; Surveillance</span>
            </h1>
          </ScrollReveal>

          <ScrollReveal delay={0.3}>
            <p className="text-lg md:text-xl text-white/70 max-w-2xl mb-10 leading-relaxed">
              Mumbai&apos;s premier security solutions provider since 2015. We deliver world-class CCTV, 
              access control, and surveillance systems tailored to protect what matters most to you.
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

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
}
