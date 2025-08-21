import React from "react";
import styles from "../../assets/css/stylesheet.module.css";
import VelocityIcon from "../../assets/images/accel-velocity.svg";
import RadialIcon from "../../assets/images/radical-transpncy.svg";
import MindsetIcon from "../../assets/images/founder-mindset.svg";

const ClientExperience = () => {
  const experiences = [
    {
      icon: <img src={VelocityIcon} alt="Rocket Ship" className="w-20 h-20" />,
      title: "Acceleration",
      description:
        "We know time is the most valuable resource on any journey. We focus on delivering excellence, fast. Our code libraries and AI-first development methodologies create immediate and sustained momentum, accelerating your path to market without sacrificing quality.",
    },
    {
      icon: (
        <img
          src={RadialIcon}
          alt="Magnifying Glass"
          className="w-20 h-20"
        />
      ),
      title: "Clarity",
      description:
        "We eliminate the \"black box\" from development by providing the map before the journey begins. Our Sprint Zero process delivers a comprehensive technical roadmap, precise budget, and delivery timeline, giving you total clarity before any long-term commitment.",
    },
    {
      icon: (
        <img
          src={MindsetIcon}
          alt="Handshake"
          className="w-20 h-20"
        />
      ),
      title: "The Founder's Mindset",
      description:
        "We believe the best guides have skin in the game. For select projects, we offer outcome-based models that tie our success directly to yours. Your business outcomes are our primary objective, ensuring we reach the summit together.",
    },
  ];

  return (
    <section
      data-section="client-experience"
      className={`relative overflow-hidden ${styles["client-experience"]}`}
    >
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 ">
        <div className="absolute top-20 left-1/6 w-80 h-80 bg-brand-primary/8 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-1/6 w-96 h-96 bg-brand-purple/6 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-brand-accent/5 rounded-full blur-2xl"></div>
      </div>

      <div
        className={`container mx-auto px-6 lg:px-8 relative z-10  py-24 lg:py-32 ${styles["globe"]}`}
      >
        <div className="text-center mb-20">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-foreground-dark mb-6 leading-[1.4]">
            Your Journey, Guided by Our Principles.
          </h2>
          <p className="text-lg sm:text-xl lg:text-2xl text-foreground-dark-muted leading-relaxed font-light max-w-4xl mx-auto">
            How we navigate to the destination is as critical as where we're going. Our entire engagement models are built on three pillars designed to eliminate uncertainty and clear the fog that plagues typical development projects.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8  max-w-8xl mx-auto">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="relative overflow-hidden bg-[#ffffff39] border border-[#ffffff55] rounded-2xl p-8 lg:p-10 hover:shadow-glass-sm transition-all duration-500 transform hover:scale-102 hover:-translate-y-2 animate-fade-in group"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              {/* Glassmorphism Inner Glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/5 via-transparent to-brand-purple/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              {/* Icon Container */}
              <div className="relative rounded-2xl w-20 h-20 flex items-center justify-center mb-8 transition-all duration-300 group-hover:scale-110">
                {exp.icon}
              </div>

              {/* Title */}
              <h3 className="relative text-2xl lg:text-3xl font-semibold text-foreground-dark mb-6 leading-tight font-montserrat">
                {exp.title}
              </h3>

              {/* Description */}
              <p className="relative text-foreground-dark-muted leading-relaxed text-lg font-light font-montserrat">
                {exp.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientExperience;