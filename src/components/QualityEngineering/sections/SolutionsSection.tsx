import React from "react";
import { SectionHeading } from "../shared/SectionHeading";
import { FeatureCard } from "../shared/FeatureCard";
import { MetricCard } from "../shared/MetricCard";
import {
  platformsData,
  applicationsData,
} from "../../../data/qualityEngineering/platforms";
import styles from "../../../assets/css/stylesheet.module.css";

export const SolutionsSection: React.FC = () => {
  return (
    <section
      id="qae-solutions"
      className={`pb-16 lg:pb-24 relative overflow-hidden`}
    >
      <div className="p-0">
        <div className="max-w-8xl mx-4 sm:mx-auto">
          <div className="mb-16">
            <SectionHeading
              title="QAE Solutions in Action"
              description="Powered by our proprietary automation platforms, purpose-built internally to accelerate implementation and maximize ROI."
              variant="light"
            />
            <div className="text-center mb-8">
              <h3 className="text-2xl font-semibold text-foreground-dark mb-4">
                Our Proprietary Automation Accelerators
              </h3>
              <p className="text-lg text-foreground-dark/80 max-w-4xl mx-auto">
                We augment our strategic services with proprietary platforms
                designed to accelerate results and provide unparalleled
                visibility into your application's quality.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-8xl mt-4 mx-auto md:container">
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

          {/* Real-world Applications */}
          <div className="pt-8">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-semibold text-foreground-dark my-4">
                Real-World Applications
              </h3>
              <p className="text-lg text-foreground-dark-muted max-w-2xl mx-auto">
                How our proprietary platforms deliver measurable results across
                different scenarios.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
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
