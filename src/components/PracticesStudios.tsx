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
    <section className="py-24 lg:py-32 bg-gradient-section relative overflow-hidden">
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
                    : 'bg-white/10 text-foreground hover:bg-white/20'
                }`}
              >
                Innovation Lab
              </button>
              <button
                onClick={() => setActiveStudio('enterprise')}
                className={`px-6 py-3 rounded-2xl font-semibold transition-all duration-300 font-montserrat ${
                  activeStudio === 'enterprise'
                    ? 'bg-brand-purple text-white shadow-glow'
                    : 'bg-white/10 text-foreground hover:bg-white/20'
                }`}
              >
                Enterprise Studio
              </button>
            </div>

            {/* Active Studio Content */}
            <div className="relative min-h-[300px]">
              <div className="absolute -left-2 top-0 bottom-0 w-1 bg-gradient-to-b from-brand-primary to-brand-accent rounded-full"></div>
              <div className="pl-12">
                <h3 className="text-3xl lg:text-4xl font-bold text-foreground mb-6 leading-tight font-montserrat">
                  {currentStudio.title}
                </h3>
                <p className="text-lg lg:text-xl text-foreground-muted mb-8 leading-relaxed font-light font-montserrat">
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

          {/* Right Visual - Enhanced AI Brain */}
          <div className="relative order-1 lg:order-2">
            <div className="bg-gradient-to-br from-background-dark to-background-card-dark rounded-3xl p-8 lg:p-12 overflow-hidden relative shadow-xl border border-border transition-all duration-500">
              {/* Background Glow */}
              <div className={`absolute inset-0 bg-gradient-to-br ${
                activeStudio === 'innovation' 
                  ? 'from-brand-primary/5 to-brand-accent/5' 
                  : 'from-brand-purple/5 to-brand-primary/5'
              } rounded-3xl transition-all duration-500`}></div>
              
              {/* AI Brain Visualization - Enhanced */}
              <div className="relative z-10 flex justify-center items-center h-96">
                <div className="relative">
                  {/* Central Brain Core */}
                  <div className={`w-40 h-32 ${
                    activeStudio === 'innovation'
                      ? 'bg-gradient-to-br from-brand-primary to-brand-accent'
                      : 'bg-gradient-to-br from-brand-purple to-brand-primary'
                  } rounded-full blur-sm opacity-90 animate-pulse shadow-glow transition-all duration-500`}></div>
                  
                  {/* Enhanced Neural Network */}
                  <div className="absolute inset-0">
                    {[...Array(16)].map((_, i) => (
                      <div
                        key={i}
                        className={`absolute ${
                          activeStudio === 'innovation'
                            ? 'bg-gradient-to-r from-brand-primary/60 to-transparent'
                            : 'bg-gradient-to-r from-brand-purple/60 to-transparent'
                        } animate-pulse transition-all duration-500`}
                        style={{
                          width: '2px',
                          height: `${60 + (i % 3) * 20}px`,
                          left: '50%',
                          top: '50%',
                          transform: `rotate(${i * 22.5}deg) translateY(-40px)`,
                          animationDelay: `${i * 0.08}s`,
                          borderRadius: '1px'
                        }}
                      ></div>
                    ))}
                  </div>

                  {/* Floating Data Nodes */}
                  {[...Array(12)].map((_, i) => (
                    <div
                      key={i}
                      className={`absolute ${
                        activeStudio === 'innovation'
                          ? 'bg-gradient-to-br from-brand-primary to-brand-accent'
                          : 'bg-gradient-to-br from-brand-purple to-brand-primary'
                      } rounded-full animate-float shadow-md transition-all duration-500`}
                      style={{
                        width: `${8 + (i % 3) * 4}px`,
                        height: `${8 + (i % 3) * 4}px`,
                        left: `${30 + Math.cos(i * 30 * Math.PI / 180) * 120}px`,
                        top: `${50 + Math.sin(i * 30 * Math.PI / 180) * 80}px`,
                        animationDelay: `${i * 0.15}s`
                      }}
                    ></div>
                  ))}

                  {/* Orbital Rings */}
                  <div className={`absolute inset-0 border-2 ${
                    activeStudio === 'innovation' ? 'border-brand-primary/20' : 'border-brand-purple/20'
                  } rounded-full animate-spin transition-all duration-500`} style={{animationDuration: '20s', width: '200px', height: '160px', left: '50%', top: '50%', transform: 'translate(-50%, -50%)'}}></div>
                  <div className={`absolute inset-0 border ${
                    activeStudio === 'innovation' ? 'border-brand-accent/20' : 'border-brand-primary/20'
                  } rounded-full animate-spin transition-all duration-500`} style={{animationDuration: '15s', animationDirection: 'reverse', width: '240px', height: '190px', left: '50%', top: '50%', transform: 'translate(-50%, -50%)'}}></div>
                </div>
              </div>

              {/* Enhanced Feature List */}
              <div className="absolute bottom-6 right-6 bg-background-card/90 backdrop-blur-md rounded-2xl p-6 space-y-4 shadow-lg border border-border">
                {currentStudio.features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3 text-sm font-medium text-foreground font-montserrat">
                    <div className={`w-3 h-3 ${
                      activeStudio === 'innovation'
                        ? index % 2 === 0 ? 'bg-gradient-to-br from-brand-primary to-brand-accent' : 'bg-gradient-to-br from-brand-accent to-brand-primary'
                        : index % 2 === 0 ? 'bg-gradient-to-br from-brand-purple to-brand-primary' : 'bg-gradient-to-br from-brand-primary to-brand-purple'
                    } rounded-full shadow-sm`}></div>
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PracticesStudios;