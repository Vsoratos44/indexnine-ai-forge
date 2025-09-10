import { useEffect, useCallback, useState } from 'react';

interface ImageOptimizationConfig {
  lazyLoad: boolean;
  webpSupport: boolean;
  retina: boolean;
}

interface OptimizedImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  loading?: 'lazy' | 'eager';
  priority?: boolean;
}

export const useImageOptimization = (): ImageOptimizationConfig => {
  const [config, setConfig] = useState<ImageOptimizationConfig>({
    lazyLoad: true,
    webpSupport: false,
    retina: window.devicePixelRatio > 1
  });

  useEffect(() => {
    // Check WebP support
    const checkWebpSupport = () => {
      const canvas = document.createElement('canvas');
      canvas.width = 1;
      canvas.height = 1;
      const dataURL = canvas.toDataURL('image/webp');
      setConfig(prev => ({
        ...prev,
        webpSupport: dataURL.indexOf('data:image/webp') === 0
      }));
    };

    checkWebpSupport();
  }, []);

  return config;
};

// Custom hook for lazy loading images
export const useLazyImage = (src: string, options: { threshold?: number } = {}) => {
  const [imageSrc, setImageSrc] = useState<string | null>(null);
  const [imageRef, setImageRef] = useState<HTMLImageElement | null>(null);

  const { threshold = 0.1 } = options;

  useEffect(() => {
    let observer: IntersectionObserver;

    if (imageRef) {
      observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setImageSrc(src);
            observer.unobserve(imageRef);
          }
        },
        { threshold }
      );

      observer.observe(imageRef);
    }

    return () => {
      if (observer && imageRef) {
        observer.unobserve(imageRef);
      }
    };
  }, [imageRef, src, threshold]);

  const setRef = useCallback((node: HTMLImageElement | null) => {
    setImageRef(node);
  }, []);

  return { imageSrc, setRef };
};

// Optimized Image Component Hook
export const useOptimizedImage = (props: OptimizedImageProps) => {
  const { src, alt, width, height, className = '', loading = 'lazy', priority = false } = props;
  const { webpSupport, retina } = useImageOptimization();
  
  const optimizedSrc = useCallback(() => {
    let optimizedUrl = src;
    
    // Add WebP support if available
    if (webpSupport && !src.includes('.webp')) {
      // Convert common formats to WebP (this would typically be handled by your CDN)
      optimizedUrl = src.replace(/\.(jpg|jpeg|png)$/i, '.webp');
    }
    
    // Add retina support
    if (retina && width && height) {
      const params = new URLSearchParams();
      params.set('w', (width * 2).toString());
      params.set('h', (height * 2).toString());
      params.set('q', '85'); // Quality
      params.set('f', 'auto'); // Format auto-detection
      
      // This would typically use your image CDN
      // optimizedUrl = `${optimizedUrl}?${params.toString()}`;
    }
    
    return optimizedUrl;
  }, [src, webpSupport, retina, width, height]);

  const imageProps = {
    src: optimizedSrc(),
    alt,
    width,
    height,
    loading: priority ? 'eager' as const : loading,
    decoding: 'async' as const,
    className: `${className} ${!priority ? 'lazy-image' : ''}`.trim(),
    ...(priority && { fetchPriority: 'high' as const })
  };

  return imageProps;
};

// Performance monitoring for images
export const useImagePerformance = () => {
  useEffect(() => {
    if ('PerformanceObserver' in window) {
      const observer = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        
        entries.forEach((entry) => {
          if (entry.entryType === 'largest-contentful-paint') {
            console.log('LCP:', entry.startTime);
          }
          
          if (entry.entryType === 'resource' && entry.name.includes('image')) {
            const resource = entry as PerformanceResourceTiming;
            console.log(`Image loaded: ${resource.name} in ${resource.duration}ms`);
          }
        });
      });

      observer.observe({ entryTypes: ['largest-contentful-paint', 'resource'] });

      return () => observer.disconnect();
    }
  }, []);
};