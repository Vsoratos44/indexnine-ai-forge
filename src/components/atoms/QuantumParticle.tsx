import React from 'react';
import { cn } from '@/lib/utils';

/**
 * Quantum Particle Component
 * 
 * Advanced particle effect for quantum field visualization
 * Features multi-dimensional movement and entanglement effects
 */

interface QuantumParticleProps {
  /** Particle energy level */
  energy?: 'low' | 'medium' | 'high' | 'critical';
  /** Quantum state */
  state?: 'superposition' | 'entangled' | 'collapsed' | 'coherent';
  /** Particle size */
  size?: 'nano' | 'micro' | 'macro';
  /** Enable quantum tunneling effect */
  tunneling?: boolean;
  /** Entanglement partner particle ID */
  entangledWith?: string;
  className?: string;
}

const energyVariants = {
  low: 'opacity-40 animate-pulse-slow',
  medium: 'opacity-60 animate-neural-pulse',
  high: 'opacity-80 animate-quantum-field',
  critical: 'opacity-100 animate-neural-network-expansion'
};

const stateVariants = {
  superposition: 'bg-gradient-quantum-field animate-quantum-field',
  entangled: 'bg-brand-quantum animate-neural-connect',
  collapsed: 'bg-brand-primary animate-neural-pulse',
  coherent: 'bg-brand-matrix animate-holographic-shimmer'
};

const sizeVariants = {
  nano: 'w-1 h-1',
  micro: 'w-2 h-2',
  macro: 'w-3 h-3'
};

export const QuantumParticle: React.FC<QuantumParticleProps> = ({
  energy = 'medium',
  state = 'coherent',
  size = 'micro',
  tunneling = false,
  entangledWith,
  className
}) => {
  const particleClasses = cn(
    'relative rounded-full transition-quantum will-change-transform',
    sizeVariants[size],
    energyVariants[energy],
    stateVariants[state],
    tunneling && 'animate-data-stream',
    className
  );

  return (
    <div className="relative inline-block">
      <div 
        className={particleClasses}
        data-entangled={entangledWith}
        aria-hidden="true"
      />
      
      {/* Quantum field distortion */}
      <div className="absolute inset-0 rounded-full bg-current opacity-10 scale-150 animate-neural-pulse" />
      
      {/* Entanglement connection line */}
      {entangledWith && (
        <div className="absolute top-1/2 left-1/2 w-20 h-px bg-brand-quantum opacity-30 animate-neural-connect transform -translate-y-1/2 origin-left" />
      )}
      
      {/* Tunneling effect */}
      {tunneling && (
        <div className="absolute inset-0 rounded-full border border-brand-quantum opacity-20 animate-neural-network-expansion" />
      )}
    </div>
  );
};

export default QuantumParticle;