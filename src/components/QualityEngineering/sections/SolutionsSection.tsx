import React from "react";
import { SectionHeading } from "../shared/SectionHeading";
import { FeatureCard } from "../shared/FeatureCard";
import { MetricCard } from "../shared/MetricCard";
import {
  platformsData,
  applicationsData,
} from "../../../data/qualityEngineering/platforms";
import styles from "../../../assets/css/stylesheet.module.css";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";
import { Button } from "@/components/atoms";
import { CALENDLY_URL } from "@/config/constants";

export const SolutionsSection: React.FC = () => {
  const handleCalendlyClick = () => {
    window.open(CALENDLY_URL, "_blank");
  };
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
          {/* <div className="pt-8">
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
          </div> */}

          {/* QAE Consulting Section */}
          <section
            id="qae-consulting"
            className="pt-24 lg:pt-32 bg-transparent relative overflow-hidden"
          >
            <div className="container mx-auto px-6">
              <div className="max-w-6xl mx-auto">
                <SectionHeading
                  title="Our Strategic QE Services"
                  description="We offer tangible, fixed-scope engagements designed to deliver immediate value and provide a clear path to modernizing your quality engineering practices."
                  variant="light"
                />

                <div className="grid lg:grid-cols-2 gap-6 max-w-4xl mx-auto">
                  <Card className="p-8 bg-[#fff] border-card-border shadow-lg hover:shadow-xl transition-all duration-300 relative text-foreground-dark flex flex-col">
                    <CardContent className="p-0 h-full">
                      <h3 className="text-2xl font-semibold mb-4 text-foreground-dark">
                        Sprint 0: Automation Kickstart
                      </h3>
                      <p className="text-foreground-dark/80 mb-6">
                        A 2-week intensive engagement to build and deliver a
                        working Proof-of-Concept for your most critical user
                        flow.
                      </p>
                      <h4 className="font-semibold text-foreground-dark mb-3">
                        Deliverables:
                      </h4>
                      <ul className="space-y-3 mb-6">
                        <li className="flex items-start gap-3">
                          <CheckCircle className="h-5 w-5 text-brand-purple mt-0.5 flex-shrink-0" />
                          <span className="text-foreground-dark/80">
                            Working automated test suite for one key feature
                          </span>
                        </li>
                        <li className="flex items-start gap-3">
                          <CheckCircle className="h-5 w-5 text-brand-purple mt-0.5 flex-shrink-0" />
                          <span className="text-foreground-dark/80">
                            Setup of a modern test framework (e.g., Playwright)
                          </span>
                        </li>
                        <li className="flex items-start gap-3">
                          <CheckCircle className="h-5 w-5 text-brand-purple mt-0.5 flex-shrink-0" />
                          <span className="text-foreground-dark/80">
                            Integration into your CI/CD pipeline
                          </span>
                        </li>
                        <li className="flex items-start gap-3">
                          <CheckCircle className="h-5 w-5 text-brand-purple mt-0.5 flex-shrink-0" />
                          <span className="text-foreground-dark/80">
                            Live demo and team handoff
                          </span>
                        </li>
                      </ul>
                      <div className="text-lg font-semibold text-brand-primary mb-4">
                        Investment: Starting at $15,000
                      </div>
                    </CardContent>
                    <Button
                      className="w-full"
                      variant="btnPrimary"
                      onClick={handleCalendlyClick}
                    >
                      Kickstart Your Automation
                    </Button>
                  </Card>

                  <Card className="p-8 bg-[#000000] border-card-border shadow-lg hover:shadow-xl transition-all duration-300 relative flex flex-col">
                    <CardContent className="p-0 h-full">
                      <h3 className="text-2xl font-semibold mb-4 text-foreground">
                        Agile Product Quality (APQ) Roadmap
                      </h3>
                      <p className="text-foreground/80 mb-6">
                        A 4-week strategic assessment to analyze your entire
                        SDLC and deliver a comprehensive roadmap for achieving
                        elite-level quality and velocity.
                      </p>
                      <h4 className="font-semibold text-foreground mb-3">
                        Deliverables:
                      </h4>
                      <ul className="space-y-3 mb-6">
                        <li className="flex items-start gap-3">
                          <CheckCircle className="h-5 w-5 text-white mt-0.5 flex-shrink-0" />
                          <span className="text-foreground/80">
                            Full QE process and tooling audit
                          </span>
                        </li>
                        <li className="flex items-start gap-3">
                          <CheckCircle className="h-5 w-5 text-white mt-0.5 flex-shrink-0" />
                          <span className="text-foreground/80">
                            Risk analysis and test coverage gap identification
                          </span>
                        </li>
                        <li className="flex items-start gap-3">
                          <CheckCircle className="h-5 w-5 text-white mt-0.5 flex-shrink-0" />
                          <span className="text-foreground/80">
                            Prioritized automation strategy
                          </span>
                        </li>
                        <li className="flex items-start gap-3">
                          <CheckCircle className="h-5 w-5 text-white mt-0.5 flex-shrink-0" />
                          <span className="text-foreground/80">
                            Detailed implementation plan with ROI projections
                          </span>
                        </li>
                      </ul>
                      <div className="text-lg font-semibold text-brand-primary mb-4">
                        Investment: Starting at $30,000
                      </div>
                    </CardContent>
                    <Button
                      className="w-full"
                      variant="btnSecondary"
                      onClick={handleCalendlyClick}
                    >
                      Build My APQ Roadmap
                    </Button>
                  </Card>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </section>
  );
};
