import React from 'react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section className="relative min-h-screen bg-gradient-hero overflow-hidden">
      {/* Sophisticated Background Elements - Figma Match */}
      <div className="absolute inset-0">
        {/* Large floating orbs with precise positioning */}
        <div className="absolute top-[15%] right-[20%] w-[32rem] h-[32rem] bg-brand-purple/15 rounded-full blur-3xl animate-float opacity-60"></div>
        <div className="absolute bottom-[20%] left-[15%] w-[28rem] h-[28rem] bg-brand-primary/20 rounded-full blur-3xl animate-float opacity-70" style={{animationDelay: '1.2s'}}></div>
        <div className="absolute top-[40%] right-[45%] w-[20rem] h-[20rem] bg-brand-accent/10 rounded-full blur-2xl animate-float" style={{animationDelay: '2s'}}></div>
        
        {/* Flowing Wave Graphics - Enhanced */}
        <div className="absolute inset-0 opacity-20">
          <svg className="w-full h-full" viewBox="0 0 1440 900" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="waveGradient1" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="hsl(239, 84%, 67%)" stopOpacity="0.4"/>
                <stop offset="50%" stopColor="hsl(262, 83%, 58%)" stopOpacity="0.2"/>
                <stop offset="100%" stopColor="hsl(217, 91%, 60%)" stopOpacity="0.1"/>
              </linearGradient>
              <linearGradient id="waveGradient2" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="hsl(262, 83%, 58%)" stopOpacity="0.3"/>
                <stop offset="50%" stopColor="hsl(217, 91%, 60%)" stopOpacity="0.2"/>
                <stop offset="100%" stopColor="hsl(239, 84%, 67%)" stopOpacity="0.1"/>
              </linearGradient>
              <linearGradient id="waveGradient3" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="hsl(217, 91%, 60%)" stopOpacity="0.2"/>
                <stop offset="100%" stopColor="hsl(239, 84%, 67%)" stopOpacity="0.05"/>
              </linearGradient>
            </defs>
            
            <path 
              d="M-100 450 Q360 350 720 450 T1540 450 V900 H-100 Z" 
              fill="url(#waveGradient1)"
              className="animate-pulse"
            />
            <path 
              d="M-100 500 Q320 400 640 500 T1540 500 V900 H-100 Z" 
              fill="url(#waveGradient2)"
              className="animate-pulse"
              style={{animationDelay: '0.7s'}}
            />
            <path 
              d="M-100 550 Q280 450 560 550 T1540 550 V900 H-100 Z" 
              fill="url(#waveGradient3)"
              className="animate-pulse"
              style={{animationDelay: '1.4s'}}
            />
          </svg>
        </div>

        {/* Subtle grid pattern overlay */}
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: `radial-gradient(circle at 50% 50%, hsl(239 84% 67%) 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      {/* Content - Precisely positioned like Figma */}
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