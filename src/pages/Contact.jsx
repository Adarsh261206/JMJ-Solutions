import { useState } from 'react';
import { MapPin, Phone, Mail, Clock, MessageCircle } from 'lucide-react';
import SEO from '../components/shared/SEO';
import ScrollReveal from '../components/shared/ScrollReveal';
import Button from '../components/shared/Button';
import { COMPANY } from '../utils/constants';

export default function Contact() {
  const [form, setForm] = useState({ name: '', phone: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setForm({ name: '', phone: '', email: '', message: '' });
  };

  return (
    <>
      <SEO title="Contact Us" />

      <section className="bg-primary-dark py-24 text-white">
        <div className="container-page">
          <ScrollReveal>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
            <p className="text-lg text-white/80 max-w-2xl">
              Get in touch for a free consultation and quote
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container-page">
          <div className="grid lg:grid-cols-2 gap-12">
            <ScrollReveal direction="left">
              <h2 className="text-2xl font-bold text-primary mb-6">Send Us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition"
                    placeholder="+91 XXXXX XXXXX"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition"
                    placeholder="you@example.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition resize-none"
                    placeholder="Tell us about your security needs..."
                  />
                </div>
                <Button type="submit" size="lg" className="w-full">
                  {submitted ? 'Message Sent!' : 'Send Message'}
                </Button>
              </form>
            </ScrollReveal>

            <ScrollReveal direction="right">
              <h2 className="text-2xl font-bold text-primary mb-6">Contact Information</h2>
              <div className="space-y-6 mb-8">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary">Office Address</h4>
                    <p className="text-gray-600 text-sm">{COMPANY.address}</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary">Phone Numbers</h4>
                    <p className="text-gray-600 text-sm">{COMPANY.contactPerson1}: {COMPANY.phone1}</p>
                    <p className="text-gray-600 text-sm">{COMPANY.contactPerson2}: {COMPANY.phone2}</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary">Email</h4>
                    <p className="text-gray-600 text-sm">{COMPANY.email}</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary">Office Hours</h4>
                    <p className="text-gray-600 text-sm">{COMPANY.hours}</p>
                  </div>
                </div>
              </div>

              <a
                href="https://wa.me/919594209259"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-green-500 text-white font-semibold px-6 py-3 rounded-lg hover:bg-green-600 transition-colors mb-8"
              >
                <MessageCircle className="w-5 h-5" />
                Chat on WhatsApp
              </a>

              <div className="rounded-xl overflow-hidden shadow-lg mt-4">
                <iframe
                  src={COMPANY.mapEmbed}
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="JMJ Solutions Location"
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </>
  );
}
