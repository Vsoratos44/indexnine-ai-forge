import { useEffect, useState } from 'react';

interface PerformanceMetrics {
  fps: number;
  memoryUsage: number;
  devicePixelRatio: number;
  connectionSpeed: 'slow' | 'fast' | 'unknown';
}

export const usePerformanceMonitor = () => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    fps: 60,
    memoryUsage: 0,
    devicePixelRatio: 1,
    connectionSpeed: 'unknown',
  });
  const [shouldReduceMotion, setShouldReduceMotion] = useState(false);

  useEffect(() => {
    // Check for reduced motion preference
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setShouldReduceMotion(mediaQuery.matches);

    const handleChange = (e: MediaQueryListEvent) => {
      setShouldReduceMotion(e.matches);
    };

    mediaQuery.addEventListener('change', handleChange);

    // Monitor FPS
    let frameCount = 0;
    let lastTime = performance.now();
    
    const measureFPS = () => {
      frameCount++;
      const currentTime = performance.now();
      
      if (currentTime - lastTime >= 1000) {
        setMetrics(prev => ({
          ...prev,
          fps: Math.round((frameCount * 1000) / (currentTime - lastTime)),
        }));
        frameCount = 0;
        lastTime = currentTime;
      }
      
      if (!shouldReduceMotion) {
        requestAnimationFrame(measureFPS);
      }
    };

    // Get device capabilities
    setMetrics(prev => ({
      ...prev,
      devicePixelRatio: window.devicePixelRatio || 1,
      memoryUsage: (performance as any).memory?.usedJSHeapSize || 0,
    }));

    // Estimate connection speed
    const connection = (navigator as any).connection;
    if (connection) {
      const effectiveType = connection.effectiveType;
      setMetrics(prev => ({
        ...prev,
        connectionSpeed: ['slow-2g', '2g', '3g'].includes(effectiveType) ? 'slow' : 'fast',
      }));
    }

    if (!shouldReduceMotion) {
      measureFPS();
    }

    return () => {
      mediaQuery.removeEventListener('change', handleChange);
    };
  }, [shouldReduceMotion]);

  const getOptimizationLevel = (): 'high' | 'medium' | 'low' => {
    if (shouldReduceMotion || metrics.fps < 30 || metrics.connectionSpeed === 'slow') {
      return 'low';
    }
    if (metrics.fps < 50 || metrics.devicePixelRatio < 2) {
      return 'medium';
    }
    return 'high';
  };

  return {
    metrics,
    shouldReduceMotion,
    optimizationLevel: getOptimizationLevel(),
  };
};

export default usePerformanceMonitor;