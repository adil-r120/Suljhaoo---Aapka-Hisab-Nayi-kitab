import React from 'react';
import { clsx } from 'clsx';

type BadgeColor = 'purple' | 'green' | 'amber';

export interface BadgeProps {
  label: string;
  color?: BadgeColor;
  icon?: React.ReactNode;
  className?: string;
}

const colorClasses: Record<BadgeColor, { wrapper: string; dot: string; text: string }> = {
  purple: {
    wrapper: 'bg-brand-purple/5 border-brand-purple/10',
    dot: 'bg-brand-purple',
    text: 'text-brand-purple',
  },
  green: {
    wrapper: 'bg-green-50 border-green-100',
    dot: 'bg-green-500',
    text: 'text-green-700',
  },
  amber: {
    wrapper: 'bg-amber-50 border-amber-100',
    dot: 'bg-amber-500',
    text: 'text-amber-700',
  },
};

/**
 * Section badge used in every section header — the pulsing dot + label pattern.
 * Replaces repetitive inline markup across all 15 sections.
 */
export const Badge: React.FC<BadgeProps> = ({
  label,
  color = 'purple',
  icon,
  className,
}) => {
  const styles = colorClasses[color];

  return (
    <div
      className={clsx(
        'inline-flex items-center gap-2 border rounded-full px-3.5 py-1.5 w-fit',
        styles.wrapper,
        className
      )}
    >
      {icon ?? <span className={clsx('w-1.5 h-1.5 rounded-full animate-pulse', styles.dot)} />}
      <span className={clsx('text-xs font-bold tracking-wider uppercase', styles.text)}>
        {label}
      </span>
    </div>
  );
};

export default Badge;
