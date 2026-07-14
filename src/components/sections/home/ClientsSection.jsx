import { Building2, Home, MapPin, Building, Shield, Star, ExternalLink } from 'lucide-react';
import SectionHeader from '../../shared/SectionHeader';
import Button from '../../shared/Button';
import ScrollReveal from '../../shared/ScrollReveal';
import { COMPANY, COMMERCIAL_CLIENTS, RESIDENTIAL_CLIENTS } from '../../../utils/constants';

function ClientCard({ client, type }) {
  const Icon = type === 'commercial' ? Building2 : Home;
  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(client.name + ' ' + client.location)}`;
  const isCommercial = type === 'commercial';

  return (
    <div
      className={`group bg-white rounded-xl border overflow-hidden shadow-md shadow-black/5 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 ${
        isCommercial ? 'border-blue-100 hover:border-blue-300 hover:shadow-blue-500/10' : 'border-emerald-100 hover:border-emerald-300 hover:shadow-emerald-500/10'
      }`}
    >
      <a
        href={mapsUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="block relative overflow-hidden"
        aria-label={`View ${client.name} on Google Maps`}
      >
        <div className="relative h-28 sm:h-32 bg-gradient-to-br from-slate-100 to-slate-200 overflow-hidden">
          <img
            src={client.image}
            alt={client.name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
            <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white text-primary text-xs font-semibold px-3 py-1.5 rounded-full flex items-center gap-1.5 shadow-md">
              <ExternalLink className="w-3 h-3" />
              Open in Maps
            </span>
          </div>
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 pointer-events-none">
            <div className="w-5 h-5 bg-red-500 rounded-full border-2 border-white shadow-md flex items-center justify-center">
              <div className="w-1.5 h-1.5 bg-white rounded-full" />
            </div>
          </div>
        </div>
      </a>

      <div className="p-4">
        <div className="flex items-start gap-3">
          <div
            className={`w-9 h-9 rounded-lg flex items-center justify-center shrink-0 mt-0.5 transition-colors duration-300 ${
              isCommercial
                ? 'bg-blue-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white'
                : 'bg-emerald-50 text-emerald-600 group-hover:bg-emerald-600 group-hover:text-white'
            }`}
          >
            <Icon className="w-4 h-4" />
          </div>
          <div className="min-w-0 flex-1">
            <h4 className="font-semibold text-primary text-sm leading-tight mb-0.5">{client.name}</h4>
            {client.person && <p className="text-[11px] text-text-secondary mb-1">{client.person}</p>}
            <a
              href={mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`text-xs flex items-center gap-1 transition-colors duration-200 ${
                isCommercial
                  ? 'text-blue-500 hover:text-blue-700'
                  : 'text-emerald-500 hover:text-emerald-700'
              }`}
            >
              <MapPin className="w-3 h-3 shrink-0" />
              <span className="truncate">{client.location}</span>
              <ExternalLink className="w-2.5 h-2.5 shrink-0 opacity-60" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ClientsSection() {
  return (
    <section id="clients" className="py-16 md:py-28 bg-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-primary/5 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl" />

      <div className="container-page relative z-10">
        <ScrollReveal className="text-center mb-10 md:mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/5 border border-primary/10 rounded-full px-5 py-2 mb-6">
            <Shield className="w-4 h-4 text-accent" />
            <span className="text-primary/80 text-sm font-medium">Trusted by Industry Leaders</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary mb-3 md:mb-4">
            Our Valued Clients
          </h2>
          <p className="text-base sm:text-lg text-text-secondary max-w-2xl mx-auto px-2">
            Trusted by leading commercial establishments and prestigious residential communities across Mumbai.
          </p>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-6 md:gap-8 mb-10 md:mb-12">
          <ScrollReveal direction="left">
            <div className="bg-gradient-to-br from-blue-50 to-white rounded-2xl p-5 md:p-8 border border-blue-100 shadow-xl shadow-blue-500/5">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-blue-600 flex items-center justify-center shrink-0">
                  <Building className="w-6 h-6 text-white" />
                </div>
                <div className="min-w-0">
                  <h3 className="text-lg sm:text-xl font-bold text-primary">Commercial Clients</h3>
                  <p className="text-xs sm:text-sm text-text-secondary">{COMMERCIAL_CLIENTS.length}+ Corporate Partners</p>
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {COMMERCIAL_CLIENTS.map((client, i) => (
                  <ScrollReveal key={client.name} delay={i * 0.05}>
                    <ClientCard client={client} type="commercial" />
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right">
            <div className="bg-gradient-to-br from-emerald-50 to-white rounded-2xl p-5 md:p-8 border border-emerald-100 shadow-xl shadow-emerald-500/5">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-emerald-600 flex items-center justify-center shrink-0">
                  <Home className="w-6 h-6 text-white" />
                </div>
                <div className="min-w-0">
                  <h3 className="text-lg sm:text-xl font-bold text-primary">Residential Clients</h3>
                  <p className="text-xs sm:text-sm text-text-secondary">{RESIDENTIAL_CLIENTS.length}+ Prestigious Societies</p>
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {RESIDENTIAL_CLIENTS.map((client, i) => (
                  <ScrollReveal key={client.name} delay={i * 0.05}>
                    <ClientCard client={client} type="residential" />
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
