import React from 'react';
import { Button } from '@/components/ui/button';

const PracticesStudios = () => {
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
            {/* Innovation Lab */}
            <div className="relative">
              <div className="absolute -left-2 top-0 bottom-0 w-1 bg-gradient-to-b from-brand-primary to-brand-accent rounded-full"></div>
              <div className="pl-12">
                <h3 className="text-3xl lg:text-4xl font-bold text-foreground mb-6 leading-tight">The Innovation Lab</h3>
                <p className="text-lg lg:text-xl text-foreground-muted mb-8 leading-relaxed font-light">
                  Our specialized team for rapid prototyping, emerging technologies, and disruptive solutions. 
                  Perfect for startups and innovation initiatives within larger organizations.
                </p>
                <Button variant="outline" size="lg" className="border-2 border-brand-primary text-brand-primary hover:bg-brand-primary hover:text-white">
                  Explore Innovation lab
                </Button>
              </div>
            </div>

            {/* Enterprise Studio */}
            <div className="relative">
              <div className="absolute -left-2 top-0 bottom-0 w-1 bg-gradient-to-b from-brand-purple to-brand-primary rounded-full"></div>
              <div className="pl-12">
                <h3 className="text-3xl lg:text-4xl font-bold text-foreground mb-6 leading-tight">The Enterprise Studio</h3>
                <p className="text-lg lg:text-xl text-foreground-muted mb-8 leading-relaxed font-light">
                  Enterprise-grade solutions with focus on scalability, security, and integration. 
                  Built for organizations requiring mission-critical software systems.
                </p>
                <Button variant="hero" size="lg">
                  Book a consultation
                </Button>
              </div>
            </div>
          </div>

          {/* Right Visual - Enhanced AI Brain */}
          <div className="relative order-1 lg:order-2">
            <div className="bg-gradient-to-br from-background-dark to-background-card-dark rounded-3xl p-8 lg:p-12 overflow-hidden relative shadow-xl border border-border">
              {/* Background Glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/5 to-brand-purple/5 rounded-3xl"></div>
              
              {/* AI Brain Visualization - Enhanced */}
              <div className="relative z-10 flex justify-center items-center h-96">
                <div className="relative">
                  {/* Central Brain Core */}
                  <div className="w-40 h-32 bg-gradient-to-br from-brand-primary to-brand-purple rounded-full blur-sm opacity-90 animate-pulse shadow-glow"></div>
                  
                  {/* Enhanced Neural Network */}
                  <div className="absolute inset-0">
                    {[...Array(16)].map((_, i) => (
                      <div
                        key={i}
                        className="absolute bg-gradient-to-r from-brand-primary/60 to-transparent animate-pulse"
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
                      className="absolute bg-gradient-to-br from-brand-primary to-brand-accent rounded-full animate-float shadow-md"
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
                  <div className="absolute inset-0 border-2 border-brand-primary/20 rounded-full animate-spin" style={{animationDuration: '20s', width: '200px', height: '160px', left: '50%', top: '50%', transform: 'translate(-50%, -50%)'}}></div>
                  <div className="absolute inset-0 border border-brand-purple/20 rounded-full animate-spin" style={{animationDuration: '15s', animationDirection: 'reverse', width: '240px', height: '190px', left: '50%', top: '50%', transform: 'translate(-50%, -50%)'}}></div>
                </div>
              </div>

              {/* Enhanced Feature List */}
              <div className="absolute bottom-6 right-6 bg-background-card/90 backdrop-blur-md rounded-2xl p-6 space-y-4 shadow-lg border border-border">
                <div className="flex items-center space-x-3 text-sm font-medium text-foreground">
                  <div className="w-3 h-3 bg-gradient-to-br from-brand-primary to-brand-accent rounded-full shadow-sm"></div>
                  <span>Rapid MVP development</span>
                </div>
                <div className="flex items-center space-x-3 text-sm font-medium text-foreground">
                  <div className="w-3 h-3 bg-gradient-to-br from-brand-purple to-brand-primary rounded-full shadow-sm"></div>
                  <span>AI/ML integration</span>
                </div>
                <div className="flex items-center space-x-3 text-sm font-medium text-foreground">
                  <div className="w-3 h-3 bg-gradient-to-br from-brand-accent to-brand-purple rounded-full shadow-sm"></div>
                  <span>Emerging tech exploration</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PracticesStudios;