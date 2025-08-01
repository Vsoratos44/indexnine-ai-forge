import React from 'react';
import { Rocket, RefreshCw, TrendingUp, Settings } from 'lucide-react';

const ProductLifecycle = () => {
  const phases = [
    {
      icon: Rocket,
      title: "Launch",
      description: "Rapidly validate ideas and bring MVPs to market with our lean approach to product development.",
      example: "HealthTech startup",
      color: "brand-primary"
    },
    {
      icon: RefreshCw,
      title: "Pivot",
      description: "Quickly adapt to market feedback and evolve your product strategy with data-driven insights.",
      example: "EdTech platform",
      color: "brand-purple"
    },
    {
      icon: TrendingUp,
      title: "Grow",
      description: "Scale your product infrastructure and features to support expanding user bases and use cases.",
      example: "FinTech solution",
      color: "brand-primary"
    },
    {
      icon: Settings,
      title: "Mature",
      description: "Optimize performance, security, and reliability as your product becomes business-critical.",
      example: "Enterprise SaaS",
      color: "brand-purple"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
            From Bold Idea to Market Leader,{' '}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              We Engineer Your Success
            </span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {phases.map((phase, index) => (
            <div 
              key={index}
              className="relative bg-brand-purple-light rounded-2xl p-8 hover:shadow-lg transition-all duration-300 transform hover:scale-105 animate-fade-in group"
              style={{animationDelay: `${index * 0.2}s`}}
            >
              {/* Icon */}
              <div className="bg-white rounded-2xl w-16 h-16 flex items-center justify-center mb-6 shadow-soft group-hover:shadow-glow transition-all duration-300">
                <phase.icon className={`w-8 h-8 text-${phase.color}`} />
              </div>

              {/* Content */}
              <h3 className="text-2xl font-bold text-foreground mb-4">{phase.title}</h3>
              <p className="text-foreground-light mb-6 leading-relaxed">{phase.description}</p>
              
              {/* Client Example */}
              <div className="border-t border-foreground-light/20 pt-4">
                <span className="text-sm font-medium text-brand-primary">Client example: {phase.example}</span>
              </div>

              {/* Connecting lines for desktop */}
              {index < phases.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-brand-primary to-brand-purple opacity-50"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductLifecycle;