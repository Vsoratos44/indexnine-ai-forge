import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface ElectricBentoCardProps {
  children: React.ReactNode;
  className?: string;
  hoverScale?: number;
  glowColor?: string;
  index?: number;
}

const ElectricBentoCard: React.FC<ElectricBentoCardProps> = ({
  children,
  className = '',
  hoverScale = 1.02,
  glowColor = 'hsl(127, 100%, 50%)',
  index = 0
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ 
        scale: hoverScale,
        transition: { type: 'spring', stiffness: 300, damping: 20 }
      }}
      transition={{
        duration: 0.6,
        delay: index * 0.1,
        ease: [0.25, 0.4, 0.25, 1]
      }}
      viewport={{ once: true, margin: '-50px' }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className={`relative overflow-hidden group ${className}`}
      style={{
        '--glow-color': glowColor,
        '--hover-scale': hoverScale
      } as React.CSSProperties & { [key: string]: string | number }}
    >
      {/* Rotating radar fill */}
      <div 
        className={`absolute inset-0 opacity-0 transition-opacity duration-500 pointer-events-none ${isHovered ? 'opacity-100' : ''}`}
        style={{
          background: `conic-gradient(
            from 0deg at 50% 50%,
            transparent 0deg,
            hsl(127, 70%, 35%) 30deg,
            hsl(127, 60%, 25%) 60deg,
            transparent 90deg,
            transparent 270deg,
            hsl(180, 50%, 30%) 300deg,
            hsl(262, 40%, 35%) 330deg,
            transparent 360deg
          )`,
          borderRadius: 'inherit',
          animation: isHovered ? 'electricSpin 6s linear infinite' : 'none'
        }}
      />
      
      {/* Subtle inner glow */}
      <div 
        className={`absolute inset-0 opacity-0 transition-opacity duration-700 pointer-events-none ${isHovered ? 'opacity-20' : ''}`}
        style={{
          background: `radial-gradient(
            circle at center,
            hsl(127, 50%, 20%) 0%,
            transparent 60%
          )`,
          borderRadius: 'inherit'
        }}
      />
      
      {/* Card Content */}
      <div className="relative z-10 h-full">
        {children}
      </div>
    </motion.div>
  );
};

export default ElectricBentoCard;