import React from "react";
import { Link } from "react-router-dom";
import styles from "../assets/css/stylesheet.module.css";

import MatureIcon from "../assets/images/mature.svg";
import PivotIcon from "../assets/images/pivot.svg";
import LaunchIcon from "../assets/images/launch.svg";
import GrowIcon from "../assets/images/grow.svg";

const ProductLifecycle = () => {
  const phases = [
    {
      icon: <img src={LaunchIcon} alt="Launch" className="w-20 h-20" />,
      title: "Launch",
      description:
        "Rapidly validate ideas and bring MVPs to market with our lean approach to product development.",
      example: "HealthTech startup",
      caseStudyLink: "/case-studies/launch",
      borderStyle: "bord-rb",
    },
    {
      icon: <img src={PivotIcon} alt="Pivot" className="w-20 h-20" />,
      title: "Pivot",
      description:
        "Quickly adapt to market feedback and evolve your product strategy with data-driven insights.",
      example: "EdTech platform",
      caseStudyLink: "/case-studies/pivot",
      borderStyle: "bord-lb",
    },
    {
      icon: <img src={GrowIcon} alt="Grow" className="w-20 h-20" />,
      title: "Grow",
      description:
        "Scale your product infrastructure and features to support expanding user bases and use cases.",
      example: "FinTech solution",
      caseStudyLink: "/case-studies/grow",
      borderStyle: "bord-rt",
    },
    {
      icon: <img src={MatureIcon} alt="Mature" className="w-20 h-20" />,
      title: "Mature",
      description:
        "Optimize performance, security, and reliability as your product becomes business-critical.",
      example: "Enterprise SaaS",
      caseStudyLink: "/case-studies/mature",
      borderStyle: "bord-lt",
    },
  ];

  return (
    <section
      data-section="product-lifecycle"
      className=
      {`py-24 lg:py-32 bg-[#fff] relative overflow-hidden ${styles.sectionBgRadial}`}
    >
      {/* Background blur elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-1/6 w-80 h-80 bg-brand-primary/8 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-1/6 w-96 h-96 bg-brand-purple/6 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-brand-accent/5 rounded-full blur-2xl"></div>
      </div>

      <div className={`container mx-auto px-6 lg:px-8 relative z-10 `}>
        <div className="text-center mb-16 lg:mb-20">
          <h2
            className={`text-3xl sm:text-4xl lg:text-5xl font-semibold text-foreground-dark mb-6 leading-tight tracking-tight font-montserrat`}
          >
            From Bold Idea to Market Leader,{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              We Engineer Your Success
            </span>
          </h2>
        </div>

        {/* 2x2 Grid Layout */}
        <div
          className={`grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-6xl mx-auto }`}
        >
          {phases.map((phase, index) => (
            <div
              key={index}
              className={`relative overflow-hidden  rounded-2xl p-1 transition-all duration-500 hover:scale-105 animate-fade-in group ${
                styles[phase.borderStyle]
              }`}
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="relative z-10 flex items-center space-x-6 p-8 lg-p-10 bg-[#fff] rounded-2xl h-full">
                {/* Icon Container */}
                <div className="relative rounded-2xl w-20 h-20 flex items-center justify-center mb-8 group-hover:shadow-glow transition-all duration-300 group-hover:scale-110">
                  {phase.icon}
                </div>

                {/* Content */}
                <div className="flex-1">
                  <h3 className="text-2xl lg:text-3xl font-semibold text-foreground-dark mb-2 leading-tight font-montserrat">
                    {phase.title}
                  </h3>
                  <p className="text-foreground-dark-muted leading-relaxed text-base font-light font-montserrat mb-2">
                    {phase.description}
                  </p>

                  {/* Client Example */}
                  <Link
                    to={phase.caseStudyLink}
                    className="text-sm font-semibold text-brand-primary hover:text-brand-primary-dark transition-colors font-montserrat "
                  >
                    Client example: {phase.example}
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductLifecycle;
