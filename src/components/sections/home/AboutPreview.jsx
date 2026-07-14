import { ArrowRight, Eye, Target, Heart } from 'lucide-react';
import Button from '../../shared/Button';
import ScrollReveal from '../../shared/ScrollReveal';
import { COMPANY } from '../../../utils/constants';

const values = [
  { icon: Eye, title: 'Our Vision', text: 'To be Mumbai\'s most trusted security solutions provider, setting the standard for quality and reliability in surveillance systems.' },
  { icon: Target, title: 'Our Mission', text: 'Delivering world-class security solutions with precision, integrity, and unwavering commitment to customer satisfaction.' },
  { icon: Heart, title: 'Our Values', text: 'Quality, reliability, transparency, and customer-centricity form the foundation of everything we do.' },
];

export default function AboutPreview() {
  return (
    <section className="py-20 md:py-28 bg-white relative overflow-hidden">
      <div className="absolute top-40 -left-20 w-72 h-72 bg-accent/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-20 -right-20 w-80 h-80 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
      <div className="container-page relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <ScrollReveal direction="left">
            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl ring-1 ring-black/5">
                <img
                  src="/images/product-cctv.jpg"
                  alt="CCTV Camera Installation"
                  width={447}
                  height={447}
                  className="w-full h-full object-cover"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-gradient-to-br from-accent to-accent-light text-white p-6 rounded-2xl shadow-2xl hidden md:block ring-1 ring-white/20">
                <div className="text-3xl font-bold">150+</div>
                <div className="text-white/80 text-sm">Societies Served</div>
              </div>
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-primary/5 rounded-full blur-2xl" />
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right">
            <div className="inline-flex items-center gap-2 bg-accent/5 border border-accent/10 rounded-full px-4 py-1.5 mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
              <p className="text-accent font-semibold text-sm uppercase tracking-wider">About Us</p>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-6 leading-[1.15]">
              Mumbai&apos;s Trusted Security Partner Since 2016
            </h2>
            <p className="text-text-secondary text-lg leading-relaxed mb-8">
              Established in July 2016, JMJ Solutions has been at the forefront of security and surveillance 
              systems in Mumbai. We cater to over 150+ residential societies across Mumbai, along with 
              commercial sectors including restaurants, schools, colleges, warehouses, and corporate offices. 
              Our motto is simple: deliver quality service in quality time and within customer budget.
            </p>

            <div className="grid sm:grid-cols-3 gap-4 mb-8">
              {values.map((v) => (
                <div key={v.title} className="p-5 rounded-xl bg-white shadow-lg shadow-black/5 ring-1 ring-black/5 hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-accent/10 to-accent/5 flex items-center justify-center mb-3 ring-1 ring-accent/10">
                    <v.icon className="w-5 h-5 text-accent" />
                  </div>
                  <h3 className="font-semibold text-sm text-primary mb-1">{v.title}</h3>
                  <p className="text-xs text-text-secondary leading-relaxed">{v.text}</p>
                </div>
              ))}
            </div>

            <Button to="/about" variant="secondary">
              Learn More About Us <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
