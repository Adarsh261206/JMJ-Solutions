import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import SectionHeader from '../../shared/SectionHeader';
import ScrollReveal from '../../shared/ScrollReveal';
import { FAQS } from '../../../utils/constants';

function FAQItem({ item, isOpen, onToggle }) {
  return (
    <div className="border border-border rounded-xl overflow-hidden bg-white">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between p-5 text-left hover:bg-muted/50 transition-colors duration-200 cursor-pointer"
      >
        <span className="font-semibold text-primary pr-4">{item.q}</span>
        <span className="shrink-0 w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center">
          {isOpen ? (
            <Minus className="w-4 h-4 text-accent" />
          ) : (
            <Plus className="w-4 h-4 text-accent" />
          )}
        </span>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <div className="px-5 pb-5 text-text-secondary leading-relaxed">
              {item.a}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 md:py-28 bg-surface">
      <div className="container-page">
        <SectionHeader
          title="Frequently Asked Questions"
          subtitle="Find answers to common questions about our security solutions and services."
        />

        <div className="max-w-3xl mx-auto space-y-3">
          {FAQS.map((item, i) => (
            <ScrollReveal key={i} delay={i * 0.05}>
              <FAQItem
                item={item}
                isOpen={openIndex === i}
                onToggle={() => toggle(i)}
              />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
