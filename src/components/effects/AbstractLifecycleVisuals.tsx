import React from 'react';

interface AbstractVisualProps {
  type: 'launch' | 'pivot' | 'grow' | 'mature';
  className?: string;
}

export const LaunchVisual: React.FC<{ className?: string }> = ({ className = "w-20 h-20" }) => (
  <svg className={className} viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="launchGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="hsl(262 83% 58%)" stopOpacity="0.8" />
        <stop offset="50%" stopColor="hsl(180 100% 60%)" stopOpacity="1" />
        <stop offset="100%" stopColor="hsl(262 83% 58%)" stopOpacity="0.6" />
      </linearGradient>
      <filter id="launchGlow">
        <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
        <feMerge>
          <feMergeNode in="coloredBlur"/>
          <feMergeNode in="SourceGraphic"/>
        </feMerge>
      </filter>
    </defs>
    
    {/* Expanding geometric form */}
    <g filter="url(#launchGlow)">
      <circle cx="40" cy="40" r="8" fill="url(#launchGradient)" opacity="0.4">
        <animate attributeName="r" values="8;16;8" dur="3s" repeatCount="indefinite" />
        <animate attributeName="opacity" values="0.4;0.8;0.4" dur="3s" repeatCount="indefinite" />
      </circle>
      <circle cx="40" cy="40" r="12" fill="none" stroke="url(#launchGradient)" strokeWidth="2" opacity="0.6">
        <animate attributeName="r" values="12;24;12" dur="3s" repeatCount="indefinite" />
        <animate attributeName="stroke-opacity" values="0.6;1;0.6" dur="3s" repeatCount="indefinite" />
      </circle>
      <circle cx="40" cy="40" r="20" fill="none" stroke="url(#launchGradient)" strokeWidth="1" opacity="0.3">
        <animate attributeName="r" values="20;32;20" dur="3s" repeatCount="indefinite" />
      </circle>
    </g>
    
    {/* Central core */}
    <circle cx="40" cy="40" r="4" fill="url(#launchGradient)" filter="url(#launchGlow)" />
  </svg>
);

export const PivotVisual: React.FC<{ className?: string }> = ({ className = "w-20 h-20" }) => (
  <svg className={className} viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="pivotGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="hsl(180 100% 60%)" stopOpacity="1" />
        <stop offset="50%" stopColor="hsl(262 83% 58%)" stopOpacity="0.8" />
        <stop offset="100%" stopColor="hsl(127 100% 50%)" stopOpacity="0.6" />
      </linearGradient>
      <filter id="pivotGlow">
        <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
        <feMerge>
          <feMergeNode in="coloredBlur"/>
          <feMergeNode in="SourceGraphic"/>
        </feMerge>
      </filter>
    </defs>
    
    {/* Intersecting pathways */}
    <g filter="url(#pivotGlow)">
      <path 
        d="M 20 20 L 60 60" 
        stroke="url(#pivotGradient)" 
        strokeWidth="3" 
        strokeLinecap="round"
        opacity="0.8"
      >
        <animate attributeName="stroke-dasharray" values="0 50;25 25;50 0;25 25;0 50" dur="4s" repeatCount="indefinite" />
      </path>
      <path 
        d="M 60 20 L 20 60" 
        stroke="url(#pivotGradient)" 
        strokeWidth="3" 
        strokeLinecap="round"
        opacity="0.6"
      >
        <animate attributeName="stroke-dasharray" values="50 0;25 25;0 50;25 25;50 0" dur="4s" repeatCount="indefinite" />
      </path>
      <path 
        d="M 40 10 L 40 70" 
        stroke="url(#pivotGradient)" 
        strokeWidth="2" 
        strokeLinecap="round"
        opacity="0.4"
      >
        <animate attributeName="stroke-dasharray" values="0 60;30 30;60 0;30 30;0 60" dur="4s" repeatCount="indefinite" />
      </path>
    </g>
    
    {/* Central pivot point */}
    <circle cx="40" cy="40" r="6" fill="url(#pivotGradient)" filter="url(#pivotGlow)">
      <animate attributeName="r" values="4;8;4" dur="2s" repeatCount="indefinite" />
    </circle>
  </svg>
);

