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
    <section className="py-20 bg-gradient-section relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-1/4 w-32 h-32 bg-brand-primary rounded-full blur-2xl"></div>
        <div className="absolute bottom-10 right-1/4 w-40 h-40 bg-brand-purple rounded-full blur-2xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            A World-Class{' '}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Client Experience
            </span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {experiences.map((exp, index) => (
            <div 
              key={index} 
              className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 shadow-soft hover:shadow-lg transition-all duration-300 transform hover:scale-105 animate-fade-in"
              style={{animationDelay: `${index * 0.2}s`}}
            >
              <div className="bg-brand-purple-light rounded-2xl w-16 h-16 flex items-center justify-center mb-6">
                <exp.icon className="w-8 h-8 text-brand-primary" />
              </div>
              
              <h3 className="text-xl font-bold text-foreground mb-4">{exp.title}</h3>
              <p className="text-foreground-light leading-relaxed">{exp.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientExperience;