import React from 'react';
import { cn } from '@/lib/utils';

/**
 * Neural Dot Component
 * 
 * Animated data point representing neural network nodes
 * Features pulsing, flowing, and connection animations
 */

interface NeuralDotProps {
  /** Size of the dot */
  size?: 'xs' | 'sm' | 'md' | 'lg';
  /** Animation variant */
  variant?: 'pulse' | 'flow' | 'static' | 'quantum';
  /** Color theme */
  color?: 'primary' | 'accent' | 'matrix' | 'quantum';
  /** Animation delay in seconds */
  delay?: number;
  /** Enable glow effect */
  glow?: boolean;
  className?: string;
}

const sizeVariants = {
  xs: 'w-1 h-1',
  sm: 'w-2 h-2',
  md: 'w-3 h-3',
  lg: 'w-4 h-4'
};

const colorVariants = {
  primary: 'bg-brand-primary',
  accent: 'bg-brand-accent-vivid',
  matrix: 'bg-brand-matrix',
  quantum: 'bg-brand-quantum'
};

const animationVariants = {
  pulse: 'animate-neural-pulse',
  flow: 'animate-data-stream',
  static: '',
  quantum: 'animate-quantum-field'
};

export const NeuralDot: React.FC<NeuralDotProps> = ({
  size = 'sm',
  variant = 'pulse',
  color = 'primary',
  delay = 0,
  glow = false,
  className
}) => {
  const dotClasses = cn(
    'rounded-full transition-neural',
    sizeVariants[size],
    colorVariants[color],
    animationVariants[variant],
    glow && 'shadow-[0_0_10px_currentColor]',
    className
  );

  const style = delay > 0 ? { animationDelay: `${delay}s` } : undefined;

  return (
    <div 
      className={dotClasses}
      style={style}
      aria-hidden="true"
    />
  );
};

export default NeuralDot;