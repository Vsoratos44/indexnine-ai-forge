import React from "react";
import { SectionHeading } from "../shared/SectionHeading";
import { FeatureCard } from "../shared/FeatureCard";
import { blueprintSteps } from "../../../data/qualityEngineering/blueprintSteps";

export const BlueprintSection: React.FC = () => {
  return (
    <section id="qae-solution" className="pb-24 lg:pb-32">
      <div className="container mx-auto px-6">
        <div className="max-w-8xl mx-auto">
          <SectionHeading
            title="The Outcome-Driven Automation Blueprint"
            description="Our philosophy is that quality isn't a phase, it's a measurable outcome. We transform your QE practice from a cost center into a strategic enabler of speed and reliability with our proven, three-step methodology."
            variant="light"
          />

          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {blueprintSteps.map((step, index) => (
              <FeatureCard
                key={index}
                icon={step.icon}
                title={step.title}
                description={step.description}
                variant="light"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
