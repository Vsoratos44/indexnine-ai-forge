import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import CtaButton from "./CtaButton";

const PracticesStudios = () => {
  const [activeStudio, setActiveStudio] = useState<"innovation" | "enterprise">(
    "innovation"
  );

  const studioData = {
    innovation: {
      title: "The Innovation Lab",
      subtitle: "For ambitious ventures charting new territory.",
      description:
        "Designed for startups where speed and product-market fit are paramount. We provide the agile development and design services to quickly turn your vision into a funded, market-ready reality.",
      buttonText: "Explore Innovation Lab",
      features: [
        "Rapid MVP development",
        "AI/ML integration",  
        "Emerging tech exploration",
      ],
    },
    enterprise: {
      title: "The Enterprise Studio", 
      subtitle: "For market leaders navigating at scale.",
      description:
        "Built for businesses requiring security, scale, and process excellence. We provide the mature, rigorous engineering needed for mission-critical transformations and enterprise platform development.",
      buttonText: "Explore Enterprise Studio",
      features: [
        "Enterprise scalability",
        "Security & compliance",
        "Mission-critical systems",
      ],
    },
  };

  const currentStudio = studioData[activeStudio];

  return (
    <section className="pb-24 lg:pb-32 bg-[#fff] text-foreground-dark">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-brand-purple mb-6 font-montserrat leading-[1.4] max-w-[90%] mx-auto">
            Specialized Guides for Your <span className="text-brand-cyan">Unique Terrain</span>.
          </h2>
          <p className="text-lg sm:text-xl text-foreground-dark max-w-4xl mx-auto mb-8">
            The path to the pinnacle looks different for every company. To provide the specialized expertise your journey demands, we've organized our teams into two dedicated practices.
          </p>
          <div className="flex justify-center">
            <CtaButton>Find Your Fit</CtaButton>
          </div>
        </div>

        {/* Studio Selector */}
        <div className="flex flex-col sm:flex-row justify-center gap-2 sm:gap-4 mb-12">
          <button
            onClick={() => setActiveStudio("innovation")}
            className={`px-6 py-3 text-lg sm:text-xl font-semibold transition-all duration-300 font-montserrat border-l-4 text-left ${
              activeStudio === "innovation"
                ? "border-brand-primary text-brand-primary"
                : "border-foreground-dark/20 text-foreground-dark/40 hover:text-brand-primary"
            }`}
          >
            Innovation Lab
          </button>
          <button
            onClick={() => setActiveStudio("enterprise")}
            className={`px-6 py-3 text-lg sm:text-xl font-semibold transition-all duration-300 font-montserrat border-l-4 text-left ${
              activeStudio === "enterprise"
                ? "border-brand-primary text-brand-primary"
                : "border-foreground-dark/20 text-foreground-dark/40 hover:text-brand-primary"
            }`}
          >
            Enterprise Studio
          </button>
        </div>

        {/* Active Studio Content */}
        <div className="grid grid-cols-1 lg:grid-cols-6 gap-12 items-start max-w-8xl mx-auto ">
          <div className="lg:col-span-3 text-center lg:text-left pt-3">
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-brand-purple mb-3 font-montserrat">
              {currentStudio.title}
            </h3>
            <h4 className="text-base sm:text-lg lg:text-xl font-semibold text-brand-cyan mb-4 font-montserrat">
              {currentStudio.subtitle}
            </h4>

            <div
              className="text-base sm:text-lg mb-6 leading-relaxed"
              dangerouslySetInnerHTML={{ __html: currentStudio.description }}
            />

            {/* Features */}
            <div className="flex flex-wrap justify-center lg:justify-start mb-6">
              {currentStudio.features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-2 mr-4">
                  <div
                    className={`w-2 h-2 rounded-full ${
                      activeStudio === "innovation"
                        ? "bg-primary"
                        : "bg-purple-500"
                    }`}
                  ></div>
                  <span className="text-sm sm:text-base">{feature}</span>
                </div>
              ))}
            </div>

            <Link
              to={
                activeStudio === "innovation"
                  ? "/engagement/innovation-lab"
                  : "/engagement/enterprise"
              }
            >
              <Button
                variant="hero-secondary"
                size="lg"
                className="text-brand-primary border-brand-primary/30 hover:bg-brand-primary rounded-full "
              >
                {currentStudio.buttonText}
              </Button>
            </Link>
          </div>

          {/* Right-side image */}
          <div className="lg:col-span-3">
            <AspectRatio
              ratio={4 / 3}
              className="rounded-xl overflow-hidden border border-border bg-muted"
            >
              <img
                src={
                  activeStudio === "innovation"
                    ? "/lovable-uploads/3952bffe-50fc-4c11-a811-0bf718975cbf.png"
                    : "/lovable-uploads/49fd4939-c61d-43cb-9754-ebf56d833667.png"
                }
                alt={
                  activeStudio === "innovation"
                    ? "Innovation Lab visual - Indexnine"
                    : "Enterprise Studio visual - Indexnine"
                }
                loading="lazy"
                decoding="async"
                className="h-full w-full object-cover"
                sizes="(min-width: 1024px) 32rem, 100vw"
              />
            </AspectRatio>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PracticesStudios;