import { Building2, Home, MapPin, Building, Shield, Star } from 'lucide-react';
import SectionHeader from '../../shared/SectionHeader';
import Button from '../../shared/Button';
import ScrollReveal from '../../shared/ScrollReveal';
import { COMPANY, COMMERCIAL_CLIENTS, RESIDENTIAL_CLIENTS } from '../../../utils/constants';

function ClientBadge({ client, type, i }) {
  const Icon = type === 'commercial' ? Building2 : Home;
  return (
    <div className="group bg-white rounded-xl px-5 py-4 border border-border hover:border-accent/30 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300">
      <div className="flex items-center gap-4">
        <div className={`w-11 h-11 rounded-xl flex items-center justify-center shrink-0 transition-colors duration-300 ${
          type === 'commercial'
            ? 'bg-blue-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white'
            : 'bg-emerald-50 text-emerald-600 group-hover:bg-emerald-600 group-hover:text-white'
        }`}>
          <Icon className="w-5 h-5" />
        </div>
        <div className="min-w-0">
          <h4 className="font-semibold text-primary text-sm truncate">{client.name}</h4>
          <p className="text-xs text-text-secondary flex items-center gap-1 mt-0.5">
            <MapPin className="w-3 h-3 shrink-0" />
            <span className="truncate">{client.location}</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default function ClientsSection() {
  return (
    <section id="clients" className="py-20 md:py-28 bg-gradient-to-br from-surface via-white to-surface relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-primary/5 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl" />

      <div className="container-page relative z-10">
        <ScrollReveal className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/5 border border-primary/10 rounded-full px-5 py-2 mb-6">
            <Shield className="w-4 h-4 text-accent" />
            <span className="text-primary/80 text-sm font-medium">Trusted by Industry Leaders</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Our Valued Clients
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            Trusted by leading commercial establishments and prestigious residential communities across Mumbai.
          </p>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <ScrollReveal direction="left">
            <div className="bg-gradient-to-br from-blue-50 to-white rounded-2xl p-8 border border-blue-100 shadow-sm">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-blue-600 flex items-center justify-center">
                  <Building className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-primary">Commercial Clients</h3>
                  <p className="text-sm text-text-secondary">{COMMERCIAL_CLIENTS.length}+ Corporate Partners</p>
                </div>
              </div>
              <div className="grid sm:grid-cols-2 gap-3">
                {COMMERCIAL_CLIENTS.map((client, i) => (
                  <ScrollReveal key={client.name} delay={i * 0.03}>
                    <ClientBadge client={client} type="commercial" i={i} />
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right">
            <div className="bg-gradient-to-br from-emerald-50 to-white rounded-2xl p-8 border border-emerald-100 shadow-sm">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-emerald-600 flex items-center justify-center">
                  <Home className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-primary">Residential Clients</h3>
                  <p className="text-sm text-text-secondary">{RESIDENTIAL_CLIENTS.length}+ Prestigious Societies</p>
                </div>
              </div>
              <div className="grid sm:grid-cols-2 gap-3">
                {RESIDENTIAL_CLIENTS.map((client, i) => (
                  <ScrollReveal key={client.name} delay={i * 0.03}>
                    <ClientBadge client={client} type="residential" i={i} />
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>

        <ScrollReveal className="text-center">
          <div className="inline-flex items-center gap-2 mb-6">
            {[1, 2, 3, 4, 5].map((s) => (
              <Star key={s} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
            ))}
          </div>
          <p className="text-text-secondary text-sm mb-8">
            Join {COMPANY.happyClients}+ happy clients who trust JMJ Solutions for their security needs
          </p>
          <Button to="/clients" variant="secondary" size="lg">
            View All Clients <MapPin className="w-4 h-4 ml-2" />
          </Button>
        </ScrollReveal>
      </div>
    </section>
  );
}
