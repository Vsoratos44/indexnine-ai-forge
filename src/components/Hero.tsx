import React from 'react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section className="relative min-h-screen overflow-hidden bg-black">
      {/* The Living Void Background - Pure Black Base */}
      <div className="absolute inset-0 bg-black">
        
        {/* Edge Glow - Cool Violet */}
        <div className="absolute inset-0 opacity-60">
          <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-[#5E5EFF] opacity-30 animate-pulse-slow"></div>
        </div>

        {/* Ambient Energy Pulse from Bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-1/3">
          <div className="absolute inset-0 bg-gradient-to-t from-[#7D88FF] via-[#1D2150] to-transparent opacity-10 animate-ambient-pulse"></div>
        </div>

        {/* Particle Field - 150-200 Microscopic Stars */}
        <div className="absolute inset-0 animate-slow-zoom">
          {/* Layer 1 - Close particles */}
          {[...Array(50)].map((_, i) => (
            <div
              key={`close-${i}`}
              className="absolute w-1 h-1 bg-white rounded-full shadow-sm animate-twinkle opacity-60"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 8}s`,
                animationDuration: `${2 + Math.random() * 4}s`,
                filter: `hue-rotate(${Math.random() * 60}deg)`
              }}
            ></div>
          ))}
          
          {/* Layer 2 - Medium particles */}
          {[...Array(80)].map((_, i) => (
            <div
              key={`medium-${i}`}
              className="absolute w-0.5 h-0.5 bg-cyan-100 rounded-full shadow-sm animate-twinkle opacity-40"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 8}s`,
                animationDuration: `${3 + Math.random() * 6}s`
              }}
            ></div>
          ))}
          
          {/* Layer 3 - Distant particles */}
          {[...Array(70)].map((_, i) => (
            <div
              key={`distant-${i}`}
              className="absolute w-px h-px bg-cyan-50 rounded-full animate-twinkle opacity-20"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 8}s`,
                animationDuration: `${4 + Math.random() * 8}s`
              }}
            ></div>
          ))}
        </div>

        {/* Grid Lines - Indigo Blue Connecting Particles */}
        <div className="absolute inset-0 opacity-30 animate-grid-emerge">
          <svg className="w-full h-full" viewBox="0 0 1920 1080" fill="none">
            <defs>
              <pattern id="grid-pattern" x="0" y="0" width="120" height="120" patternUnits="userSpaceOnUse">
                <path d="M 120 0 L 0 0 0 120" fill="none" stroke="#1D2150" strokeWidth="1" opacity="0.4"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid-pattern)" className="animate-grid-wave"/>
          </svg>
        </div>

        {/* Dynamic Mesh - Translucent White to Soft Aqua */}
        <div className="absolute inset-0 opacity-40 animate-mesh-flow">
          <svg className="w-full h-full" viewBox="0 0 1920 1080" fill="none">
            <defs>
              <linearGradient id="meshGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#E6F7FF" stopOpacity="0.6"/>
                <stop offset="50%" stopColor="#ffffff" stopOpacity="0.3"/>
                <stop offset="100%" stopColor="#E6F7FF" stopOpacity="0.1"/>
              </linearGradient>
            </defs>
            <path 
              d="M0,540 Q480,500 960,540 T1920,540" 
              stroke="url(#meshGradient)" 
              strokeWidth="2" 
              fill="none"
              className="animate-wave-flow"
            />
            <path 
              d="M0,580 Q480,620 960,580 T1920,580" 
              stroke="url(#meshGradient)" 
              strokeWidth="1.5" 
              fill="none"
              className="animate-wave-flow-delay"
            />
          </svg>
        </div>

        {/* Energy Pulses - Diagonal Sweeps */}
        <div className="absolute inset-0">
          <div className="absolute w-full h-0.5 bg-gradient-to-r from-transparent via-[#7D88FF] to-[#CCD1FF] opacity-20 animate-energy-sweep-1" style={{top: '30%', transform: 'rotate(-15deg)'}}></div>
          <div className="absolute w-full h-0.5 bg-gradient-to-r from-transparent via-[#7D88FF] to-[#CCD1FF] opacity-15 animate-energy-sweep-2" style={{top: '50%', transform: 'rotate(-15deg)'}}></div>
          <div className="absolute w-full h-0.5 bg-gradient-to-r from-transparent via-[#7D88FF] to-[#CCD1FF] opacity-10 animate-energy-sweep-3" style={{top: '70%', transform: 'rotate(-15deg)'}}></div>
        </div>

        {/* Floating Data Points */}
        {[...Array(12)].map((_, i) => (
          <div
            key={`data-point-${i}`}
            className="absolute w-1.5 h-1.5 bg-[#9FAAFF] rounded-full opacity-40 animate-float-data"
            style={{
              left: `${10 + Math.random() * 80}%`,
              top: `${10 + Math.random() * 80}%`,
              animationDelay: `${Math.random() * 8}s`,
              animationDuration: `${8 + Math.random() * 4}s`
            }}
          ></div>
        ))}

        {/* Central Radial Glow */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-96 h-96 bg-[#9FAAFF] rounded-full opacity-5 blur-3xl animate-central-glow"></div>
        </div>

      </div>

      {/* Content - Precisely positioned */}
      <div className="relative z-10 container mx-auto px-6 lg:px-8 pt-32 pb-24">
        <div className="max-w-5xl mx-auto text-center lg:text-left">
          <h1 className="text-[3.5rem] sm:text-[4.5rem] lg:text-[5.5rem] xl:text-[6rem] font-bold text-foreground-white mb-8 leading-[0.9] tracking-tight animate-fade-in">
            Product Innovation &{' '}
            <br />
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Software Engineering
            </span>
            <br />
            Excellence
          </h1>
          
          <p className="text-lg sm:text-xl lg:text-2xl text-foreground-white/85 mb-12 max-w-4xl leading-relaxed font-light animate-slide-up">
            Your strategic partner for modernizing critical systems & infrastructure, 
            launching new digital revenue streams, and embedding AI to drive impactful, 
            positive business outcomes.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-scale-in">
            <Button variant="hero" size="xl" className="min-w-[280px]">
              Schedule a Strategy Session
            </Button>
            <Button variant="hero-secondary" size="xl" className="min-w-[240px]">
              Explore our Solutions
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;