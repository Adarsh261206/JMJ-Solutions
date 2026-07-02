import { Building2, Home, ArrowRight } from 'lucide-react';
import SectionHeader from '../../shared/SectionHeader';
import Button from '../../shared/Button';
import ScrollReveal from '../../shared/ScrollReveal';
import { COMMERCIAL_CLIENTS, RESIDENTIAL_CLIENTS } from '../../../utils/constants';

function ClientCard({ client, type }) {
  const Icon = type === 'commercial' ? Building2 : Home;
  return (
    <div className="bg-white rounded-2xl p-6 border border-border hover:border-accent/30 hover:shadow-xl transition-all duration-300 group">
      <div className="flex items-start gap-3 mb-3">
        <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
          <Icon className="w-5 h-5 text-primary group-hover:text-white transition-colors duration-300" />
        </div>
        <div>
          <h4 className="font-semibold text-primary">{client.name}</h4>
          <p className="text-text-secondary text-sm">{client.location}</p>
        </div>
      </div>
      <p className="text-xs text-text-secondary uppercase tracking-wide">{type === 'commercial' ? 'Commercial' : 'Residential'}</p>
    </div>
  );
}

export default function ClientsSection() {
  return (
    <section id="clients" className="py-20 md:py-28 bg-surface">
      <div className="container-page">
        <SectionHeader
          title="Our Valued Clients"
          subtitle="Trusted by leading commercial establishments and prestigious residential communities across Mumbai."
        />

        <div className="space-y-16">
          <div>
            <h3 className="text-xl font-bold text-primary mb-6 flex items-center gap-2">
              <Building2 className="w-5 h-5" />
              Commercial Clients
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {COMMERCIAL_CLIENTS.map((client, i) => (
                <ScrollReveal key={client.name} delay={i * 0.03}>
                  <ClientCard client={client} type="commercial" />
                </ScrollReveal>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold text-primary mb-6 flex items-center gap-2">
              <Home className="w-5 h-5" />
              Residential Clients
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {RESIDENTIAL_CLIENTS.map((client, i) => (
                <ScrollReveal key={client.name} delay={i * 0.03}>
                  <ClientCard client={client} type="residential" />
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>

        <ScrollReveal className="text-center mt-12">
          <Button to="/clients" variant="secondary" size="lg">
            View All Clients <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </ScrollReveal>
      </div>
    </section>
  );
}