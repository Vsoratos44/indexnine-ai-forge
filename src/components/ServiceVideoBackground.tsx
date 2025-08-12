import React, { useEffect, useRef, useState } from 'react';

const ServiceVideoBackground = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleCanPlay = () => {
      setVideoLoaded(true);
      video.play().catch((error) => {
        console.warn('Video autoplay failed:', error);
        setHasError(true);
      });
    };

    const handleError = () => {
      console.warn('Service video failed to load');
      setHasError(true);
    };

    video.addEventListener('canplay', handleCanPlay);
    video.addEventListener('error', handleError);

    // Start loading the video
    video.load();

    return () => {
      video.removeEventListener('canplay', handleCanPlay);
      video.removeEventListener('error', handleError);
    };
  }, []);

  const showFallback = hasError || !videoLoaded;

  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden">
      {/* Service Hero Video */}
      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover"
        muted
        playsInline
        loop
        preload="metadata"
        poster="/videos/poster-frame.jpg"
      >
        <source src="/videos/Scene_description_the_202508011021.mp4" type="video/mp4" />
      </video>

      {/* Fallback gradient background if video fails */}
      {showFallback && (
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-primary/10" />
      )}

      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-black/40 z-10" />
    </div>
  );
};

export default ServiceVideoBackground;