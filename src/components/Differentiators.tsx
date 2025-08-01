import React from 'react';
import { Shield, Code, Sparkles } from 'lucide-react';

const Differentiators = () => {
  const differentiators = [
    {
      icon: Shield,
      title: "PE-Backed Stability & Security",
      description: "Backed by leading private equity investors, we provide the financial stability and security that ensures long-term partnership reliability.",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: Code,
      title: "Full Stack Product Engineers",
      description: "Our engineers aren't just coders – they're product thinkers who understand business goals and can translate it into technical solutions.",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      icon: Sparkles,
      title: "AI Forward Innovation",
      description: "We integrate AI capabilities into every solution we build, ensuring your products are future-proof and leverage the latest advancements.",
      gradient: "from-violet-500 to-purple-500"
    }
  ];

  return (
    <section className="py-24 lg:py-32 bg-background-section relative overflow-hidden">
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-[28rem] h-[28rem] bg-brand-purple/15 rounded-full blur-3xl animate-float opacity-60"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[32rem] h-[32rem] bg-brand-primary/12 rounded-full blur-3xl animate-float opacity-70" style={{animationDelay: '1.5s'}}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[20rem] h-[20rem] bg-brand-accent/8 rounded-full blur-2xl animate-float" style={{animationDelay: '3s'}}></div>
        
        {/* Animated Grid Pattern */}
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: `radial-gradient(circle at 50% 50%, hsl(239 84% 67%) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }}></div>
      </div>

      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground-white mb-8 leading-tight tracking-tight">
            It's Not Just What We Do. It's How
          </h2>
          <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              We Win Together
            </span>
          </h3>
        </div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12 max-w-7xl mx-auto">
          {differentiators.map((diff, index) => (
            <div 
              key={index}
              className="relative overflow-hidden backdrop-blur-xl bg-glass-bg-dark border border-glass-border rounded-3xl p-8 lg:p-10 hover:border-brand-primary/30 transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 animate-fade-in group shadow-glass-lg"
              style={{animationDelay: `${index * 0.15}s`}}
            >
              {/* Enhanced Glassmorphism Glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/8 via-transparent to-brand-purple/8 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Frosted Glass Overlay */}
              <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-white/10 rounded-3xl opacity-50"></div>
              
              {/* Icon Container with Enhanced Glass Effect */}
              <div className="relative bg-gradient-to-br from-brand-primary/20 via-brand-primary/10 to-brand-purple/20 backdrop-blur-md rounded-2xl w-20 h-20 flex items-center justify-center mb-8 border border-brand-primary/30 group-hover:shadow-glow transition-all duration-300 group-hover:scale-110">
                <diff.icon className="w-10 h-10 text-brand-primary group-hover:text-white transition-colors duration-300" />
              </div>

              {/* Content */}
              <h3 className="relative text-2xl lg:text-3xl font-bold text-foreground-white mb-6 leading-tight font-montserrat">{diff.title}</h3>
              <p className="relative text-foreground-white/85 leading-relaxed text-lg font-light font-montserrat">{diff.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Differentiators;