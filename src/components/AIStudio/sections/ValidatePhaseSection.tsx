import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ShieldCheck } from "lucide-react";
import { CALENDLY_URL } from "../../../config/constants";
import styles from "../../../assets/css/stylesheet.module.css";

export const ValidatePhaseSection: React.FC = () => {
  return (
    <section className={`pb-24 lg:pb-32 bg-transparent`}>
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-block px-6 py-3 bg-brand-primary/10 text-brand-primary rounded-full text-sm font-medium border border-brand-primary/20 mb-6">
              Phase 2: VALIDATE
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold mb-6 text-foreground-dark">
              Engineering Trust with an{" "}
              <span className="text-brand-primary">"Eval-First" Approach</span>
            </h2>
            <p className="text-lg text-foreground-dark-muted max-w-3xl mx-auto">
              In the world of AI, trust is paramount. An AI product that
              produces unreliable or inaccurate results is worse than no product
              at all. Our "Eval-First" engineering principle is our commitment
              to building AI you and your customers can depend on.
            </p>
          </div>

          {/* Centered Feature Block */}
          <Card className="relative overflow-hidden bg-gradient-card-light border border-[#00000019] backdrop-blur-sm rounded-2xl p-8 hover:border-brand-primary/30 transition-all duration-500 transform hover:scale-102 shadow-lg">
            <CardContent className="p-0 relative">
              <div className="flex flex-col items-center text-center">
                <div
                  className={`relative w-20 h-20 flex mb-6 items-center justify-center transition-all ${styles.icnBg}`}
                >
                  <ShieldCheck className="w-8 h-8 text-blue-500" />
                </div>
                <h3 className="text-2xl lg:text-3xl font-semibold mb-4 text-foreground-dark">
                  A Rigorous Framework for AI Quality
                </h3>
                <p className="text-lg text-foreground-dark-muted leading-relaxed max-w-3xl">
                  Our process is built on a rigorous evaluation framework for
                  all AI and agentic features. Before any launch, we use curated
                  prompt suites, automated test harnesses, and critical
                  human-in-the-loop validation to ensure target accuracy,
                  safety, and performance levels are met. This disciplined
                  approach is how we move from a promising prototype to a
                  production-ready, enterprise-grade application.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* CTA Section */}
          <div className="text-center">
            <h3 className="text-xl font-semibold text-foreground-dark mt-12 mb-8">
              Need to ensure your AI is reliable?
            </h3>
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
    </section>
  );
};
