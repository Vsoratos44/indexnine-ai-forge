import React from 'react';

interface TextHighlightProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'accent' | 'luminous' | 'gradient';
  className?: string;
  animate?: boolean;
}

export const TextHighlight: React.FC<TextHighlightProps> = ({
  children,
  variant = 'primary',
  className = '',
  animate = false
}) => {
  const getVariantClasses = () => {
    switch (variant) {
      case 'primary':
        return 'text-brand-primary';
      case 'secondary':
        return 'text-brand-cyan';
      case 'accent':
        return 'text-brand-purple';
      case 'luminous':
        return 'text-luminous';
      case 'gradient':
        return 'text-highlight';
      default:
        return 'text-brand-primary';
    }
  };

  const animationClasses = animate 
    ? 'transition-all duration-500 hover:scale-105 hover:text-luminous' 
    : '';

  return (
    <span className={`${getVariantClasses()} ${animationClasses} ${className}`}>
      {children}
    </span>
  );
};

interface AnimatedTextProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

export const AnimatedText: React.FC<AnimatedTextProps> = ({
  children,
  className = '',
  delay = 0
}) => {
  return (
    <span 
      className={`inline-block animate-slide-up ${className}`}
      style={{ animationDelay: `${delay}ms` }}
    >
      {children}
    </span>
  );
};

export default TextHighlight;