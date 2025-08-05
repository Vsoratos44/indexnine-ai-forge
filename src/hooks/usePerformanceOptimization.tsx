import { useState, useEffect } from 'react';

interface PerformanceConfig {
  enableHeavyAnimations: boolean;
  enableBackgroundEffects: boolean;
  enableVideoBackground: boolean;
  enableThreeJS: boolean;
  enableComplexCanvasAnimations: boolean;
}

export function usePerformanceOptimization() {
  const [config, setConfig] = useState<PerformanceConfig>({
    enableHeavyAnimations: true,
    enableBackgroundEffects: true,
    enableVideoBackground: true,
    enableThreeJS: true,
    enableComplexCanvasAnimations: true,
  });

  useEffect(() => {
    // Performance-based configuration
    const getDeviceCapabilities = () => {
      // Check device memory
      const deviceMemory = (navigator as any).deviceMemory || 4;
      
      // Check connection speed
      const connection = (navigator as any).connection;
      const effectiveType = connection?.effectiveType || '4g';
      
      // Check hardware concurrency (CPU cores)
      const hardwareConcurrency = navigator.hardwareConcurrency || 4;

      // Calculate performance score (0-100)
      let performanceScore = 50; // Base score
      
      // Memory factor (higher is better)
      performanceScore += Math.min(deviceMemory * 5, 30);
      
      // Connection factor
      const connectionScores: { [key: string]: number } = {
        'slow-2g': -20,
        '2g': -10,
        '3g': 0,
        '4g': 10,
      };
      performanceScore += connectionScores[effectiveType] || 10;
      
      // CPU factor
      performanceScore += Math.min(hardwareConcurrency * 2, 20);

      return {
        deviceMemory,
        effectiveType,
        hardwareConcurrency,
        performanceScore: Math.max(0, Math.min(100, performanceScore)),
      };
    };

    const capabilities = getDeviceCapabilities();
    
    // Configure features based on performance score
    const optimizedConfig: PerformanceConfig = {
      enableHeavyAnimations: capabilities.performanceScore > 60,
      enableBackgroundEffects: capabilities.performanceScore > 50,
      enableVideoBackground: capabilities.performanceScore > 40 && capabilities.effectiveType !== 'slow-2g' && capabilities.effectiveType !== '2g',
      enableThreeJS: capabilities.performanceScore > 70 && capabilities.deviceMemory >= 4,
      enableComplexCanvasAnimations: capabilities.performanceScore > 55,
    };

    setConfig(optimizedConfig);

    // Log performance decisions in development
    if (process.env.NODE_ENV === 'development') {
      console.log('Performance Optimization Config:', {
        capabilities,
        config: optimizedConfig,
      });
    }
  }, []);

  return config;
}

// Hook for lazy loading components based on intersection
export function useLazyComponentLoading(threshold = 0.1) {
  const [shouldLoad, setShouldLoad] = useState(false);
  const [ref, setRef] = useState<HTMLElement | null>(null);

  useEffect(() => {
    if (!ref) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldLoad(true);
          observer.disconnect(); // Stop observing once loaded
        }
      },
      { threshold }
    );

    observer.observe(ref);

    return () => observer.disconnect();
  }, [ref, threshold]);

  return { shouldLoad, setRef };
}

// Hook for reduced motion preference
export function useReducedMotion() {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);

    const handleChange = (event: MediaQueryListEvent) => {
      setPrefersReducedMotion(event.matches);
    };

    mediaQuery.addListener(handleChange);
    return () => mediaQuery.removeListener(handleChange);
  }, []);

  return prefersReducedMotion;
}