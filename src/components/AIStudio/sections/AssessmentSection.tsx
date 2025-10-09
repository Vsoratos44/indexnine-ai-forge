import React from "react";
import { CircleCheckBig } from "lucide-react";
import styles from "../../../assets/css/stylesheet.module.css";

export const AssessmentSection: React.FC = () => {
  return (
    <div id="assessment-section" className="bg-transparent">
      <div
        className={`bg-[#ffffff19] rounded-b-2xl backdrop-blur-md relative px-8 pb-8 ${styles.cardBord1}`}
      >
        {/* Section Header */}
        <div className="text mb-8">
          <h2 className="text-2xl  lg:text-3xl font-semibold mb-6 text-foreground-dark">
            Your On-Ramp: The "Clarity Before Code" Assessment
          </h2>
          <p className="text text-foreground-dark/80 mb-0 mx-auto">
            Every successful AI journey begins with a strategic, data-backed
            plan.
            {/* Our foundational philosophy of "Clarity Before Code" is
            embodied in our Assessment & Roadmap offerings. This is the
            essential first step that de-risks your investment and provides the
            blueprint for your journey with the AI Growth Engine. */}
          </p>
        </div>

        {/* Philosophy Principles */}
        <div className="mb-0">
          <h3 className="text-xl font-semibold text text-foreground-dark mb-8">
            Our Guiding Principles
          </h3>
          <div className=" max-w-6xl mx-auto">
            <div className="flex items-start gap-4 text-foreground-dark mb-4">
              <div className="">
                <CircleCheckBig className="w-6 h-6" />
              </div>
              <div className="text">
                <h5 className="font-semibold">Strategy First</h5>
                <div className="text-sm">
                  We immerse ourselves in your business context to ensure every
                  technical decision serves your strategic objectives.
                </div>
              </div>
            </div>
            <div className="flex items-start gap-4 text-foreground-dark mb-4">
              <div className="">
                <CircleCheckBig className="w-6 h-6" />
              </div>
              <div className="text">
                <h5 className="font-semibold">
                  De-Risk Through Strategic AI Assessment
                </h5>
                <div className="text-sm">
                  We validate assumptions, identify constraints, and build
                  consensus before a single line of code is written.
                </div>
              </div>
            </div>
            <div className="flex items-start gap-4 text-foreground-dark">
              <div className="">
                <CircleCheckBig className="w-6 h-6" />
              </div>
              <div className="text">
                <h5 className="font-semibold">Measurable Impact</h5>
                <div className="text-sm">
                  Our success is measured by your business outcomes. We
                  establish clear KPIs to drive an ROI-focused approach to
                  build, launch, and scale your business.
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* AI Assessment Offerings */}
      </div>
    </div>
  );
};
