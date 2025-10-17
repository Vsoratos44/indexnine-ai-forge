import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export const CaseStudiesSection: React.FC = () => {
  const caseStudies = [
    {
      title: "Sensable - AI Vision Platform",
      industry: "Manufacturing",
      description:
        "Developed a sophisticated, cloud-native (AWS) web-based platform for a global manufacturing client to optimize production and implement predictive maintenance by processing massive data streams from factory floor sensors.",
      outcomes: [
        "Real-time processing of 100+ sensor streams",
        "30% reduction in machine downtime",
        "2D/3D visualization of production lines",
      ],
      tags: ["AI", "Data Engineering", "Cloud-Native"],
      link: "/insights/case-studies/sensable",
    },
    {
      title: "FSOX - Field Service Optimization",
      industry: "Consulting",
      description:
        "Partnered with a top 5 global consulting firm to build a platform that provided data-driven route and schedule optimization for field service personnel by ingesting real-time mapping and weather data.",
      outcomes: [
        "40% improvement in field service efficiency",
        "Real-time route optimization",
        "Enterprise-ready SaaS platform",
      ],
      tags: ["ML", "Optimization", "SaaS"],
      link: "/insights/case-studies/fsox",
    },
    {
      title: "Sphere - Data Mart for Parking",
      industry: "Parking Management",
      description:
        "Built the central data nervous system for one of the largest parking providers in USA, processing real-time occupancy data and daily revenue reconciliation.",
      outcomes: [
        "Real-time occupancy tracking across 1000+ locations",
        "$2M+ annual infrastructure cost savings",
        "Unified data pane for all stakeholders",
      ],
      tags: ["Data Engineering", "Real-Time", "Analytics"],
      link: "/insights/case-studies/sphere",
    },
  ];

  return (
    <section className="py-24 lg:py-32 bg-transparent">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-8xl mx-auto">
          <div className="text-center max-w-6xl mx-auto mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold mb-4 sm:mb-6 text-foreground-dark font-montserrat px-4 sm:px-0">
              Proof in Action:{" "}
              <span className="text-brand-primary">
                Our Engineering Success Stories
              </span>
            </h2>
            <p className="text-base sm:text-lg text-foreground-dark/80 max-w-3xl mx-auto font-montserrat px-4 sm:px-0">
              Real-world results from organizations that partnered with us to
              build and modernize mission-critical software.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-8 sm:mb-12 px-4 sm:px-0">
            {caseStudies.map((study, index) => (
              <div
                key={index}
                className="relative group h-full bg-gradient-to-b from-brand-primary/40 via-brand-primary/5 to-brand-primary/5 border-glass-border rounded-[1.25rem] p-1 hover:shadow-glow  transition-all duration-500 transform group-hover:-translate-y-1 backdrop-blur-lg"
              >
                <div className="relative overflow-hidden bg-white rounded-2xl p-6 h-full flex flex-col">
                  <div>
                    <div className="mb-3 sm:mb-4">
                      <span className="inline-block px-2 sm:px-3 py-1 bg-brand-primary/10 text-brand-primary rounded-full text-xs font-semibold mb-3">
                        {study.industry}
                      </span>
                      <h3 className="text-lg sm:text-xl font-semibold text-foreground-dark mb-2 sm:mb-3 font-montserrat">
                        {study.title}
                      </h3>
                    </div>
                    <p className="text-sm sm:text-base text-foreground-dark/70 mb-4 leading-relaxed font-montserrat">
                      {study.description}
                    </p>
                    <div className="mb-4">
                      <p className="text-xs sm:text-sm font-semibold text-foreground-dark mb-2">
                        Key Outcomes:
                      </p>
                      <ul className="space-y-1.5 sm:space-y-2">
                        {study.outcomes.map((outcome, idx) => (
                          <li
                            key={idx}
                            className="text-xs sm:text-sm text-foreground-dark/70 flex items-start gap-2 font-montserrat"
                          >
                            <div className="w-1.5 h-1.5 rounded-full bg-brand-primary mt-1.5 flex-shrink-0" />
                            {outcome}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {study.tags.map((tag, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-1 bg-foreground-dark/5 text-foreground-dark/60 rounded text-xs"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  <Link
                    to={study.link}
                    className="inline-flex mt-auto items-center gap-2 text-brand-primary font-semibold hover:gap-3 transition-all duration-300 text-sm sm:text-base "
                  >
                    Read Case Study
                    <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center px-4 sm:px-0">
            <Button
              variant="btnPrimary"
              size="lg"
              asChild
              className="w-full sm:w-auto min-w-[240px] h-12 sm:h-14 text-sm sm:text-base"
            >
              <Link to="/insights/case-studies">Explore All Case Studies</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
