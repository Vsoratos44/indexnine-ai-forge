import React from 'react';
import { Zap, Eye, Users } from 'lucide-react';

const ClientExperience = () => {
  const experiences = [
    {
      icon: Zap,
      title: "🚀 Acceleration & Velocity",
      description: "Our snap.mvp reusable code libraries and AI-powered workflows deliver with industry-leading velocity. We turn complex ideas into tangible progress in days, not months."
    },
    {
      icon: Eye,
      title: "🔍 Radical Transparency",  
      description: "Our Sprint Zero framework gives you a clear roadmap and budget before you commit. Our proprietary Customer Experience App provides an unparalleled, real-time view into project health, team performance, and delivery metrics—eliminating the 'black box' of outsourcing."
    },
    {
      icon: Users,
      title: "🤝 A Founder's Mindset",
      description: "We succeed when you succeed. We put 'skin in the game' with outcome-based and success-fee models, ensuring our goals are perfectly aligned with your business outcomes."
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
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground-dark mb-6 leading-tight tracking-tight">
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