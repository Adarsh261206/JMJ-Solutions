import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Shield, Phone, ChevronDown } from 'lucide-react';
import { NAV_LINKS, PRODUCT_CATEGORIES, SERVICES, COMPANY } from '../../utils/constants';

function ProductsDropdown({ isHome, scrolled }) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);
  const location = useLocation();

  useEffect(() => {
    setOpen(false);
  }, [location]);

  useEffect(() => {
    const onMouseEnter = () => setOpen(true);
    const onMouseLeave = () => setOpen(false);
    const el = ref.current;
    if (el) {
      el.addEventListener('mouseenter', onMouseEnter);
      el.addEventListener('mouseleave', onMouseLeave);
    }
    return () => {
      if (el) {
        el.removeEventListener('mouseenter', onMouseEnter);
        el.removeEventListener('mouseleave', onMouseLeave);
      }
    };
  }, []);

  return (
    <div ref={ref} className="relative">
      <Link
        to="/services"
        className={`flex items-center gap-1 text-sm font-medium transition-colors duration-200 ${
          isHome ? 'text-text-primary hover:text-accent' : scrolled ? 'text-text-primary hover:text-accent' : 'text-white/90 hover:text-white'
        }`}
      >
        Products <ChevronDown className={`w-3.5 h-3.5 transition-transform ${open ? 'rotate-180' : ''}`} />
      </Link>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 8 }}
            transition={{ duration: 0.15 }}
            className="absolute top-full left-1/2 -translate-x-1/2 mt-2 bg-white rounded-2xl shadow-xl border border-border overflow-hidden"
            style={{ width: '600px' }}
          >
            <div className="grid grid-cols-2 gap-0">
              {PRODUCT_CATEGORIES.map((cat) => {
                const catProducts = SERVICES.filter((s) => cat.productIds.includes(s.id));
                return (
                  <div key={cat.name} className="p-5 even:bg-muted/30">
                    <h4 className="text-xs font-bold text-text-secondary uppercase tracking-wider mb-3">{cat.name}</h4>
                    <ul className="space-y-1.5">
                      {catProducts.map((p) => (
                        <li key={p.id}>
                          <Link
                            to={`/product/${p.id}`}
                            className={`block text-sm py-1.5 px-2 rounded-lg transition-colors hover:bg-accent/10 hover:text-accent ${
                              location.pathname === `/product/${p.id}` ? 'text-accent font-medium' : 'text-text-primary'
                            }`}
                          >
                            {p.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>
            <div className="bg-primary-dark px-5 py-3 text-center">
              <Link to="/services" className="text-sm text-white/90 hover:text-white font-medium">
                View All Products →
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

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

  const isHome = location.pathname === '/';

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-white/95 backdrop-blur-md shadow-sm' : 'bg-transparent'
    }`}>
      <div className="container-page flex items-center justify-between h-16 md:h-20">
        <Link to="/" className="flex items-center gap-2">
          <img src="/logo.png" alt="JMJ Solutions" className="h-9 w-auto" />
          <span className={`font-bold text-xl transition-colors duration-300 ${isHome ? 'text-primary' : scrolled ? 'text-primary' : 'text-white'}`}>{COMPANY.name}</span>
        </Link>

        <nav className="hidden lg:flex items-center gap-8">
          <Link
            to="/"
            className={`text-sm font-medium transition-colors duration-200 ${
              location.pathname === '/'
                ? 'text-accent'
                : isHome ? 'text-text-primary hover:text-accent' : scrolled ? 'text-text-primary hover:text-accent' : 'text-white/90 hover:text-white'
            }`}
          >
            Home
          </Link>
          <Link
            to="/about"
            className={`text-sm font-medium transition-colors duration-200 ${
              location.pathname === '/about'
                ? 'text-accent'
                : isHome ? 'text-text-primary hover:text-accent' : scrolled ? 'text-text-primary hover:text-accent' : 'text-white/90 hover:text-white'
            }`}
          >
            About
          </Link>
          <ProductsDropdown isHome={isHome} scrolled={scrolled} />
          <Link
            to="/clients"
            className={`text-sm font-medium transition-colors duration-200 ${
              location.pathname === '/clients'
                ? 'text-accent'
                : isHome ? 'text-text-primary hover:text-accent' : scrolled ? 'text-text-primary hover:text-accent' : 'text-white/90 hover:text-white'
            }`}
          >
            Clients
          </Link>
          <Link
            to="/blog"
            className={`text-sm font-medium transition-colors duration-200 ${
              location.pathname === '/blog'
                ? 'text-accent'
                : isHome ? 'text-text-primary hover:text-accent' : scrolled ? 'text-text-primary hover:text-accent' : 'text-white/90 hover:text-white'
            }`}
          >
            Blog
          </Link>
          <Link
            to="/contact"
            className={`text-sm font-medium transition-colors duration-200 ${
              location.pathname === '/contact'
                ? 'text-accent'
                : isHome ? 'text-text-primary hover:text-accent' : scrolled ? 'text-text-primary hover:text-accent' : 'text-white/90 hover:text-white'
            }`}
          >
            Contact
          </Link>
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
            isHome ? 'text-primary hover:bg-muted' : scrolled ? 'text-primary hover:bg-muted' : 'text-white hover:bg-white/10'
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
              <Link
                to="/"
                className={`px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                  location.pathname === '/' ? 'bg-muted text-accent' : 'text-text-primary hover:bg-muted'
                }`}
              >
                Home
              </Link>
              <Link
                to="/about"
                className={`px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                  location.pathname === '/about' ? 'bg-muted text-accent' : 'text-text-primary hover:bg-muted'
                }`}
              >
                About
              </Link>
              <div className="px-4 py-3">
                <Link
                  to="/services"
                  className={`text-sm font-semibold mb-2 block ${
                    location.pathname === '/services' ? 'text-accent' : 'text-text-primary'
                  }`}
                >
                  Products
                </Link>
                <div className="ml-3 mt-2 space-y-1 border-l-2 border-border pl-3">
                  {PRODUCT_CATEGORIES.map((cat) => {
                    const catProducts = SERVICES.filter((s) => cat.productIds.includes(s.id));
                    return (
                      <div key={cat.name} className="mb-2">
                        <span className="text-xs font-semibold text-text-secondary uppercase tracking-wider block mb-1">
                          {cat.name}
                        </span>
                        {catProducts.map((p) => (
                          <Link
                            key={p.id}
                            to={`/product/${p.id}`}
                            className={`block text-sm py-1 pl-3 transition-colors ${
                              location.pathname === `/product/${p.id}`
                                ? 'text-accent font-medium'
                                : 'text-text-primary hover:text-accent'
                            }`}
                          >
                            {p.title}
                          </Link>
                        ))}
                      </div>
                    );
                  })}
                </div>
              </div>
              <Link
                to="/clients"
                className={`px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                  location.pathname === '/clients' ? 'bg-muted text-accent' : 'text-text-primary hover:bg-muted'
                }`}
              >
                Clients
              </Link>
              <Link
                to="/blog"
                className={`px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                  location.pathname === '/blog' ? 'bg-muted text-accent' : 'text-text-primary hover:bg-muted'
                }`}
              >
                Blog
              </Link>
              <Link
                to="/contact"
                className={`px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                  location.pathname === '/contact' ? 'bg-muted text-accent' : 'text-text-primary hover:bg-muted'
                }`}
              >
                Contact
              </Link>
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
