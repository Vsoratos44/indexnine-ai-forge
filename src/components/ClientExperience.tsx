import React from "react";
import styles from "../assets/css/stylesheet.module.css";
import VelocityIcon from "../assets/images/accel-velocity.svg";
import RadialIcon from "../assets/images/radical-transpncy.svg";
import MindsetIcon from "../assets/images/founder-mindset.svg";

const ClientExperience = () => {
  const experiences = [
    {
      icon: <img src={VelocityIcon} alt="Acceleration" className="w-20 h-20" />,
      title: "Acceleration",
      description:
        "We know that time is the most valuable resource to any operation, that’s why we focus on delivering excellence fast. Our code libraries and AI-first development dramatically accelerate delivery without sacrificing quality.",
    },
    {
      icon: (
        <img
          src={RadialIcon}
          alt="Radical Transparency"
          className="w-20 h-20"
        />
      ),
      title: "Radical Transparency",
      description:
        "We eliminate the 'black box' fear that plagues offshore engagements. Our process begins with Sprint Zero, our comprehensive discovery and design process that provides you with a technical roadmap, precise budget, and delivery timeline before any long-term commitment is made.",
    },
    {
      icon: (
        <img
          src={MindsetIcon}
          alt="A Founder's Mindset"
          className="w-20 h-20"
        />
      ),
      title: "A Founder's Mindset",
      description:
        "We believe in having skin in the game. For select projects, we offer outcome-based engagement models that tie our success directly to yours. We’ve tackled complex regression testing challenges on a 'success fee' basis. We can create a customized business model of tiered engagement costs based on delivered results",
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
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-foreground-dark mb-6 leading-[1.4]">
            A World-Class Client Experience: Working with
            <span className="text-brand-primary leading-[1.4]"> Indexnine</span>
          </h2>
          <p className="text-lg sm:text-xl lg:text-2xl text-foreground-dark-muted leading-relaxed font-light max-w-4xl mx-auto">
            How we deliver is as important as what we deliver. Our engagement
            models are built on three pillars to eliminate the disappointingly
            common frustrations of outsourcing across the industry.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6  max-w-8xl mx-auto">
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
