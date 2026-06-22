import React from 'react';
import { motion } from 'framer-motion';
import Badge, { type BadgeProps } from './Badge';

interface SectionHeadingProps {
  badge?: Omit<BadgeProps, 'className'>;
  title: React.ReactNode;
  /** The word/phrase in the title that gets the gradient treatment */
  highlight?: string;
  subtitle?: string;
  className?: string;
  align?: 'left' | 'center';
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  badge,
  title,
  subtitle,
  className,
  align = 'center',
}) => {
  const alignClass = align === 'center' ? 'text-center mx-auto' : 'text-left';

  return (
    <motion.div 
      className={`max-w-3xl mb-12 sm:mb-16 ${alignClass} ${className ?? ''}`}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: 0.15,
          }
        }
      }}
    >
      {badge && (
        <motion.div 
          variants={{
            hidden: { opacity: 0, y: 15 },
            visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 100, damping: 15 } }
          }}
          className="mb-4 flex justify-center"
        >
          <Badge {...badge} />
        </motion.div>
      )}

      <motion.h2 
        className="font-heading font-extrabold text-3xl sm:text-4xl text-gray-900 tracking-tight"
        variants={{
          hidden: { opacity: 0, y: 30, clipPath: 'inset(100% 0 0 0)' },
          visible: { 
            opacity: 1, 
            y: 0, 
            clipPath: 'inset(-20% 0 -20% 0)', // allow shadows/overflow
            transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } 
          }
        }}
      >
        {title}
      </motion.h2>

      {subtitle && (
        <motion.p 
          className="text-gray-500 text-base sm:text-lg mt-3 leading-relaxed"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { 
              opacity: 1, 
              y: 0, 
              transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } 
            }
          }}
        >
          {subtitle}
        </motion.p>
      )}
    </motion.div>
  );
};

export default SectionHeading;
