import React from 'react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section className="relative min-h-screen bg-gradient-hero overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-brand-purple/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-brand-primary/20 rounded-full blur-3xl animate-float" style={{animationDelay: '1s'}}></div>
        
        {/* Flowing Wave Graphics */}
        <div className="absolute inset-0 opacity-30">
          <svg className="w-full h-full" viewBox="0 0 1200 800" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path 
              d="M-100 400 Q300 300 600 400 T1300 400 V800 H-100 Z" 
              fill="url(#waveGradient1)"
              className="animate-pulse"
            />
            <path 
              d="M-100 450 Q250 350 550 450 T1300 450 V800 H-100 Z" 
              fill="url(#waveGradient2)"
              className="animate-pulse"
              style={{animationDelay: '0.5s'}}
            />
            <defs>
              <linearGradient id="waveGradient1" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="hsl(249, 78%, 62%)" stopOpacity="0.3"/>
                <stop offset="100%" stopColor="hsl(262, 83%, 58%)" stopOpacity="0.1"/>
              </linearGradient>
              <linearGradient id="waveGradient2" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="hsl(262, 83%, 58%)" stopOpacity="0.2"/>
                <stop offset="100%" stopColor="hsl(249, 78%, 62%)" stopOpacity="0.1"/>
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 pt-32 pb-20">
        <div className="max-w-4xl">
          <h1 className="text-5xl md:text-7xl font-bold text-foreground-white mb-8 leading-tight animate-fade-in">
            Product Innovation &{' '}
            <br className="hidden md:block" />
            Software{' '}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Engineering
            </span>
            <br />
            Excellence
          </h1>
          
          <p className="text-xl md:text-2xl text-foreground-white/80 mb-12 max-w-3xl leading-relaxed animate-slide-up">
            Your strategic partner for: modernizing your critical system & infrastructure, 
            launching new digital revenue streams, and embedding AI to drive impactful, 
            positive business outcomes.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 animate-scale-in">
            <Button variant="hero" size="xl">
              Schedule a Strategy Session
            </Button>
            <Button variant="hero-secondary" size="xl">
              Explore our Solutions
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;