import React, { useEffect, useRef, useState } from 'react';

const VideoBackground = () => {
  const video1Ref = useRef<HTMLVideoElement>(null);
  const video2Ref = useRef<HTMLVideoElement>(null);
  const [activeVideo, setActiveVideo] = useState<1 | 2>(1);
  const [isTransitioning, setIsTransitioning] = useState(false);
  
  const videos = [
    '/videos/Lets_try_this_202508011021.mp4',
    '/videos/Scene_description_the_202508011021.mp4'
  ];

  useEffect(() => {
    const video1 = video1Ref.current;
    const video2 = video2Ref.current;
    
    if (!video1 || !video2) return;

    // Preload both videos
    video1.load();
    video2.load();

    const handleVideo1TimeUpdate = () => {
      const currentTime = video1.currentTime;
      const duration = video1.duration;
      
      // Start transition 1 second before video1 ends
      if (duration && currentTime >= duration - 1 && !isTransitioning && activeVideo === 1) {
        setIsTransitioning(true);
        
        // Start second video and begin fade transition
        video2.currentTime = 0;
        video2.play().then(() => {
          setTimeout(() => {
            setActiveVideo(2);
            setIsTransitioning(false);
          }, 500); // Smooth transition duration
        });
      }
    };

    const handleVideo2End = () => {
      // Seamlessly restart the second video for looping
      video2.currentTime = 0;
      video2.play();
    };

    // Set up event listeners
    video1.addEventListener('timeupdate', handleVideo1TimeUpdate);
    video2.addEventListener('ended', handleVideo2End);
    
    // Start the first video
    video1.play().catch(console.error);

    return () => {
      video1.removeEventListener('timeupdate', handleVideo1TimeUpdate);
      video2.removeEventListener('ended', handleVideo2End);
    };
  }, [activeVideo, isTransitioning]);

  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden">
      {/* First Video */}
      <video
        ref={video1Ref}
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
          activeVideo === 1 && !isTransitioning ? 'opacity-100' : 'opacity-0'
        }`}
        muted
        playsInline
        preload="auto"
      >
        <source src={videos[0]} type="video/mp4" />
      </video>

      {/* Second Video */}
      <video
        ref={video2Ref}
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
          activeVideo === 2 ? 'opacity-100' : 'opacity-0'
        }`}
        muted
        playsInline
        preload="auto"
        loop
      >
        <source src={videos[1]} type="video/mp4" />
      </video>

      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-black/40 z-10" />
    </div>
  );
};

export default VideoBackground;