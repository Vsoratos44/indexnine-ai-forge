import React from "react";
import { Button } from "@/components/ui/button";
import ServiceVideoBackground from "@/components/ServiceVideoBackground";
import { CALENDLY_URL } from "../../../config/constants";

export const HeroSection: React.FC = () => {
  const handleGetRoadmap = () => {
    window.open(CALENDLY_URL, "_blank");
  };

  return (
    <section className="relative min-h-[780px] overflow-hidden bg-black">
      <ServiceVideoBackground />

      <div className="relative z-10 container mx-auto px-6 pt-48 pb-24">
        <div className="max-w-6xl mx-auto text-center lg:text-left ml-0">
          <div className="mb-6">
            <span className="inline-block px-6 py-3 bg-brand-primary/10 text-brand-primary rounded-full text-sm font-medium border border-brand-primary/20 backdrop-blur-sm">
              IndexNine QAE
            </span>
          </div>
          <h1 className="text-[2.5rem] sm:text-[3rem] lg:text-[4rem] xl:text-[4rem] font-semibold text-foreground mb-6 leading-[1.25] animate-fade-in font-montserrat">
            Beyond Testing: <br />
            <span className="bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
              Engineering Quality
            </span>
            <br />
            for Mission-Critical Software
          </h1>
          <p className="text-base sm:text-lg lg:text-xl text-foreground/85 mb-8 leading-relaxed font-light animate-slide-up font-montserrat">
            We deliver enterprise-grade quality engineering and outcome-driven
            test automation to help startups and enterprises alike ship reliable
            products faster and with confidence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-scale-in">
            <Button
              variant="btnPrimary"
              size="xl"
              className="min-w-[280px]"
              onClick={handleGetRoadmap}
            >
              Get Your APQ Roadmap
            </Button>
            <a href="/insights/case-studies">
              <Button variant="btnSecondary" size="xl" className="min-w-[240px]">
                See Our Impact
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
