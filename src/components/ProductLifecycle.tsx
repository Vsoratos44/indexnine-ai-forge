import React from "react";
import { Link } from "react-router-dom";
import styles from "../assets/css/stylesheet.module.css";

import MatureIcon from "../assets/images/mature.svg";
import PivotIcon from "../assets/images/pivot.svg";
import LaunchIcon from "../assets/images/launch.svg";
import GrowIcon from "../assets/images/grow.svg";
import { Button } from "./ui/button";

const ProductLifecycle = () => {
  const phases = [
    {
      icon: <img src={LaunchIcon} alt="Launch" className="w-20 h-20" />,
      title: "Launch",
      subtitle: "Excellence from Day One ",
      description:
        "We help founders and innovators turn bold ideas into viable, market-ready products.",
      example:
        "We built a complex AI research agent to disrupt the high-cost philanthropic consulting market. We didn't just build an MVP; we built the foundation for a scalable platform by prioritizing high-value ROI from the start.",
      caseStudyLink: "/case-studies/launch",
      borderStyle: "bord-rb",
    },
    {
      icon: <img src={PivotIcon} alt="Pivot" className="w-20 h-20" />,
      title: "Pivot",
      subtitle: "Finding Product-Market Fit",
      description:
        "When the market speaks, we listen. We partner with companies to provide data-backed insights at critical inflection points and turn potential roadblocks into opportunities.",
      example:
        "We helped a security client pivot from a simple auditing tool to a full-fledged provisioning product.",
      caseStudyLink: "/case-studies/pivot",
      borderStyle: "bord-lb",
    },
    {
      icon: <img src={GrowIcon} alt="Grow" className="w-20 h-20" />,
      title: "Grow",
      subtitle: "Creating Revenue Streams with AI",
      description:
        "We help successful products evolve into dominant platforms. By leveraging custom AI models, we identify new opportunities in your existing assets. Industry veterans lead our AI consulting services with the rare expertise needed to identify where AI can enhance your operations.",
      example:
        "For a gaming industry client, we developed Cricket LLM, an AI agent designed to deliver a nimble and scalable revenue stream.",
      caseStudyLink: "/case-studies/grow",
      borderStyle: "bord-rt",
    },
    {
      icon: <img src={MatureIcon} alt="Mature" className="w-20 h-20" />,
      title: "Mature",
      subtitle: "Modernizing for Scale and Efficiency",
      description:
        "Technical debt is an issue that even industry-leading companies can struggle with. We specialize in the complex challenge of legacy system modernization.",
      example:
        "Our client needed a complete re-architecture of a 16-year-old, mission-critical system that was actively integrated with 178 e-commerce platforms. By ensuring scalable, efficient, and reliable growth, we delivered long-term cost savings and enabled our client to avoid short-term obstacles.",
      caseStudyLink: "/case-studies/mature",
      borderStyle: "bord-lt",
    },
  ];

  return (
    <section
      data-section="product-lifecycle"
      className={`py-24 lg:py-32 bg-[#fff] relative overflow-hidden ${styles.sectionBgRadial}`}
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
            className={`text-3xl sm:text-4xl lg:text-5xl font-semibold text-foreground-dark mb-6 leading-[1.4] font-montserrat`}
          >
            Product Lifecycle:{" "}
            <span className="text-brand-primary leading-[1.4]">
              Every Step Counts
            </span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-foreground-dark-muted leading-relaxed font-light max-w-4xl mx-auto px-4">
            Our product engineering services are purpose-built to meet your
            specific needs at each phase of the product lifecycle. along with
            case studies to show you exactly what we mean.
          </p>
        </div>

        {/* 2x2 Grid Layout */}
        <div
          className={`grid grid-cols-1 md:grid-cols-2 gap-4 max-w-8xl mx-auto }`}
        >
          {phases.map((phase, index) => (
            <div
              key={index}
              className={`relative overflow-hidden  rounded-2xl p-1 animate-fade-in group ${
                styles[phase.borderStyle]
              }`}
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              {/* Inner glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/3 via-transparent to-brand-purple/3 rounded-2xl sm:rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="elative z-10 p-8 lg-p-10 bg-[#fff] rounded-2xl h-full bg-[#fff] flex flex-col">
                {/* Icon and Title Section */}
                <div className="flex items-start space-x-4 sm:space-x-6 mb-4">
                  {/* Icon Container */}
                  <div className="relative rounded-2xl w-20 h-20 flex items-center justify-center group-hover:shadow-glow transition-all duration-300 group-hover:scale-105">
                    {phase.icon}
                  </div>

                  {/* Title Section */}
                  <div className="flex-1 min-w-0">
                    <h3 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-foreground-dark mb-1 sm:mb-2 leading-tight font-montserrat">
                      {phase.title}
                    </h3>
                    <h4 className="text-base sm:text-lg lg:text-xl font-semibold text-brand-primary mb-3 sm:mb-4 font-montserrat">
                      {phase.subtitle}
                    </h4>
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 flex flex-col">
                  {/* <h3 className="text-2xl lg:text-3xl font-semibold text-foreground-dark mb-2 leading-tight font-montserrat">
                    {phase.title}
                  </h3> */}
                  <p className="text-foreground-dark-muted leading-compact text-base font-light font-montserrat mb-3">
                    {phase.description}
                  </p>

                  {/* Client Example */}
                  <p className="text-foreground-dark-muted leading-compact text-base font-light font-montserrat mb-2">
                    {phase.example}
                  </p>

                  {/* Case Study Button */}
                  <div className="pt-2 mt-auto">
                    <Link to={phase.caseStudyLink}>
                      <Button
                        variant="outline"
                        size="sm"
                        className="w-full sm:w-auto text-brand-primary border-brand-primary/30 hover:bg-brand-primary text-xs sm:text-sm rounded-full group-hover:scale-105"
                      >
                        Check out the full case study here
                      </Button>
                    </Link>
                  </div>
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
