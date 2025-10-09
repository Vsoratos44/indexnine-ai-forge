import React from "react";
import { Button } from "@/components/ui/button";
import { Rocket } from "lucide-react";

export const GrowthEngineIntroSection: React.FC = () => {
  const scrollToAssessment = () => {
    document.getElementById("assessment-section")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <section id="growth-engine" className=" bg-transparent">
      <div className="max-w-6xl mx-auto">
        <div className="text-left mb-8">
          {/* <div className="inline-flex items-center gap-2 mb-6">
              <Rocket className="w-6 h-6 text-brand-primary" />
              <span className="text-sm font-semibold text-brand-primary uppercase tracking-wider">
                The Solution
              </span>
            </div> */}
          <h2 className="text-2xl lg:text-3xl font-semibold text-foreground-dark mb-6">
            Our Solution: The Indexnine AI Growth Engine
          </h2>
          <p className="text font-medium text-foreground-dark mb-6">
            A dedicated partnership model to Launch, Validate, and Scale your AI
            initiatives with confidence.
          </p>
        </div>

        <div className="text-left">
          <p className="text text-foreground-dark leading-relaxed">
            At Indexnine, we've moved beyond the traditional project model.
            We've built an{" "}
            <span className="font-semibold">AI Growth Engine</span>—a
            comprehensive framework that combines elite engineering pods, a
            pragmatic "eval-first" methodology, and strategic guidance to ensure
            your AI initiatives deliver measurable outcomes. Whether you're a
            startup launching a disruptive AI platform or an enterprise looking
            to scale your capabilities, our engine is designed to be your
            AI-first, AI-driven partner at every stage of your journey.
          </p>
        </div>

        <div className="text-left mt-8">
          <Button variant="btnPrimary" onClick={scrollToAssessment}>
            Start Your AI Journey
          </Button>
        </div>
      </div>
    </section>
  );
};
