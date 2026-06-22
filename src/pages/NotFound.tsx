import React from 'react';
import { motion } from 'framer-motion';
import { Home, ArrowLeft } from 'lucide-react';
import ParallaxOrb from '../components/ui/ParallaxOrb';
import PageTransition from '../components/ui/PageTransition';
import MagneticWrapper from '../components/ui/MagneticWrapper';

export const NotFound: React.FC = () => {
  return (
    <PageTransition>
      <div className="min-h-[80vh] flex flex-col items-center justify-center text-center px-4 relative overflow-hidden">
      {/* Background blobs */}
      <ParallaxOrb 
        className="top-1/4 left-1/4 w-[500px] h-[500px] bg-brand-purple/8 blur-[160px]" 
        speed={80} 
      />
      <ParallaxOrb 
        className="bottom-1/4 right-1/4 w-[400px] h-[400px] bg-brand-pink/6 blur-[140px]" 
        speed={-120} 
      />

      <motion.div
        className="text-center max-w-lg relative z-10"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
      >
        {/* 404 Display */}
        <motion.h1
          className="font-heading font-extrabold text-[8rem] sm:text-[10rem] leading-none text-gradient select-none"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.1, type: 'spring', stiffness: 200 }}
        >
          404
        </motion.h1>

        {/* Tagline */}
        <div className="mt-2 mb-8">
          <h2 className="font-heading font-bold text-2xl sm:text-3xl text-gray-900 mb-3">
            Yeh Page Nahi Mila!
          </h2>
          <p className="text-gray-500 text-base leading-relaxed">
            Lagta hai aap kisi aisi jagah aa gaye jo exist nahi karti.
            <br />
            <span className="text-gray-400 text-sm mt-1 block">
              (The page you're looking for doesn't exist.)
            </span>
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <MagneticWrapper>
            <motion.a
              href="/"
              className="bg-gradient-brand text-white font-bold px-8 py-3.5 rounded-2xl flex items-center justify-center gap-2 shadow-lg shadow-brand-purple/20 hover:shadow-brand-purple/35 transition-all"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              aria-label="Go to homepage"
            >
              <Home size={18} />
              Go to Homepage
            </motion.a>
          </MagneticWrapper>

          <MagneticWrapper>
            <motion.button
              onClick={() => window.history.back()}
              className="glass border border-brand-purple/12 text-gray-800 font-bold px-8 py-3.5 rounded-2xl flex items-center justify-center gap-2 hover:bg-white/90 shadow-sm transition-all"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              aria-label="Go back to previous page"
            >
              <ArrowLeft size={18} className="text-brand-purple" />
              Go Back
            </motion.button>
          </MagneticWrapper>
        </div>

        {/* Suljhaoo branding */}
        <p className="mt-12 text-xs text-gray-400 font-semibold">
          <span className="text-brand-purple font-bold">Suljhaoo</span> — Dukaan Ki Har Uljhan Ka Hal
        </p>
      </motion.div>
    </div>
    </PageTransition>
  );
};

export default NotFound;
