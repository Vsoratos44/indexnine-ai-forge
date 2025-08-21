import React, { useState, useEffect } from 'react';

interface HoverMagnetProps {
  children: React.ReactNode;
  className?: string;
  magnetStrength?: number;
}

export const HoverMagnet: React.FC<HoverMagnetProps> = ({
  children,
  className = '',
  magnetStrength = 0.2
}) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isHovered) return;

    const rect = e.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    const deltaX = (e.clientX - centerX) * magnetStrength;
    const deltaY = (e.clientY - centerY) * magnetStrength;
    
    setPosition({ x: deltaX, y: deltaY });
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setPosition({ x: 0, y: 0 });
  };

  return (
    <div
      className={`transition-transform duration-300 ease-out ${className}`}
      style={{
        transform: `translate(${position.x}px, ${position.y}px)`,
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {children}
    </div>
  );
};

interface MorphingButtonProps {
  children: React.ReactNode;
  className?: string;
  morphColor?: string;
}

export const MorphingButton: React.FC<MorphingButtonProps> = ({
  children,
  className = '',
  morphColor = 'hsl(262 83% 58%)'
}) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: ((e.clientX - rect.left) / rect.width) * 100,
      y: ((e.clientY - rect.top) / rect.height) * 100,
    });
  };

  return (
    <button
      className={`relative overflow-hidden transition-all duration-500 ${className}`}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        background: isHovered
          ? `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, ${morphColor} 0%, transparent 50%)`
          : 'transparent',
      }}
    >
      <span className="relative z-10">{children}</span>
    </button>
  );
};

interface FloatingElementProps {
  children: React.ReactNode;
  className?: string;
  duration?: number;
  amplitude?: number;
}

export const FloatingElement: React.FC<FloatingElementProps> = ({
  children,
  className = '',
  duration = 4,
  amplitude = 10
}) => {
  return (
    <div
      className={`animate-float ${className}`}
      style={{
        animationDuration: `${duration}s`,
        '--float-amplitude': `${amplitude}px`,
      } as React.CSSProperties & { '--float-amplitude': string }}
    >
      {children}
    </div>
  );
};

interface PulsingGlowProps {
  children: React.ReactNode;
  className?: string;
  glowColor?: string;
  intensity?: number;
}

export const PulsingGlow: React.FC<PulsingGlowProps> = ({
  children,
  className = '',
  glowColor = 'hsl(262 83% 58%)',
  intensity = 0.4
}) => {
  return (
    <div
      className={`relative ${className}`}
      style={{
        filter: `drop-shadow(0 0 20px ${glowColor}${Math.round(intensity * 255).toString(16)})`,
        animation: 'glow-pulse 3s ease-in-out infinite',
      }}
    >
      {children}
    </div>
  );
};

export default {
  HoverMagnet,
  MorphingButton,
  FloatingElement,
  PulsingGlow,
};