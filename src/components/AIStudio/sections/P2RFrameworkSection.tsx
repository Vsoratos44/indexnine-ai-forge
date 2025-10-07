import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Target, Brain, Shield } from "lucide-react";
import styles from "../../../assets/css/stylesheet.module.css";

export const P2RFrameworkSection: React.FC = () => {
  const dimensions = [
    {
      icon: Target,
      title: "AI Potential Score",
      description:
        "Quantifies the potential market and business impact of AI on your strategic goals.",
    },
    {
      icon: Brain,
      title: "AI Readiness Score",
      description:
        "Assesses your data maturity, technical infrastructure, and organizational culture.",
    },
    {
      icon: Shield,
      title: "AI Risk Score",
      description:
        "Evaluates compliance, ethics, data privacy, and change management requirements.",
    },
  ];

  return (
    <section id="p2r-framework" className={`py-24 lg:py-32 bg-transparent`}>
      <div className="container mx-auto px-6">
        <div className="max-w-8xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block px-6 py-3 bg-brand-primary/10 text-brand-primary rounded-full text-sm font-medium border border-brand-primary/20 mb-6">
              Our Proprietary P2R™ Framework
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold mb-6 text-foreground-white">
              How We Measure{" "}
              <span className="text-brand-primary">Your AI Opportunity</span>
            </h2>
            <p className="text-lg text-foreground-light-muted max-w-4xl mx-auto">
              Our proprietary Potential-to-Reality (P2R)™ framework evaluates
              your organization across three critical dimensions to produce your
              P2R Score—a clear, actionable benchmark that defines your optimal
              path to AI-driven transformation.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {dimensions.map((dimension, index) => {
              const IconComponent = dimension.icon;
              return (
                <Card
                  key={index}
                  className="relative overflow-hidden bg-gradient-card-light border border-[#ffffff39] rounded-2xl p-8 hover:border-brand-primary/30 transition-all duration-500 transform hover:scale-102 hover:-translate-y-2 animate-fade-in group bg-white-600 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-20"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/8 via-transparent to-brand-purple/8 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <CardContent className="p-0 relative">
                    <div
                      className={`relative w-20 h-20 flex mb-6 items-center justify-center transition-all ${styles.icnBg}`}
                    >
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-semibold mb-4 text-foreground-light">
                      {dimension.title}
                    </h3>
                    <p className="text-foreground-light-muted leading-relaxed">
                      {dimension.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
