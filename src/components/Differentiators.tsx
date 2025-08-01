import React from 'react';
import { Shield, Code, Sparkles } from 'lucide-react';

const Differentiators = () => {
  const differentiators = [
    {
      icon: Shield,
      title: "PE-Backed Stability & Security",
      description: "Backed by leading private equity investors, we provide the financial stability and security that ensures long-term partnership reliability."
    },
    {
      icon: Code,
      title: "Full Stack Product Engineers",
      description: "Our engineers aren't just coders – they're product thinkers who understand business goals and can translate it into technical solutions."
    },
    {
      icon: Sparkles,
      title: "AI Forward Innovation",
      description: "We integrate AI capabilities into every solution we build, ensuring your products are future-proof and leverage the latest advancements."
    }
  ];

  return (
    <section className="py-20 bg-gradient-hero relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-purple/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-brand-primary/10 rounded-full blur-3xl animate-float" style={{animationDelay: '1.5s'}}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground-white mb-6 leading-tight">
            It's Not Just What We Do. It's How{' '}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              We Win Together
            </span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {differentiators.map((diff, index) => (
            <div 
              key={index}
              className="bg-gradient-card rounded-2xl p-8 border border-white/10 hover:border-brand-primary/50 transition-all duration-300 transform hover:scale-105 animate-fade-in group"
              style={{animationDelay: `${index * 0.2}s`}}
            >
              {/* Icon */}
              <div className="bg-brand-primary/20 rounded-2xl w-16 h-16 flex items-center justify-center mb-6 group-hover:bg-brand-primary/30 transition-all duration-300">
                <diff.icon className="w-8 h-8 text-brand-primary" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-foreground-white mb-4">{diff.title}</h3>
              <p className="text-foreground-white/80 leading-relaxed">{diff.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Differentiators;