import React from 'react';
import { motion } from 'framer-motion';
import { clsx } from 'clsx';

type ButtonVariant = 'primary' | 'secondary' | 'ghost';
type ButtonSize = 'sm' | 'md' | 'lg';

interface ButtonProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  isLoading?: boolean;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  href?: string;
  className?: string;
  disabled?: boolean;
  onClick?: (e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => void;
  children: React.ReactNode;
  type?: 'button' | 'submit' | 'reset';
  'aria-label'?: string;
}

const sizeClasses: Record<ButtonSize, string> = {
  sm: 'px-5 py-2.5 text-xs',
  md: 'px-8 py-3.5 text-sm',
  lg: 'px-10 py-4 text-base',
};

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    'bg-gradient-brand text-white shadow-xl shadow-brand-purple/20 hover:shadow-brand-purple/35 hover:opacity-95',
  secondary:
    'bg-white border border-brand-purple/20 text-gray-800 hover:bg-gray-50 shadow-sm',
  ghost:
    'glass border border-brand-purple/12 text-gray-800 hover:bg-white/90 shadow-sm',
};

const Spinner: React.FC = () => (
  <span className="w-4 h-4 border-2 border-current/30 border-t-current rounded-full animate-spin shrink-0" />
);

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  isLoading = false,
  icon,
  iconPosition = 'right',
  href,
  className,
  disabled,
  onClick,
  children,
  type = 'button',
  'aria-label': ariaLabel,
}) => {
  const baseClasses = clsx(
    'inline-flex items-center justify-center gap-2 font-bold rounded-2xl transition-all duration-200 cursor-pointer select-none',
    sizeClasses[size],
    variantClasses[variant],
    (disabled || isLoading) && 'opacity-60 cursor-not-allowed pointer-events-none',
    className
  );

  const content = (
    <>
      {isLoading && <Spinner />}
      {!isLoading && icon && iconPosition === 'left' && icon}
      <span>{children}</span>
      {!isLoading && icon && iconPosition === 'right' && icon}
    </>
  );

  if (href) {
    return (
      <motion.a
        href={href}
        className={baseClasses}
        onClick={onClick as React.MouseEventHandler<HTMLAnchorElement>}
        aria-label={ariaLabel}
        aria-disabled={disabled}
        whileHover={{ scale: disabled ? 1 : 1.03 }}
        whileTap={{ scale: disabled ? 1 : 0.97 }}
      >
        {content}
      </motion.a>
    );
  }

  return (
    <motion.button
      type={type}
      className={baseClasses}
      onClick={onClick as React.MouseEventHandler<HTMLButtonElement>}
      disabled={disabled || isLoading}
      aria-label={ariaLabel}
      whileHover={{ scale: disabled || isLoading ? 1 : 1.03 }}
      whileTap={{ scale: disabled || isLoading ? 1 : 0.97 }}
    >
      {content}
    </motion.button>
  );
};

export default Button;
