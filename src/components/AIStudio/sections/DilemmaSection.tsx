import React from "react";
import { AlertTriangle } from "lucide-react";
import styles from "../../../assets/css/stylesheet.module.css";

export const DilemmaSection: React.FC = () => {
  return (
    <section className="pt-24 lg:pt-32 bg-transparent">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            {/* <div className="inline-flex items-center gap-2 mb-6">
              <AlertTriangle className="w-6 h-6 text-amber-500" />
              <span className="text-sm font-semibold text-amber-500 uppercase tracking-wider">
                The Challenge
              </span>
            </div> */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-foreground-dark mb-6">
              The AI Dilemma: Potential vs.{" "}
              <span className="text-brand-primary">Reality</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div
              className={`rounded-xl py-4 px-1 text-center border border-[#505DFD] ${styles.middleCardBg2}`}
            >
              <h3 className="text-4xl font-bold text-white mb-2 font-montserrat">
                85%
              </h3>
              <span className="inline-block w-12 h-1 rounded-sm bg-[#ffffff75]"></span>
              <p className="p-4">
                of AI projects fail to move beyond the pilot stage due to
                unclear strategy and poor execution.
              </p>
            </div>
            <div
              className={`rounded-xl py-4 px-1 text-center border border-[#505DFD] ${styles.middleCardBg2}`}
            >
              <h3 className="text-4xl font-bold text-white mb-2 font-montserrat">
                $7T
              </h3>
              <span className="inline-block w-12 h-1 rounded-sm bg-[#ffffff75]"></span>
              <p className="p-4">
                potential economic value at stake by 2030, but most
                organizations struggle to capture their share.
              </p>
            </div>
            <div
              className={`rounded-xl py-4 px-1 text-center border border-[#505DFD] ${styles.middleCardBg2}`}
            >
              <h3 className="text-4xl font-bold text-white mb-2 font-montserrat">
                3x
              </h3>
              <span className="inline-block w-12 h-1 rounded-sm bg-[#ffffff75]"></span>
              <p className="p-4">
                faster time-to-value with strategic AI implementation vs. ad-hoc
                approaches.
              </p>
            </div>
          </div>

          <div className="text-center">
            <p className="text-lg text-foreground-dark leading-relaxed mb-6">
              <span className="font-semibold">The reality?</span> Most
              organizations jump straight to implementation without a clear
              strategy, validated use cases, or proper infrastructure. The
              result? Expensive failures, wasted resources, and lost competitive
              advantage.
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
