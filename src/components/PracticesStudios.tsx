import React from 'react';
import { Button } from '@/components/ui/button';

const PracticesStudios = () => {
  return (
    <section className="py-20 bg-background-section">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-12">
            {/* Innovation Lab */}
            <div className="border-l-4 border-brand-primary pl-8">
              <h3 className="text-3xl font-bold text-foreground mb-6">The Innovation Lab</h3>
              <p className="text-lg text-foreground-light mb-8 leading-relaxed">
                Our specialized team for rapid prototyping, emerging technologies, and disruptive solutions. 
                Perfect for startups and innovation initiatives within larger organizations.
              </p>
              <Button variant="outline" size="lg">
                Explore Innovation lab
              </Button>
            </div>

            {/* Enterprise Studio */}
            <div className="border-l-4 border-brand-purple pl-8">
              <h3 className="text-3xl font-bold text-foreground mb-6">The Enterprise Studio</h3>
              <p className="text-lg text-foreground-light mb-8 leading-relaxed">
                Enterprise-grade solutions with focus on scalability, security, and integration. 
                Built for organizations requiring mission-critical software systems.
              </p>
              <Button variant="hero" size="lg">
                Book a consultation
              </Button>
            </div>
          </div>

          {/* Right Visual */}
          <div className="relative">
            <div className="bg-gradient-card rounded-3xl p-8 overflow-hidden relative">
              {/* AI Brain Visualization */}
              <div className="relative z-10 flex justify-center items-center h-80">
                <div className="relative">
                  {/* Central Brain */}
                  <div className="w-32 h-24 bg-gradient-primary rounded-full blur-sm opacity-80 animate-pulse"></div>
                  
                  {/* Neural Network Lines */}
                  <div className="absolute inset-0">
                    {[...Array(12)].map((_, i) => (
                      <div
                        key={i}
                        className="absolute w-px bg-brand-primary/40 animate-pulse"
                        style={{
                          height: '60px',
                          left: '50%',
                          top: '50%',
                          transform: `rotate(${i * 30}deg) translateY(-30px)`,
                          animationDelay: `${i * 0.1}s`
                        }}
                      ></div>
                    ))}
                  </div>

                  {/* Floating Nodes */}
                  {[...Array(8)].map((_, i) => (
                    <div
                      key={i}
                      className="absolute w-3 h-3 bg-brand-primary rounded-full animate-float"
                      style={{
                        left: `${20 + Math.cos(i * 45 * Math.PI / 180) * 100}px`,
                        top: `${40 + Math.sin(i * 45 * Math.PI / 180) * 60}px`,
                        animationDelay: `${i * 0.2}s`
                      }}
                    ></div>
                  ))}
                </div>
              </div>

              {/* Feature List */}
              <div className="absolute bottom-6 right-6 bg-white/10 backdrop-blur-sm rounded-xl p-4 space-y-2">
                <div className="flex items-center space-x-2 text-sm text-foreground-white">
                  <div className="w-2 h-2 bg-brand-primary rounded-full"></div>
                  <span>Rapid MVP development</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-foreground-white">
                  <div className="w-2 h-2 bg-brand-purple rounded-full"></div>
                  <span>AI/ML integration</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-foreground-white">
                  <div className="w-2 h-2 bg-brand-primary rounded-full"></div>
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