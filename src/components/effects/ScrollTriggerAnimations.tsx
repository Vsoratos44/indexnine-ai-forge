import React, { useEffect, useRef, useState } from 'react';

interface ScrollTriggerProps {
  children: React.ReactNode;
  className?: string;
  threshold?: number;
  delay?: number;
  animation?: 'fadeUp' | 'fadeIn' | 'scaleIn' | 'slideLeft' | 'slideRight';
  stagger?: boolean;
  staggerDelay?: number;
}

export const ScrollTrigger: React.FC<ScrollTriggerProps> = ({
  children,
  className = '',
  threshold = 0.1,
  delay = 0,
  animation = 'fadeUp',
  stagger = false,
  staggerDelay = 0.1
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true);
          }, delay);
        }
      },
      { threshold }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [threshold, delay]);

  const getAnimationClass = () => {
    const base = isVisible ? 'opacity-100 translate-y-0 translate-x-0 scale-100' : 'opacity-0';
    
    switch (animation) {
      case 'fadeUp':
        return `${base} ${!isVisible ? 'translate-y-8' : ''}`;
      case 'fadeIn':
        return base;
      case 'scaleIn':
        return `${base} ${!isVisible ? 'scale-95' : ''}`;
      case 'slideLeft':
        return `${base} ${!isVisible ? 'translate-x-8' : ''}`;
      case 'slideRight':
        return `${base} ${!isVisible ? '-translate-x-8' : ''}`;
      default:
        return `${base} ${!isVisible ? 'translate-y-8' : ''}`;
    }
  };

  return (
    <div
      ref={ref}
      className={`transform transition-all duration-800 ease-out ${getAnimationClass()} ${className}`}
    >
      {children}
    </div>
  );
};

interface StaggeredAnimationProps {
  children: React.ReactNode[];
  className?: string;
  staggerDelay?: number;
  animation?: 'fadeUp' | 'fadeIn' | 'scaleIn';
}

export const StaggeredAnimation: React.FC<StaggeredAnimationProps> = ({
  children,
  className = '',
  staggerDelay = 0.15,
  animation = 'fadeUp'
}) => {
  return (
    <div className={className}>
      {React.Children.map(children, (child, index) => (
        <ScrollTrigger
          delay={index * staggerDelay * 1000}
          animation={animation}
        >
          {child}
        </ScrollTrigger>
      ))}
    </div>
  );
};

export default ScrollTrigger;