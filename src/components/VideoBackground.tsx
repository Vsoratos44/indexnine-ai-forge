import React, { useEffect, useRef, useState } from 'react';

const VideoBackground = () => {
  const firstVideoRef = useRef<HTMLVideoElement>(null);
  const loopVideoRef = useRef<HTMLVideoElement>(null);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [loopVideoLoaded, setLoopVideoLoaded] = useState(false);
  const [showLoop, setShowLoop] = useState(false);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const first = firstVideoRef.current;
    if (!first) return;

    const handleCanPlay = () => {
      setVideoLoaded(true);
      first.play().catch((error) => {
        console.warn('Video autoplay failed:', error);
        setHasError(true);
      });
    };

    const handleError = () => {
      console.warn('First video failed to load');
      setHasError(true);
    };

    const handleEnded = () => {
      setShowLoop(true);
      const loopVid = loopVideoRef.current;
      if (loopVid) {
        loopVid.play().catch((err) => console.warn('Loop video play failed:', err));
      }
    };

    first.addEventListener('canplay', handleCanPlay);
    first.addEventListener('error', handleError);
    first.addEventListener('ended', handleEnded);

    // Start loading the first video
    first.load();

    return () => {
      first.removeEventListener('canplay', handleCanPlay);
      first.removeEventListener('error', handleError);
      first.removeEventListener('ended', handleEnded);
    };
  }, []);

  useEffect(() => {
    const loopVid = loopVideoRef.current;
    if (!loopVid) return;

    const handleCanPlay = () => setLoopVideoLoaded(true);
    const handleError = () => {
      console.warn('Loop video failed to load');
    };

    loopVid.addEventListener('canplay', handleCanPlay);
    loopVid.addEventListener('error', handleError);

    // Preload loop video to avoid gap
    loopVid.load();

    return () => {
      loopVid.removeEventListener('canplay', handleCanPlay);
      loopVid.removeEventListener('error', handleError);
    };
  }, []);

  const showFallback = hasError || (!videoLoaded && !loopVideoLoaded);

  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden">
      {/* Initial Video (plays once) */}
      <video
        ref={firstVideoRef}
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${showLoop ? 'opacity-0' : 'opacity-100'}`}
        muted
        playsInline
        // no loop, plays once then switches
        preload="metadata"
        poster="/videos/poster-frame.jpg"
      >
        <source src="/videos/Lets_try_this_202508011021.mp4" type="video/mp4" />
      </video>

      {/* Looping Video (starts after first ends) */}
      <video
        ref={loopVideoRef}
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${showLoop ? 'opacity-100' : 'opacity-0'}`}
        muted
        playsInline
        loop
        preload="auto"
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

export default VideoBackground;
