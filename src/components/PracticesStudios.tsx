import React, { useState } from 'react';
import { Button } from '@/components/ui/button';

const PracticesStudios = () => {
  const [activeStudio, setActiveStudio] = useState<'innovation' | 'enterprise'>('innovation');

  const studioData = {
    innovation: {
      title: "The Innovation Lab",
      description: "Our specialized team for rapid prototyping, emerging technologies, and disruptive solutions. Perfect for startups and innovation initiatives within larger organizations.",
      buttonText: "Explore Innovation lab",
      features: [
        "Rapid MVP development",
        "AI/ML integration", 
        "Emerging tech exploration"
      ],
      colors: {
        primary: "brand-primary",
        accent: "brand-accent"
      }
    },
    enterprise: {
      title: "The Enterprise Studio", 
      description: "Enterprise-grade solutions with focus on scalability, security, and integration. Built for organizations requiring mission-critical software systems.",
      buttonText: "Book a consultation",
      features: [
        "Enterprise scalability",
        "Security & compliance",
        "Mission-critical systems"
      ],
      colors: {
        primary: "brand-purple",
        accent: "brand-primary"
      }
    }
  };

  const currentStudio = studioData[activeStudio];

  return (
    <section data-section="practices-studios" className="py-24 lg:py-32 bg-background-light relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-1/4 w-96 h-96 bg-brand-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-1/4 w-80 h-80 bg-brand-purple/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left Content - Enhanced */}
          <div className="space-y-16 order-2 lg:order-1">
            {/* Studio Selector */}
            <div className="flex space-x-4 mb-8">
              <button
                onClick={() => setActiveStudio('innovation')}
                className={`px-6 py-3 rounded-2xl font-semibold transition-all duration-300 font-montserrat ${
                  activeStudio === 'innovation'
                    ? 'bg-brand-primary text-white shadow-glow'
                    : 'bg-background-subtle text-foreground hover:bg-background-card'
                }`}
              >
                Innovation Lab
              </button>
              <button
                onClick={() => setActiveStudio('enterprise')}
                className={`px-6 py-3 rounded-2xl font-semibold transition-all duration-300 font-montserrat ${
                  activeStudio === 'enterprise'
                    ? 'bg-brand-purple text-white shadow-glow'
                    : 'bg-background-subtle text-foreground hover:bg-background-card'
                }`}
              >
                Enterprise Studio
              </button>
            </div>

            {/* Active Studio Content */}
            <div className="relative min-h-[300px]">
              <div className="absolute -left-2 top-0 bottom-0 w-1 bg-gradient-to-b from-brand-primary to-brand-accent rounded-full"></div>
              <div className="pl-12">
                <h3 className="text-3xl lg:text-4xl font-bold text-foreground-dark mb-6 leading-tight font-montserrat">
                  {currentStudio.title}
                </h3>
                <p className="text-lg lg:text-xl text-foreground-dark-muted mb-8 leading-relaxed font-light font-montserrat">
                  {currentStudio.description}
                </p>
                <Button 
                  variant={activeStudio === 'innovation' ? 'outline' : 'hero'} 
                  size="lg" 
                  className={activeStudio === 'innovation' 
                    ? "border-2 border-brand-primary text-brand-primary hover:bg-brand-primary hover:text-white font-montserrat"
                    : "font-montserrat"
                  }
                >
                  {currentStudio.buttonText}
                </Button>
              </div>
            </div>
          </div>

          {/* Right Visual - Dynamic Studio Images */}
          <div className="relative order-1 lg:order-2">
            <div className="relative overflow-hidden rounded-3xl shadow-2xl border border-glass-border group h-96 lg:h-[500px]">
              {/* Background Glow Effect */}
              <div className={`absolute inset-0 bg-gradient-to-br transition-all duration-500 z-10 ${
                activeStudio === 'innovation' 
                  ? 'from-brand-primary/10 via-brand-accent/5 to-transparent' 
                  : 'from-brand-purple/10 via-brand-primary/5 to-transparent'
              }`}></div>
              
              {/* Studio Images - Same Position, Dynamic Transition */}
              <div className="relative w-full h-full">
                {/* Innovation Lab Image */}
                <div className={`absolute inset-0 transition-all duration-700 transform ${
                  activeStudio === 'innovation' 
                    ? 'opacity-100 scale-100' 
                    : 'opacity-0 scale-105'
                }`}>
                  <img 
                    src="/lovable-uploads/3952bffe-50fc-4c11-a811-0bf718975cbf.png"
                    alt="Innovation Lab - Futuristic Technology Environment"
                    className="w-full h-full object-cover"
                  />
                  {/* Overlay for better text contrast */}
                  <div className="absolute inset-0 bg-gradient-to-t from-background-dark/60 via-transparent to-transparent"></div>
                </div>
                
                {/* Enterprise Studio Image */}
                <div className={`absolute inset-0 transition-all duration-700 transform ${
                  activeStudio === 'enterprise' 
                    ? 'opacity-100 scale-100' 
                    : 'opacity-0 scale-105'
                }`}>
                  <img 
                    src="/lovable-uploads/49fd4939-c61d-43cb-9754-ebf56d833667.png"
                    alt="Enterprise Studio - Command Center Environment"
                    className="w-full h-full object-cover"
                  />
                  {/* Overlay for better text contrast */}
                  <div className="absolute inset-0 bg-gradient-to-t from-background-dark/60 via-transparent to-transparent"></div>
                </div>
              </div>

              {/* Floating Animation Dots */}
              <div className="absolute inset-0 pointer-events-none z-20">
                {[...Array(8)].map((_, i) => (
                  <div
                    key={i}
                    className={`absolute rounded-full opacity-60 animate-float transition-all duration-500 ${
                      activeStudio === 'innovation'
                        ? 'bg-gradient-to-br from-brand-primary to-brand-accent'
                        : 'bg-gradient-to-br from-brand-purple to-brand-primary'
                    }`}
                    style={{
                      width: `${6 + (i % 3) * 3}px`,
                      height: `${6 + (i % 3) * 3}px`,
                      left: `${20 + (i % 4) * 20}%`,
                      top: `${15 + (i % 3) * 25}%`,
                      animationDelay: `${i * 0.3}s`,
                      animationDuration: `${3 + (i % 2)}s`
                    }}
                  ></div>
                ))}
              </div>

              {/* Subtle Hover Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-30"></div>

              {/* Enhanced Feature List - Positioned over image */}
              <div className="absolute bottom-6 right-6 bg-background/90 backdrop-blur-xl rounded-2xl p-6 space-y-4 shadow-2xl border border-glass-border z-40">
                <div className="flex items-center space-x-2 mb-3">
                  <div className={`w-3 h-3 rounded-full animate-pulse ${
                    activeStudio === 'innovation'
                      ? 'bg-gradient-to-br from-brand-primary to-brand-accent'
                      : 'bg-gradient-to-br from-brand-purple to-brand-primary'
                  }`}></div>
                  <span className="text-xs font-bold text-foreground uppercase tracking-wide">
                    {activeStudio === 'innovation' ? 'Innovation Lab' : 'Enterprise Studio'}
                  </span>
                </div>
                {currentStudio.features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3 text-sm font-medium text-foreground font-montserrat">
                    <div className={`w-2 h-2 rounded-full shadow-sm animate-pulse ${
                      activeStudio === 'innovation'
                        ? 'bg-brand-primary'
                        : 'bg-brand-purple'
                    }`}
                    style={{animationDelay: `${index * 0.2}s`}}></div>
                    <span>{feature}</span>
                  </div>
                ))}
              </div>

              {/* Animated Border Effect */}
              <div className={`absolute inset-0 rounded-3xl border-2 opacity-0 group-hover:opacity-100 transition-all duration-500 animate-pulse z-50 ${
                activeStudio === 'innovation'
                  ? 'border-brand-primary/30'
                  : 'border-brand-purple/30'
              }`}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PracticesStudios;