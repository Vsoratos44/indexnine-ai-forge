import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  RefreshCw,
  AlertTriangle,
  CheckCircle,
  Rocket,
  AlertCircle,
  Zap,
  Sparkles,
  Bot,
  TestTube2,
  ArrowRight,
} from "lucide-react";
import { CALENDLY_URL } from "../../../config/constants";
import styles from "../../../assets/css/stylesheet.module.css";
import ProdModernz from "../../../assets/images/prod-modernz.svg";
import { Link } from "react-router-dom";

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

  const platforms = [
    {
      name: "SaaSify Your Product",
      description:
        "Migrate on-premise applications to the cloud to unlock scalability and new subscription-based revenue models.",
      impact: "Scalability and Flexibility",
      icon: Zap,
      color: "from-blue-500 to-cyan-500",
      blogLink: "/insights/blogs/",
    },
    {
      name: "Build True Multi-Tenancy",
      description:
        "Re-architect systems to efficiently and securely serve multiple customers from a single, manageable instance.",
      impact: "Enhanced Security and Isolation",
      icon: Sparkles,
      color: "from-purple-500 to-pink-500",
      blogLink: "/insights/blogs/",
    },
    {
      name: "Hybrid/Multi-Cloud",
      description:
        "Optimize for cost, performance, and data governance by leveraging the best of multiple cloud providers.",
      impact: "Performance Enhancement",
      icon: Bot,
      color: "from-green-500 to-emerald-500",
      blogLink: "/insights/blogs/",
    },
  ];

  return (
    <section id="product-modernization" className="pt-8 bg-transparent">
      <div className="grid grid-cols-2 container px-4 sm:px-16 bg-transparent gap-16 pb-12 lg:pb-16">
        <div
          className={`bg-blue-500/5 rounded-2xl shadow shadow-glass backdrop-blur-md relative p-8 ${styles.cardBord1} `}
        >
          {/* The Drag of Technical Debt */}
          <div className="">
            <div>
              <h3 className="text-2xl  font-semibold mb-4 text-foreground-dark text-left">
                The Drag of Technical Debt
              </h3>
            </div>
            <div className="">
              {challenges.map((challenge, index) => (
                <div
                  key={index}
                  className={`mb-2 text-foreground-dark flex items-start gap-4 mt-4`}
                >
                  <span>
                    <CheckCircle className="h-5 w-5 text-[#505CFD] mt-0.5 flex-shrink-0 mt-1" />
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
        <div>
          <img src={ProdModernz} alt="" className="w-full" />
        </div>
      </div>
      <div className={` container px-4 sm:px-16`}>
        <div className="max-w-8xl mx-auto relative group h-full bg-gradient-to-b from-brand-primary/50 via-brand-primary/5 to-white/50 border-glass-border rounded-[1.25rem] p-1 hover:shadow-glow  transition-all duration-500 transform group-hover:-translate-y-1 backdrop-blur-lg">
          {/* Acceleration Platforms */}
          <div className=" bg-gradient-to-b from-brand-primary/5 to-brand-primary/5  relative overflow-hidden bg-white rounded-2xl p-8 pb-16 md:pb-32">
            <h3 className="text-2xl font-semibold mb-2 text-foreground-dark text-center">
              Architectural Transformation
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-0">
              {platforms.map((platform, index) => {
                const IconComponent = platform.icon;
                return (
                  <Link
                    key={index}
                    to={platform.blogLink}
                    className="block group pb-20 sm:pb-0"
                  >
                    <Card className="bg-transparent border border-blue-500 border-dashed rounded-sm px-5  mt-20 hover:shadow-lg transition-all duration-300 h-full shadow-md ">
                      <CardContent className="p-0 flex flex-col h-full">
                        <div className="flex-1">
                          <div className="flex items-start justify-between mb-3">
                            <div
                              className={`w-12 h-12 rounded-[.75rem] z-10 bg-gradient-to-r from-brand-primary/25 to-brand-primary/15 bg-white flex items-center justify-center shadow-md mx-auto -mt-16`}
                            >
                              <IconComponent className="w-5 h-5 text-[#505CFD] " />
                            </div>
                          </div>
                          <div className="bg-blue-500 -mt-10 -mx-4 z-9 pt-4 pb-2 text-center rounded-sm">
                            <h4 className="text-base font-semibold text-foreground-light  font-montserrat">
                              {platform.name}
                            </h4>
                            <small>{platform.impact}</small>
                          </div>
                          <div className="text-sm text-foreground-dark text-center p-8 leading-relaxed -mb-16">
                            {platform.description}
                          </div>
                        </div>
                        <div className="bg-brand-primary/20 p-4 -mx-5 mt-auto">
                          <Button
                            variant="btnPrimary"
                            size="sm"
                            className="w-full"
                          >
                            Learn more
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-6 mt-12 ">
        <div className="max-w-6xl mx-auto">
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
