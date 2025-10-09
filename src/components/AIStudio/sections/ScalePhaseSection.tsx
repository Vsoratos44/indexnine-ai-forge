import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { TrendingUp, Star } from "lucide-react";
import { CALENDLY_URL } from "../../../config/constants";
import styles from "../../../assets/css/stylesheet.module.css";

export const ScalePhaseSection: React.FC = () => {
  const primeSteps = [
    {
      letter: "P",
      title: "Plan",
      description: "Define AI vision aligned with business OKRs.",
    },
    {
      letter: "R",
      title: "Recruit",
      description:
        "Establish the CoE, identify champions, and build governance.",
    },
    {
      letter: "I",
      title: "Inspire",
      description:
        "Deploy role-specific training, create sandboxes, and launch hackathons.",
    },
    {
      letter: "M",
      title: "Motivate",
      description: "Implement recognition systems and reward contributions.",
    },
    {
      letter: "E",
      title: "Evolve",
      description: "Track productivity gains and scale successful initiatives.",
    },
  ];

  return (
    <section
      className={`py-24 lg:py-32 bg-transparent  ${styles.pageDarkBg} 
    `}
    >
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            {/* <div className="inline-block px-6 py-3 bg-brand-primary/10 text-brand-primary rounded-full text-sm font-medium border border-brand-primary/20 mb-6">
              Phase 3: SCALE
            </div> */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold mb-6 text-white">
              Building Your Internal{" "}
              <span className="text">AI Center of Excellence</span>
            </h2>
            <p className="text-lg text-foreground-white-muted max-w-4xl mx-auto">
              True transformation happens when AI capabilities are embedded into
              the DNA of your organization. We partner with you to scale your
              success by building a self-sustaining AI Center of Excellence
              (CoE), turning your initial investment into a long-term
              competitive advantage.
            </p>
          </div>

          {/* Two-Column Feature Grid */}
          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            {/* Feature 1 */}
            <Card className="bg-[#fffff19] border border-[#ffffff19] bg-clip-padding backdrop-filter backdrop-blur-lg rounded-xl p-6 flex">
              <CardContent className="p-0 relative">
                <div
                  className={`relative w-20 h-20 flex mb-6 items-center justify-center transition-all ${styles.icnBg}`}
                >
                  <TrendingUp className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-semibold mb-4 text-foreground">
                  Evolve and Optimize Post-Launch
                </h3>
                <p className="text-foreground-muted leading-relaxed">
                  Post-launch, we provide active technical stewardship,
                  leveraging observability data to fine-tune models, optimize
                  performance, and manage costs. We specialize in enhancing
                  existing platforms, integrating with enterprise systems like
                  Microsoft Entra/AD, and modernizing legacy data models for AI
                  readiness.
                </p>
              </CardContent>
            </Card>

            {/* Feature 2 */}
            <Card className="bg-[#fffff19] border border-[#ffffff19] bg-clip-padding backdrop-filter backdrop-blur-lg rounded-xl p-6 flex">
              <CardContent className="p-0 relative">
                <div
                  className={`relative w-20 h-20 flex mb-6 items-center justify-center transition-all ${styles.icnBg}`}
                >
                  <Star className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-semibold mb-4 text-foreground">
                  Build Your CoE with Our PRIME Framework
                </h3>
                <p className="text-foreground-muted leading-relaxed">
                  Our enterprise-proven PRIME framework provides a high-velocity
                  path to building an internal CoE that fosters innovation and
                  drives high adoption across your organization.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* PRIME Framework Visual Breakdown */}
          <div className="">
            <h3 className="text-2xl font-semibold text-center text-foreground mb-8">
              The PRIME Framework in Action
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {primeSteps.map((step, index) => (
                <div key={index} className="relative group">
                  <div className="bg-[#fffff19] border border-[#ffffff19] bg-clip-padding backdrop-filter backdrop-blur-lg rounded-xl p-4 h-full text-center">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-brand-primary to-brand-purple flex items-center justify-center mx-auto mb-4 shadow-lg">
                      <span className="text-xl font-bold text-white">
                        {step.letter}
                      </span>
                    </div>
                    <h4 className="text-lg font-semibold text-foreground mb-2">
                      {step.title}
                    </h4>
                    <p className="text-sm text-foreground-muted leading-snug">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          {/* <div
            className={`bg-gradient-subtle p-[5px]  text-center  ${styles["bord-lt-rb"]} rounded-[1.125rem]`}
          >
            <div className="bg-[#fff] rounded-[1rem] p-12">
              {" "}
              <h3 className="text-2xl font-semibold text-foreground-dark mb-4">
                Ready to scale your AI capabilities?
              </h3>
              <p className="text-foreground-dark-muted mb-6 max-w-2xl mx-auto">
                Transform your organization into an AI-first enterprise with a
                sustainable Center of Excellence.
              </p>
              <Button
                variant="btnSecondary"
                size="lg"
                onClick={() => window.open(CALENDLY_URL, "_blank")}
              >
                Build Your AI Center of Excellence
              </Button>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
};
