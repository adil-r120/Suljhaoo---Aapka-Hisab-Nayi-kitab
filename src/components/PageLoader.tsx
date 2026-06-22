import React from 'react';
import { motion } from 'framer-motion';

export const PageLoader: React.FC = () => {
  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-white/80 backdrop-blur-md">
      <div className="relative flex flex-col items-center gap-6">
        {/* Animated Double Ring Spinner */}
        <div className="relative w-20 h-20">
          <motion.div
            className="absolute inset-0 rounded-full border-4 border-t-brand-purple border-r-transparent border-b-brand-pink border-l-transparent"
            animate={{ rotate: 360 }}
            transition={{ duration: 1.2, repeat: Infinity, ease: "linear" }}
          />
          <motion.div
            className="absolute inset-2 rounded-full border-4 border-t-transparent border-r-brand-pink border-b-transparent border-l-brand-purple"
            animate={{ rotate: -360 }}
            transition={{ duration: 1.6, repeat: Infinity, ease: "linear" }}
          />
        </div>
        
        {/* Animated Loading Text */}
        <div className="flex flex-col items-center gap-1.5">
          <motion.h3 
            className="text-lg font-heading font-extrabold text-gradient tracking-wide"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          >
            Suljhaoo
          </motion.h3>
          <p className="text-xs text-gray-400 font-medium tracking-wider uppercase animate-pulse">
            Loading your store...
          </p>
        </div>
      </div>
    </div>
  );
};

export default PageLoader;
