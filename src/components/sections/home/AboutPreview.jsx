import { ArrowRight, Eye, Target, Heart } from 'lucide-react';
import Button from '../../shared/Button';
import ScrollReveal from '../../shared/ScrollReveal';

const values = [
  { icon: Eye, title: 'Our Vision', text: 'To be Mumbai\'s most trusted security solutions provider, setting the standard for quality and reliability in surveillance systems.' },
  { icon: Target, title: 'Our Mission', text: 'Delivering world-class security solutions with precision, integrity, and unwavering commitment to customer satisfaction.' },
  { icon: Heart, title: 'Our Values', text: 'Quality, reliability, transparency, and customer-centricity form the foundation of everything we do.' },
];

export default function AboutPreview() {
  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="container-page">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <ScrollReveal direction="left">
            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
                <img
                  src="/images/product-cctv.jpg"
                  alt="CCTV Camera Installation"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-accent text-white p-6 rounded-2xl shadow-2xl hidden md:block">
                <div className="text-3xl font-bold">150+</div>
                <div className="text-white/80 text-sm">Societies Served</div>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right">
            <p className="text-accent font-semibold text-sm uppercase tracking-wider mb-3">About Us</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-6">
              Mumbai&apos;s Trusted Security Partner Since 2015
            </h2>
            <p className="text-text-secondary text-lg leading-relaxed mb-8">
              Established in July 2015, JMJ Solutions has been at the forefront of security and surveillance 
              systems in Mumbai. We cater to over 150+ residential societies across Mumbai, along with 
              commercial sectors including restaurants, schools, colleges, warehouses, and corporate offices. 
              Our motto is simple: deliver quality service in quality time and within customer budget.
            </p>

            <div className="grid sm:grid-cols-3 gap-6 mb-8">
              {values.map((v) => (
                <div key={v.title} className="p-4 rounded-xl bg-surface">
                  <v.icon className="w-5 h-5 text-accent mb-2" />
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
