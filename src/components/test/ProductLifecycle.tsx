import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../ui/button";
import { AbstractLifecycleVisual } from "../effects/AbstractLifecycleVisuals";
import ScrollTrigger from "../effects/ScrollTriggerAnimations";
import styles from "../../assets/css/stylesheet.module.css";

const ProductLifecycle = () => {
  const phases = [
    {
      type: "launch" as const,
      title: "Launch",
      subtitle: "Charting the First Course",
      description:
        "We help founders turn bold ambition into market-ready products.",
      example:
        "For an AI research agent disrupting philanthropic consulting, we built the foundation for a scalable platform, charting a course for high-value ROI from the start.",
      caseStudyLink: "/insights/case-studies/launch",
      borderStyle: "bord-rb",
    },
    {
      type: "pivot" as const,
      title: "Pivot",
      subtitle: "Recalibrating the Route",
      description:
        "When the market speaks, a great partner helps you listen. At critical inflection points, we turn data into direction.",
      example:
        "We helped a security client pivot from a simple tool to a full-fledged provisioning product.",
      caseStudyLink: "/insights/case-studies/pivot",
      borderStyle: "bord-lb",
    },
    {
      type: "grow" as const,
      title: "Grow",
      subtitle: "Scaling the Summit",
      description:
        "We help successful products evolve into dominant platforms.",
      example:
        "For a gaming client, we developed Cricket LLM, an AI agent that opened a nimble and scalable new revenue stream, expanding their reach from the top.",
      caseStudyLink: "/insights/case-studies/grow",
      borderStyle: "bord-rt",
    },
    {
      type: "mature" as const,
      title: "Mature",
      subtitle: "Fortifying the Pinnacle",
      description:
        "Technical debt can erode a market leader's position.",
      example:
        "We re-architected a 16-year-old mission-critical system for an e-commerce client, ensuring their foundation was strong enough for future growth and continued dominance.",
      caseStudyLink: "/insights/case-studies/mature",
      borderStyle: "bord-lt",
    },
  ];

  return (
    <section
      data-section="product-lifecycle"
      className={`py-24 lg:py-32 bg-background-light relative overflow-hidden ${styles.sectionBgRadial} noise-overlay`}
    >
      {/* Enhanced Atmospheric Background */}
      <div className="absolute inset-0 opacity-50">
        <div className="absolute top-20 left-1/6 w-96 h-96 bg-brand-primary/8 rounded-full blur-3xl animate-luminous-drift"></div>
        <div className="absolute bottom-20 right-1/6 w-80 h-80 bg-brand-cyan/6 rounded-full blur-3xl animate-luminous-drift" style={{ animationDelay: "3s" }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-brand-purple/5 rounded-full blur-2xl animate-pulse-slow"></div>
      </div>

      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <ScrollTrigger>
          <div className="text-center mb-16 lg:mb-20">
            <h2 className="heading-h2 text-foreground-dark mb-6 leading-[1.3]">
              A Partner for Every Stage of the <span className="text-highlight-on-light">Ascent</span>.
            </h2>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-foreground-dark-muted leading-relaxed font-light max-w-4xl mx-auto px-4">
              Your path to the pinnacle isn't a single leap; it's a journey with distinct stages. We provide the <span className="text-luminous-on-light">specialized engineering and strategic guidance</span> you need at every critical waypoint.
            </p>
          </div>
        </ScrollTrigger>

        {/* Enhanced 2x2 Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-7xl mx-auto">
          {phases.map((phase, index) => (
            <ScrollTrigger
              key={index}
              delay={index * 200}
              animation="scaleIn"
              className={`relative glass-card-light glass-hover rounded-3xl p-1 group ${styles[phase.borderStyle]} noise-overlay`}
            >
              {/* Enhanced Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/4 via-transparent to-brand-cyan/4 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

              <div className="relative z-10 p-8 lg:p-10 bg-background-light rounded-3xl h-full flex flex-col">
                {/* Enhanced Icon and Title Section */}
                <div className="flex items-start space-x-6 mb-6">
                  <div className="relative w-20 h-20 flex items-center justify-center glass-card rounded-2xl group-hover:animate-glow-pulse">
                    <AbstractLifecycleVisual type={phase.type} className="w-16 h-16" />
                  </div>

                  <div className="flex-1 min-w-0">
                    <h3 className="heading-h3 text-foreground-dark mb-2 leading-tight">
                      {phase.title}
                    </h3>
                    <h4 className="text-base sm:text-lg lg:text-xl font-semibold text-luminous-on-light mb-4">
                      {phase.subtitle}
                    </h4>
                  </div>
                </div>

                {/* Enhanced Content */}
                <div className="flex-1 flex flex-col">
                  <p className="text-foreground-dark-muted leading-relaxed text-base font-light mb-4">
                    {phase.description}
                  </p>

                  <p className="text-foreground-dark-muted leading-relaxed text-base font-light mb-6">
                    {phase.example}
                  </p>

                  {/* Enhanced CTA Button */}
                  <div className="mt-auto">
                    <Link to={phase.caseStudyLink}>
                      <Button
                        variant="luminous-secondary"
                        size="sm"
                        className="w-full sm:w-auto group-hover:scale-105"
                      >
                        Check out the full case study here
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </ScrollTrigger>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductLifecycle;