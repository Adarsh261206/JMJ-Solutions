import { Eye, Target, Shield, Heart, Award, Users } from 'lucide-react';
import SEO from '../components/shared/SEO';
import ScrollReveal from '../components/shared/ScrollReveal';
import { COMPANY } from '../utils/constants';

const values = [
  {
    icon: Shield,
    title: 'Integrity',
    description: 'We conduct business with the highest ethical standards, ensuring transparency and honesty in every interaction.',
  },
  {
    icon: Heart,
    title: 'Customer First',
    description: 'Our clients are at the heart of everything we do. We listen, understand, and deliver beyond expectations.',
  },
  {
    icon: Award,
    title: 'Excellence',
    description: 'We strive for excellence in every installation, using premium products and following industry best practices.',
  },
  {
    icon: Users,
    title: 'Teamwork',
    description: 'Our skilled team works collaboratively to deliver seamless security solutions that make a real difference.',
  },
];

export default function About() {
  return (
    <>
      <SEO title="About Us" />

      <section className="bg-primary-dark py-24 text-white">
        <div className="container-page">
          <ScrollReveal>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">About {COMPANY.name}</h1>
            <p className="text-lg text-white/80 max-w-2xl">
              Delivering quality security solutions since {COMPANY.foundingYear}
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container-page">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <ScrollReveal direction="left">
              <div className="bg-gradient-to-br from-primary to-primary-dark rounded-2xl h-80 flex items-center justify-center">
                <span className="text-white text-6xl font-bold opacity-20">{COMPANY.foundingYear}</span>
              </div>
            </ScrollReveal>
            <ScrollReveal direction="right">
              <span className="text-accent font-semibold text-sm uppercase tracking-wider">Our Story</span>
              <h2 className="text-3xl font-bold text-primary mt-2 mb-6">Building Trust Since {COMPANY.foundingYear}</h2>
              <p className="text-gray-600 mb-4">
                {COMPANY.name} was established in July {COMPANY.foundingYear} with a vision to provide reliable and
                affordable security solutions across the Mumbai Metropolitan Region.
              </p>
              <p className="text-gray-600 mb-4">
                Over the years, we have successfully catered to {COMPANY.happyClients} residential societies and
                numerous commercial sectors, earning the trust of our clients through consistent quality and
                dedicated service.
              </p>
              <p className="text-gray-600">
                Our team of certified engineers brings {COMPANY.experience} of combined experience, ensuring every
                installation meets the highest standards of quality and reliability.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted">
        <div className="container-page">
          <ScrollReveal>
            <span className="text-accent font-semibold text-sm uppercase tracking-wider">What Drives Us</span>
            <h2 className="text-3xl font-bold text-primary mt-2 mb-12">Mission & Vision</h2>
          </ScrollReveal>
          <div className="grid md:grid-cols-2 gap-8">
            <ScrollReveal direction="left">
              <div className="bg-white rounded-2xl p-8 shadow-lg h-full">
                <div className="w-14 h-14 bg-accent/10 rounded-xl flex items-center justify-center mb-6">
                  <Target className="w-7 h-7 text-accent" />
                </div>
                <h3 className="text-xl font-bold text-primary mb-4">Our Mission</h3>
                <p className="text-gray-600">
                  To provide world-class security and surveillance solutions that protect what matters most to our
                  clients. We are committed to delivering innovative, reliable, and cost-effective systems backed
                  by exceptional service and support.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal direction="right">
              <div className="bg-white rounded-2xl p-8 shadow-lg h-full">
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                  <Eye className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-primary mb-4">Our Vision</h3>
                <p className="text-gray-600">
                  To be the most trusted name in security and surveillance across Mumbai, setting new benchmarks
                  in quality, innovation, and customer satisfaction. We envision a safer future powered by
                  advanced technology and dedicated service.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container-page">
          <ScrollReveal>
            <span className="text-accent font-semibold text-sm uppercase tracking-wider">What We Stand For</span>
            <h2 className="text-3xl font-bold text-primary mt-2 mb-12">Our Values</h2>
          </ScrollReveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, i) => (
              <ScrollReveal key={value.title} delay={i * 0.1}>
                <div className="text-center">
                  <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <value.icon className="w-8 h-8 text-accent" />
                  </div>
                  <h3 className="text-lg font-bold text-primary mb-2">{value.title}</h3>
                  <p className="text-gray-600 text-sm">{value.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
