import React, { useEffect, useRef, useState } from 'react';

interface AnimatedPathProps {
  className?: string;
  pathData?: string;
  strokeColor?: string;
  strokeWidth?: number;
  animationDuration?: number;
  trigger?: boolean;
}

export const AnimatedPath: React.FC<AnimatedPathProps> = ({
  className = '',
  pathData = "M 50 200 Q 200 50 350 200 T 650 200",
  strokeColor = "url(#pathGradient)",
  strokeWidth = 2,
  animationDuration = 2,
  trigger = true
}) => {
  const pathRef = useRef<SVGPathElement>(null);
  const [pathLength, setPathLength] = useState(0);

  useEffect(() => {
    if (pathRef.current) {
      const length = pathRef.current.getTotalLength();
      setPathLength(length);
    }
  }, [pathData]);

  return (
    <div className={`absolute inset-0 overflow-hidden ${className}`}>
      <svg
        className="w-full h-full"
        viewBox="0 0 800 400"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="pathGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="hsl(262 83% 58%)" stopOpacity="0.8" />
            <stop offset="50%" stopColor="hsl(180 100% 60%)" stopOpacity="1" />
            <stop offset="100%" stopColor="hsl(262 83% 58%)" stopOpacity="0.8" />
          </linearGradient>
          <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
            <feMerge> 
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>
        
        <path
          ref={pathRef}
          d={pathData}
          stroke={strokeColor}
          strokeWidth={strokeWidth}
          fill="none"
          filter="url(#glow)"
          style={{
            strokeDasharray: pathLength,
            strokeDashoffset: trigger ? 0 : pathLength,
            transition: `stroke-dashoffset ${animationDuration}s ease-in-out`,
          }}
        />
        
        {/* Animated glow dots along path */}
        {trigger && (
          <>
            <circle r="3" fill="hsl(180 100% 60%)" filter="url(#glow)">
              <animateMotion
                dur={`${animationDuration * 2}s`}
                repeatCount="indefinite"
                path={pathData}
              />
            </circle>
            <circle r="2" fill="hsl(262 83% 58%)" filter="url(#glow)">
              <animateMotion
                dur={`${animationDuration * 2}s`}
                repeatCount="indefinite"
                path={pathData}
                begin="0.5s"
              />
            </circle>
          </>
        )}
      </svg>
    </div>
  );
};

export default AnimatedPath;