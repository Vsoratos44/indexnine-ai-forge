import React from "react";
import { ProcessCard } from "../shared/ProcessCard";

export const AuditProcessSection: React.FC = () => {
  const processSteps = [
    {
      icon: "Target",
      title: "Business Context & Strategy",
      description: "Understanding goals, challenges, and priorities.",
    },
    {
      icon: "Database",
      title: "Build Business Asset Inventory",
      description: "Cataloging data assets, systems, and capabilities.",
    },
    {
      icon: "Lightbulb",
      title: "Identify & Prioritize Opportunities",
      description: "Mapping AI use cases to business value and feasibility.",
    },
    {
      icon: "Map",
      title: "Roadmap Creation",
      description: "Developing a phased implementation plan with clear milestones.",
    },
    {
      icon: "Shield",
      title: "Governance & Sustainability",
      description:
        "Establishing frameworks for ethical AI and long-term success.",
    },
  ];

  return (
    <section className="py-24 lg:py-32 bg-background-dark">
      <div className="container mx-auto px-6">
        <div className="max-w-8xl mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-2xl sm:text-3xl font-semibold mb-6 text-foreground-white">
              Our Proven Methodology
            </h3>
            <p className="text-lg text-foreground-light-muted max-w-3xl mx-auto">
              A systematic 5-step process to validate your AI opportunity and
              create a comprehensive roadmap for success.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {processSteps.map((step, index) => (
              <ProcessCard
                key={index}
                icon={step.icon}
                title={step.title}
                description={step.description}
                step={index + 1}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