export const GrowVisual: React.FC<{ className?: string }> = ({ className = "w-20 h-20" }) => (
  <svg className={className} viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="growGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="hsl(127 100% 50%)" stopOpacity="1" />
        <stop offset="50%" stopColor="hsl(180 100% 60%)" stopOpacity="0.8" />
        <stop offset="100%" stopColor="hsl(262 83% 58%)" stopOpacity="0.6" />
      </linearGradient>
      <filter id="growGlow">
        <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
        <feMerge>
          <feMergeNode in="coloredBlur"/>
          <feMergeNode in="SourceGraphic"/>
        </feMerge>
      </filter>
    </defs>
    
    {/* Branching crystalline structure */}
    <g filter="url(#growGlow)">
      {/* Main trunk */}
      <rect x="38" y="50" width="4" height="20" fill="url(#growGradient)" opacity="0.8" />
      
      {/* Primary branches */}
      <rect x="28" y="40" width="3" height="12" fill="url(#growGradient)" opacity="0.7" transform="rotate(-30 29.5 46)" />
      <rect x="49" y="40" width="3" height="12" fill="url(#growGradient)" opacity="0.7" transform="rotate(30 50.5 46)" />
      
      {/* Secondary branches */}
      <rect x="20" y="35" width="2" height="8" fill="url(#growGradient)" opacity="0.6" transform="rotate(-45 21 39)" />
      <rect x="58" y="35" width="2" height="8" fill="url(#growGradient)" opacity="0.6" transform="rotate(45 59 39)" />
      
      {/* Growth nodes */}
      <circle cx="22" cy="32" r="2" fill="url(#growGradient)" opacity="0.8">
        <animate attributeName="r" values="1;3;1" dur="2s" repeatCount="indefinite" />
      </circle>
      <circle cx="40" cy="25" r="2" fill="url(#growGradient)" opacity="0.9">
        <animate attributeName="r" values="1.5;3.5;1.5" dur="2.5s" repeatCount="indefinite" />
      </circle>
      <circle cx="58" cy="32" r="2" fill="url(#growGradient)" opacity="0.8">
        <animate attributeName="r" values="1;3;1" dur="2s" repeatCount="indefinite" />
      </circle>
    </g>
  </svg>
);

export const MatureVisual: React.FC<{ className?: string }> = ({ className = "w-20 h-20" }) => (
  <svg className={className} viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="matureGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="hsl(262 83% 58%)" stopOpacity="1" />
        <stop offset="50%" stopColor="hsl(180 100% 60%)" stopOpacity="0.8" />
        <stop offset="100%" stopColor="hsl(127 100% 50%)" stopOpacity="0.6" />
      </linearGradient>
      <filter id="matureGlow">
        <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
        <feMerge>
          <feMergeNode in="coloredBlur"/>
          <feMergeNode in="SourceGraphic"/>
        </feMerge>
      </filter>
    </defs>
    
    {/* Perfect stable orb with intricate patterns */}
    <g filter="url(#matureGlow)">
      {/* Outer stability rings */}
      <circle cx="40" cy="40" r="30" fill="none" stroke="url(#matureGradient)" strokeWidth="1" opacity="0.3">
        <animate attributeName="stroke-dasharray" values="0 188;94 94;188 0;94 94;0 188" dur="6s" repeatCount="indefinite" />
      </circle>
      <circle cx="40" cy="40" r="24" fill="none" stroke="url(#matureGradient)" strokeWidth="2" opacity="0.5">
        <animate attributeName="stroke-dasharray" values="150 0;75 75;0 150;75 75;150 0" dur="5s" repeatCount="indefinite" />
      </circle>
      
      {/* Core orb */}
      <circle cx="40" cy="40" r="16" fill="url(#matureGradient)" opacity="0.4">
        <animate attributeName="opacity" values="0.3;0.6;0.3" dur="4s" repeatCount="indefinite" />
      </circle>
      
      {/* Inner geometric patterns */}
      <polygon 
        points="40,28 48,40 40,52 32,40" 
        fill="none" 
        stroke="url(#matureGradient)" 
        strokeWidth="2" 
        opacity="0.7"
      >
        <animateTransform 
          attributeName="transform" 
          type="rotate" 
          values="0 40 40;360 40 40" 
          dur="8s" 
          repeatCount="indefinite"
        />
      </polygon>
      
      {/* Central stable point */}
      <circle cx="40" cy="40" r="4" fill="url(#matureGradient)" opacity="1" />
    </g>
  </svg>
);

export const AbstractLifecycleVisual: React.FC<AbstractVisualProps> = ({ type, className }) => {
  switch (type) {
    case 'launch':
      return <LaunchVisual className={className} />;
    case 'pivot':
      return <PivotVisual className={className} />;
    case 'grow':
      return <GrowVisual className={className} />;
    case 'mature':
      return <MatureVisual className={className} />;
    default:
      return <LaunchVisual className={className} />;
  }
};

export default AbstractLifecycleVisual;