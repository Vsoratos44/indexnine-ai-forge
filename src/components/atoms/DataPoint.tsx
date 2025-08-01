import React from 'react';
import { cn } from '@/lib/utils';

/**
 * Data Point Component
 * 
 * Represents flowing data in the neural network visualization
 * Features dynamic movement, scaling, and connection effects
 */

interface DataPointProps {
  /** Data point value or label */
  value?: string | number;
  /** Animation flow direction */
  direction?: 'up' | 'down' | 'left' | 'right' | 'orbital';
  /** Size variant */
  size?: 'sm' | 'md' | 'lg';
  /** Visual style */
  variant?: 'dot' | 'square' | 'diamond' | 'hexagon';
  /** Color theme */
  color?: 'primary' | 'accent' | 'matrix' | 'quantum';
  /** Animation speed multiplier */
  speed?: number;
  /** Enable trailing effect */
  trail?: boolean;
  className?: string;
}

const sizeVariants = {
  sm: 'w-3 h-3 text-xs',
  md: 'w-4 h-4 text-sm',
  lg: 'w-6 h-6 text-base'
};

const shapeVariants = {
  dot: 'rounded-full',
  square: 'rounded-sm',
  diamond: 'rotate-45 rounded-sm',
  hexagon: 'clip-path-hexagon'
};

const colorVariants = {
  primary: 'bg-brand-primary text-foreground-white',
  accent: 'bg-brand-accent-vivid text-foreground',
  matrix: 'bg-brand-matrix text-foreground',
  quantum: 'bg-brand-quantum text-foreground-white'
};

const directionVariants = {
  up: 'animate-data-stream',
  down: 'animate-data-stream-reverse',
  left: 'animate-data-stream-left',
  right: 'animate-data-stream-right',
  orbital: 'animate-quantum-field'
};

export const DataPoint: React.FC<DataPointProps> = ({
  value,
  direction = 'up',
  size = 'md',
  variant = 'dot',
  color = 'primary',
  speed = 1,
  trail = false,
  className
}) => {
  const dataPointClasses = cn(
    'relative inline-flex items-center justify-center font-mono transition-neural',
    sizeVariants[size],
    shapeVariants[variant],
    colorVariants[color],
    directionVariants[direction],
    trail && 'after:absolute after:inset-0 after:bg-current after:opacity-20 after:blur-sm after:scale-150',
    className
  );

  const animationStyle = speed !== 1 ? { 
    animationDuration: `${8 / speed}s` 
  } : undefined;

  return (
    <div 
      className={dataPointClasses}
      style={animationStyle}
      aria-label={value ? `Data point: ${value}` : 'Data point'}
    >
      {value && (
        <span className="relative z-10 font-semibold">
          {value}
        </span>
      )}
      
      {/* Neural connection indicator */}
      <div className="absolute inset-0 rounded-full border border-current opacity-30 animate-neural-pulse" />
    </div>
  );
};

export default DataPoint;