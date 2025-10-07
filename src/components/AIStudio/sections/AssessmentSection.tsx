import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";
import { CapabilityCard } from "../shared/CapabilityCard";
import {
  updatedPhilosophyPrinciples,
  updatedAuditOfferings,
} from "../../../data/aiStudio/updatedContent";
import { CALENDLY_URL } from "../../../config/constants";
import styles from "../../../assets/css/stylesheet.module.css";

export const AssessmentSection: React.FC = () => {
  return (
    <section
      id="assessment-section"
      className={`py-24 lg:py-32 bg-white ${styles.sectionBgAI}`}
    >
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold mb-6 text-foreground-dark">
              Your On-Ramp:{" "}
              <span className="text-brand-primary">
                The "Clarity Before Code" Assessment
              </span>
            </h2>
            <p className="text-lg text-foreground-dark/80 max-w-4xl mx-auto">
              Every successful AI journey begins with a strategic, data-backed
              plan. Our foundational philosophy of "Clarity Before Code" is
              embodied in our Assessment & Roadmap offerings. This is the
              essential first step that de-risks your investment and provides
              the blueprint for your journey with the AI Growth Engine.
            </p>
          </div>

          {/* Philosophy Principles */}
          <div className="mb-24">
            <h3 className="text-2xl font-semibold text-center text-foreground-dark mb-8">
              Our Guiding Principles
            </h3>
            <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {updatedPhilosophyPrinciples.map((principle, index) => (
                <CapabilityCard
                  key={index}
                  icon={principle.icon}
                  title={principle.title}
                  description={principle.description}
                  variant="light"
                />
              ))}
            </div>
          </div>

          {/* AI Assessment Offerings */}
          <div className="mb-16">
            <h3 className="text-2xl font-semibold text-center text-foreground-dark mb-8">
              Choose Your Strategic Entry Point
            </h3>
            <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
              {updatedAuditOfferings.map((offering, index) => (
                <Card
                  key={index}
                  className={`p-8 ${
                    offering.variant === "dark" ? "bg-[#000000]" : "bg-[#fff]"
                  } border-card-border shadow-lg hover:shadow-xl transition-all duration-300 relative flex flex-col`}
                >
                  {offering.featured && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-brand-primary to-brand-purple text-white px-6 py-2 rounded-full text-sm font-semibold shadow-lg">
                        Most Popular
                      </span>
                    </div>
                  )}
                  <CardContent className="p-0 h-full">
                    <div className="mb-6">
                      <div className="text-sm font-medium text-brand-primary mb-2">
                        {offering.tier}
                      </div>
                      <h4
                        className={`text-2xl font-semibold mb-2 ${
                          offering.variant === "dark"
                            ? "text-foreground"
                            : "text-foreground-dark"
                        }`}
                      >
                        {offering.title}
                      </h4>
                      <div
                        className={`text-3xl font-bold mb-2 ${
                          offering.variant === "dark"
                            ? "text-foreground"
                            : "text-foreground-dark"
                        }`}
                      >
                        {offering.price}
                      </div>
                      <div
                        className={`text-sm ${
                          offering.variant === "dark"
                            ? "text-foreground/60"
                            : "text-foreground-dark/60"
                        }`}
                      >
                        {offering.duration}
                      </div>
                    </div>
                    <p
                      className={`mb-6 ${
                        offering.variant === "dark"
                          ? "text-foreground/80"
                          : "text-foreground-dark/80"
                      }`}
                    >
                      {offering.description}
                    </p>
                    <h5
                      className={`font-semibold mb-3 ${
                        offering.variant === "dark"
                          ? "text-foreground"
                          : "text-foreground-dark"
                      }`}
                    >
                      Deliverables:
                    </h5>
                    <ul className="space-y-3 mb-8">
                      {offering.deliverables.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <CheckCircle className="h-5 w-5 text-brand-purple mt-0.5 flex-shrink-0" />
                          <span
                            className={
                              offering.variant === "dark"
                                ? "text-foreground/80"
                                : "text-foreground-dark/80"
                            }
                          >
                            {item}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                  <Button
                    className="w-full mt-auto"
                    variant={
                      offering.variant === "dark"
                        ? "btnSecondary"
                        : "btnPrimary"
                    }
                    onClick={() => window.open(CALENDLY_URL, "_blank")}
                  >
                    {offering.ctaText}
                  </Button>
                </Card>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center bg-white rounded-3xl p-8 lg:p-12 shadow-lg max-w-4xl mx-auto">
            <h3 className="text-2xl font-semibold text-foreground-dark mb-4">
              Ready to build your strategic AI roadmap?
            </h3>
            <p className="text-foreground-dark/80 mb-6">
              Let's validate your AI opportunity and create a clear path to
              measurable outcomes.
            </p>
            <Button
              variant="btnPrimary"
              size="lg"
              onClick={() => window.open(CALENDLY_URL, "_blank")}
            >
              Start Your AI Assessment
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
