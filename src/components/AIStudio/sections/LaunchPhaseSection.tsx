import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Users, GitMerge } from "lucide-react";
import { CALENDLY_URL } from "../../../config/constants";
import styles from "../../../assets/css/stylesheet.module.css";

export const LaunchPhaseSection: React.FC = () => {
  return (
    <section className="py-24 lg:py-32 bg-[#efeff6]">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block px-6 py-3 bg-brand-primary/10 text-brand-primary rounded-full text-sm font-medium border border-brand-primary/20 mb-6">
              Phase 1: LAUNCH
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold mb-6 text-foreground-dark">
              From Ambitious Vision to{" "}
              <span className="text-brand-primary">
                Production-Ready Reality
              </span>
            </h2>
            <p className="text-lg text-foreground-dark/80 max-w-4xl mx-auto">
              Launching a successful AI platform requires more than just an
              algorithm; it demands robust, full-stack engineering. We accelerate
              your time-to-market by deploying our specialized teams and
              proprietary architectural patterns.
            </p>
          </div>

          {/* Two-Column Feature Grid */}
          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            {/* Feature 1 */}
            <Card className="relative overflow-hidden bg-white border border-[#00000019] rounded-2xl p-8 hover:shadow-lg transition-all duration-500">
              <CardContent className="p-0">
                <div className={`relative w-20 h-20 flex mb-6 items-center justify-center transition-all ${styles.icnBg}`}>
                  <Users className="w-8 h-8 text-brand-primary" />
                </div>
                <h3 className="text-2xl font-semibold mb-4 text-foreground-dark">
                  Deploy Your Elite AI Pod
                </h3>
                <p className="text-foreground-dark/80 mb-6 leading-relaxed">
                  We deploy dedicated pods combining AI architects, agentic
                  engineers, and full-stack developers who operate as a seamless
                  extension of your team. Our pods are built with a strong
                  Product Mindset, ensuring every technical decision is aligned
                  with your business goals.
                </p>
                <Button
                  variant="btnPrimary"
                  onClick={() => window.open(CALENDLY_URL, "_blank")}
                >
                  Assemble Your AI Pod
                </Button>
              </CardContent>
            </Card>

            {/* Feature 2 */}
            <Card className="relative overflow-hidden bg-gradient-to-br from-[#1c1c1c] via-[#3a3a3a] to-[#4D4E4F] border border-[#ffffff19] rounded-2xl p-8 hover:shadow-lg transition-all duration-500">
              <CardContent className="p-0">
                <div className="relative w-20 h-20 flex mb-6 items-center justify-center bg-gradient-to-br from-brand-primary/20 to-brand-purple/20 rounded-2xl">
                  <GitMerge className="w-8 h-8 text-brand-primary" />
                </div>
                <h3 className="text-2xl font-semibold mb-4 text-foreground">
                  Engineer Sophisticated Agentic Workflows
                </h3>
                <p className="text-foreground/80 mb-6 leading-relaxed">
                  We build sophisticated agentic workflows (planner → tools →
                  solver) from scratch using frameworks like LangGraph. We favor
                  deterministic tool-use over free-form generation to build
                  reliable, predictable, and trustworthy AI systems that solve
                  real-world problems.
                </p>
                <Button
                  variant="btnSecondary"
                  onClick={() => window.open(CALENDLY_URL, "_blank")}
                >
                  Ready to build your AI vision?
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Main CTA Section */}
          <div className="text-center bg-white rounded-3xl p-8 lg:p-12 shadow-lg">
            <h3 className="text-2xl font-semibold text-foreground-dark mb-4">
              Ready to build your AI vision?
            </h3>
            <p className="text-foreground-dark/80 mb-6 max-w-2xl mx-auto">
              Let's deploy a dedicated engineering pod to transform your AI
              ambitions into production-ready platforms.
            </p>
            <Button
              variant="btnPrimary"
              size="lg"
              onClick={() => window.open(CALENDLY_URL, "_blank")}
            >
              Assemble Your AI Pod
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
