import React from "react";
import styles from "../assets/css/stylesheet.module.css";
import VelocityIcon from "../assets/images/accel-velocity.svg";
import RadialIcon from "../assets/images/radical-transpncy.svg";
import MindsetIcon from "../assets/images/founder-mindset.svg";

const ClientExperience = () => {
  const experiences = [
    {
      icon: (
        <img
          src={VelocityIcon}
          alt="Acceleration & Velocity"
          className="w-20 h-20"
        />
      ),
      title: "Acceleration & Velocity",
      description:
        "Our snap.mvp reusable code libraries and AI-powered workflows deliver with industry-leading velocity. We turn complex ideas into tangible progress in days, not months.",
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
        "Our Sprint Zero framework gives you a clear roadmap and budget before you commit. Our proprietary Customer Experience App provides an unparalleled, real-time view into project health, team performance, and delivery metrics—eliminating the 'black box' of outsourcing.",
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
        "We succeed when you succeed. We put 'skin in the game' with outcome-based and success-fee models, ensuring our goals are perfectly aligned with your business outcomes.",
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
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-foreground-dark mb-6 leading-tight tracking-tight">
            A World-Class 
            Client Experience: Working with
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Indexnine
            </span>
          </h2>
          <p className="text-lg sm:text-xl lg:text-2xl text-foreground-dark-muted leading-relaxed font-light max-w-4xl mx-auto">
            How we deliver is as important as what we deliver. Our engagement models are built on three pillars to eliminate the disappointingly common frustrations of outsourcing across the industry.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12 max-w-8xl mx-auto">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="relative overflow-hidden bg-[#ffffff39] border border-[#ffffff55] rounded-2xl p-8 lg:p-10 hover:shadow-glass-sm transition-all duration-500 transform hover:scale-102 hover:-translate-y-2 animate-fade-in group"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              {/* Glassmorphism Inner Glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/5 via-transparent to-brand-purple/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              {/* Icon Container */}
              <div className="relative rounded-2xl w-20 h-20 flex items-center justify-center mb-8 group-hover:shadow-glow transition-all duration-300 group-hover:scale-110">
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
