import React, { useEffect, useRef, useState, useCallback } from 'react';

const OptimizedVideoBackground = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isIntersecting, setIsIntersecting] = useState(false);
  const [videoLoaded, setVideoLoaded] = useState(false);
  
  // Use Intersection Observer to only load video when visible
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    const videoElement = videoRef.current;
    if (videoElement) {
      observer.observe(videoElement);
    }

    return () => {
      if (videoElement) {
        observer.unobserve(videoElement);
      }
    };
  }, []);

  // Load video only when it comes into view
  useEffect(() => {
    if (isIntersecting && !videoLoaded && videoRef.current) {
      const video = videoRef.current;
      video.load();
      video.play().catch(console.error);
      setVideoLoaded(true);
    }
  }, [isIntersecting, videoLoaded]);

  const handleLoadedData = useCallback(() => {
    setVideoLoaded(true);
  }, []);

  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden">
      {/* Optimized single video with poster */}
      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover"
        muted
        playsInline
        loop
        poster="/videos/poster-frame.jpg" // Add a poster frame for instant display
        preload="none" // Don't preload until needed
        onLoadedData={handleLoadedData}
      >
        <source src="/videos/intro.mp4" type="video/mp4" />
      </video>

      {/* Fallback gradient for slow connections */}
      {!videoLoaded && (
        <div className="absolute inset-0 bg-gradient-to-br from-brand-primary via-brand-secondary to-brand-accent opacity-80" />
      )}

      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-black/40 z-10" />
    </div>
  );
};

export default OptimizedVideoBackground;