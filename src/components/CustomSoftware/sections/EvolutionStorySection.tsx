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
    <section className="py-24 lg:py-32 bg-[#fff]">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 mb-6">
              <TrendingUp className="w-6 h-6 text-brand-primary" />
              <span className="text-sm font-semibold text-brand-primary uppercase tracking-wider">
                Our Evolution
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold mb-6 text-foreground-dark">
              The Evolution of Engineering:{" "}
              <span className="text-brand-primary">
                From Staff Augmentation to Strategic Partnership
              </span>
            </h2>
          </div>

          <div className="bg-gradient-to-br from-[#F1F2FF] to-white rounded-3xl p-8 lg:p-12 shadow-lg border border-[#00000019] mb-8">
            <p className="text-lg text-foreground-dark leading-relaxed mb-6">
              Our clients have <span className="font-semibold">EVOLVED</span>.
              Simply adding developers to a project isn't enough to win. True
              acceleration comes from leveraging AI across the entire product
              lifecycle and embedding into the process a culture of engineering
              maturity.
            </p>
            <p className="text-lg text-foreground-dark leading-relaxed">
              We recognized this shift and transformed our model. We are no
              longer just a source of talent; we are a source of{" "}
              <span className="font-semibold">velocity</span>,{" "}
              <span className="font-semibold">quality</span>, and{" "}
              <span className="font-semibold">strategic insight</span>, powered by
              our AI-first approach that boosts throughput by 20-30% on average
              tasks.
            </p>
          </div>

          <div className="text-center">
            <Button variant="btnPrimary" size="lg" onClick={scrollToOfferings}>
              Explore Our AI-Augmented Offerings
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
