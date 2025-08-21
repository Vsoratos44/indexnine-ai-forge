import React from "react";
import { Shield, Code, Sparkles } from "lucide-react";
import styles from "../../assets/css/stylesheet.module.css";

const Differentiators = () => {
  const differentiators = [
    {
      icon: Shield,
      title: "A Foundation of Stability",
      description:
        "As a private-equity-backed firm, we have the stability and long-term vision to invest in excellence. This foundation allows us to build dedicated studios and robust support functions that serve you for the entire journey.",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      icon: Code,
      title: "Elite Navigators",
      description:
        "We are obsessed with cultivating \"3X Engineers\"—talent that can see the whole map. An IndexNine engineer combines deep technical skill with a product mindset, empowering them to innovate, investigate, and communicate as a true strategic partner.",
      gradient: "from-purple-500 to-pink-500",
    },
    {
      icon: Sparkles,
      title: "An AI-Powered Map",
      description:
        "We are an AI-first company, inside and out. We don't just offer AI as a service; we embed it in our own operations, using it as a tool to accelerate delivery, optimize our path, and build you a smarter solution.",
      gradient: "from-violet-500 to-purple-500",
    },
  ];

  return (
    <section
      data-section="differentiators"
      className={`py-24 lg:py-32 relative overflow-hidden ${styles.sectionBg}`}
    >
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-[28rem] h-[28rem] bg-brand-purple/15 rounded-full blur-3xl animate-float opacity-60"></div>
        <div
          className="absolute bottom-1/4 right-1/4 w-[32rem] h-[32rem] bg-brand-primary/12 rounded-full blur-3xl animate-float opacity-70"
          style={{ animationDelay: "1.5s" }}
        ></div>
        <div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[20rem] h-[20rem] bg-brand-accent/8 rounded-full blur-2xl animate-float"
          style={{ animationDelay: "3s" }}
        ></div>

        {/* Animated Grid Pattern */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `radial-gradient(circle at 50% 50%, hsl(239 84% 67%) 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        ></div>
      </div>

      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-foreground-dark mb-8 leading-tight tracking-tight">
            The IndexNine Compass.
          </h2>
          <p className="text-lg sm:text-xl lg:text-2xl text-foreground-light-muted leading-relaxed font-light max-w-4xl mx-auto">
            What makes us the right guide for your ambition? It's the principles and assets that orient everything we do.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-4 lg:gap-8 max-w-8xl mx-auto">
          {differentiators.map((diff, index) => (
            <div
              key={index}
              className="relative overflow-hidden bg-gradient-card-light border border-[#ffffff39] rounded-2xl p-8 lg:p-10 hover:border-brand-primary/30 transition-all duration-500 transform hover:scale-102 hover:-translate-y-2 animate-fade-in group "
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              {/* Enhanced Glassmorphism Glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/8 via-transparent to-brand-purple/8 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              {/* Frosted Glass Overlay */}
              <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-white/10 rounded-2xl opacity-50"></div>

              {/* Icon Container with Enhanced Glass Effect */}
              <div className="relative bg-gradient-to-br from-brand-primary/20 via-brand-primary/10 to-brand-purple/20 backdrop-blur-md rounded-2xl w-20 h-20 flex items-center justify-center mb-8 border border-brand-primary/30 group-hover:shadow-glow transition-all duration-300 group-hover:scale-110">
                <diff.icon className="w-10 h-10 text-brand-primary group-hover:text-brand-primary-dark transition-colors duration-300" />
              </div>

              {/* Content */}
              <h3 className="relative text-2xl lg:text-3xl font-semibold text-foreground-light mb-6 leading-tight font-montserrat">
                {diff.title}
              </h3>
              <p className="relative text-foreground-light-muted leading-relaxed text-lg font-light font-montserrat">
                {diff.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Differentiators;