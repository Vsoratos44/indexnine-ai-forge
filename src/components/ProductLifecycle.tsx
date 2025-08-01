import React from 'react';
import { Rocket, BarChart3, TrendingUp, Settings } from 'lucide-react';

const ProductLifecycle = () => {
  const phases = [
    {
      icon: Rocket,
      title: "Launch",
      description: "Rapidly validate ideas and bring MVPs to market with our lean approach to product development.",
      example: "HealthTech startup"
    },
    {
      icon: BarChart3,
      title: "Pivot",
      description: "Quickly adapt to market feedback and evolve your product strategy with data-driven insights.",
      example: "EdTech platform"
    },
    {
      icon: TrendingUp,
      title: "Grow",
      description: "Scale your product infrastructure and features to support expanding user bases and use cases.",
      example: "FinTech solution"
    },
    {
      icon: Settings,
      title: "Mature",
      description: "Optimize performance, security, and reliability as your product becomes business-critical.",
      example: "Enterprise SaaS"
    }
  ];

  return (
    <section className="py-24 lg:py-32 bg-gradient-section relative overflow-hidden">
      {/* Background blur elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-1/6 w-80 h-80 bg-brand-primary/8 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-1/6 w-96 h-96 bg-brand-purple/6 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-brand-accent/5 rounded-full blur-2xl"></div>
      </div>

      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 lg:mb-20">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight tracking-tight font-montserrat">
            From Bold Idea to Market Leader,{' '}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              We Engineer Your Success
            </span>
          </h2>
        </div>

        {/* 2x2 Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto">
          {phases.map((phase, index) => (
            <div 
              key={index}
              className="relative overflow-hidden backdrop-blur-xl bg-white/5 border border-white/20 rounded-3xl p-8 lg:p-10 shadow-glass hover:shadow-glass-lg transition-all duration-500 hover:scale-105 animate-fade-in group"
              style={{animationDelay: `${index * 0.15}s`}}
            >
              {/* Inner glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/3 via-transparent to-brand-purple/3 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative z-10 flex items-start space-x-6">
                {/* Icon Container */}
                <div className="flex-shrink-0 bg-gradient-to-br from-brand-primary/10 via-brand-primary/5 to-brand-purple/10 backdrop-blur-md rounded-2xl w-16 h-16 lg:w-20 lg:h-20 flex items-center justify-center border border-brand-primary/20 shadow-md group-hover:shadow-glow transition-all duration-300 group-hover:scale-110">
                  <phase.icon className="w-8 h-8 lg:w-10 lg:h-10 text-brand-primary group-hover:text-brand-primary-dark transition-colors duration-300" />
                </div>

                {/* Content */}
                <div className="flex-1">
                  <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-4 leading-tight font-montserrat">{phase.title}</h3>
                  <p className="text-foreground-muted leading-relaxed text-base lg:text-lg font-light font-montserrat mb-6">{phase.description}</p>
                  
                  {/* Client Example */}
                  <span className="text-sm font-semibold text-brand-primary font-montserrat">
                    Client example: {phase.example}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductLifecycle;