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
      className={`py-24 lg:py-32 ${styles.pageDarkBg}`}
    >
      <div className="container mx-auto px-6">
        <div className="max-w-8xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 mb-6">
              <RefreshCw className="w-6 h-6 text-brand-primary" />
              <span className="text-sm font-semibold text-brand-primary uppercase tracking-wider">
                Core Offering
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold mb-6 text-foreground-white">
              Product Modernization:{" "}
              <span className="text-brand-primary">
                From Technical Debt to Competitive Advantage
              </span>
            </h2>
            <p className="text-lg text-foreground-light-muted max-w-4xl mx-auto">
              Transform legacy systems into modern, cloud-native platforms that
              unlock innovation and reduce operational costs.
            </p>
          </div>

          {/* The Drag of Technical Debt */}
          <div className="mb-16">
            <div className="bg-gradient-to-br from-[#ffffff10] to-[#ffffff05] border border-[#ffffff20] rounded-3xl p-8 lg:p-12">
              <div className="flex items-start gap-4 mb-6">
                <AlertTriangle className="w-8 h-8 text-yellow-500 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-2xl font-semibold text-foreground-light mb-6">
                    The Drag of Technical Debt
                  </h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    {challenges.map((challenge, index) => (
                      <div key={index}>
                        <h4 className="font-semibold text-foreground-light mb-2">
                          {challenge.title}
                        </h4>
                        <p className="text-foreground-light-muted text-sm leading-relaxed">
                          {challenge.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Code Modernization */}
          <div className="mb-16">
            <h3 className="text-2xl font-semibold text-foreground-light mb-8 text-center">
              Code Modernization
            </h3>
            <div className="grid lg:grid-cols-3 gap-6">
              {codeModernization.map((item, index) => (
                <Card
                  key={index}
                  className="bg-gradient-card-light border border-[#ffffff39] rounded-2xl p-8 hover:border-brand-primary/30 transition-all duration-500 bg-white-600 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-20"
                >
                  <CardContent className="p-0">
                    <h4 className="text-xl font-semibold text-foreground-light mb-4">
                      {item.category}
                    </h4>
                    <ul className="space-y-3">
                      {item.examples.map((example, idx) => (
                        <li
                          key={idx}
                          className="flex items-start gap-3 text-foreground-light-muted"
                        >
                          <CheckCircle className="w-4 h-4 text-brand-primary mt-1 flex-shrink-0" />
                          <span className="text-sm">{example}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Architectural Transformation */}
          <div className="mb-16">
            <h3 className="text-2xl font-semibold text-foreground-light mb-8 text-center">
              Architectural Transformation
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              {architecturalTransformation.map((item, index) => (
                <Card
                  key={index}
                  className="bg-gradient-to-br from-[#ffffff10] to-[#ffffff05] border border-[#ffffff20] rounded-2xl p-8 hover:border-brand-primary/30 transition-all duration-300"
                >
                  <CardContent className="p-0">
                    <h4 className="text-lg font-semibold text-foreground-light mb-3">
                      {item.title}
                    </h4>
                    <p className="text-foreground-light-muted leading-relaxed">
                      {item.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Strategic Engagements */}
          <div className="mb-12">
            <h3 className="text-2xl font-semibold text-foreground-light mb-8 text-center">
              Our Strategic Engagements
            </h3>
            <p className="text-center text-foreground-light-muted mb-8 max-w-3xl mx-auto">
              Our modernization practice is delivered through targeted,
              outcome-focused engagements that deliver measurable business value.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              {strategicEngagements.map((engagement, index) => (
                <Card
                  key={index}
                  className="bg-white border-0 rounded-2xl p-8 flex flex-col"
                >
                  <CardContent className="p-0 flex-1">
                    <div className="mb-4">
                      <div className="text-2xl font-bold text-foreground-dark mb-1">
                        {engagement.price}
                      </div>
                      <div className="text-sm text-foreground-dark/60 mb-3">
                        {engagement.duration}
                      </div>
                      <h4 className="text-lg font-semibold text-foreground-dark">
                        {engagement.title}
                      </h4>
                    </div>
                    <p className="text-foreground-dark/70 text-sm leading-relaxed">
                      {engagement.description}
                    </p>
                  </CardContent>
                  <Button
                    variant="btnPrimary"
                    size="sm"
                    className="w-full mt-6"
                    onClick={() => window.open(CALENDLY_URL, "_blank")}
                  >
                    Learn More
                  </Button>
                </Card>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="text-center bg-gradient-to-br from-[#ffffff10] to-[#ffffff05] border border-[#ffffff20] rounded-3xl p-8 lg:p-12">
            <h3 className="text-2xl font-semibold text-foreground-light mb-4">
              Ready to Modernize Your Platform?
            </h3>
            <p className="text-foreground-light-muted mb-6 max-w-2xl mx-auto">
              Let's assess your current architecture and create a clear path to a
              modern, cloud-native platform.
            </p>
            <Button
              variant="btnSecondary"
              size="lg"
              onClick={() => window.open(CALENDLY_URL, "_blank")}
            >
              Schedule Modernization Assessment
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
