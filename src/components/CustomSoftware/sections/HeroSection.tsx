import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import ServiceVideoBackground from "@/components/ServiceVideoBackground";
import { CALENDLY_URL } from "../../../config/constants";

export const HeroSection: React.FC = () => {
  const handleScopeProject = () => {
    window.open(CALENDLY_URL, "_blank");
  };

  return (
    <section className="relative min-h-[780px] overflow-hidden bg-black">
      <ServiceVideoBackground />

      <div className="relative z-10 container mx-auto px-4 sm:px-6 pt-48 pb-24">
        <div className="max-w-6xl mx-auto text-center lg:text-left ml-0">
          <div className="mb-6">
            <span className="inline-block px-6 py-3 bg-brand-primary/10 text-brand-primary rounded-full text-sm font-medium border border-brand-primary/20 backdrop-blur-sm">
              The Indexnine Engineering Studio
            </span>
          </div>
          <h1 className="text-[2.5rem] sm:text-[3rem] lg:text-[4rem] xl:text-[4rem] font-semibold text-foreground mb-6 leading-[1.25] animate-fade-in font-montserrat">
            Beyond Staff Aug…
            <br />
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              AI-Augmented Engineering
            </span>
          </h1>
          <p className="text-base sm:text-lg lg:text-xl text-foreground/85 mb-8 leading-relaxed font-light animate-slide-up font-montserrat max-w-4xl">
            We've evolved from a traditional development provider into your
            flexible,{" "}
            <Link
              to="/engagement/outcome-based"
              className="text-brand-primary hover:underline font-medium"
            >
              outcome-based engineering
            </Link>{" "}
            partner. We deliver mission-critical software by combining elite
            engineering pods with a powerful suite of AI-augmented accelerators
            to build, launch, and modernize products at startup velocity.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-scale-in">
            <Button
              variant="btnPrimary"
              size="xl"
              className="min-w-[280px]"
              onClick={handleScopeProject}
            >
              Scope Your Engineering Project
            </Button>
            <Button variant="btnSecondary" size="xl" className="min-w-[280px]" asChild>
              <Link to="/engagement/dedicated-teams">
                Explore Our Flexible Team Models
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
