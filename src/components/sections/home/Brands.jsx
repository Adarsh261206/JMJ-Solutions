import SectionHeader from '../../shared/SectionHeader';
import ScrollReveal from '../../shared/ScrollReveal';

export default function Brands() {
  return (
    <section className="py-20 md:py-28 bg-primary-dark relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-white/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />
      <div className="container-page relative">
        <SectionHeader
          title="Brands We Deal In"
          subtitle="We work with the world's leading security brands to bring you the best technology and reliability."
          light
        />

        <ScrollReveal>
          <div className="rounded-2xl overflow-hidden shadow-2xl shadow-black/30 ring-1 ring-white/10">
            <img
              src="/images/we-deals-brands.jpg"
              alt="Top security brands — CP Plus, Hikvision, Dahua, ESSL, Crystel — JMJ Solutions Mumbai"
              className="w-full h-auto object-contain bg-white"
              loading="lazy"
            />
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
