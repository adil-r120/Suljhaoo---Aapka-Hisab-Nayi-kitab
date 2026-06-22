import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const GlobalScrollIndicator: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);

  // Hide button when page is at the very bottom
  useEffect(() => {
    const handleScroll = () => {
      // If we are within 150px of the bottom of the page, hide the indicator
      const isAtBottom = window.innerHeight + window.scrollY >= document.body.offsetHeight - 150;
      setIsVisible(!isAtBottom);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollDown = () => {
    // Scroll down by 80% of the viewport height
    window.scrollBy({
      top: window.innerHeight * 0.8,
      behavior: 'smooth',
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[90] flex flex-col items-center gap-2 cursor-pointer hover:opacity-80 transition-opacity drop-shadow-xl"
          onClick={scrollDown}
          aria-label="Scroll down to next section"
        >
          {/* Custom Mouse Icon with Animated Wheel */}
          <div className="w-5 h-8 border-[1.5px] border-brand-purple/40 bg-white/60 backdrop-blur-md rounded-full flex justify-center p-[3px] shadow-sm">
            <motion.div
              className="w-1 h-1.5 bg-brand-purple rounded-full"
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default GlobalScrollIndicator;
