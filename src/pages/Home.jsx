import SEO from '../components/shared/SEO';
import Hero from '../components/sections/home/Hero';
import Highlights from '../components/sections/home/Highlights';
import AboutPreview from '../components/sections/home/AboutPreview';
import ServicesSection from '../components/sections/home/ServicesSection';
import WhyChooseUs from '../components/sections/home/WhyChooseUs';
import Industries from '../components/sections/home/Industries';
import Brands from '../components/sections/home/Brands';
import ClientsSection from '../components/sections/home/ClientsSection';
import Process from '../components/sections/home/Process';
import Testimonials from '../components/sections/home/Testimonials';
import FAQ from '../components/sections/home/FAQ';
import ContactCTA from '../components/sections/home/ContactCTA';

export default function Home() {
  return (
    <>
      <SEO />
      <Hero />
      <Highlights />
      <AboutPreview />
      <ServicesSection />
      <WhyChooseUs />
      <Industries />
      <Brands />
      <ClientsSection />
      <Process />
      <Testimonials />
      <FAQ />
      <ContactCTA />
    </>
  );
}
