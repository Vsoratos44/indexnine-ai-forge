import React, { useState, useEffect } from 'react';

interface AuroraBackgroundProps {
  children: React.ReactNode;
  className?: string;
  intensity?: number;
}

const AuroraBackground: React.FC<AuroraBackgroundProps> = ({
  children,
  className = '',
  intensity = 0.15
}) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setMousePosition({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div
      className={`relative overflow-hidden ${className}`}
      style={{
        '--mouse-x': `${mousePosition.x}px`,
        '--mouse-y': `${mousePosition.y}px`,
        '--aurora-intensity': intensity,
      } as React.CSSProperties & { [key: string]: string | number }}
    >
      {/* Aurora Light Orb */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `radial-gradient(
            600px circle at var(--mouse-x) var(--mouse-y),
            hsla(262, 83%, 58%, var(--aurora-intensity)),
            hsla(180, 100%, 60%, calc(var(--aurora-intensity) * 0.6)),
            transparent 70%
          )`
        }}
      />
      
      {/* Secondary Aurora Layer */}
      <div 
        className="absolute inset-0 pointer-events-none animate-pulse-slow"
        style={{
          background: `radial-gradient(
            800px circle at calc(var(--mouse-x) - 200px) calc(var(--mouse-y) - 100px),
            hsla(180, 100%, 60%, calc(var(--aurora-intensity) * 0.4)),
            transparent 60%
          )`
        }}
      />
      
      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

export default AuroraBackground;