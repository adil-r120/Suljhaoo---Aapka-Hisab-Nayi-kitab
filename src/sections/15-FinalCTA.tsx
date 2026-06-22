import React from 'react';
import { motion } from 'framer-motion';
import { Smartphone } from 'lucide-react';
import MagneticWrapper from '../components/ui/MagneticWrapper';


export const FinalCTA: React.FC = () => {
  return (
    <section 
      className="py-20 sm:py-28 relative overflow-hidden bg-gradient-to-b from-[#ead6ee]/50 to-[#f9ddea]/80 text-center" 
      id="download"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col items-center space-y-6">
        
        {/* Title */}
        <motion.h2 
          className="font-heading font-bold text-3xl sm:text-4xl text-gray-900 tracking-tight"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Ready to Transform Your Store?
        </motion.h2>

        {/* Description */}
        <motion.p 
          className="text-gray-600 text-sm sm:text-base max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          Download free — no card needed. Your first sale in under two minutes.
        </motion.p>

        {/* Action Button */}
        <motion.div 
          className="pt-4"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <MagneticWrapper>
            <motion.a
              href="#download"
              className="bg-brand-purple text-white font-bold px-8 py-4 rounded-2xl flex items-center justify-center gap-2 shadow-xl shadow-brand-purple/20 hover:shadow-brand-purple/35 transition-shadow relative overflow-hidden group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Smartphone size={20} className="relative z-10" />
              <span className="relative z-10">Get Suljhaoo Free</span>
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
            </motion.a>
          </MagneticWrapper>
        </motion.div>

      </div>
    </section>
  );
};

export default FinalCTA;
