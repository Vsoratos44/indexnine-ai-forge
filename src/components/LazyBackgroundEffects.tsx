import React, { Suspense, lazy } from 'react';
import { usePerformanceOptimization, useLazyComponentLoading, useReducedMotion } from '@/hooks/usePerformanceOptimization';

// Lazy load heavy background components
const LivingVoidBackground = lazy(() => import('./LivingVoidBackground'));
const NeuralGradientBackground = lazy(() => import('./NeuralGradientBackground'));

interface LazyBackgroundEffectsProps {
  type?: 'neural' | 'void' | 'none';
  className?: string;
}

export const LazyBackgroundEffects: React.FC<LazyBackgroundEffectsProps> = ({ 
  type = 'neural', 
  className = '' 
}) => {
  const performanceConfig = usePerformanceOptimization();
  const { shouldLoad, setRef } = useLazyComponentLoading(0.1);
  const prefersReducedMotion = useReducedMotion();

  // Don't render heavy effects if performance is poor or user prefers reduced motion
  if (!performanceConfig.enableBackgroundEffects || prefersReducedMotion || type === 'none') {
    return (
      <div 
        className={`absolute inset-0 bg-gradient-to-br from-brand-primary/10 via-brand-secondary/10 to-brand-accent/10 ${className}`}
      />
    );
  }

  // Use intersection observer to only load when visible
  if (!shouldLoad) {
    return (
      <div 
        ref={setRef}
        className={`absolute inset-0 bg-gradient-hero ${className}`}
      />
    );
  }

  return (
    <div className={`absolute inset-0 ${className}`}>
      <Suspense 
        fallback={
          <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/20 via-brand-secondary/20 to-brand-accent/20" />
        }
      >
        {type === 'neural' && performanceConfig.enableComplexCanvasAnimations && (
          <NeuralGradientBackground 
            intensity={0.6} 
            quantumField={performanceConfig.enableHeavyAnimations}
            speed={performanceConfig.enableHeavyAnimations ? 1 : 0.5}
          />
        )}
        {type === 'void' && performanceConfig.enableThreeJS && (
          <LivingVoidBackground />
        )}
      </Suspense>
    </div>
  );
};

export default LazyBackgroundEffects;