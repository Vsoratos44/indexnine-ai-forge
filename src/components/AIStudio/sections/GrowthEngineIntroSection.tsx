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
    <section id="growth-engine" className="py-24 lg:py-32 bg-[#fff]">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 mb-6">
              <Rocket className="w-6 h-6 text-brand-primary" />
              <span className="text-sm font-semibold text-brand-primary uppercase tracking-wider">
                The Solution
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-foreground-dark mb-6">
              Our Solution:{" "}
              <span className="text-brand-primary">
                The Indexnine AI Growth Engine
              </span>
            </h2>
            <p className="text-xl font-medium text-foreground-dark mb-6">
              A dedicated partnership model to Launch, Validate, and Scale your
              AI initiatives with confidence.
            </p>
          </div>

          <div className="bg-gradient-to-br from-[#F1F2FF] to-white rounded-3xl p-8 lg:p-12 shadow-lg border border-[#00000019]">
            <p className="text-lg text-foreground-dark leading-relaxed">
              At Indexnine, we've moved beyond the traditional project model.
              We've built an{" "}
              <span className="font-semibold">AI Growth Engine</span>—a
              comprehensive framework that combines elite engineering pods, a
              pragmatic "eval-first" methodology, and strategic guidance to
              ensure your AI initiatives deliver measurable outcomes. Whether
              you're a startup launching a disruptive AI platform or an
              enterprise looking to scale your capabilities, our engine is
              designed to be your AI-first, AI-driven partner at every stage of
              your journey.
            </p>
          </div>

          <div className="text-center mt-8">
            <Button
              variant="btnPrimary"
              size="lg"
              onClick={scrollToAssessment}
            >
              Start Your AI Journey
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
