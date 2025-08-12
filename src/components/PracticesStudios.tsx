import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { AspectRatio } from "@/components/ui/aspect-ratio";

const PracticesStudios = () => {
  const [activeStudio, setActiveStudio] = useState<"innovation" | "enterprise">("innovation");

  const studioData = {
    innovation: {
      title: "The Innovation Lab",
      subtitle: "For Startups and High-Growth Ventures",
      description: "Designed for startups, this is where speed, agility, and product-market fit are paramount. Innovation Lab clients leverage our Sprint Zero methodology to stress-test ideas, optimize frameworks, and build scalable products.",
      buttonText: "Explore Innovation Lab",
      features: ["Rapid MVP development", "AI/ML integration", "Emerging tech exploration"]
    },
    enterprise: {
      title: "The Enterprise Studio", 
      subtitle: "For Enterprise SMBs and F1000",
      description: "Built for businesses that require scale, security, and process excellence, The Enterprise Studio provides the maturity and rigor needed for mission-critical product development.",
      buttonText: "Explore Enterprise Studio",
      features: ["Enterprise scalability", "Security & compliance", "Mission-critical systems"]
    },
  };

  const currentStudio = studioData[activeStudio];

  return (
    <section className="py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 font-montserrat">
            Our Practices:{' '}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              The Innovation Lab & Enterprise Studio
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-foreground/80 max-w-4xl mx-auto">
            Our shift to meet the maturation needs of our clients required a new depth of specialization. To meet this, we've organized our bases of expertise in two dedicated practices.
          </p>
        </div>
        
        {/* Studio Selector */}
        <div className="flex flex-col sm:flex-row justify-center gap-2 sm:gap-4 mb-12">
          <button
            onClick={() => setActiveStudio("innovation")}
            className={`px-6 py-3 text-lg sm:text-xl font-semibold transition-all duration-300 font-montserrat border-l-4 text-left ${
              activeStudio === "innovation"
                ? "border-primary text-foreground bg-primary/5"
                : "border-muted text-muted-foreground hover:text-foreground"
            }`}
          >
            Innovation Lab
          </button>
          <button
            onClick={() => setActiveStudio("enterprise")}
            className={`px-6 py-3 text-lg sm:text-xl font-semibold transition-all duration-300 font-montserrat border-l-4 text-left ${
              activeStudio === "enterprise"
                ? "border-primary text-foreground bg-primary/5"
                : "border-muted text-muted-foreground hover:text-foreground"
            }`}
          >
            Enterprise Studio
          </button>
        </div>

        {/* Active Studio Content */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-center max-w-6xl mx-auto px-4">
          <div className="lg:col-span-3 text-center lg:text-left">
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-3 font-montserrat">
              {currentStudio.title}
            </h3>
            <h4 className="text-base sm:text-lg lg:text-xl font-semibold text-primary mb-4 font-montserrat">
              {currentStudio.subtitle}
            </h4>
            <p className="text-base sm:text-lg text-foreground/80 mb-6 leading-relaxed">
              {currentStudio.description}
            </p>
            
            {/* Features */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-4 sm:gap-6 mb-6">
              {currentStudio.features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <div
                    className={`w-2 h-2 rounded-full ${
                      activeStudio === "innovation" ? "bg-primary" : "bg-purple-500"
                    }`}
                  ></div>
                  <span className="text-sm sm:text-base text-foreground/80">{feature}</span>
                </div>
              ))}
            </div>
            
            <Button variant="outline" size="lg" className="font-montserrat">
              {currentStudio.buttonText}
            </Button>
          </div>

          {/* Right-side image */}
          <div className="lg:col-span-2">
            <AspectRatio ratio={4/3} className="rounded-xl overflow-hidden border border-border bg-muted">
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
