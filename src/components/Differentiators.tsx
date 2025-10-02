import React from "react";
import { Shield, Code, Sparkles } from "lucide-react";
import styles from "../assets/css/stylesheet.module.css";

const Differentiators = () => {
  const differentiators = [
    {
      icon: Shield,
      title: "PE-Backed Stability & Security",
      description:
        "We're a private-equity backed software company, a crucial differentiator that establishes long-term vision with the stability to make strategic investments in our own excellence. We've heavily invested in robust support functions and a dedicated studios model.",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      icon: Code,
      title: "Full Stack Product Engineers",
      description:
        "Great people and curated talent rise to the top. That's why we're obsessed with cultivating \"3X Engineers\". An IndexNine engineer possesses a deep and diverse technical skillset, a true product mindset that empowers them to question, investigate, and innovate, along with the confidence to contribute ideas and communicate with clients as a peer and teammate.",
      gradient: "from-purple-500 to-pink-500",
    },
    {
      icon: Sparkles,
      title: "AI-Forward Innovation",
      description:
        "We are an AI-first company inside and out. This isn't just about offering AI consultation; it's about embedding AI innovation in the fabric of our operations. We use AI to accelerate and optimize our delivery.",
      gradient: "from-violet-500 to-purple-500",
    },
  ];

  return (
    <section
      data-section="differentiators"
      className={`py-24 lg:py-32 relative overflow-hidden ${styles.pageDarkBg}`}
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
            <span className="text-white">How We Win Together.</span>
          </h2>
          <p className="text-lg sm:text-xl lg:text-2xl text-foreground-light-muted leading-relaxed font-light max-w-4xl mx-auto">
            Our Secret Sauce
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-4 lg:gap-6 max-w-8xl mx-auto">
          {differentiators.map((diff, index) => (
            <div
              key={index}
              className="relative overflow-hidden  border border-[#ffffff39] rounded-2xl p-8 lg:p-10 hover:border-brand-primary/30 transition-all duration-500 transform hover:scale-102 hover:-translate-y-2 animate-fade-in group bg-white-600 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-20 "
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              {/* Enhanced Glassmorphism Glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/8 via-transparent to-brand-purple/8 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              {/* Frosted Glass Overlay */}
              <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-white/10 rounded-2xl opacity-50"></div>

              {/* Icon Container with Enhanced Glass Effect */}
              <div
                className={`relative w-20 h-20 flex items-center justify-center mb-8 ${styles.icnBg}`}
              >
                <diff.icon className="w-8 h-8 text-white  transition-colors duration-300" />
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
