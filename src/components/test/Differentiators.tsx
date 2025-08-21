import React from "react";
import { ShieldLuminous, CodeLuminous, SparklesLuminous } from "../icons/LuminousIcons";
import styles from "../../assets/css/stylesheet.module.css";

const Differentiators = () => {
  const differentiators = [
    {
      Icon: ShieldLuminous,
      title: "A Foundation of Stability",
      description:
        "As a private-equity-backed firm, we have the stability and long-term vision to invest in excellence. This foundation allows us to build dedicated studios and robust support functions that serve you for the entire journey.",
      glowColor: "hsl(262 83% 58%)",
    },
    {
      Icon: CodeLuminous,
      title: "Elite Navigators",
      description:
        "We are obsessed with cultivating \"3X Engineers\"—talent that can see the whole map. An IndexNine engineer combines deep technical skill with a product mindset, empowering them to innovate, investigate, and communicate as a true strategic partner.",
      glowColor: "hsl(180 100% 60%)",
    },
    {
      Icon: SparklesLuminous,
      title: "An AI-Powered Map",
      description:
        "We are an AI-first company, inside and out. We don't just offer AI as a service; we embed it in our own operations, using it as a tool to accelerate delivery, optimize our path, and build you a smarter solution.",
      glowColor: "hsl(127 100% 50%)",
    },
  ];

  return (
    <section
      data-section="differentiators"
      className={`py-24 lg:py-32 relative overflow-hidden ${styles.sectionBg} noise-overlay`}
    >
      {/* Enhanced Atmospheric Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-[32rem] h-[32rem] bg-brand-purple/12 rounded-full blur-3xl animate-luminous-drift opacity-70"></div>
        <div
          className="absolute bottom-1/4 right-1/4 w-[36rem] h-[36rem] bg-brand-primary/10 rounded-full blur-3xl animate-luminous-drift opacity-80"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[24rem] h-[24rem] bg-brand-cyan/6 rounded-full blur-2xl animate-luminous-drift"
          style={{ animationDelay: "4s" }}
        ></div>

        {/* Enhanced Grid Pattern */}
        <div
          className="absolute inset-0 opacity-8"
          style={{
            backgroundImage: `radial-gradient(circle at 50% 50%, hsl(262 83% 58%) 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        ></div>
      </div>

      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <h2 className="heading-h2 text-foreground-dark mb-8 leading-tight animate-fade-in">
            The IndexNine <span className="text-highlight">Compass</span>.
          </h2>
          <p className="text-lg sm:text-xl lg:text-2xl text-foreground-dark-muted leading-relaxed font-light max-w-4xl mx-auto animate-slide-up">
            What makes us the right guide for your ambition? It's the <span className="text-luminous">principles and assets</span> that orient everything we do.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-10 max-w-7xl mx-auto">
          {differentiators.map((diff, index) => (
            <div
              key={index}
              className="relative overflow-hidden glass-card-light glass-hover rounded-3xl p-8 lg:p-12 animate-slide-up-stagger group noise-overlay"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Enhanced Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/6 via-transparent to-brand-cyan/6 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

              {/* Luminous Icon Container */}
              <div className="relative flex justify-center mb-10">
                <div className="glass-card w-24 h-24 flex items-center justify-center rounded-2xl group-hover:animate-glow-pulse">
                  <diff.Icon className="w-16 h-16" glowColor={diff.glowColor} />
                </div>
              </div>

              {/* Content */}
              <h3 className="heading-h3 text-center text-foreground-dark mb-6 leading-tight group-hover:text-luminous transition-colors duration-500">
                {diff.title}
              </h3>
              <p className="text-foreground-dark-muted leading-relaxed text-center font-light">
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