import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, ArrowRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useSEO } from "@/hooks/useSEO";
import {
  ServiceSchema,
  BreadcrumbSchema,
  FAQSchema,
} from "@/components/SEOStructuredData";
import QuoteIcon from "../../assets/images/quote.svg";
import styles from "../../assets/css/stylesheet.module.css";
import { CALENDLY_URL } from "../../config/constants";

// Section Components
import { HeroSection } from "../../components/QualityEngineering/sections/HeroSection";
import { QualityDilemmaSection } from "../../components/QualityEngineering/sections/QualityDilemmaSection";
import { SolutionsSection } from "../../components/QualityEngineering/sections/SolutionsSection";
import { BlueprintSection } from "../../components/QualityEngineering/sections/BlueprintSection";
import { FAQSection } from "../../components/QualityEngineering/sections/FAQSection";

// Shared Components
import { SectionHeading } from "../../components/QualityEngineering/shared/SectionHeading";
import { FeatureCard } from "../../components/QualityEngineering/shared/FeatureCard";

// Data
import { faqData } from "../../data/qualityEngineering/faqData";
import { frameworkComparison } from "../../data/qualityEngineering/frameworkComparison";
import { partnerSteps } from "../../data/qualityEngineering/partnerSteps";

const QualityEngineering = () => {
  useSEO({
    title:
      "Quality Engineering Services & Test Automation Solutions | Enterprise QA Testing | IndexNine",
    description:
      "Leading quality engineering and test automation services for enterprises. Strategic QA testing, automated testing solutions, performance testing, and quality assurance consulting. Transform your software testing with outcome-driven quality engineering.",
    canonicalUrl: "https://www.indexnine.com/services/quality-engineering",
    keywords:
      "quality engineering services, test automation solutions, enterprise QA testing, automated testing services, performance testing, quality assurance consulting, software testing automation, QE consulting, continuous testing, test strategy consulting, quality engineering framework, enterprise testing solutions, QA automation services, test automation framework development, software quality assurance",
    ogImage: "https://www.indexnine.com/images/og-quality-engineering.png",
    schemaType: "WebPage",
  });

  const handleCalendlyClick = () => {
    window.open(CALENDLY_URL, "_blank");
  };

  return (
    <div className="min-h-screen bg-background-dark">
      {/* Structured Data */}
      <ServiceSchema
        name="Enterprise Quality Engineering and Test Automation"
        description="IndexNine's Quality Engineering Studio provides strategic services including test automation, performance testing, and Agile Product Quality (APQ) roadmaps to ensure the reliability of mission-critical software."
        serviceType="Quality Engineering"
      />

      <BreadcrumbSchema
        items={[
          { name: "Services", url: "https://www.indexnine.com/services" },
          {
            name: "Quality Engineering",
            url: "https://www.indexnine.com/services/quality-engineering",
          },
        ]}
      />

      <FAQSchema
        faqItems={faqData.map((item) => ({
          question: item.question,
          answer: item.answer,
        }))}
      />

      <Header />

      {/* Hero Section */}
      <HeroSection />
      <div
        className={`bg-fixed bg-top bg-cover bg-white ${styles.sectionBgData}`}
      >
        {/* Quality Dilemma Section */}
        <QualityDilemmaSection />

        {/* QAE Solutions Section */}
        <SolutionsSection />

        {/* QAE Case Study Section */}
        <section id="qae-case-study" className="pb-24 lg:pb-32">
          <div className="md:container mx-4 md:mx-auto">
            <div className="max-w-4xl bg-[#fff] p-4 md:p-8 rounded-3xl mx-auto">
              <div className="mb-6">
                <span className="inline-block px-6 py-3 bg-brand-primary/10 text-brand-primary rounded-full text-sm font-medium border border-brand-primary/20">
                  Case Study: Outcome-Based Automation
                </span>
              </div>
              <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-foreground-dark">
                Enabling Velocity for a High-Growth B2B Travel Platform
              </h2>

              <div>
                <p className="text-lg text-foreground-dark mb-6">
                  A rapidly scaling B2B Travel Platform client was crippled by a
                  5-day manual regression testing cycle, blocking their ability
                  to release new features. We implemented a comprehensive test
                  automation suite using Robot Framework, tied to a 100%
                  success-fee engagement model.
                </p>
                <div className="grid grid-cols-2 gap-6">
                  <Card className="p-6 text-center bg-gradient-to-br from-[#1c1c1c] via-[#3a3a3a] to-[#4D4E4F] shadow-lg">
                    <CardContent className="p-0">
                      <div className="text-3xl font-semibold text-white mb-2">
                        97%
                      </div>
                      <p className="text-sm text-foreground/80">
                        Reduction in Execution Time (5 days to 30 mins)
                      </p>
                    </CardContent>
                  </Card>
                  <Card className="p-6 text-center bg-gradient-to-br from-[#1c1c1c] via-[#3a3a3a] to-[#4D4E4F] shadow-lg">
                    <CardContent className="p-0">
                      <div className="text-3xl font-semibold text-white mb-2">
                        100%
                      </div>
                      <p className="text-sm text-foreground/80">
                        Success Fee Achieved
                      </p>
                    </CardContent>
                  </Card>
                </div>

                <blockquote className="bg-[#F1F2FF] flex rounded-xl mt-12">
                  <div className="relative w-24 h-24 md:w-36 md:h-36 mx-6">
                    <img src={QuoteIcon} alt="" />
                  </div>
                  <div className="p-8">
                    <p className="text-foreground-dark mb-2">
                      "IndexNine didn't just meet our expectations; they
                      shattered them. Reducing our regression time to 30 minutes
                      has fundamentally changed how we build and ship product.
                      They are true partners in quality."
                    </p>
                    <span className="text-sm text-foreground-dark/70 font-medium">
                      — CTO, Tripjack
                    </span>
                  </div>
                </blockquote>
                <div className="mt-6">
                  <Button variant="btnPrimary" size="lg" asChild>
                    <Link to="/insights/case-studies/tripjack">
                      Read Full Tripjack Case Study
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* QAE Consulting Section */}
        <section
          id="qae-consulting"
          className="pb-24 lg:pb-32 bg-transparent relative overflow-hidden"
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
                      working Proof-of-Concept for your most critical user flow.
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
                      A 4-week strategic assessment to analyze your entire SDLC
                      and deliver a comprehensive roadmap for achieving
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

        <div className="bg-transparent text-foreground">
          {/* QAE Blueprint Section - Methodology */}
          <BlueprintSection />
        </div>

        {/* Frameworks Comparison Section */}
        <section
          id="qae-frameworks"
          className="pb-24 lg:pb-32 relative bg-transparent overflow-hidden"
        >
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <SectionHeading
                title="The Right Tool for the Job:"
                highlight="Robot Framework vs. Playwright"
                variant="light"
              />
              <p className="text-lg text-foreground-dark-muted max-w-6xl mx-auto text-center mb-4">
                In today's competitive landscape, the pressure to balance
                quality, velocity, and cost is relentless. Cutting corners on
                Quality Assurance (QA) isn't an option when your product's
                reputation is on the line, but slow release cycles and rising
                technical debt can sink you before you find product-market fit.
              </p>
              <p className="text-lg text-foreground-dark-muted max-w-6xl mx-auto text-center mb-12">
                The good news? The days of wrestling with the flaky tests and
                cross-browser nightmares of legacy frameworks are over. Two
                modern titans have emerged to address these pains: Robot
                Framework and Playwright. They deliver the speed, reliability,
                and developer-friendliness that modern quality engineering
                services have been missing.
              </p>

              <div className="overflow-x-auto">
                <div className="relative overflow-hidden bg-gradient-card-light border  border-brand-primary/10 rounded-2xl hover:shadow-glass-sm transition-all duration-500 animate-fade-in group">
                  {/* <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/8 via-transparent to-brand-purple/8 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" /> */}
                  {/* <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-white/10 rounded-2xl opacity-50" /> */}
                  <table className="relative w-full border-collapse rounded-lg overflow-hidden">
                    <thead>
                      <tr className="bg-brand-primary/10">
                        <th
                          scope="col"
                          className="text-left p-4 font-semibold text-foreground-dark"
                        >
                          Feature
                        </th>
                        <th
                          scope="col"
                          className="text-center p-4 font-semibold text-foreground-dark"
                        >
                          Robot Framework
                        </th>
                        <th
                          scope="col"
                          className="text-center p-4 font-semibold text-foreground-dark"
                        >
                          Playwright
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {frameworkComparison.map((row, index) => (
                        <tr
                          key={index}
                          className={
                            index % 2 === 0 ? "bg-white" : "bg-[#f8f8f8]"
                          }
                        >
                          <td className="p-4 font-medium text-foreground-dark">
                            {row.feature}
                          </td>
                          <td className="p-4 text-center text-foreground-dark-muted">
                            {row.robot}
                          </td>
                          <td className="p-4 text-center text-foreground-dark-muted">
                            {row.playwright}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="text-center mt-8">
                <Button variant="btnPrimary" asChild>
                  <Link
                    to="/insights/blogs/robot-framework-vs-playwright"
                    className="no-underline"
                  >
                    Read Full Comparison Blog
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        <div className="pb-24 lg:pb-32 bg-transparent relative overflow-hidden">
          {/* Partner Section */}
          <div className="text-center px-4">
            <SectionHeading
              title="Don't Settle for 'Good Enough':"
              highlight="A Partner in Quality Engineering"
              variant="light"
            />
            <p className="text-lg text-foreground-dark-muted mb-8 max-w-6xl mx-auto leading-relaxed">
              Choosing not to leverage modern test automation services is
              actively costing your business—in slower releases, developer
              frustration, higher bug-fixing expenses, and lost customers. But a
              powerful tool is only as good as the artisan wielding it.
            </p>
            <p className="text-lg text-foreground-dark-muted mb-8 max-w-6xl mx-auto leading-relaxed">
              Before a single line of code is written, our Sprint 0 process lays
              the critical groundwork. We dive deep to understand your product,
              workflows, and business goals to build an automation strategy that
              is technically sound and perfectly aligned with your objectives.
            </p>
            <div className="max-w-6xl mx-auto mb-8">
              <h3 className="text-xl font-semibold mb-6 text-foreground-dark">
                This is how we execute:
              </h3>

              <div className="grid md:grid-cols-3 gap-6">
                {partnerSteps.map((step, index) => (
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

          {/* FAQ Section */}
          <FAQSection />
        </div>
      </div>

      {/* Final CTA Section */}
      <section
        id="contact"
        className={`py-24 lg:py-32 text-white ${styles.ctaBg}`}
      >
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold mb-6 text-foreground-white">
                <span className="leading-[1.2]">
                  Ready to Transform Your QA Process?
                </span>
              </h2>
              <p className="text-lg text-foreground-white/80 mb-8 leading-relaxed max-w-4xl mx-auto">
                Let's discuss your quality challenges and build a value-driven
                roadmap to accelerate your releases and build more reliable
                software. Schedule a complimentary, no-obligation call with a
                senior QE architect today.
              </p>
              <Button
                type="button"
                size="lg"
                variant="btnSecondary"
                onClick={handleCalendlyClick}
              >
                Book My APQ Roadmap Session
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default QualityEngineering;
