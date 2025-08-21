import React from 'react';

interface LuminousIconProps {
  className?: string;
  glowColor?: string;
}

export const RocketLuminous: React.FC<LuminousIconProps> = ({ 
  className = "w-12 h-12", 
  glowColor = "hsl(262 83% 58%)" 
}) => (
  <svg
    className={className}
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      <linearGradient id="rocketGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor={glowColor} stopOpacity="1" />
        <stop offset="100%" stopColor="hsl(180 100% 60%)" stopOpacity="0.8" />
      </linearGradient>
      <filter id="rocketGlow">
        <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
        <feMerge>
          <feMergeNode in="coloredBlur"/>
          <feMergeNode in="SourceGraphic"/>
        </feMerge>
      </filter>
    </defs>
    <path
      d="M24 4L32 16L28 20L32 32L24 28L16 32L20 20L16 16L24 4Z"
      stroke="url(#rocketGradient)"
      strokeWidth="2"
      fill="none"
      filter="url(#rocketGlow)"
    />
    <circle
      cx="24"
      cy="18"
      r="2"
      fill="url(#rocketGradient)"
      filter="url(#rocketGlow)"
    />
    <path
      d="M20 36L24 32L28 36L24 44L20 36Z"
      stroke="url(#rocketGradient)"
      strokeWidth="2"
      fill="url(#rocketGradient)"
      fillOpacity="0.3"
      filter="url(#rocketGlow)"
    />
  </svg>
);

export const SearchLuminous: React.FC<LuminousIconProps> = ({ 
  className = "w-12 h-12", 
  glowColor = "hsl(180 100% 60%)" 
}) => (
  <svg
    className={className}
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      <linearGradient id="searchGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor={glowColor} stopOpacity="1" />
        <stop offset="100%" stopColor="hsl(262 83% 58%)" stopOpacity="0.8" />
      </linearGradient>
      <filter id="searchGlow">
        <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
        <feMerge>
          <feMergeNode in="coloredBlur"/>
          <feMergeNode in="SourceGraphic"/>
        </feMerge>
      </filter>
    </defs>
    <circle
      cx="22"
      cy="22"
      r="10"
      stroke="url(#searchGradient)"
      strokeWidth="3"
      fill="none"
      filter="url(#searchGlow)"
    />
    <path
      d="M30 30L42 42"
      stroke="url(#searchGradient)"
      strokeWidth="3"
      strokeLinecap="round"
      filter="url(#searchGlow)"
    />
    <circle
      cx="22"
      cy="22"
      r="6"
      stroke="url(#searchGradient)"
      strokeWidth="1"
      fill="none"
      opacity="0.6"
    />
  </svg>
);

export const HandshakeLuminous: React.FC<LuminousIconProps> = ({ 
  className = "w-12 h-12", 
  glowColor = "hsl(127 100% 50%)" 
}) => (
  <svg
    className={className}
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      <linearGradient id="handshakeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor={glowColor} stopOpacity="1" />
        <stop offset="100%" stopColor="hsl(262 83% 58%)" stopOpacity="0.8" />
      </linearGradient>
      <filter id="handshakeGlow">
        <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
        <feMerge>
          <feMergeNode in="coloredBlur"/>
          <feMergeNode in="SourceGraphic"/>
        </feMerge>
      </filter>
    </defs>
    <path
      d="M12 20L20 12L28 20L36 12L44 20L36 28L28 20L20 28L12 20Z"
      stroke="url(#handshakeGradient)"
      strokeWidth="2.5"
      fill="none"
      filter="url(#handshakeGlow)"
    />
    <circle cx="20" cy="20" r="2" fill="url(#handshakeGradient)" filter="url(#handshakeGlow)" />
    <circle cx="28" cy="20" r="2" fill="url(#handshakeGradient)" filter="url(#handshakeGlow)" />
    <path
      d="M16 32L24 24L32 32"
      stroke="url(#handshakeGradient)"
      strokeWidth="2"
      strokeLinecap="round"
      filter="url(#handshakeGlow)"
    />
  </svg>
);

