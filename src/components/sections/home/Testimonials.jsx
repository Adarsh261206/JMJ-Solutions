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
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face',
  },
  {
    quote:
      'We needed a complete access control and surveillance setup for our new office. JMJ Solutions delivered a seamless system on time and within budget. Their after-sales support has been excellent.',
    name: 'Priya Menon',
    designation: 'Facilities Manager',
    company: 'Semantic India Pvt Ltd, Navi Mumbai',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face',
  },
  {
    quote:
      'From consultation to installation, the entire experience was smooth. The team understood our specific needs for a multi-floor commercial complex and delivered a system that works flawlessly around the clock.',
    name: 'Amit Deshpande',
    designation: 'Operations Head',
    company: 'Lechler India Pvt Ltd, Thane',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face',
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 md:py-28 bg-surface">
      <div className="container-page">
        <SectionHeader
          title="What Our Clients Say"
          subtitle="Hear from the businesses and communities that trust us to keep their premises secure."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {TESTIMONIALS.map((testimonial, i) => (
            <ScrollReveal key={testimonial.name} delay={i * 0.1}>
              <div className="bg-white rounded-2xl p-8 border border-border hover:border-accent/30 transition-all duration-300 hover:shadow-xl h-full flex flex-col">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, s) => (
                    <Star key={s} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <Quote className="w-8 h-8 text-accent/20 mb-3" />
                <p className="text-text-secondary leading-relaxed mb-6 flex-1">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
                <div className="border-t border-border pt-4 flex items-center gap-3">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover bg-primary/10 shrink-0"
                    loading="lazy"
                  />
                  <div>
                    <p className="font-bold text-primary">{testimonial.name}</p>
                    <p className="text-sm text-text-secondary">
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
