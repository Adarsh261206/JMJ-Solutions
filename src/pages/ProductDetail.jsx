import { useParams, Link } from 'react-router-dom';
import { Check, ArrowLeft, Phone, Shield } from 'lucide-react';
import SEO from '../components/shared/SEO';
import ScrollReveal from '../components/shared/ScrollReveal';
import Button from '../components/shared/Button';
import { SERVICES } from '../utils/constants';

export default function ProductDetail() {
  const { id } = useParams();
  const service = SERVICES.find((s) => s.id === id);

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-primary mb-4">Product Not Found</h1>
          <p className="text-text-secondary mb-8">The product you're looking for doesn't exist.</p>
          <Button to="/services">View All Products</Button>
        </div>
      </div>
    );
  }

  return (
    <>
      <SEO title={service.title} />

      <section className="relative bg-primary-dark py-24 text-white overflow-hidden">
        <div className="absolute inset-0">
          <img src={service.image} alt="" className="w-full h-full object-cover opacity-30" />
          <div className="absolute inset-0 bg-gradient-to-r from-primary-dark/95 to-primary-dark/80" />
        </div>
        <div className="container-page relative z-10">
          <ScrollReveal>
            <Link to="/services" className="inline-flex items-center gap-2 text-white/70 hover:text-white text-sm mb-6 transition-colors">
              <ArrowLeft className="w-4 h-4" />
              Back to Products
            </Link>
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-6">
              <Shield className="w-4 h-4 text-accent-light" />
              <span className="text-white/80 text-sm font-medium">Premium Security Solution</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{service.title}</h1>
            <p className="text-lg text-white/80 max-w-2xl">{service.shortDesc}</p>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container-page">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <ScrollReveal direction="left">
              <div className="rounded-2xl overflow-hidden shadow-xl">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right">
              <h2 className="text-3xl font-bold text-primary mb-6">Overview</h2>
              <p className="text-gray-600 mb-8 leading-relaxed">{service.description}</p>

              <h3 className="text-xl font-bold text-primary mb-4">Key Benefits</h3>
              <ul className="space-y-3 mb-8">
                {service.benefits.map((benefit) => (
                  <li key={benefit} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-accent/10 flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3.5 h-3.5 text-accent" />
                    </div>
                    <span className="text-gray-600">{benefit}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-4">
                <Button to="/contact" variant="primary" size="lg">
                  Get Free Quote
                </Button>
                <Button href="tel:+919594209259" variant="secondary" size="lg">
                  <Phone className="w-4 h-4 mr-2" />
                  Call Now
                </Button>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section className="py-16 bg-muted">
        <div className="container-page">
          <ScrollReveal>
            <h2 className="text-2xl font-bold text-primary mb-6 text-center">Industries We Serve</h2>
            <div className="flex flex-wrap justify-center gap-3">
              {service.industries.map((ind) => (
                <span key={ind} className="bg-white text-primary px-5 py-2.5 rounded-full text-sm font-medium shadow-sm border border-border">
                  {ind}
                </span>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-16 bg-primary-dark text-white text-center">
        <div className="container-page">
          <ScrollReveal>
            <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="text-white/80 mb-8 max-w-2xl mx-auto">
              Contact JMJ Solutions today for a free consultation and customized quote for your {service.title.toLowerCase()} needs.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button to="/contact" variant="primary" size="lg">
                Get Free Quote
              </Button>
              <Button href="tel:+919594209259" variant="outline" size="lg">
                <Phone className="w-4 h-4 mr-2" />
                +91 95942 09259
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
