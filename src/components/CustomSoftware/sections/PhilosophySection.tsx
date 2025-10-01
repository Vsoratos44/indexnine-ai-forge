import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Lightbulb, Shield, Handshake } from "lucide-react";
import styles from "../../../assets/css/stylesheet.module.css";

export const PhilosophySection: React.FC = () => {
  const principles = [
    {
      icon: Lightbulb,
      title: "Business-First Engineering",
      description:
        "We begin by understanding your business context, challenges, and goals. Every technical decision we make serves your strategic objectives, not just technical elegance.",
    },
    {
      icon: Shield,
      title: "Quality Without Compromise",
      description:
        "We never sacrifice long-term maintainability for short-term speed. Our pragmatic approach ensures your software is built to scale and evolve with your business.",
    },
    {
      icon: Handshake,
      title: "Partnership Over Transactions",
      description:
        "We're not just vendors; we're your strategic technology partner. Our success is measured by your business outcomes, not just project deliverables.",
    },
  ];

  return (
    <section className="py-16 sm:py-24 lg:py-32 bg-[#fff]">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-8xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold mb-4 sm:mb-6 text-foreground-dark font-montserrat px-4 sm:px-0">
              Beyond Code:{" "}
              <span className="text-brand-primary">
                We Engineer Strategic Assets
              </span>
            </h2>
            <p className="text-base sm:text-lg text-foreground-dark/80 max-w-3xl mx-auto font-montserrat px-4 sm:px-0">
              Our core philosophy is simple: we don't just build software, we
              engineer digital assets that become competitive advantages. Every
              line of code is tied to measurable business outcomes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 max-w-6xl mx-auto px-4 sm:px-0">
            {principles.map((principle, index) => {
              const IconComponent = principle.icon;
              return (
                <Card
                  key={index}
                  className="relative overflow-hidden bg-gradient-card-light border border-[#00000019] bg-[#ffffff59] rounded-2xl p-6 sm:p-8 hover:shadow-glass-sm transition-all duration-500 transform hover:scale-102 hover:-translate-y-2 animate-fade-in group text-left"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/8 via-transparent to-brand-purple/8 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/5 via-transparent to-brand-purple/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  <CardContent className="p-0 relative">
                    <div
                      className={`relative w-16 h-16 sm:w-20 sm:h-20 flex mb-4 sm:mb-6 items-center justify-center transition-all ${styles.icnBg}`}
                    >
                      <IconComponent className="w-6 h-6 sm:w-8 sm:h-8 text-brand-primary" />
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-foreground-dark font-montserrat">
                      {principle.title}
                    </h3>
                    <p className="text-sm sm:text-base text-foreground-dark/80 leading-relaxed font-montserrat">
                      {principle.description}
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
