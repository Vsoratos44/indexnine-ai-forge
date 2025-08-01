import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Lightbulb, Rocket, Zap, Target, Brain, Atom } from 'lucide-react';

const InnovationLab = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-24 bg-gradient-hero relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/6 w-96 h-96 bg-brand-primary/8 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-1/4 right-1/6 w-80 h-80 bg-brand-purple/6 rounded-full blur-3xl animate-float" style={{animationDelay: '2s'}}></div>
        </div>
        
        <div className="container mx-auto px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground-white mb-8 leading-tight font-montserrat">
              Innovation <span className="bg-gradient-primary bg-clip-text text-transparent">Lab</span>
            </h1>
            <p className="text-xl text-foreground-white/80 mb-12 leading-relaxed font-montserrat">
              Accelerate startup growth with rapid prototyping, MVP development, and innovative technology solutions designed for speed and agility.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="xl">Start Innovation</Button>
              <Button variant="hero-secondary" size="xl">Explore Startup Success</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Innovation Features */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold text-foreground mb-6 font-montserrat">Innovation Lab Services</h2>
            <p className="text-xl text-foreground-muted max-w-3xl mx-auto font-montserrat">
              Specialized for startups and innovative companies looking to move fast and break new ground.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: Lightbulb, title: "Rapid Prototyping", description: "Quick proof-of-concepts and prototypes to validate ideas and secure funding." },
              { icon: Rocket, title: "MVP Development", description: "Fast-track development of minimum viable products to reach market quickly." },
              { icon: Zap, title: "Agile Methodology", description: "Flexible, iterative development process optimized for startup speed." },
              { icon: Target, title: "Market Validation", description: "Technology solutions designed to test and validate market hypotheses." },
              { icon: Brain, title: "AI Innovation", description: "Cutting-edge AI and ML solutions to create competitive advantages." },
              { icon: Atom, title: "Emerging Tech", description: "Exploration and implementation of emerging technologies and frameworks." }
            ].map((service, index) => (
              <div key={index} className="relative bg-gradient-card backdrop-blur-xl rounded-3xl p-8 shadow-glass-lg border border-glass-border hover:shadow-glow transition-all duration-500 transform hover:scale-105">
                <div className="bg-gradient-to-br from-brand-primary to-brand-accent rounded-2xl w-16 h-16 flex items-center justify-center mb-6">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4 font-montserrat">{service.title}</h3>
                <p className="text-foreground-muted leading-relaxed font-montserrat">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-hero">
        <div className="container mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-foreground-white mb-8 font-montserrat">
            Ready to Accelerate Your Innovation?
          </h2>
          <p className="text-xl text-foreground-white/80 mb-12 max-w-2xl mx-auto font-montserrat">
            Join our Innovation Lab and transform your breakthrough ideas into market-ready solutions.
          </p>
          <Button variant="hero" size="xl">Join Innovation Lab</Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default InnovationLab;