import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ShieldCheck } from "lucide-react";
import { CALENDLY_URL } from "../../../config/constants";
import styles from "../../../assets/css/stylesheet.module.css";

export const ValidatePhaseSection: React.FC = () => {
  return (
    <div
      className={`bg-blue-500/5 rounded-2xl shadow shadow-glass backdrop-blur-md relative p-8 ${styles.cardBord1} `}
    >
      <div className="max-w-5xl mx-auto flex flex-col h-full">
        <div>
          <div className="text-left mb-12">
            {/* <div className="inline-block px-6 py-3 bg-brand-primary/10 text-brand-primary rounded-full text-sm font-medium border border-brand-primary/20 mb-6">
              Phase 2: VALIDATE
            </div> */}
            <h2 className="text-2xl font-semibold mb-4 text-foreground-dark">
              Engineering Trust with an{" "}
              <span className="text-">"Eval-First" Approach</span>
            </h2>
            <p className="text-lg text-foreground-dark-muted max-w-3xl mx-auto">
              In the world of AI, trust is paramount. An AI product that
              produces unreliable or inaccurate results is worse than no product
              at all. Our "Eval-First" engineering principle is our commitment
              to building AI you and your customers can depend on.
            </p>
          </div>

          <h3 className="text-2xl font-semibold mb-4 text-foreground-dark">
            A Rigorous Framework for AI Quality
          </h3>
          <p className="text-lg text-foreground-dark-muted leading-relaxed max-w-3xl">
            Our process is built on a rigorous evaluation framework for all AI
            and agentic features. Before any launch, we use curated prompt
            suites, automated test harnesses, and critical human-in-the-loop
            validation to ensure target accuracy, safety, and performance levels
            are met. This disciplined approach is how we move from a promising
            prototype to a production-ready, enterprise-grade application.
          </p>

          {/* CTA Section */}
          <div className="text-left">
            <h3 className="text-xl font-semibold text-foreground-dark mt-12 mb-4">
              Need to ensure your AI is reliable?
            </h3>
            <p className="text-lg text-foreground-dark-muted leading-relaxed max-w-3xl">
              Request a comprehensive QA & Evaluation Plan to ensure your AI
              delivers reliable and accurate results.
            </p>
          </div>
        </div>
        <div className="mt-auto">
          {" "}
          <Button
            variant="btnSecondary"
            size="lg"
            onClick={() => window.open(CALENDLY_URL, "_blank")}
          >
            Request a QA & Evaluation Plan
          </Button>
        </div>
      </div>
    </div>
  );
};
