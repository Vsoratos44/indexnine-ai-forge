import React from 'react';
import { motion, useInView, useAnimation, useScroll, useTransform, Variants } from 'framer-motion';
import { cn } from '@/lib/utils';

/**
 * Scroll Animation Provider System
 * 
 * Performance-first scroll-triggered animations using Framer Motion
 * Features optimized intersection observer and hardware-accelerated transforms
 */

interface ScrollAnimationProps {
  children: React.ReactNode;
  /** Animation variant preset */
  variant?: 'fadeIn' | 'slideUp' | 'slideLeft' | 'slideRight' | 'scaleIn' | 'neural' | 'quantum';
  /** Custom animation delay in seconds */
  delay?: number;
  /** Animation duration in seconds */
  duration?: number;
  /** Trigger animation when element is this percentage visible */
  threshold?: number;
  /** Trigger animation only once */
  once?: boolean;
  /** Custom animation variants */
  customVariants?: Variants;
  className?: string;
}

// Performance-optimized animation variants
const animationVariants: Record<string, Variants> = {
  fadeIn: {
    hidden: { 
      opacity: 0,
      y: 20
    },
    visible: { 
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  },
  
  slideUp: {
    hidden: { 
      opacity: 0,
      y: 50,
      scale: 0.95
    },
    visible: { 
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.23, 1, 0.32, 1]
      }
    }
  },
  
  slideLeft: {
    hidden: { 
      opacity: 0,
      x: 50
    },
    visible: { 
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.7,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  },
  
  slideRight: {
    hidden: { 
      opacity: 0,
      x: -50
    },
    visible: { 
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.7,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  },
  
  scaleIn: {
    hidden: { 
      opacity: 0,
      scale: 0.8,
      rotateX: 10
    },
    visible: { 
      opacity: 1,
      scale: 1,
      rotateX: 0,
      transition: {
        duration: 0.8,
        ease: [0.23, 1, 0.32, 1]
      }
    }
  },
  
  neural: {
    hidden: { 
      opacity: 0,
      scale: 0.9,
      filter: 'blur(10px)',
      rotateY: -15
    },
    visible: { 
      opacity: 1,
      scale: 1,
      filter: 'blur(0px)',
      rotateY: 0,
      transition: {
        duration: 1.2,
        ease: [0.23, 1, 0.32, 1],
        filter: { duration: 0.8 }
      }
    }
  },
  
  quantum: {
    hidden: { 
      opacity: 0,
      scale: 0.8,
      rotateZ: -5,
      filter: 'hue-rotate(180deg) saturate(0)'
    },
    visible: { 
      opacity: 1,
      scale: 1,
      rotateZ: 0,
      filter: 'hue-rotate(0deg) saturate(1)',
      transition: {
        duration: 1.5,
        ease: [0.23, 1, 0.32, 1],
        filter: { duration: 1.0 }
      }
    }
  }
};

export const ScrollAnimation: React.FC<ScrollAnimationProps> = ({
  children,
  variant = 'fadeIn',
  delay = 0,
  duration,
  threshold = 0.2,
  once = true,
  customVariants,
  className
}) => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { 
    amount: threshold,
    once
  });
  const controls = useAnimation();

  React.useEffect(() => {
    if (isInView) {
      controls.start('visible');
    } else if (!once) {
      controls.start('hidden');
    }
  }, [isInView, controls, once]);

  const variants = customVariants || animationVariants[variant];
  
  // Apply custom duration if specified
  if (duration && variants.visible && typeof variants.visible === 'object' && 'transition' in variants.visible) {
    (variants.visible.transition as any).duration = duration;
  }
  
  // Apply delay if specified
  if (delay && variants.visible && typeof variants.visible === 'object' && 'transition' in variants.visible) {
    (variants.visible.transition as any).delay = delay;
  }

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={variants}
      className={className}
      style={{
        // Performance optimization: use will-change for complex animations
        willChange: variant === 'neural' || variant === 'quantum' ? 'transform, filter' : 'transform'
      }}
    >
      {children}
    </motion.div>
  );
};

/**
 * Staggered Children Animation
 * 
 * Animates child elements with a staggered delay for complex sequences
 */
interface StaggeredAnimationProps {
  children: React.ReactNode;
  /** Delay between each child animation */
  staggerDelay?: number;
  /** Base animation variant */
  variant?: ScrollAnimationProps['variant'];
  className?: string;
}

export const StaggeredAnimation: React.FC<StaggeredAnimationProps> = ({
  children,
  staggerDelay = 0.1,
  variant = 'fadeIn',
  className
}) => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { amount: 0.2, once: true });

  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: staggerDelay,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = animationVariants[variant];

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={containerVariants}
      className={className}
    >
      {React.Children.map(children, (child, index) => (
        <motion.div
          key={index}
          variants={itemVariants}
        >
          {child}
        </motion.div>
      ))}
    </motion.div>
  );
};

/**
 * Performance-Optimized Parallax Component
 * 
 * Hardware-accelerated parallax effect with neural enhancement
 */
interface ParallaxProps {
  children: React.ReactNode;
  /** Parallax offset multiplier */
  offset?: number;
  /** Enable neural pulse effect */
  neuralEffect?: boolean;
  className?: string;
}

export const Parallax: React.FC<ParallaxProps> = ({
  children,
  offset = 0.5,
  neuralEffect = false,
  className
}) => {
  const ref = React.useRef(null);
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], [0, offset * 1000]);

  return (
    <motion.div
      ref={ref}
      style={{ y }}
      className={cn(
        className,
        neuralEffect && "animate-neural-pulse"
      )}
    >
      {children}
    </motion.div>
  );
};

export default ScrollAnimation;