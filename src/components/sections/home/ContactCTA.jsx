import { Phone, MessageCircle } from 'lucide-react';
import Button from '../../shared/Button';
import ScrollReveal from '../../shared/ScrollReveal';
import { COMPANY } from '../../../utils/constants';

export default function ContactCTA() {
  return (
    <section className="relative py-20 md:py-28 bg-primary-dark overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary-dark via-primary to-primary-dark opacity-95" />
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

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
