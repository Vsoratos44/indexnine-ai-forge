import React from 'react';
import { motion } from 'framer-motion';

interface BentoCardProps {
  children: React.ReactNode;
  className?: string;
  hoverScale?: number;
  glowColor?: string;
  index?: number;
}

const BentoCard: React.FC<BentoCardProps> = ({
  children,
  className = '',
  hoverScale = 1.02,
  glowColor = 'hsl(262 83% 58%)',
  index = 0
}) => {
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
      className={`relative overflow-hidden ${className}`}
      style={{
        '--glow-color': glowColor,
      } as React.CSSProperties & { [key: string]: string }}
    >
      {/* Gradient Border Effect */}
      <div 
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{
          background: `conic-gradient(
            from 180deg at 50% 50%,
            var(--glow-color) 0deg,
            hsl(180 100% 60%) 180deg,
            var(--glow-color) 360deg
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

export default BentoCard;