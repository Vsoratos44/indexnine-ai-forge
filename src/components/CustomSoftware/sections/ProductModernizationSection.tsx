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
      className="pb-24 lg:pb-32 bg-transparent"
    >
      <div className="grid grid-cols-2 container px-4 sm:px-16 bg-transparent gap-16 pb-12 lg:pb-16">
        <div
          className={`bg-blue-500/5 rounded-2xl shadow shadow-glass backdrop-blur-md relative p-8 ${styles.cardBord1} `}
        >
          <div className="text-left mb-8">
            {/* <div className="inline-flex items-center gap-2 mb-3">
              <RefreshCw className="w-5 h-5 text-brand-primary" />
              <span className="text-xs font-semibold text-brand-primary uppercase tracking-wider">
                Core Offering
              </span>
            </div> */}
            <h2 className="text-2xl font-semibold mb-3 text-foreground-dark font-montserrat">
              Product Modernization:{" "}
              <span className="text-brand-primary">
                From Technical Debt to Competitive Advantage
              </span>
            </h2>
            <p className="text-sm sm:text-base text-foreground-dark-muted max-w-3xl mx-auto font-montserrat">
              Transform legacy systems into modern, cloud-native platforms that
              unlock innovation and reduce operational costs.
            </p>
          </div>

          {/* The Drag of Technical Debt */}
          <div className="">
            <div>
              <h3 className="text-2xl  font-semibold mb-6 text-foreground-dark text-left">
                The Drag of Technical Debt
              </h3>
            </div>
            <div className="">
              {challenges.map((challenge, index) => (
                <div
                  key={index}
                  className={`mb-2 text-foreground-dark flex items-start gap-2 mt-2`}
                >
                  <span>
                    {" "}
                    <CheckCircle className="h-5 w-5 text-blue-500 mt-0.5 flex-shrink-0 mt-1" />
                  </span>
                  <div>
                    <h3 className="font-semibold text-lg">{challenge.title}</h3>
                    <p className="">{challenge.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div
          className={`bg-blue-500/5 rounded-2xl shadow shadow-glass backdrop-blur-md relative p-8 ${styles.cardBord1} `}
        >
          <div className="">
            <h3 className="text-2xl font-semibold mb-4 text-foreground-dark text-left">
              Code Modernization
            </h3>
            <div className="">
              {codeModernization.map((item, index) => (
                <div key={index}>
                  <div className="p-0">
                    <h3 className="font-medium text-foreground-dark text mb-2">
                      {item.category}
                    </h3>
                    <ul className="space-y-2 mb-4">
                      {item.examples.map((example, idx) => (
                        <li
                          key={idx}
                          className="flex items-start justify-left gap-2 text-foreground-dark-muted"
                        >
                          <CheckCircle className="w-3.5 h-3.5 text-foreground-dark mt-0.5 flex-shrink-0" />
                          <span className="text-sm font-montserrat">
                            {example}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
            <h3 className="text-2xl font-semibold mb-4 text-foreground-dark text-left">
              Architectural Transformation
            </h3>
            <div className="">
              {architecturalTransformation.map((item, index) => (
                <div key={index} className="flex gap-2">
                  <span>
                    <CheckCircle className="w-4 h-4 text-foreground-dark mt-0.5 flex-shrink-0" />
                  </span>
                  <div className="pb-2">
                    <h3 className="font-semibold text text-foreground-dark mb-1">
                      {item.title}
                    </h3>
                    <p className="text-sm text-foreground-dark-muted">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          {/* Code Modernization */}

          {/* Strategic Engagements */}
          <div className="">
            <h3 className="text-2xl lg:text-3xl font-semibold mb-6 text-foreground-dark text-center">
              Our Strategic Engagements
            </h3>
            <p className="text-center text-foreground-dark-muted mb-4 max-w-3xl mx-auto font-montserrat">
              Our modernization practice is delivered through targeted,
              outcome-focused engagements that deliver measurable business
              value.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {strategicEngagements.map((engagement, index) => (
                <Card
                  className={`p-4 sm:p-6 lg:p-8 ${
                    index === 1 ? "bg-[#000000]" : "bg-[#ffffff19]"
                  } backdrop-blur-xl border-card-border shadow-lg hover:shadow-xl transition-all duration-300 relative text-foreground-dark flex flex-col`}
                  key={index}
                >
                  <CardContent className="p-0 flex-1">
                    <div className="mb-2.5">
                      <h3
                        className={`text-lg sm:text-xl font-semibold mb-3 sm:mb-4  ${
                          index === 1
                            ? "text-foreground-light"
                            : "text-foreground-dark"
                        } `}
                      >
                        {engagement.price}
                      </h3>
                      <p className="text-2xl sm:text-3xl font-semibold text-brand-purple mb-3 sm:mb-4">
                        {engagement.duration}
                      </p>
                      <h4
                        className={` font-semibold font-montserrat  ${
                          index === 1
                            ? "text-foreground-light"
                            : "text-foreground-dark"
                        } `}
                      >
                        {engagement.title}
                      </h4>
                    </div>
                    <p
                      className={` leading-relaxed font-montserrat  ${
                        index === 1
                          ? "text-foreground-light"
                          : "text-foreground-dark"
                      } `}
                    >
                      {engagement.description}
                    </p>
                  </CardContent>
                  <Button
                    variant={index === 1 ? "btnSecondary" : "btnPrimary"}
                    size="sm"
                    className="w-full mt-4 text-xs"
                    onClick={() => window.open(CALENDLY_URL, "_blank")}
                  >
                    Learn More
                  </Button>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
