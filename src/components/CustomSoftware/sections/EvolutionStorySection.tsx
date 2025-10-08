import React from "react";
import { Button } from "@/components/ui/button";
import { TrendingUp } from "lucide-react";

export const EvolutionStorySection: React.FC = () => {
  const scrollToOfferings = () => {
    document.getElementById("core-offerings")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <section className="pb-24 lg:pb-32 bg-transparent">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-8 sm:mb-12">
            {/* <div className="inline-flex items-center gap-2 mb-4 sm:mb-6">
              <TrendingUp className="w-5 h-5 sm:w-6 sm:h-6 text-brand-primary" />
              <span className="text-xs sm:text-sm font-semibold text-brand-primary uppercase tracking-wider">
                Our Evolution
              </span>
            </div> */}
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold mb-4 sm:mb-6 text-foreground-dark font-montserrat px-4 sm:px-0">
              The Evolution of Engineering:{" "}
              <span className="text-brand-primary">
                From Staff Augmentation to Strategic Partnership
              </span>
            </h2>
          </div>

          <p className="text-lg text-center text-foreground-dark leading-relaxed mb-4 sm:mb-6 font-montserrat">
            Our clients have <span className="font-semibold">EVOLVED</span>.
            Simply adding developers to a project isn't enough to win. True
            acceleration comes from leveraging AI across the entire product
            lifecycle and embedding into the process a culture of engineering
            maturity.
          </p>
          <p className="text-lg text-center text-foreground-dark leading-relaxed font-montserrat">
            We recognized this shift and transformed our model. We are no longer
            just a source of talent; we are a source of{" "}
            <span className="font-semibold">velocity</span>,{" "}
            <span className="font-semibold">quality</span>, and{" "}
            <span className="font-semibold">strategic insight</span>, powered by
            our AI-first approach that boosts throughput by 20-30% on average
            tasks.
          </p>

          <div className="text-center px-4 sm:px-0 mt-8">
            <Button
              variant="btnPrimary"
              size="lg"
              onClick={scrollToOfferings}
              className="w-full sm:w-auto min-w-[280px] h-12 sm:h-14 text-sm sm:text-base"
            >
              Explore Our AI-Augmented Offerings
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
