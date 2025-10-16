import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  CheckCircle,
  Rocket,
  AlertCircle,
  Zap,
  Sparkles,
  Bot,
  TestTube2,
  ArrowRight,
} from "lucide-react";
import { Link } from "react-router-dom";
import { CALENDLY_URL } from "../../../config/constants";
import styles from "../../../assets/css/stylesheet.module.css";
import ProdLaunch from "../../../assets/images/prod-launch.svg";

export const ProductLaunchSection: React.FC = () => {
  const dilemmas = [
    "Defining the MVP: How do I distill a grand vision into the essential first product that solves a core problem?",
    "Feature Prioritization: What features are truly valuable versus which are distractions?",
    "Achieving Velocity: How can I bring a high-quality product to market with the speed necessary to secure first-mover advantage?",
    "De-Risking Investment: How do I ensure my initial capital is deployed on a buildable, scalable plan?",
  ];

  const sprintZeroSteps = [
    {
      title: "Strategic Validation",
      description:
        "We pressure-test the core business and user problems to ensure the product is aimed at a high-value target.",
    },
    {
      title: "Architectural Blueprint",
      description:
        "Our senior architects design a scalable, secure, and production-ready technical architecture from day one.",
    },
    {
      title: "Interactive Prototype",
      description:
        "Our Design Studio creates a high-fidelity, interactive prototype that validates the user journey and provides a clear, buildable plan.",
    },
    {
      title: "De-Risked Roadmap",
      description:
        "The final deliverable is a comprehensive plan with a fixed-bid budget and guaranteed delivery timeline.",
    },
  ];

  const platforms = [
    {
      name: "snap.mvp",
      description:
        "A batteries-included, multi-tenant SaaS starter kit that accelerates go-to-market by over 3 months.",
      impact: "3+ months faster",
      icon: Zap,
      color: "from-blue-500 to-cyan-500",
      blogLink: "/insights/blogs/ai-assisted-software-engineering",
    },
    {
      name: "snap.bluprint",
      description:
        "An agentic workflow that automates the IndexNine design process to achieve over 50% faster design outcomes.",
      impact: "50% faster design",
      icon: Sparkles,
      color: "from-purple-500 to-pink-500",
      blogLink: "/insights/blogs/ai-assisted-software-engineering",
    },
    {
      name: "snap.agents",
      description:
        "A self-service tool for rapidly prototyping and integrating agentic AI workflows into new or existing products.",
      impact: "Rapid AI integration",
      icon: Bot,
      color: "from-green-500 to-emerald-500",
      blogLink: "/insights/blogs/agentic-ai-enterprise-future",
    },
    {
      name: "snap.automate",
      description:
        "A framework to accelerate QA automation, ensuring quality and reliability are built in, not bolted on.",
      impact: "Built-in quality",
      icon: TestTube2,
      color: "from-orange-500 to-red-500",
      blogLink: "/insights/blogs/quality-engineering-platform",
    },
  ];

  return (
    <section className="pb-0 lg:pb-0 bg-transparent pt-8">
      <div className="grid gird-cols-1 sm:grid-cols-2 container px-4 sm:px-16  bg-transparent gap-16 pb-16">
        <div
          className={`bg-blue-500/5 rounded-2xl shadow shadow-glass backdrop-blur-md relative p-8 ${styles.cardBord1} `}
        >
          <div className="">
            <h3 className="text-2xl font-semibold mb-4 text-foreground-dark">
              The Founder's Dilemma
            </h3>

            <ul className="">
              {dilemmas.map((dilemma, index) => (
                <li
                  key={index}
                  className={`mb-2 text-foreground-dark flex items-start gap-4 mt-4`}
                >
                  <span>
                    {" "}
                    <CheckCircle className="h-5 w-5 text-[#505CFD] mt-0.5 flex-shrink-0 mt-1" />
                  </span>
                  <div>
                    <h3 className="font-semibold text-lg">
                      {dilemma.split(":")[0]}:
                    </h3>
                    {dilemma.split(":")[1]}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div>
          <img src={ProdLaunch} alt="" className="w-full" />
        </div>
      </div>
      <div className={` container px-4 sm:px-16`}>
        <div className="max-w-8xl mx-auto relative group h-full bg-gradient-to-b from-brand-primary/50 via-brand-primary/5 to-white/50 border-glass-border rounded-[1.25rem] p-1 hover:shadow-glow  transition-all duration-500 transform group-hover:-translate-y-1 backdrop-blur-lg">
          {/* Acceleration Platforms */}
          <div className=" bg-gradient-to-b from-brand-primary/5 to-brand-primary/5  relative overflow-hidden bg-white rounded-2xl p-8 pb-16 md:pb-32">
            <h3 className="text-2xl font-semibold mb-2 text-foreground-dark text-center">
              The Acceleration Engine: Our Proprietary Platforms
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0">
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
      <div className="contanier pt-20">
        {/* Pricing Cards */}
        <div className="mb">
          <h3 className="text-2xl lg:text-3xl font-semibold mb-8 text-foreground-dark text-center">
            Choose Your Entry Point
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-5xl mx-4 md:mx-auto">
            <Card className="bg-white border border-[#00000019] rounded-2xl p-8 flex flex-col">
              <CardContent className="p-0 flex-1">
                <div className="mb-6">
                  <div className="text-sm font-medium text-brand-primary mb-2">
                    Sprint Zero
                  </div>
                  <div className="text-3xl font-bold text-foreground-dark mb-2">
                    $25,000+
                  </div>
                  <div className="text-sm text-foreground-dark/60">
                    2-4 weeks
                  </div>
                </div>
                <p className="text-foreground-dark/80 mb-6">
                  Strategic validation and de-risked roadmap for your product
                  launch.
                </p>
                <h5 className="font-semibold text-foreground-dark mb-3">
                  Deliverables:
                </h5>
                <ul className="space-y-3 mb-6">
                  {[
                    "Strategic validation workshop",
                    "Technical architecture blueprint",
                    "High-fidelity interactive prototype",
                    "De-risked roadmap with fixed-bid estimate",
                    "Technology stack recommendations",
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-foreground-dark mt-0.5 flex-shrink-0" />
                      <span className="text-foreground-dark/80">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <Button
                variant="btnPrimary"
                className="w-full"
                onClick={() => window.open(CALENDLY_URL, "_blank")}
              >
                Start Sprint Zero
              </Button>
            </Card>

            <Card className="bg-gradient-to-br from-[#1c1c1c] via-[#3a3a3a] to-[#4D4E4F] border-0 rounded-2xl p-8 flex flex-col relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-gradient-to-r from-brand-primary to-brand-purple text-white px-6 py-2 rounded-full text-sm font-semibold shadow-lg">
                  Most Popular
                </span>
              </div>
              <CardContent className="p-0 flex-1">
                <div className="mb-6">
                  <div className="text-sm font-medium text-brand-primary mb-2">
                    MVP Development
                  </div>
                  <div className="text-3xl font-bold text-foreground mb-2">
                    $75,000+
                  </div>
                  <div className="text-sm text-foreground/60">8-12 weeks</div>
                </div>
                <p className="text-foreground/80 mb-6">
                  Complete MVP development using our snap.mvp accelerator for
                  rapid market entry.
                </p>
                <h5 className="font-semibold text-foreground mb-3">
                  Deliverables:
                </h5>
                <ul className="space-y-3 mb-6">
                  {[
                    "Everything in Sprint Zero",
                    "Production-ready MVP using snap.mvp accelerator",
                    "Full DevOps setup and CI/CD pipeline",
                    "Automated testing suite",
                    "Launch support and handoff",
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-white mt-0.5 flex-shrink-0" />
                      <span className="text-foreground/80">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <Button
                variant="btnSecondary"
                className="w-full"
                onClick={() => window.open(CALENDLY_URL, "_blank")}
              >
                Launch Your MVP
              </Button>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
