import React from 'react';

interface LivingGradientBackgroundProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'electric' | 'cosmic' | 'data';
}

const LivingGradientBackground: React.FC<LivingGradientBackgroundProps> = ({
  children,
  className = '',
  variant = 'electric'
}) => {
  const getGradientStyle = () => {
    switch (variant) {
      case 'electric':
        return {
          background: `
            radial-gradient(circle at 20% 80%, hsla(127, 100%, 50%, 0.15) 0%, transparent 50%),
            radial-gradient(circle at 80% 20%, hsla(262, 83%, 58%, 0.12) 0%, transparent 50%),
            radial-gradient(circle at 40% 40%, hsla(180, 100%, 60%, 0.1) 0%, transparent 50%),
            linear-gradient(125deg, hsl(240, 18%, 4%) 0%, hsl(262, 83%, 8%) 25%, hsl(180, 100%, 5%) 75%, hsl(240, 18%, 4%) 100%)
          `,
          backgroundSize: '400% 400%, 300% 300%, 500% 500%, 100% 100%',
          animation: 'electricShimmer 20s ease-in-out infinite, cosmicDrift 30s linear infinite'
        };
      case 'cosmic':
        return {
          background: `
            radial-gradient(ellipse at top, hsla(262, 83%, 58%, 0.08) 0%, transparent 60%),
            radial-gradient(ellipse at bottom, hsla(180, 100%, 60%, 0.06) 0%, transparent 70%),
            linear-gradient(135deg, hsl(240, 18%, 4%) 0%, hsl(240, 15%, 6%) 50%, hsl(240, 18%, 4%) 100%)
          `,
          backgroundSize: '200% 200%, 250% 250%, 100% 100%',
          animation: 'cosmicPulse 25s ease-in-out infinite'
        };
      case 'data':
        return {
          background: `
            conic-gradient(from 0deg at 50% 50%, hsla(127, 100%, 50%, 0.05) 0deg, transparent 60deg, hsla(262, 83%, 58%, 0.05) 120deg, transparent 180deg, hsla(180, 100%, 60%, 0.05) 240deg, transparent 300deg, hsla(127, 100%, 50%, 0.05) 360deg),
            linear-gradient(125deg, hsl(240, 18%, 4%) 0%, hsl(240, 15%, 5%) 100%)
          `,
          backgroundSize: '300% 300%, 100% 100%',
          animation: 'dataMatrix 40s linear infinite'
        };
      default:
        return {};
    }
  };

  return (
    <div 
      className={`relative overflow-hidden ${className}`}
      style={getGradientStyle()}
    >
      {/* Noise overlay for texture */}
      <div className="absolute inset-0 opacity-30 mix-blend-overlay noise-overlay pointer-events-none" />
      
      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

export default LivingGradientBackground;