import React from "react";
import { AlertTriangle } from "lucide-react";

export const DilemmaSection: React.FC = () => {
  return (
    <section className="py-24 lg:py-32 bg-gradient-to-b from-[#efeff6] to-[#fff]">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 mb-6">
              <AlertTriangle className="w-6 h-6 text-amber-500" />
              <span className="text-sm font-semibold text-amber-500 uppercase tracking-wider">
                The Challenge
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-foreground-dark mb-6">
              The AI Dilemma: Potential vs.{" "}
              <span className="text-brand-primary">Reality</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-[#00000019]">
              <div className="text-4xl font-bold text-brand-primary mb-4">
                85%
              </div>
              <p className="text-foreground-dark/80 leading-relaxed">
                of AI projects fail to move beyond the pilot stage due to
                unclear strategy and poor execution.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-[#00000019]">
              <div className="text-4xl font-bold text-brand-primary mb-4">
                $7T
              </div>
              <p className="text-foreground-dark/80 leading-relaxed">
                potential economic value at stake by 2030, but most
                organizations struggle to capture their share.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-[#00000019]">
              <div className="text-4xl font-bold text-brand-primary mb-4">
                3x
              </div>
              <p className="text-foreground-dark/80 leading-relaxed">
                faster time-to-value with strategic AI implementation vs.
                ad-hoc approaches.
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-[#F1F2FF] to-white rounded-3xl p-8 lg:p-12 shadow-lg border border-[#00000019]">
            <p className="text-lg text-foreground-dark leading-relaxed mb-6">
              <span className="font-semibold">The reality?</span> Most
              organizations jump straight to implementation without a clear
              strategy, validated use cases, or proper infrastructure. The
              result? Expensive failures, wasted resources, and lost
              competitive advantage.
            </p>
            <p className="text-lg text-foreground-dark leading-relaxed">
              <span className="font-semibold">
                There's a better way forward.
              </span>{" "}
              One that combines strategic thinking with battle-tested
              engineering discipline to ensure your AI investments deliver real,
              measurable outcomes.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
