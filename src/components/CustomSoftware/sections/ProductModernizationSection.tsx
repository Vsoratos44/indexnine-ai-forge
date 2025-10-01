import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { RefreshCw, AlertTriangle, CheckCircle } from "lucide-react";
import { CALENDLY_URL } from "../../../config/constants";
import styles from "../../../assets/css/stylesheet.module.css";

export const ProductModernizationSection: React.FC = () => {
  const challenges = [
    {
      title: "Stifled Innovation",
      description:
        "Monolithic architectures make it slow, risky, and expensive to launch new features or integrate modern capabilities like AI.",
    },
    {
      title: "Escalating Operational Costs",
      description:
        "Inefficient, on-premise systems lead to spiraling infrastructure costs—often exceeding $2M annually.",
    },
    {
      title: "System Fragility & Downtime",
      description:
        "Tightly-coupled, aging systems are prone to failure, threatening business continuity.",
    },
    {
      title: "Security & Compliance Risks",
      description:
        "Outdated libraries and platforms contain unpatched vulnerabilities.",
    },
  ];

  const codeModernization = [
    {
      category: "Upgrade Legacy Stacks",
      examples: [
        "Java → Java 21 with Spring Boot or Quarkus",
        "PHP → Exit Strategy to Node.js or Java 21",
        "Python 2.x → 3.x for AI/ML compatibility",
      ],
    },
    {
      category: "Database Migration",
      examples: [
        "DB2 → Snowflake for improved performance",
        "Oracle → PostgreSQL for cost reduction",
        "Legacy SQL → Modern cloud-native databases",
      ],
    },
    {
      category: "AI-Accelerated Refactoring",
      examples: [
        "Auto-detect legacy patterns with AI tools",
        "Rewrite boilerplate code automatically",
        "Accelerate modernization timelines by 50%",
      ],
    },
  ];

  const architecturalTransformation = [
    {
      title: "SaaSify Your Product",
      description:
        "Migrate on-premise applications to the cloud to unlock scalability and new subscription-based revenue models.",
    },
    {
      title: "Build True Multi-Tenancy",
      description:
        "Re-architect systems to efficiently and securely serve multiple customers from a single, manageable instance.",
    },
    {
      title: "Hybrid/Multi-Cloud",
      description:
        "Optimize for cost, performance, and data governance by leveraging the best of multiple cloud providers.",
    },
  ];

  const strategicEngagements = [
    {
      title: "Architectural Review & Cloud Cost Optimization",
      price: "$15,000+",
      duration: "2-3 weeks",
      description:
        "Deep-dive analysis to improve performance and dramatically reduce cloud spend.",
    },
    {
      title: "Outcome-Based QA Automation",
      price: "Custom",
      duration: "Ongoing",
      description:
        "Deploy expert QA teams to build robust automation suites that enable modernization without disrupting revenue.",
    },
    {
      title: "UX Audit & Redesign",
      price: "$20,000+",
      duration: "3-4 weeks",
      description:
        "Comprehensive UX audits to identify and resolve workflow issues and end-user pain points.",
    },
  ];

  return (
    <section
      id="product-modernization"
      className={`py-12 lg:py-16 ${styles.pageDarkBg}`}
    >
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 mb-3">
              <RefreshCw className="w-5 h-5 text-brand-primary" />
              <span className="text-xs font-semibold text-brand-primary uppercase tracking-wider">
                Core Offering
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold mb-3 text-foreground-white font-montserrat">
              Product Modernization:{" "}
              <span className="text-brand-primary">
                From Technical Debt to Competitive Advantage
              </span>
            </h2>
            <p className="text-sm sm:text-base text-foreground-light-muted max-w-3xl mx-auto font-montserrat">
              Transform legacy systems into modern, cloud-native platforms that
              unlock innovation and reduce operational costs.
            </p>
          </div>

          {/* The Drag of Technical Debt */}
          <div className="mb-8">
            <Card className="bg-gradient-to-br from-[#ffffff10] to-[#ffffff05] border border-[#ffffff20] rounded-2xl p-6 shadow-md">
              <CardContent className="p-0">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-yellow-500/20 to-orange-500/20 flex items-center justify-center flex-shrink-0">
                    <AlertTriangle className="w-8 h-8 text-yellow-500" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground-light mb-3 font-montserrat">
                      The Drag of Technical Debt
                    </h3>
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  {challenges.map((challenge, index) => (
                    <div key={index} className="pl-20">
                      <h4 className="font-semibold text-foreground-light mb-1.5 text-sm font-montserrat">
                        {challenge.title}
                      </h4>
                      <p className="text-foreground-light-muted text-xs leading-relaxed font-montserrat">
                        {challenge.description}
                      </p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Code Modernization */}
          <div className="mb-8">
            <h3 className="text-lg sm:text-xl font-semibold text-foreground-light mb-4 text-center font-montserrat">
              Code Modernization
            </h3>
            <div className="grid md:grid-cols-3 gap-4 lg:gap-5">
              {codeModernization.map((item, index) => (
                <Card
                  key={index}
                  className="bg-gradient-to-br from-[#ffffff10] to-[#ffffff05] border border-[#ffffff20] rounded-2xl p-5 hover:shadow-lg transition-all duration-300 shadow-md"
                >
                  <CardContent className="p-0">
                    <h4 className="text-base font-semibold text-foreground-light mb-3 font-montserrat">
                      {item.category}
                    </h4>
                    <ul className="space-y-2">
                      {item.examples.map((example, idx) => (
                        <li
                          key={idx}
                          className="flex items-start gap-2 text-foreground-light-muted"
                        >
                          <CheckCircle className="w-3.5 h-3.5 text-brand-primary mt-0.5 flex-shrink-0" />
                          <span className="text-xs font-montserrat">{example}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Architectural Transformation */}
          <div className="mb-8">
            <h3 className="text-lg sm:text-xl font-semibold text-foreground-light mb-4 text-center font-montserrat">
              Architectural Transformation
            </h3>
            <div className="grid md:grid-cols-3 gap-4 lg:gap-5">
              {architecturalTransformation.map((item, index) => (
                <Card
                  key={index}
                  className="bg-gradient-to-br from-[#ffffff10] to-[#ffffff05] border border-[#ffffff20] rounded-2xl p-5 hover:shadow-lg transition-all duration-300 shadow-md"
                >
                  <CardContent className="p-0">
                    <h4 className="text-base font-semibold text-foreground-light mb-2 font-montserrat">
                      {item.title}
                    </h4>
                    <p className="text-xs text-foreground-light-muted leading-relaxed font-montserrat">
                      {item.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Strategic Engagements */}
          <div className="mb-6">
            <h3 className="text-lg sm:text-xl font-semibold text-foreground-light mb-2 text-center font-montserrat">
              Our Strategic Engagements
            </h3>
            <p className="text-center text-foreground-light-muted mb-4 max-w-3xl mx-auto text-xs font-montserrat">
              Our modernization practice is delivered through targeted,
              outcome-focused engagements that deliver measurable business value.
            </p>
            <div className="grid md:grid-cols-3 gap-4 lg:gap-5">
              {strategicEngagements.map((engagement, index) => (
                <Card
                  key={index}
                  className="bg-white border-0 rounded-2xl p-5 flex flex-col shadow-md"
                >
                  <CardContent className="p-0 flex-1">
                    <div className="mb-2.5">
                      <div className="text-lg font-bold text-foreground-dark mb-0.5 font-montserrat">
                        {engagement.price}
                      </div>
                      <div className="text-xs text-foreground-dark/60 mb-1.5 font-montserrat">
                        {engagement.duration}
                      </div>
                      <h4 className="text-sm font-semibold text-foreground-dark font-montserrat">
                        {engagement.title}
                      </h4>
                    </div>
                    <p className="text-foreground-dark/70 text-xs leading-relaxed font-montserrat">
                      {engagement.description}
                    </p>
                  </CardContent>
                  <Button
                    variant="btnPrimary"
                    size="sm"
                    className="w-full mt-3 h-9 text-xs"
                    onClick={() => window.open(CALENDLY_URL, "_blank")}
                  >
                    Learn More
                  </Button>
                </Card>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="text-center bg-gradient-to-br from-[#ffffff10] to-[#ffffff05] border border-[#ffffff20] rounded-2xl p-6 shadow-lg">
            <h3 className="text-lg sm:text-xl font-semibold text-foreground-light mb-2 font-montserrat">
              Ready to Modernize Your Platform?
            </h3>
            <p className="text-foreground-light-muted mb-4 max-w-2xl mx-auto text-sm font-montserrat">
              Let's assess your current architecture and create a clear path to a
              modern, cloud-native platform.
            </p>
            <Button
              variant="btnSecondary"
              size="lg"
              onClick={() => window.open(CALENDLY_URL, "_blank")}
              className="h-11 text-sm"
            >
              Schedule Modernization Assessment
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
