import React from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

interface EnhancedScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  distance?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'scale' | 'fade';
  once?: boolean;
}

const EnhancedScrollReveal: React.FC<EnhancedScrollRevealProps> = ({
  children,
  className = '',
  delay = 0,
  duration = 0.6,
  distance = 50,
  direction = 'up',
  once = true
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once, margin: '-100px' });

  const getInitialState = () => {
    switch (direction) {
      case 'up':
        return { opacity: 0, y: distance };
      case 'down':
        return { opacity: 0, y: -distance };
      case 'left':
        return { opacity: 0, x: distance };
      case 'right':
        return { opacity: 0, x: -distance };
      case 'scale':
        return { opacity: 0, scale: 0.8 };
      case 'fade':
        return { opacity: 0 };
      default:
        return { opacity: 0, y: distance };
    }
  };

  const getAnimateState = () => {
    switch (direction) {
      case 'up':
      case 'down':
        return { opacity: 1, y: 0 };
      case 'left':
      case 'right':
        return { opacity: 1, x: 0 };
      case 'scale':
        return { opacity: 1, scale: 1 };
      case 'fade':
        return { opacity: 1 };
      default:
        return { opacity: 1, y: 0 };
    }
  };

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={getInitialState()}
      animate={isInView ? getAnimateState() : getInitialState()}
      transition={{
        duration,
        delay: delay / 1000,
        ease: [0.25, 0.4, 0.25, 1] // Custom easing
      }}
    >
      {children}
    </motion.div>
  );
};

export default EnhancedScrollReveal;