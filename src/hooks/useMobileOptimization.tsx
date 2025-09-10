import { useEffect, useState } from 'react';

interface MobileOptimizationConfig {
  isMobile: boolean;
  isTablet: boolean;
  isDesktop: boolean;
  orientation: 'portrait' | 'landscape';
  touchDevice: boolean;
  screenSize: {
    width: number;
    height: number;
  };
}

export const useMobileOptimization = (): MobileOptimizationConfig => {
  const [config, setConfig] = useState<MobileOptimizationConfig>({
    isMobile: false,
    isTablet: false,
    isDesktop: true,
    orientation: 'landscape',
    touchDevice: false,
    screenSize: { width: 1024, height: 768 }
  });

  useEffect(() => {
    const updateConfig = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      
      setConfig({
        isMobile: width < 768,
        isTablet: width >= 768 && width < 1024,
        isDesktop: width >= 1024,
        orientation: width > height ? 'landscape' : 'portrait',
        touchDevice: 'ontouchstart' in window || navigator.maxTouchPoints > 0,
        screenSize: { width, height }
      });
    };

    // Initial setup
    updateConfig();

    // Listen for resize events
    window.addEventListener('resize', updateConfig);
    window.addEventListener('orientationchange', updateConfig);

    return () => {
      window.removeEventListener('resize', updateConfig);
      window.removeEventListener('orientationchange', updateConfig);
    };
  }, []);

  return config;
};

// Hook for mobile-specific touch optimizations
export const useTouchOptimization = () => {
  useEffect(() => {
    // Add touch-friendly styles
    const style = document.createElement('style');
    style.textContent = `
      /* Touch optimization styles */
      button, [role="button"], .btn {
        min-height: 44px;
        min-width: 44px;
        touch-action: manipulation;
      }
      
      /* Prevent zoom on input focus on iOS */
      input, textarea, select {
        font-size: 16px;
      }
      
      /* Improve scrolling on iOS */
      * {
        -webkit-overflow-scrolling: touch;
      }
      
      /* Prevent text selection on touch devices */
      .no-select {
        -webkit-touch-callout: none;
        -webkit-user-select: none;
        -khtml-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
      }
      
      /* Safe area for notched devices */
      .safe-area-top {
        padding-top: env(safe-area-inset-top);
      }
      
      .safe-area-bottom {
        padding-bottom: env(safe-area-inset-bottom);
      }
    `;
    
    document.head.appendChild(style);

    return () => {
      if (document.head.contains(style)) {
        document.head.removeChild(style);
      }
    };
  }, []);
};