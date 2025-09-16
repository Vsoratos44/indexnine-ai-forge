import React, { useEffect, useState } from 'react';

/**
 * Performance Optimizer Component
 * 
 * Implements Core Web Vitals monitoring and optimization for SEO.
 * Google uses Core Web Vitals as ranking factors, so this directly impacts search performance.
 */

interface PerformanceOptimizerProps {
  children: React.ReactNode;
  enableOptimizations?: boolean;
  reportToAnalytics?: boolean;
}

export const PerformanceOptimizer: React.FC<PerformanceOptimizerProps> = ({
  children,
  enableOptimizations = true,
  reportToAnalytics = true
}) => {
  const [isOptimized, setIsOptimized] = useState(false);

  useEffect(() => {
    if (enableOptimizations) {
      // Core Web Vitals monitoring setup
      const startPerformanceMonitoring = () => {
        if ('PerformanceObserver' in window) {
          try {
            // Monitor Core Web Vitals
            const observer = new PerformanceObserver((list) => {
              list.getEntries().forEach((entry) => {
                const value = (entry as any).value || entry.startTime;
                if (reportToAnalytics && window.gtag) {
                  window.gtag('event', 'core_web_vitals', {
                    metric_name: entry.name,
                    metric_value: value,
                    page_url: window.location.href
                  });
                }
              });
            });
            
            observer.observe({ entryTypes: ['largest-contentful-paint', 'first-input', 'layout-shift'] });
          } catch (error) {
            console.warn('Performance monitoring not supported:', error);
          }
        }
      };

      startPerformanceMonitoring();

      // Implement performance optimizations
      const optimizations = {
        // Preload critical resources
        preloadCriticalAssets: () => {
          const criticalAssets = [
            '/fonts/montserrat-variable.woff2',
            '/images/logo.webp'
          ];
          
          criticalAssets.forEach(asset => {
            const link = document.createElement('link');
            link.rel = 'preload';
            link.href = asset;
            link.as = asset.includes('font') ? 'font' : 'image';
            if (asset.includes('font')) {
              link.crossOrigin = 'anonymous';
            }
            document.head.appendChild(link);
          });
        },

        // Implement lazy loading for images
        optimizeImages: () => {
          const images = document.querySelectorAll('img[loading="lazy"]');
          if ('IntersectionObserver' in window) {
            const imageObserver = new IntersectionObserver((entries) => {
              entries.forEach(entry => {
                if (entry.isIntersecting) {
                  const img = entry.target as HTMLImageElement;
                  if (img.dataset.src) {
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                    imageObserver.unobserve(img);
                  }
                }
              });
            });
            
            images.forEach(img => imageObserver.observe(img));
          }
        },

        // Optimize third-party scripts
        deferNonCriticalScripts: () => {
          const scripts = document.querySelectorAll('script[data-defer="true"]');
          scripts.forEach(script => {
            script.setAttribute('defer', 'true');
          });
        },

        // Resource hints for better performance
        addResourceHints: () => {
          const hints = [
            { rel: 'dns-prefetch', href: '//fonts.googleapis.com' },
            { rel: 'dns-prefetch', href: '//www.googletagmanager.com' },
            { rel: 'dns-prefetch', href: '//calendly.com' },
            { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: true }
          ];

          hints.forEach(hint => {
            const existing = document.querySelector(`link[href="${hint.href}"]`);
            if (!existing) {
              const link = document.createElement('link');
              link.rel = hint.rel;
              link.href = hint.href;
              if (hint.crossorigin) {
                link.crossOrigin = 'anonymous';
              }
              document.head.appendChild(link);
            }
          });
        }
      };

      // Apply optimizations
      optimizations.preloadCriticalAssets();
      optimizations.addResourceHints();
      
      // Defer image and script optimizations to avoid blocking
      setTimeout(() => {
        optimizations.optimizeImages();
        optimizations.deferNonCriticalScripts();
        setIsOptimized(true);
      }, 100);

      // Report performance metrics
      if (reportToAnalytics && 'performance' in window) {
        setTimeout(() => {
          const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
          const paintEntries = performance.getEntriesByType('paint');
          
          const metrics = {
            loadTime: navigation.loadEventEnd - navigation.loadEventStart,
            domContentLoaded: navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart,
            firstPaint: paintEntries.find(entry => entry.name === 'first-paint')?.startTime || 0,
            firstContentfulPaint: paintEntries.find(entry => entry.name === 'first-contentful-paint')?.startTime || 0
          };

          // Report to analytics (placeholder for actual implementation)
          console.log('Performance Metrics:', metrics);
          
          // Could integrate with Google Analytics 4, Adobe Analytics, etc.
          if (window.gtag) {
            window.gtag('event', 'page_performance', {
              custom_parameters: metrics
            });
          }
        }, 2000);
      }
    }
  }, [enableOptimizations, reportToAnalytics]);

  // Add performance-critical CSS as inline styles
  useEffect(() => {
    if (enableOptimizations) {
      const criticalCSS = `
        /* Critical above-the-fold styles for faster rendering */
        .performance-optimized {
          font-display: swap;
        }
        
        /* Prevent layout shift for images */
        img {
          height: auto;
          max-width: 100%;
        }
        
        /* Optimize font loading */
        @font-face {
          font-family: 'Montserrat';
          font-display: swap;
        }
      `;
      
      const style = document.createElement('style');
      style.innerHTML = criticalCSS;
      style.id = 'performance-critical-css';
      
      if (!document.getElementById('performance-critical-css')) {
        document.head.appendChild(style);
      }
    }
  }, [enableOptimizations]);

  return (
    <div className={`performance-optimizer ${isOptimized ? 'optimized' : ''}`}>
      {children}
    </div>
  );
};

export default PerformanceOptimizer;