import { Phone, MessageCircle } from 'lucide-react';
import Button from '../../shared/Button';
import ScrollReveal from '../../shared/ScrollReveal';
import { COMPANY } from '../../../utils/constants';

export default function ContactCTA() {
  return (
    <section className="relative py-20 md:py-28 bg-primary-dark overflow-hidden">
      <div className="absolute inset-0">
        <img src="/images/hero-3.jpg" alt="Call to action — Secure your premises with JMJ Solutions CCTV and security systems Mumbai" className="w-full h-full object-cover opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-br from-primary-dark via-primary to-primary-dark opacity-90" />
      </div>

      <div className="container-page relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Ready to Secure Your Premises?
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <p className="text-lg md:text-xl text-white/70 mb-10 leading-relaxed">
              Get a free consultation and customized security solution for your home or business. Our experts are ready to help you find the perfect setup within your budget.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.2} className="flex flex-wrap items-center justify-center gap-4 mb-8">
            <Button to="/contact" variant="primary" size="lg">
              Get Free Quote
            </Button>
            <Button href={`tel:${COMPANY.phone1}`} variant="outline" size="lg">
              <Phone className="w-4 h-4 mr-2" />
              Call Now
            </Button>
          </ScrollReveal>

          <ScrollReveal delay={0.3}>
            <a
              href="https://wa.me/919594209259"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-white/60 hover:text-white transition-colors text-sm font-medium"
            >
              <MessageCircle className="w-4 h-4" />
              Chat on WhatsApp
            </a>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
