import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { AspectRatio } from "@/components/ui/aspect-ratio";

import entrp from "@/assets/images/enterprise-studio.webp";
import innov from "@/assets/images/inno-lab.webp";

const PracticesStudios = () => {
  const [activeStudio, setActiveStudio] = useState<"innovation" | "enterprise">(
    "innovation"
  );

  const studioData = {
    innovation: {
      title: "The Innovation Lab",
      subtitle: "For Startups and High-Growth Ventures",
      description:
        "Designed for startups, this is where speed, agility, and product-market fit are paramount. Innovation Lab clients leverage our Sprint Zero methodology to stress-test ideas, optimize frameworks, and build scalable products. <br><br> We provide the design services and agile development teams needed to quickly turn your vision into a funded, market-ready reality. ",
      buttonText: "Explore Innovation Lab",
      features: [
        "Rapid MVP development",
        "AI/ML integration",
        "Emerging tech exploration",
      ],
    },
    enterprise: {
      title: "The Enterprise Studio",
      subtitle: "For Enterprise SMBs and F1000",
      description:
        "Built for businesses that require scale, security, and process excellence, The Enterprise Studio provides the maturity and rigor needed for mission-critical product development. With a focus on complex digital transformation consulting and enterprise software development, enterprise businesses enjoy first-in-class quality at an unparalleled rate.",
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
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold mb-6 font-montserrat leading-[1.4] max-w-[90%] mx-auto">
            Our Practices:{" "}
            <span className="text-brand-primary leading-[1.4]">
              The Innovation Lab & Enterprise Studio
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-foreground-dark-muted max-w-4xl mx-auto">
            Our shift to meet the maturation needs of our clients required a new
            depth of specialization. To meet this, we've organized our bases of
            expertise in two dedicated practices.
          </p>
        </div>

        {/* Studio Selector */}
        <div className="flex flex-col sm:flex-row justify-center gap-2 sm:gap-4 mb-12">
          <button
            onClick={() => setActiveStudio("innovation")}
            className={`px-6 py-1.5 text-lg sm:text-xl font-semibold transition-all duration-300 font-montserrat border-l-4 text-left ${
              activeStudio === "innovation"
                ? "border-brand-primary text-brand-primary"
                : "border-foreground-dark/20 text-foreground-dark/40 hover:text-brand-primary"
            }`}
          >
            Innovation Lab
          </button>
          <button
            onClick={() => setActiveStudio("enterprise")}
            className={`px-6 py-1.5 text-lg sm:text-xl font-semibold transition-all duration-300 font-montserrat border-l-4 text-left ${
              activeStudio === "enterprise"
                ? "border-primary text-brand-primary"
                : "border-foreground-dark/20 text-foreground-dark/40 hover:text-brand-primary"
            }`}
          >
            Enterprise Studio
          </button>
        </div>

        {/* Active Studio Content */}
        <div className="grid grid-cols-1 lg:grid-cols-6 gap-12 items-start max-w-8xl mx-auto ">
          <div className="lg:col-span-3 text-center lg:text-left pt-3">
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-semibold mb-3 font-montserrat">
              {currentStudio.title}
            </h3>
            <h4 className="text-base sm:text-lg lg:text-xl font-semibold text-primary mb-4 font-montserrat">
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
              <Button variant="btnPrimary" size="lg">
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
                src={activeStudio === "innovation" ? innov : entrp}
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
