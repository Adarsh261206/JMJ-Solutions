import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Shield, Phone } from 'lucide-react';
import { NAV_LINKS, COMPANY } from '../../utils/constants';

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [location]);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-white/95 backdrop-blur-md shadow-sm' : 'bg-transparent'
    }`}>
      <div className="container-page flex items-center justify-between h-16 md:h-20">
        <Link to="/" className="flex items-center gap-2 text-primary font-bold text-xl">
          <Shield className="w-6 h-6" />
          <span>{COMPANY.name}</span>
        </Link>

        <nav className="hidden lg:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-sm font-medium transition-colors duration-200 ${
                location.pathname === link.path
                  ? 'text-accent'
                  : scrolled ? 'text-text-primary hover:text-accent' : 'text-white/90 hover:text-white'
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            to="/contact"
            className="bg-accent text-white px-6 py-2.5 rounded-lg text-sm font-semibold hover:bg-accent-light transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Get Quote
          </Link>
        </nav>

        <button
          onClick={() => setOpen(!open)}
          className={`lg:hidden p-2 rounded-lg transition-colors ${
            scrolled ? 'text-primary hover:bg-muted' : 'text-white hover:bg-white/10'
          }`}
          aria-label="Toggle navigation"
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t border-border overflow-hidden"
          >
            <nav className="container-page py-6 flex flex-col gap-2">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                    location.pathname === link.path
                      ? 'bg-muted text-accent'
                      : 'text-text-primary hover:bg-muted'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <div className="mt-4 pt-4 border-t border-border">
                <a
                  href={`tel:${COMPANY.phone1.replace(/\s/g, '')}`}
                  className="flex items-center gap-3 px-4 py-3 text-primary font-medium"
                >
                  <Phone className="w-5 h-5 text-accent" />
                  {COMPANY.phone1}
                </a>
                <Link
                  to="/contact"
                  className="block text-center bg-accent text-white px-6 py-3 rounded-lg text-sm font-semibold mt-3"
                >
                  Get Quote
                </Link>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
