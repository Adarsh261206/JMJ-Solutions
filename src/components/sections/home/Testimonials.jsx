import { Quote } from 'lucide-react';
import SectionHeader from '../../shared/SectionHeader';
import ScrollReveal from '../../shared/ScrollReveal';

const TESTIMONIALS = [
  {
    quote:
      'JMJ Solutions installed CCTV cameras across our entire residential society. The team was professional, and the quality of work exceeded our expectations. Highly recommended for anyone looking for reliable security solutions.',
    name: 'Rajesh Sharma',
    designation: 'Secretary',
    company: 'Runwal Garden City, Thane',
  },
  {
    quote:
      'We needed a complete access control and surveillance setup for our new office. JMJ Solutions delivered a seamless system on time and within budget. Their after-sales support has been excellent.',
    name: 'Priya Menon',
    designation: 'Facilities Manager',
    company: 'Semantic India Pvt Ltd, Navi Mumbai',
  },
  {
    quote:
      'From consultation to installation, the entire experience was smooth. The team understood our specific needs for a multi-floor commercial complex and delivered a system that works flawlessly around the clock.',
    name: 'Amit Deshpande',
    designation: 'Operations Head',
    company: 'Lechler India Pvt Ltd, Thane',
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="container-page">
        <SectionHeader
          title="What Our Clients Say"
          subtitle="Hear from the businesses and communities that trust us to keep their premises secure."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {TESTIMONIALS.map((testimonial, i) => (
            <ScrollReveal key={testimonial.name} delay={i * 0.1}>
              <div className="bg-white rounded-2xl p-8 border border-border hover:border-accent/30 transition-all duration-300 hover:shadow-xl h-full flex flex-col">
                <Quote className="w-8 h-8 text-accent/20 mb-4" />
                <p className="text-text-secondary leading-relaxed mb-6 flex-1">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
                <div className="border-t border-border pt-4">
                  <p className="font-bold text-primary">{testimonial.name}</p>
                  <p className="text-sm text-text-secondary">
                    {testimonial.designation}, {testimonial.company}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
