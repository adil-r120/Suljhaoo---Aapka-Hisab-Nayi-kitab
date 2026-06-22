import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { faqItems } from '../data/faq';
import type { FAQItem } from '../types/faq.types';
import SectionHeading from '../components/ui/SectionHeading';
import ParallaxOrb from '../components/ui/ParallaxOrb';

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring' as const,
      stiffness: 100,
      damping: 15,
    },
  },
};

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs: FAQItem[] = faqItems;



  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24 bg-transparent relative overflow-hidden" id="faq">
      {/* Ambient Parallax Orbs */}
      <ParallaxOrb 
        className="top-10 left-[10%] w-[400px] h-[400px] bg-brand-purple/5 blur-[140px]" 
        speed={120} 
      />
      <ParallaxOrb 
        className="bottom-10 right-[10%] w-[350px] h-[350px] bg-brand-pink/5 blur-[140px]" 
        speed={-80} 
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <SectionHeading
          badge={{ label: 'Got Questions?' }}
          title={<>Frequently Asked <span className="text-gradient">Questions</span></>}
          subtitle="Everything you need to know about setting up and running your shop with Suljhaoo."
        />

        {/* Accordions container */}
        <motion.div 
          className="space-y-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className={`bg-white border rounded-2xl transition-all duration-300 ${
                  isOpen 
                    ? 'border-brand-purple/30 shadow-md' 
                    : 'border-brand-purple/10 hover:border-brand-purple/20'
                }`}
              >
                {/* Accordion Trigger */}
                <button
                  type="button"
                  onClick={() => handleToggle(index)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-purple/20 rounded-2xl cursor-pointer select-none"
                  aria-expanded={isOpen}
                  aria-controls={`faq-content-${index}`}
                >
                  <span className={`font-heading font-bold text-sm sm:text-base transition-colors duration-200 ${
                    isOpen ? 'text-brand-purple' : 'text-gray-800'
                  }`}>
                    {faq.question}
                  </span>
                  
                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ type: 'spring', stiffness: 200, damping: 20 }}
                    className={`shrink-0 p-1 rounded-full bg-gray-50 text-gray-400 ${
                      isOpen ? 'text-brand-purple bg-brand-purple/5' : ''
                    }`}
                  >
                    <ChevronDown size={18} />
                  </motion.div>
                </button>

                {/* Accordion Content */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={`faq-content-${index}`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 text-left border-t border-gray-100 pt-4 text-xs sm:text-sm text-gray-500 leading-relaxed">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
};

export default FAQ;
