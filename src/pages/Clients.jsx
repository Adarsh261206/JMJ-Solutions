import { Building2, Home } from 'lucide-react';
import SEO from '../components/shared/SEO';
import ScrollReveal from '../components/shared/ScrollReveal';
import { COMMERCIAL_CLIENTS, RESIDENTIAL_CLIENTS } from '../utils/constants';

export default function Clients() {
  return (
    <>
      <SEO title="Our Clients" />

      <section className="bg-primary-dark py-24 text-white">
        <div className="container-page">
          <ScrollReveal>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Clients</h1>
            <p className="text-lg text-white/80 max-w-2xl">
              Trusted by residential societies and commercial enterprises across Mumbai
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container-page">
          <ScrollReveal>
            <div className="flex items-center gap-3 mb-10">
              <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center">
                <Building2 className="w-6 h-6 text-accent" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-primary">Commercial Clients</h2>
                <p className="text-gray-500 text-sm">Trusted by leading businesses and organizations</p>
              </div>
            </div>
          </ScrollReveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {COMMERCIAL_CLIENTS.map((client, i) => (
              <ScrollReveal key={client.name} delay={i * 0.05}>
                <div className="bg-muted rounded-xl p-6 hover:shadow-lg transition-shadow duration-300 border border-transparent hover:border-accent/20">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mb-3">
                    <Building2 className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="font-semibold text-primary mb-1">{client.name}</h3>
                  <p className="text-sm text-gray-500">{client.location}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted">
        <div className="container-page">
          <ScrollReveal>
            <div className="flex items-center gap-3 mb-10">
              <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center">
                <Home className="w-6 h-6 text-accent" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-primary">Residential Clients</h2>
                <p className="text-gray-500 text-sm">Securing homes and communities with care</p>
              </div>
            </div>
          </ScrollReveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {RESIDENTIAL_CLIENTS.map((client, i) => (
              <ScrollReveal key={client.name} delay={i * 0.05}>
                <div className="bg-white rounded-xl p-6 hover:shadow-lg transition-shadow duration-300 border border-transparent hover:border-accent/20">
                  <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center mb-3">
                    <Home className="w-5 h-5 text-accent" />
                  </div>
                  <h3 className="font-semibold text-primary mb-1">{client.name}</h3>
                  <p className="text-sm text-gray-500">{client.location}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
