import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

interface CtaButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  icon?: React.ReactNode;
  className?: string;
}

const CtaButton: React.FC<CtaButtonProps> = ({ 
  children, 
  onClick, 
  icon = <ArrowRight className="w-5 h-5" />,
  className = "" 
}) => {
  return (
    <motion.button
      onClick={onClick}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`
        group relative inline-flex items-center justify-center 
        px-8 py-4 mt-8
        text-base font-bold text-white
        bg-gradient-to-r from-arcane-purple via-cyber-teal to-signal-green
        bg-200 bg-pos-0
        border-2 border-transparent rounded-full
        transition-all duration-500 ease-out
        hover:bg-pos-100
        focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-signal-green
        ${className}
      `}
    >
      {/* Glowing background element */}
      <span className="absolute inset-0 bg-gradient-to-r from-signal-green to-cyber-teal rounded-full blur-lg opacity-0 group-hover:opacity-75 transition-opacity duration-500"></span>
      
      {/* Content */}
      <span className="relative flex items-center gap-2">
        {children}
        {icon && (
          <span className="transition-transform duration-300 group-hover:translate-x-1">
            {icon}
          </span>
        )}
      </span>
    </motion.button>
  );
};

export default CtaButton;