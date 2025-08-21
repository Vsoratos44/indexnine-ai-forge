import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface ElectricPathSVGProps {
  className?: string;
}

const ElectricPathSVG: React.FC<ElectricPathSVGProps> = ({ className = '' }) => {
  const { scrollYProgress } = useScroll();
  
  // Transform scroll progress to path drawing
  const pathLength = useTransform(scrollYProgress, [0, 0.8], [0, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.1, 0.8, 1], [0, 1, 1, 0]);

  return (
    <div className={`fixed inset-0 pointer-events-none z-0 ${className}`}>
      <svg 
        className="w-full h-full" 
        viewBox="0 0 100 400" 
        preserveAspectRatio="none"
      >
        {/* Glow effect layer */}
        <defs>
          <filter id="electric-glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
            <feMerge> 
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/> 
            </feMerge>
          </filter>
          
          <linearGradient id="electric-gradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="hsl(127, 100%, 50%)" stopOpacity="0.8">
              <animate attributeName="stop-opacity" values="0.4;0.8;0.4" dur="3s" repeatCount="indefinite"/>
            </stop>
            <stop offset="50%" stopColor="hsl(180, 100%, 60%)" stopOpacity="1"/>
            <stop offset="100%" stopColor="hsl(262, 83%, 58%)" stopOpacity="0.6">
              <animate attributeName="stop-opacity" values="0.3;0.6;0.3" dur="2s" repeatCount="indefinite"/>
            </stop>
          </linearGradient>
        </defs>

        {/* Main path - represents the journey/guidance */}
        <motion.path
          d="M 50 20 
             C 30 80, 70 120, 45 180
             C 20 220, 80 260, 55 320
             C 35 360, 75 380, 50 400"
          fill="none"
          stroke="url(#electric-gradient)"
          strokeWidth="1"
          strokeLinecap="round"
          strokeDasharray="2 4"
          filter="url(#electric-glow)"
          style={{ 
            pathLength,
            opacity
          }}
          initial={{ pathLength: 0 }}
        />

        {/* Animated particles along the path */}
        <motion.circle
          r="1"
          fill="hsl(127, 100%, 50%)"
          filter="url(#electric-glow)"
          animate={{
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          style={{
            opacity
          }}
        >
          <animate attributeName="r" values="0.5;2;0.5" dur="2s" repeatCount="indefinite"/>
          <animateMotion 
            dur="4s" 
            repeatCount="indefinite"
            path="M 50 20 C 30 80, 70 120, 45 180 C 20 220, 80 260, 55 320 C 35 360, 75 380, 50 400"
          />
        </motion.circle>
      </svg>
    </div>
  );
};

export default ElectricPathSVG;