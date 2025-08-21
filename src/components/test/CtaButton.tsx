import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

interface CtaButtonProps {
  children: React.ReactNode;
  icon?: React.ReactNode;
  variant?: 'primary' | 'secondary';
  className?: string;
  onClick?: () => void;
}

const CtaButton: React.FC<CtaButtonProps> = ({
  children,
  icon,
  variant = 'primary',
  className = '',
  onClick
}) => {
  const baseClasses = "group relative overflow-hidden text-lg px-8 py-4 font-medium transition-all duration-300 transform hover:scale-105 hover:shadow-glow-purple";
  
  const variantClasses = {
    primary: "bg-gradient-to-r from-brand-purple via-brand-primary to-brand-cyan text-white hover:shadow-xl border-0",
    secondary: "bg-transparent border-2 border-brand-purple text-brand-purple hover:bg-brand-purple hover:text-white"
  };

  return (
    <Button 
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
      onClick={onClick}
    >
      <span className="relative z-10 flex items-center gap-2">
        {children}
        {icon || <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />}
      </span>
      
      {/* Animated background effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-brand-cyan via-brand-primary to-brand-purple opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      
      {/* Shimmer effect */}
      <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent transform skew-x-12" />
    </Button>
  );
};

export default CtaButton;