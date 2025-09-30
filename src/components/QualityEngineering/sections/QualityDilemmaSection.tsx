import React from "react";
import { SectionHeading } from "../shared/SectionHeading";

export const QualityDilemmaSection: React.FC = () => {
  return (
    <section className="py-24 lg:py-32 bg-[#fff]">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <SectionHeading
            title="The Quality Dilemma:"
            highlight="Balancing Speed, Cost, and Reliability"
            variant="light"
          />
          <p className="text-lg text-foreground-dark mb-0 max-w-3xl mx-auto leading-relaxed">
            In a competitive market, pressure to innovate has never been higher.
            Development teams are forced to move faster, but without a modern
            approach to quality, this leads to brittle tests, rising bug counts,
            and eroded customer trust. Manual testing can't keep up, and
            traditional automation often creates more maintenance overhead than it
            saves.
          </p>
        </div>
      </div>
    </section>
  );
};
