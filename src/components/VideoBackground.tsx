import React, { useEffect, useRef, useState } from 'react';

const VideoBackground = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  
  const videos = [
    '/videos/Lets_try_this_202508011021.mp4',
    '/videos/Scene_description_the_202508011021.mp4'
  ];

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleVideoEnd = () => {
      if (currentVideoIndex === 0) {
        // Move to second video after first one ends
        setCurrentVideoIndex(1);
      } else {
        // Loop the second video
        video.currentTime = 0;
        video.play();
      }
    };

    video.addEventListener('ended', handleVideoEnd);
    
    // Start playing the current video
    video.load();
    video.play().catch(console.error);

    return () => {
      video.removeEventListener('ended', handleVideoEnd);
    };
  }, [currentVideoIndex]);

  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden">
      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover"
        muted
        playsInline
        preload="metadata"
        key={currentVideoIndex}
      >
        <source src={videos[currentVideoIndex]} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-black/40" />
    </div>
  );
};

export default VideoBackground;