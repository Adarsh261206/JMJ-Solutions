import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import SectionHeader from '../../shared/SectionHeader';
import ScrollReveal from '../../shared/ScrollReveal';
import { FAQS } from '../../../utils/constants';

function FAQItem({ item, isOpen, onToggle }) {
  return (
    <div className={`border rounded-xl overflow-hidden bg-white shadow-md shadow-black/5 ring-1 transition-all duration-300 ${
      isOpen ? 'border-accent/30 ring-accent/10 shadow-lg shadow-accent/5' : 'border-border/60 ring-black/5 hover:shadow-lg hover:-translate-y-0.5'
    }`}>
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between p-5 text-left transition-colors duration-200 cursor-pointer"
      >
        <span className={`font-semibold pr-4 transition-colors duration-300 ${isOpen ? 'text-accent' : 'text-primary'}`}>{item.q}</span>
        <span className={`shrink-0 w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-300 ${
          isOpen ? 'bg-accent text-white' : 'bg-accent/10 text-accent'
        }`}>
          {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
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
            <div className="px-5 pb-5 text-text-secondary leading-relaxed border-t border-border/40 pt-4">
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
    <section className="py-20 md:py-28 bg-gradient-to-b from-surface via-white to-surface relative overflow-hidden">
      <div className="absolute bottom-0 left-1/3 w-80 h-80 bg-accent/[0.03] rounded-full blur-3xl pointer-events-none" />
      <div className="container-page relative">
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
