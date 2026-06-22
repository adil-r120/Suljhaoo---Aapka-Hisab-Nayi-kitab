import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface ParallaxOrbProps {
  className?: string;
  /** Distance to travel in pixels. Positive goes down as you scroll down, negative goes up. */
  speed?: number; 
}

/**
 * A beautiful ambient background blob that moves slightly as the user scrolls,
 * creating a sophisticated 3D parallax depth effect.
 */
export const ParallaxOrb: React.FC<ParallaxOrbProps> = ({ 
  className = "", 
  speed = 100 
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  // Transform scroll progress into vertical movement
  const y = useTransform(scrollYProgress, [0, 1], [-speed, speed]);

  return (
    <motion.div
      ref={ref}
      style={{ y }}
      className={`absolute rounded-full pointer-events-none ${className}`}
    />
  );
};

export default ParallaxOrb;
