import React from 'react';
import { cn } from '@/lib/utils';

/**
 * Neural Icon Component
 * 
 * AI-enhanced icon atom with neural network animations
 * Features dynamic pulsing, connection lines, and quantum effects
 */

interface NeuralIconProps {
  /** Icon name or custom SVG */
  icon?: string | React.ReactNode;
  /** Size variant */
  size?: 'sm' | 'md' | 'lg' | 'xl';
  /** Neural animation variant */
  variant?: 'pulse' | 'connect' | 'quantum' | 'dark';
  /** Icon color theme */
  color?: 'primary' | 'accent' | 'dark' | 'purple';
  /** Enable glow effect */
  glow?: boolean;
  className?: string;
}

const sizeVariants = {
  sm: 'w-4 h-4',
  md: 'w-6 h-6',
  lg: 'w-8 h-8',
  xl: 'w-12 h-12'
};

const colorVariants = {
  primary: 'text-brand-primary',
  accent: 'text-brand-accent-vivid',
  dark: 'text-brand-dark',
  purple: 'text-brand-purple'
};

const animationVariants = {
  pulse: 'animate-neural-pulse',
  connect: 'animate-neural-connect',
  quantum: 'animate-quantum-field',
  dark: 'animate-pulse-slow'
};

export const NeuralIcon: React.FC<NeuralIconProps> = ({
  icon,
  size = 'md',
  variant = 'pulse',
  color = 'primary',
  glow = false,
  className
}) => {
  const iconClasses = cn(
    'relative inline-flex items-center justify-center',
    sizeVariants[size],
    colorVariants[color],
    animationVariants[variant],
    glow && 'drop-shadow-[0_0_10px_currentColor]',
    className
  );

  // Default neural network icon if none provided
  const defaultIcon = (
    <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
      <circle cx="12" cy="12" r="3" fill="currentColor" opacity="0.8" />
      <circle cx="6" cy="6" r="2" fill="currentColor" opacity="0.6" />
      <circle cx="18" cy="6" r="2" fill="currentColor" opacity="0.6" />
      <circle cx="6" cy="18" r="2" fill="currentColor" opacity="0.6" />
      <circle cx="18" cy="18" r="2" fill="currentColor" opacity="0.6" />
      <line x1="12" y1="9" x2="12" y2="15" stroke="currentColor" strokeWidth="1" opacity="0.4" />
      <line x1="9" y1="12" x2="15" y2="12" stroke="currentColor" strokeWidth="1" opacity="0.4" />
      <line x1="10.5" y1="10.5" x2="8" y2="8" stroke="currentColor" strokeWidth="1" opacity="0.3" />
      <line x1="13.5" y1="10.5" x2="16" y2="8" stroke="currentColor" strokeWidth="1" opacity="0.3" />
      <line x1="10.5" y1="13.5" x2="8" y2="16" stroke="currentColor" strokeWidth="1" opacity="0.3" />
      <line x1="13.5" y1="13.5" x2="16" y2="16" stroke="currentColor" strokeWidth="1" opacity="0.3" />
    </svg>
  );

  return (
    <div className={iconClasses}>
      {icon || defaultIcon}
      
      {/* Neural connection overlay for advanced variants */}
      {(variant === 'connect' || variant === 'quantum') && (
        <div className="absolute inset-0 pointer-events-none">
          <svg className="w-full h-full animate-neural-connect" viewBox="0 0 24 24">
            <circle
              cx="12"
              cy="12"
              r="10"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
              opacity="0.2"
              strokeDasharray="2 4"
            />
          </svg>
        </div>
      )}
    </div>
  );
};

export default NeuralIcon;