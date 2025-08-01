import React from 'react';
import { Zap, Eye, Users } from 'lucide-react';

const ClientExperience = () => {
  const experiences = [
    {
      icon: Zap,
      title: "Acceleration & Velocity",
      description: "Welcome to the Future Learning Lab! Here, we explore innovative ideas and technologies that shape our world."
    },
    {
      icon: Eye,
      title: "Radical Transparency",  
      description: "Our Sprint Zero and Customer Experience App ensure complete visibility into progress, challenges, and outcomes throughout the development lifecycle."
    },
    {
      icon: Users,
      title: "A Founder's Mindset",
      description: "We embrace outcome-based models that align our success with yours, creating a true partnership focused on delivering real business impact."
    }
  ];

  return (
    <section className="py-24 lg:py-32 bg-gradient-section relative overflow-hidden">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-1/6 w-80 h-80 bg-brand-primary/8 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-1/6 w-96 h-96 bg-brand-purple/6 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-brand-accent/5 rounded-full blur-2xl"></div>
      </div>

      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight tracking-tight">
            A World-Class{' '}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Client Experience
            </span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12 max-w-7xl mx-auto">
          {experiences.map((exp, index) => (
            <div 
              key={index} 
              className="bg-background-card/90 backdrop-blur-sm rounded-3xl p-8 lg:p-10 shadow-lg border border-border hover:shadow-xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 animate-fade-in group"
              style={{animationDelay: `${index * 0.15}s`}}
            >
              {/* Icon Container */}
              <div className="bg-gradient-stats rounded-2xl w-20 h-20 flex items-center justify-center mb-8 shadow-md group-hover:shadow-glow transition-all duration-300 group-hover:scale-110">
                <exp.icon className="w-10 h-10 text-brand-primary" />
              </div>
              
              {/* Content */}
              <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-6 leading-tight">{exp.title}</h3>
              <p className="text-foreground-muted leading-relaxed text-lg font-light">{exp.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientExperience;