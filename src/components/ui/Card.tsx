import React from 'react';
import { clsx } from 'clsx';

interface CardProps {
  featured?: boolean;
  hoverable?: boolean;
  className?: string;
  children: React.ReactNode;
}

/**
 * Reusable Card component with the project's standard white card styling.
 * Replaces the repetitive `bg-white rounded-3xl border border-brand-purple/10 shadow-sm` pattern.
 */
export const Card: React.FC<CardProps> = ({
  featured = false,
  hoverable = true,
  className,
  children,
}) => {
  return (
    <div
      className={clsx(
        'bg-white rounded-3xl border flex flex-col relative',
        featured
          ? 'border-brand-purple ring-2 ring-brand-purple/20 shadow-premium-hover'
          : 'border-brand-purple/10 shadow-sm',
        hoverable &&
          'transition-all duration-300 hover:shadow-premium hover:border-brand-purple/30',
        className
      )}
    >
      {children}
    </div>
  );
};

export default Card;
