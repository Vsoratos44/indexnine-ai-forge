import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ShieldCheck } from "lucide-react";
import { CALENDLY_URL } from "../../../config/constants";
import styles from "../../../assets/css/stylesheet.module.css";

export const ValidatePhaseSection: React.FC = () => {
  return (
    <section className={`py-24 lg:py-32 ${styles.pageDarkBg}`}>
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-block px-6 py-3 bg-brand-primary/10 text-brand-primary rounded-full text-sm font-medium border border-brand-primary/20 mb-6">
              Phase 2: VALIDATE
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold mb-6 text-foreground-white">
              Engineering Trust with an{" "}
              <span className="text-brand-primary">"Eval-First" Approach</span>
            </h2>
            <p className="text-lg text-foreground-light-muted max-w-3xl mx-auto">
              In the world of AI, trust is paramount. An AI product that
              produces unreliable or inaccurate results is worse than no product
              at all. Our "Eval-First" engineering principle is our commitment
              to building AI you and your customers can depend on.
            </p>
          </div>

          {/* Centered Feature Block */}
          <Card className="relative overflow-hidden bg-gradient-card-light border border-[#ffffff39] rounded-3xl p-10 lg:p-12 mb-12 bg-white-600 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-20">
            <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/10 via-transparent to-brand-purple/10 rounded-3xl" />
            <CardContent className="p-0 relative">
              <div className="flex flex-col items-center text-center">
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-b from-brand-purple to-[#505CFD] flex items-center justify-center shadow-lg mb-6">
                  <ShieldCheck className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl lg:text-3xl font-semibold mb-4 text-foreground-light">
                  A Rigorous Framework for AI Quality
                </h3>
                <p className="text-lg text-foreground-light-muted leading-relaxed max-w-3xl">
                  Our process is built on a rigorous evaluation framework for
                  all AI and agentic features. Before any launch, we use curated
                  prompt suites, automated test harnesses, and critical
                  human-in-the-loop validation to ensure target accuracy, safety,
                  and performance levels are met. This disciplined approach is
                  how we move from a promising prototype to a production-ready,
                  enterprise-grade application.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* CTA Section */}
          <div className="text-center">
            <h3 className="text-xl font-semibold text-foreground-light mb-4">
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
