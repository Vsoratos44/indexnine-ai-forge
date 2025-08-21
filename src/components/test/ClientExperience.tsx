import React from "react";
import { RocketLuminous, SearchLuminous, HandshakeLuminous } from "../icons/LuminousIcons";
import AnimatedPath from "../effects/AnimatedPath";
import styles from "../../assets/css/stylesheet.module.css";

const ClientExperience = () => {
  const experiences = [
    {
      Icon: RocketLuminous,
      title: "Acceleration",
      description:
        "We know time is the most valuable resource on any journey. We focus on delivering excellence, fast. Our code libraries and AI-first development methodologies create immediate and sustained momentum, accelerating your path to market without sacrificing quality.",
    },
    {
      Icon: SearchLuminous, 
      title: "Clarity",
      description:
        "We eliminate the \"black box\" from development by providing the map before the journey begins. Our Sprint Zero process delivers a comprehensive technical roadmap, precise budget, and delivery timeline, giving you total clarity before any long-term commitment.",
    },
    {
      Icon: HandshakeLuminous,
      title: "The Founder's Mindset",
      description:
        "We believe the best guides have skin in the game. For select projects, we offer outcome-based models that tie our success directly to yours. Your business outcomes are our primary objective, ensuring we reach the summit together.",
    },
  ];

  return (
    <section
      data-section="client-experience"
      className={`relative overflow-hidden ${styles["client-experience"]} noise-overlay`}
    >
      {/* Enhanced Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/6 w-96 h-96 bg-brand-primary/8 rounded-full blur-3xl animate-luminous-drift"></div>
        <div className="absolute bottom-1/4 right-1/6 w-80 h-80 bg-brand-cyan/6 rounded-full blur-3xl animate-luminous-drift" style={{ animationDelay: "2s" }}></div>
        <AnimatedPath className="opacity-20" pathData="M 100 300 Q 400 150 700 300 Q 1000 450 1300 300" />
      </div>

      <div className={`container mx-auto px-6 lg:px-8 relative z-10 py-24 lg:py-32 ${styles["globe"]}`}>
        <div className="text-center mb-20">
          <h2 className="heading-h2 text-foreground-dark mb-6 animate-fade-in">
            Your Journey, Guided by Our <span className="text-highlight-on-light">Principles</span>.
          </h2>
          <p className="text-lg sm:text-xl text-foreground-dark-muted leading-relaxed font-light max-w-4xl mx-auto animate-slide-up">
            How we navigate to the destination is as critical as where we're going. Our entire engagement models are built on three pillars designed to eliminate uncertainty and clear the fog that plagues typical development projects.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {experiences.map((experience, index) => (
            <div key={index} className="relative glass-card-light glass-hover rounded-3xl p-8 lg:p-10 animate-slide-up-stagger group noise-overlay" style={{ animationDelay: `${index * 0.2}s` }}>
              <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/5 via-transparent to-brand-cyan/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              
              <div className="relative flex justify-center mb-8">
                <div className="w-24 h-24 flex items-center justify-center glass-card rounded-2xl group-hover:animate-glow-pulse">
                  <experience.Icon className="w-16 h-16" glowColor={index === 0 ? "hsl(262 83% 58%)" : index === 1 ? "hsl(180 100% 60%)" : "hsl(127 100% 50%)"} />
                </div>
              </div>

              <h3 className="heading-h3 text-center text-highlight-on-light mb-6 group-hover:text-luminous-on-light transition-colors duration-500">
                {experience.title}
              </h3>
              <p className="text-foreground-dark-muted leading-relaxed text-center font-light">
                {experience.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientExperience;