import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';

interface MagneticWrapperProps {
  children: React.ReactElement;
  className?: string;
  /** How strong the magnetic pull is (lower = stronger). Default 0.2 means it moves 20% of the distance to the cursor. */
  pullStrength?: number;
}

export const MagneticWrapper: React.FC<MagneticWrapperProps> = ({ 
  children, 
  className = "",
  pullStrength = 0.2
}) => {
  const ref = useRef<HTMLDivElement>(null);
  
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouse = (e: React.MouseEvent<HTMLDivElement>) => {
    const { clientX, clientY } = e;
    const { height, width, left, top } = ref.current!.getBoundingClientRect();
    
    const middleX = clientX - (left + width / 2);
    const middleY = clientY - (top + height / 2);
    
    setPosition({ 
      x: middleX * pullStrength, 
      y: middleY * pullStrength 
    });
  };

  const reset = () => {
    setPosition({ x: 0, y: 0 });
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={reset}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
      className={`inline-block ${className}`}
    >
      {children}
    </motion.div>
  );
};

export default MagneticWrapper;
