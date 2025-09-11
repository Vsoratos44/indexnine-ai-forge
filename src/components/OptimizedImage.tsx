import React, { useState, useEffect } from 'react';
import { useOptimizedImage, useLazyImage } from '@/hooks/useImageOptimization';

interface OptimizedImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  loading?: 'lazy' | 'eager';
  priority?: boolean;
  placeholder?: string;
  onLoad?: () => void;
  onError?: () => void;
}

export const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  alt,
  width,
  height,
  className = '',
  loading = 'lazy',
  priority = false,
  placeholder,
  onLoad,
  onError
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  const imageProps = useOptimizedImage({ src, alt, width, height, className, loading, priority });
  const { imageSrc, setRef } = useLazyImage(imageProps.src, { threshold: 0.1 });

  // Use eager loading for priority images, lazy loading for others
  const shouldUseLazyLoad = !priority && loading === 'lazy';
  const finalSrc = shouldUseLazyLoad ? imageSrc : imageProps.src;

  const handleLoad = () => {
    setIsLoaded(true);
    onLoad?.();
  };

  const handleError = () => {
    setHasError(true);
    onError?.();
  };

  // Add structured data for SEO
  useEffect(() => {
    if (isLoaded && !hasError) {
      const imageObject = {
        '@context': 'https://schema.org',
        '@type': 'ImageObject',
        url: finalSrc,
        description: alt,
        ...(width && { width }),
        ...(height && { height })
      };

      // You could dispatch this to a global structured data manager
      console.log('Image structured data:', imageObject);
    }
  }, [isLoaded, hasError, finalSrc, alt, width, height]);

  if (hasError) {
    return (
      <div 
        className={`bg-muted flex items-center justify-center ${className}`}
        style={{ width, height }}
        role="img"
        aria-label={`Failed to load: ${alt}`}
      >
        <span className="text-muted-foreground text-sm">Image not available</span>
      </div>
    );
  }

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {/* Placeholder while loading */}
      {placeholder && !isLoaded && (
        <div 
          className="absolute inset-0 bg-cover bg-center blur-sm"
          style={{ 
            backgroundImage: `url(${placeholder})`,
            width,
            height
          }}
        />
      )}
      
      {/* Loading skeleton */}
      {!isLoaded && !placeholder && (
        <div 
          className="animate-pulse bg-muted"
          style={{ width, height }}
        />
      )}

      {/* Actual image */}
      {finalSrc && (
        <img
          ref={shouldUseLazyLoad ? setRef : undefined}
          {...imageProps}
          src={finalSrc}
          onLoad={handleLoad}
          onError={handleError}
          className={`transition-opacity duration-300 ${
            isLoaded ? 'opacity-100' : 'opacity-0'
          } ${imageProps.className}`}
          style={{
            ...(width && height && { aspectRatio: `${width}/${height}` })
          }}
        />
      )}
    </div>
  );
};

export default OptimizedImage;