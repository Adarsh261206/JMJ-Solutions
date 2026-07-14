import { Link } from 'react-router-dom';
import { Shield, Mail, Phone, MapPin, Clock, ArrowUpRight } from 'lucide-react';
import { COMPANY, NAV_LINKS, SERVICES } from '../../utils/constants';

const quickServices = SERVICES.slice(0, 4);

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className="bg-primary-dark text-white">
      <div className="container-page py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <Link to="/" className="flex items-center gap-2 text-xl font-bold mb-4">
              <span className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-white shrink-0">
                <img src="/logo.png" alt="JMJ Solutions" className="h-6 w-auto" />
              </span>
              {COMPANY.name}
            </Link>
            <p className="text-white/70 text-sm leading-relaxed mb-6">
              {COMPANY.fullDescription}
            </p>
            <div className="flex gap-3">
              {['facebook', 'instagram', 'linkedin', 'youtube'].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center hover:bg-accent transition-colors duration-200"
                  aria-label={social}
                >
                  <span className="text-xs font-bold uppercase">{social[0]}</span>
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-bold text-sm uppercase tracking-wider text-white/50 mb-5">Quick Links</h3>
            <ul className="space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="text-white/70 hover:text-white text-sm transition-colors flex items-center gap-1">
                    <ArrowUpRight className="w-3 h-3" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-sm uppercase tracking-wider text-white/50 mb-5">Services</h3>
            <ul className="space-y-3">
              {quickServices.map((service) => (
                <li key={service.id}>
                  <Link to={`/services#${service.id}`} className="text-white/70 hover:text-white text-sm transition-colors">
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-sm uppercase tracking-wider text-white/50 mb-5">Contact</h3>
            <ul className="space-y-4">
              <li>
                <a href={`tel:${COMPANY.phone1.replace(/\s/g, '')}`} className="flex items-start gap-3 text-white/70 hover:text-white text-sm transition-colors">
                  <Phone className="w-4 h-4 mt-0.5 text-accent shrink-0" />
                  <span>{COMPANY.phone1}<br />{COMPANY.phone2}</span>
                </a>
              </li>
              <li>
                <a href={`mailto:${COMPANY.email}`} className="flex items-start gap-3 text-white/70 hover:text-white text-sm transition-colors">
                  <Mail className="w-4 h-4 mt-0.5 text-accent shrink-0" />
                  <span>{COMPANY.email}</span>
                </a>
              </li>
              <li>
                <div className="flex items-start gap-3 text-white/70 text-sm">
                  <MapPin className="w-4 h-4 mt-0.5 text-accent shrink-0" />
                  <span>{COMPANY.address}</span>
                </div>
              </li>
              <li>
                <div className="flex items-start gap-3 text-white/70 text-sm">
                  <Clock className="w-4 h-4 mt-0.5 text-accent shrink-0" />
                  <span>{COMPANY.hours}</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-page py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/50 text-xs">
            &copy; {new Date().getFullYear()} {COMPANY.name}. All rights reserved.
          </p>
          <button onClick={scrollToTop} className="text-white/50 hover:text-white text-xs transition-colors">
            Back to top &uarr;
          </button>
        </div>
      </div>
    </footer>
  );
}
