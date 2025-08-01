import React from 'react';
import { Rocket, RefreshCw, TrendingUp, Settings } from 'lucide-react';

const ProductLifecycle = () => {
  const phases = [
    {
      icon: Rocket,
      title: "Launch",
      description: "Rapidly validate ideas and bring MVPs to market with our lean approach to product development.",
      example: "HealthTech startup",
      gradientFrom: "from-brand-primary",
      gradientTo: "to-brand-accent"
    },
    {
      icon: RefreshCw,
      title: "Pivot",
      description: "Quickly adapt to market feedback and evolve your product strategy with data-driven insights.",
      example: "EdTech platform",
      gradientFrom: "from-brand-purple",
      gradientTo: "to-brand-primary"
    },
    {
      icon: TrendingUp,
      title: "Grow",
      description: "Scale your product infrastructure and features to support expanding user bases and use cases.",
      example: "FinTech solution",
      gradientFrom: "from-brand-accent",
      gradientTo: "to-brand-purple"
    },
    {
      icon: Settings,
      title: "Mature",
      description: "Optimize performance, security, and reliability as your product becomes business-critical.",
      example: "Enterprise SaaS",
      gradientFrom: "from-brand-primary",
      gradientTo: "to-brand-purple"
    }
  ];

  return (
    <section className="py-24 lg:py-32 bg-background relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-10 w-72 h-72 bg-brand-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-10 w-80 h-80 bg-brand-purple/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-8 leading-tight tracking-tight">
            From Bold Idea to Market Leader,
          </h2>
          <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              We Engineer Your Success
            </span>
          </h3>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10 max-w-8xl mx-auto">
          {phases.map((phase, index) => (
            <div 
              key={index}
              className="relative bg-gradient-card rounded-3xl p-8 lg:p-10 shadow-lg border border-border hover:shadow-xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 animate-fade-in group"
              style={{animationDelay: `${index * 0.1}s`}}
            >
              {/* Icon Container */}
              <div className={`bg-gradient-to-br ${phase.gradientFrom} ${phase.gradientTo} rounded-2xl w-20 h-20 flex items-center justify-center mb-8 shadow-md group-hover:shadow-glow transition-all duration-300 group-hover:scale-110`}>
                <phase.icon className="w-10 h-10 text-white" />
              </div>

              {/* Content */}
              <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-6 leading-tight">{phase.title}</h3>
              <p className="text-foreground-muted mb-8 leading-relaxed text-lg font-light">{phase.description}</p>
              
              {/* Client Example */}
              <div className="border-t border-border pt-6">
                <span className="text-sm font-semibold text-brand-primary bg-brand-primary/10 px-3 py-2 rounded-full">
                  Client example: {phase.example}
                </span>
              </div>

              {/* Connecting Arrow for Desktop */}
              {index < phases.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-5 transform -translate-y-1/2">
                  <div className="w-10 h-0.5 bg-gradient-to-r from-brand-primary to-brand-purple opacity-40"></div>
                  <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-0 h-0 border-l-4 border-l-brand-purple border-t-2 border-b-2 border-t-transparent border-b-transparent opacity-40"></div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductLifecycle;