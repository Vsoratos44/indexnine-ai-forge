import React from 'react';

interface AngularSectionProps {
  children: React.ReactNode;
  className?: string;
  clipDirection?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right' | 'both';
  gradientType?: 'electric' | 'cosmic' | 'data';
}

const AngularSection: React.FC<AngularSectionProps> = ({
  children,
  className = '',
  clipDirection = 'bottom-right',
  gradientType = 'electric'
}) => {
  const getClipPath = () => {
    switch (clipDirection) {
      case 'top-left':
        return 'polygon(8% 0%, 100% 0%, 100% 100%, 0% 100%)';
      case 'top-right':
        return 'polygon(0% 0%, 92% 0%, 100% 100%, 0% 100%)';
      case 'bottom-left':
        return 'polygon(0% 0%, 100% 0%, 100% 100%, 8% 100%)';
      case 'bottom-right':
        return 'polygon(0% 0%, 100% 0%, 92% 100%, 0% 100%)';
      case 'both':
        return 'polygon(8% 0%, 92% 0%, 100% 100%, 0% 100%)';
      default:
        return 'none';
    }
  };

  const getGradientBackground = () => {
    switch (gradientType) {
      case 'electric':
        return `linear-gradient(
          135deg,
          hsl(240, 18%, 4%) 0%,
          hsl(127, 100%, 5%) 25%,
          hsl(240, 18%, 4%) 50%,
          hsl(180, 100%, 5%) 75%,
          hsl(240, 18%, 4%) 100%
        )`;
      case 'cosmic':
        return `linear-gradient(
          125deg,
          hsl(240, 18%, 4%) 0%,
          hsl(262, 83%, 8%) 30%,
          hsl(240, 18%, 4%) 70%,
          hsl(262, 83%, 6%) 100%
        )`;
      case 'data':
        return `linear-gradient(
          155deg,
          hsl(240, 18%, 4%) 0%,
          hsl(180, 100%, 8%) 35%,
          hsl(240, 18%, 4%) 65%,
          hsl(127, 100%, 6%) 100%
        )`;
      default:
        return 'transparent';
    }
  };

  return (
    <div 
      className={`relative ${className}`}
      style={{
        clipPath: getClipPath(),
        background: getGradientBackground()
      }}
    >
      {/* Electric edge highlight */}
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          background: `linear-gradient(
            45deg,
            transparent 0%,
            hsl(127, 100%, 50%) 2%,
            transparent 4%,
            transparent 96%,
            hsl(180, 100%, 60%) 98%,
            transparent 100%
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

export default AngularSection;