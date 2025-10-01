import React from "react";
import { Button } from "@/components/ui/button";
import LivingVoidBackground from "@/components/LivingVoidBackground";
import { CALENDLY_URL } from "../../../config/constants";

export const HeroSection: React.FC = () => {
  const handleBookCall = () => {
    window.open(CALENDLY_URL, "_blank");
  };

  const scrollToGrowthEngine = () => {
    document.getElementById("growth-engine")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <section className="relative min-h-[780px] overflow-hidden bg-black">
      <LivingVoidBackground />

      <div className="relative z-10 container mx-auto px-6 pt-48 pb-24">
        <div className="max-w-5xl mx-auto text-center lg:text-left ml-0">
          <div className="mb-6">
            <span className="inline-block px-6 py-3 bg-brand-primary/10 text-brand-primary rounded-full text-sm font-medium border border-brand-primary/20 backdrop-blur-sm">
              AI & ML Engineering Studio
            </span>
          </div>
          <h1 className="text-[2.5rem] sm:text-[3rem] lg:text-[4rem] xl:text-[4rem] font-semibold text-foreground mb-6 leading-[1.25] animate-fade-in font-montserrat">
            AI-Powered Business
            <br />
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Transformation.
            </span>
          </h1>
          <p className="text-base sm:text-lg lg:text-xl text-foreground/85 mb-8 leading-relaxed font-light animate-slide-up font-montserrat max-w-3xl">
            We architect and build intelligent systems that drive measurable
            growth, competitive advantages, and transformative customer
            experiences through strategic AI consulting and cutting-edge machine
            learning solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-scale-in">
            <Button
              variant="btnPrimary"
              size="xl"
              className="min-w-[280px]"
              onClick={handleBookCall}
            >
              Book Your AI Strategy Call
            </Button>
            <Button
              variant="btnSecondary"
              size="xl"
              className="min-w-[240px]"
              onClick={scrollToGrowthEngine}
            >
              Explore the AI Growth Engine
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
