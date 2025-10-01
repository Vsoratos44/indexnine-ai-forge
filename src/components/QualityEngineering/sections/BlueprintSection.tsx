import React from "react";
import { SectionHeading } from "../shared/SectionHeading";
import { FeatureCard } from "../shared/FeatureCard";
import { blueprintSteps } from "../../../data/qualityEngineering/blueprintSteps";
import styles from "../../../assets/css/stylesheet.module.css";

export const BlueprintSection: React.FC = () => {
  return (
    <section id="qae-solution" className={`py-24 lg:py-32 relative overflow-hidden ${styles.pageDarkBg}`}>
      <div className="container mx-auto px-6">
        <div className="max-w-8xl mx-auto">
          <SectionHeading
            title="The Outcome-Driven Automation Blueprint"
            description="Our philosophy is that quality isn't a phase, it's a measurable outcome. We transform your QE practice from a cost center into a strategic enabler of speed and reliability with our proven, three-step methodology."
            variant="dark"
          />

          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {blueprintSteps.map((step, index) => (
              <FeatureCard
                key={index}
                icon={step.icon}
                title={step.title}
                description={step.description}
                variant="dark"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
