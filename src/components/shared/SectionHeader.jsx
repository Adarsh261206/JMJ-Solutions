import ScrollReveal from './ScrollReveal';

export default function SectionHeader({ title, subtitle, light, className }) {
  return (
    <ScrollReveal className={`mb-12 md:mb-16 ${className || ''}`}>
      <h2 className={`text-3xl md:text-4xl lg:text-5xl font-bold ${light ? 'text-white' : 'text-text-primary'}`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`mt-4 text-lg md:text-xl max-w-3xl ${light ? 'text-white/80' : 'text-text-secondary'}`}>
          {subtitle}
        </p>
      )}
    </ScrollReveal>
  );
}