export const ShieldLuminous: React.FC<LuminousIconProps> = ({ 
  className = "w-12 h-12", 
  glowColor = "hsl(262 83% 58%)" 
}) => (
  <svg
    className={className}
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      <linearGradient id="shieldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor={glowColor} stopOpacity="1" />
        <stop offset="100%" stopColor="hsl(180 100% 60%)" stopOpacity="0.8" />
      </linearGradient>
      <filter id="shieldGlow">
        <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
        <feMerge>
          <feMergeNode in="coloredBlur"/>
          <feMergeNode in="SourceGraphic"/>
        </feMerge>
      </filter>
    </defs>
    <path
      d="M24 4L8 12L8 24C8 32 16 40 24 44C32 40 40 32 40 24L40 12L24 4Z"
      stroke="url(#shieldGradient)"
      strokeWidth="2.5"
      fill="none"
      filter="url(#shieldGlow)"
    />
    <path
      d="M18 24L22 28L30 18"
      stroke="url(#shieldGradient)"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      filter="url(#shieldGlow)"
    />
  </svg>
);

export const CodeLuminous: React.FC<LuminousIconProps> = ({ 
  className = "w-12 h-12", 
  glowColor = "hsl(180 100% 60%)" 
}) => (
  <svg
    className={className}
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      <linearGradient id="codeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor={glowColor} stopOpacity="1" />
        <stop offset="100%" stopColor="hsl(262 83% 58%)" stopOpacity="0.8" />
      </linearGradient>
      <filter id="codeGlow">
        <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
        <feMerge>
          <feMergeNode in="coloredBlur"/>
          <feMergeNode in="SourceGraphic"/>
        </feMerge>
      </filter>
    </defs>
    <path
      d="M16 18L8 24L16 30"
      stroke="url(#codeGradient)"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
      filter="url(#codeGlow)"
    />
    <path
      d="M32 18L40 24L32 30"
      stroke="url(#codeGradient)"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
      filter="url(#codeGlow)"
    />
    <path
      d="M28 12L20 36"
      stroke="url(#codeGradient)"
      strokeWidth="2"
      strokeLinecap="round"
      filter="url(#codeGlow)"
    />
  </svg>
);

export const SparklesLuminous: React.FC<LuminousIconProps> = ({ 
  className = "w-12 h-12", 
  glowColor = "hsl(127 100% 50%)" 
}) => (
  <svg
    className={className}
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      <linearGradient id="sparklesGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor={glowColor} stopOpacity="1" />
        <stop offset="100%" stopColor="hsl(262 83% 58%)" stopOpacity="0.8" />
      </linearGradient>
      <filter id="sparklesGlow">
        <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
        <feMerge>
          <feMergeNode in="coloredBlur"/>
          <feMergeNode in="SourceGraphic"/>
        </feMerge>
      </filter>
    </defs>
    <path
      d="M24 8L26 16L34 18L26 20L24 28L22 20L14 18L22 16L24 8Z"
      stroke="url(#sparklesGradient)"
      strokeWidth="2"
      fill="url(#sparklesGradient)"
      fillOpacity="0.3"
      filter="url(#sparklesGlow)"
    />
    <path
      d="M36 12L37 16L41 17L37 18L36 22L35 18L31 17L35 16L36 12Z"
      stroke="url(#sparklesGradient)"
      strokeWidth="1.5"
      fill="url(#sparklesGradient)"
      fillOpacity="0.4"
      filter="url(#sparklesGlow)"
    />
    <path
      d="M12 32L13 35L16 36L13 37L12 40L11 37L8 36L11 35L12 32Z"
      stroke="url(#sparklesGradient)"
      strokeWidth="1.5"
      fill="url(#sparklesGradient)"
      fillOpacity="0.4"
      filter="url(#sparklesGlow)"
    />
  </svg>
);