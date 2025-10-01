import React from "react";
import { SectionHeading } from "../shared/SectionHeading";
import { FeatureCard } from "../shared/FeatureCard";
import { MetricCard } from "../shared/MetricCard";
import { platformsData, applicationsData } from "../../../data/qualityEngineering/platforms";
import styles from "../../../assets/css/stylesheet.module.css";

export const SolutionsSection: React.FC = () => {
  return (
    <section
      id="qae-solutions"
      className="py-24 lg:py-32 relative overflow-hidden"
    >
      <div className="container mx-auto px-6">
        <div className="max-w-8xl mx-auto">
          <SectionHeading
            title="QAE Solutions in Action"
            description="Powered by our proprietary automation platforms, purpose-built internally to accelerate implementation and maximize ROI."
            variant="light"
          />

          {/* Proprietary Automation Platforms */}
          <div className="mb-16">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-semibold text-foreground mb-4">
                Our Proprietary Automation Accelerators
              </h3>
              <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
                We augment our strategic services with proprietary platforms
                designed to accelerate results and provide unparalleled
                visibility into your application's quality.
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {platformsData.map((platform, index) => (
                <FeatureCard
                  key={index}
                  icon={platform.icon}
                  title={platform.title}
                  description={platform.description}
                  features={platform.features}
                  variant="light"
                />
              ))}
            </div>
          </div>

          {/* Real-world Applications */}
          <div className="pt-8">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-semibold text-foreground my-4">
                Real-World Applications
              </h3>
              <p className="text-lg text-foreground-muted max-w-2xl mx-auto">
                How our proprietary platforms deliver measurable results across
                different scenarios.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-6 max-w-5xl mx-auto">
              {applicationsData.map((application, index) => (
                <MetricCard
                  key={index}
                  title={application.title}
                  description={application.description}
                  metrics={application.metrics}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
