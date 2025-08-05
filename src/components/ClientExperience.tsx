import React from 'react';
import { Zap, Eye, Users } from 'lucide-react';

const ClientExperience = () => {
  const experiences = [
    {
      icon: Zap,
      title: "Acceleration",
      description: "We know that time is the most valuable resource to any operation, that's why we focus on delivering excellence fast. Our code libraries and AI-first development dramatically accelerate delivery without sacrificing quality."
    },
    {
      icon: Eye,
      title: "Radical Transparency",  
      description: "We eliminate the \"black box\" fear that plagues offshore engagements. Our process begins with Sprint Zero, our comprehensive discovery and design process that provides you with a technical roadmap, precise budget, and delivery timeline before any long-term commitment is made."
    },
    {
      icon: Users,
      title: "The Founder Mindset",
      description: "We believe in having skin in the game. For select projects, we offer outcome-based engagement models that tie our success directly to yours. We've tackled complex regression testing challenges on a \"success fee\" basis. We can create a customized business model of tiered engagement costs based on delivered results."
    }
  ];

  return (
    <section data-section="client-experience" className="py-24 lg:py-32 bg-gradient-section relative overflow-hidden">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-1/6 w-80 h-80 bg-brand-primary/8 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-1/6 w-96 h-96 bg-brand-purple/6 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-brand-accent/5 rounded-full blur-2xl"></div>
      </div>

      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground-dark mb-6 leading-tight tracking-tight">
            Client Experience: Working with{' '}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Indexnine
            </span>
          </h2>
          <p className="text-lg sm:text-xl lg:text-2xl text-foreground-dark-muted leading-relaxed font-light max-w-4xl mx-auto">
            How we deliver is as important as what we deliver. Our engagement models are built on three pillars to eliminate the disappointingly common frustrations of outsourcing across the industry.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12 max-w-7xl mx-auto">
          {experiences.map((exp, index) => (
            <div 
              key={index} 
              className="relative overflow-hidden backdrop-blur-xl bg-glass-bg border border-glass-border rounded-3xl p-8 lg:p-10 shadow-glass hover:shadow-glass-lg transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 animate-fade-in group"
              style={{animationDelay: `${index * 0.15}s`}}
            >
              {/* Glassmorphism Inner Glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/5 via-transparent to-brand-purple/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Icon Container with Enhanced Glassmorphism */}
              <div className="relative bg-gradient-to-br from-brand-primary/10 via-brand-primary/5 to-brand-purple/10 backdrop-blur-md rounded-2xl w-20 h-20 flex items-center justify-center mb-8 border border-brand-primary/20 shadow-md group-hover:shadow-glow transition-all duration-300 group-hover:scale-110">
                <exp.icon className="w-10 h-10 text-brand-primary group-hover:text-brand-primary-dark transition-colors duration-300" />
              </div>
              
              {/* Content */}
              <h3 className="relative text-2xl lg:text-3xl font-bold text-foreground-dark mb-6 leading-tight font-montserrat">{exp.title}</h3>
              <p className="relative text-foreground-dark-muted leading-relaxed text-lg font-light font-montserrat">{exp.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientExperience;