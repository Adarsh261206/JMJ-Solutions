import { Quote, Star } from 'lucide-react';
import SectionHeader from '../../shared/SectionHeader';
import ScrollReveal from '../../shared/ScrollReveal';

const TESTIMONIALS = [
  {
    quote:
      'JMJ Solutions installed CCTV cameras across our entire residential society. The team was professional, and the quality of work exceeded our expectations. Highly recommended for anyone looking for reliable security solutions.',
    name: 'Rajesh Sharma',
    designation: 'Secretary',
    company: 'Runwal Garden City, Thane',
    avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop&crop=face',
  },
  {
    quote:
      'We needed a complete access control and surveillance setup for our new office. JMJ Solutions delivered a seamless system on time and within budget. Their after-sales support has been excellent.',
    name: 'Priya Menon',
    designation: 'Facilities Manager',
    company: 'Semantic India Pvt Ltd, Navi Mumbai',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop&crop=face',
  },
  {
    quote:
      'From consultation to installation, the entire experience was smooth. The team understood our specific needs for a multi-floor commercial complex and delivered a system that works flawlessly around the clock.',
    name: 'Amit Deshpande',
    designation: 'Operations Head',
    company: 'Lechler India Pvt Ltd, Thane',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face',
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 md:py-28 bg-surface relative overflow-hidden">
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-accent/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 right-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
      <div className="container-page relative">
        <SectionHeader
          title="What Our Clients Say"
          subtitle="Hear from the businesses and communities that trust us to keep their premises secure."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {TESTIMONIALS.map((testimonial, i) => (
            <ScrollReveal key={testimonial.name} delay={i * 0.1}>
              <div className="bg-white rounded-2xl p-8 shadow-lg shadow-black/5 ring-1 ring-black/5 hover:ring-accent/20 transition-all duration-300 hover:shadow-2xl hover:-translate-y-0.5 h-full flex flex-col">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, s) => (
                    <Star key={s} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-accent/5 to-accent/10 flex items-center justify-center mb-4 ring-1 ring-accent/10">
                  <Quote className="w-5 h-5 text-accent/40" />
                </div>
                <p className="text-text-secondary leading-relaxed mb-6 flex-1 text-sm">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
                <div className="border-t border-border/60 pt-4 flex items-center gap-3">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    width={100}
                    height={100}
                    className="w-12 h-12 rounded-full object-cover bg-primary/10 shrink-0 ring-2 ring-white shadow-md"
                    loading="lazy"
                    decoding="async"
                  />
                  <div>
                    <p className="font-bold text-primary text-sm">{testimonial.name}</p>
                    <p className="text-xs text-text-secondary">
                      {testimonial.designation}, {testimonial.company}
                    </p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
