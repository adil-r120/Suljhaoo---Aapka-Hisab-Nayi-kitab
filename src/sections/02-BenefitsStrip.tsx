import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

const benefits = [
  { text: 'Complete Store Platform' },
  { text: '14-Day Free Trial' },
  { text: 'WhatsApp Billing Simplicity' },
  { text: 'Setup In Just 5 Minutes' },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 15 },
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

export const BenefitsStrip: React.FC = () => {
  return (
    <div className="w-full bg-white/40 backdrop-blur-xs border-y border-brand-purple/10 py-6 sm:py-8 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
        >
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              className="flex items-center justify-center gap-3 bg-white/50 backdrop-blur-sm border border-brand-purple/5 px-5 py-3 rounded-2xl shadow-sm hover:shadow-md hover:border-brand-purple/10 transition-all duration-300 group cursor-default"
              variants={itemVariants}
            >
              <div className="text-brand-purple bg-brand-purple/10 p-1.5 rounded-full group-hover:bg-brand-purple group-hover:text-white transition-colors duration-300 shrink-0">
                <CheckCircle2 size={18} className="stroke-[2.5px]" />
              </div>
              <span className="font-heading font-semibold text-gray-800 text-sm tracking-wide">
                {benefit.text}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default BenefitsStrip;
