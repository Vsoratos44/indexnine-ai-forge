import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Rocket, TrendingUp, RefreshCw, Users } from "lucide-react";
import { CALENDLY_URL } from "../../../config/constants";

export const EngineeringPodsSection: React.FC = () => {
  const podTypes = [
    {
      name: "Launch Pod",
      icon: Rocket,
      composition: [
        "1 Senior Architect",
        "2-3 Full-Stack Engineers",
        "1 DevOps Engineer",
        "1 QA Engineer",
      ],
      bestFor: "MVP development and product launches",
      outcomes: "0-to-1 product in 8-12 weeks",
      color: "from-blue-500 to-purple-500",
    },
    {
      name: "Scale Pod",
      icon: TrendingUp,
      composition: [
        "1 Tech Lead",
        "3-5 Full-Stack Engineers",
        "1-2 Specialized Engineers",
        "1 QA Engineer",
      ],
      bestFor: "Scaling existing products and adding major features",
      outcomes: "2-3x development velocity increase",
      color: "from-green-500 to-teal-500",
    },
    {
      name: "Modernization Pod",
      icon: RefreshCw,
      composition: [
        "1 Solutions Architect",
        "2-3 Backend Engineers",
        "1 DevOps Engineer",
        "1 QA Automation Engineer",
      ],
      bestFor: "Legacy system modernization and migration",
      outcomes: "50% faster modernization timelines",
      color: "from-orange-500 to-red-500",
    },
  ];

  const differentiators = [
    {
      title: "Product Mindset",
      description:
        "Our engineers think like product owners, ensuring every technical decision serves your business goals.",
    },
    {
      title: "Proprietary Accelerators",
      description:
        "Access to snap platforms that reduce time-to-market by 40-60%.",
    },
    {
      title: "Strategic Context",
      description:
        "We start every engagement with Sprint Zero to align technical execution with business outcomes.",
    },
    {
      title: "Seamless Integration",
      description:
        "Our pods integrate with your existing teams, tools, and workflows—we augment, not replace.",
    },
  ];

  return (
    <section className="py-12 lg:py-16 bg-[#efeff6]">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 mb-3">
              <Users className="w-5 h-5 text-brand-primary" />
              <span className="text-xs font-semibold text-brand-primary uppercase tracking-wider">
                How We Work
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold mb-3 text-foreground-dark font-montserrat">
              Dedicated Engineering Pods:{" "}
              <span className="text-brand-primary">
                Your Flexible Engineering Partner
              </span>
            </h2>
            <p className="text-sm sm:text-base text-foreground-dark/70 max-w-3xl mx-auto font-montserrat">
              Beyond staff augmentation—we deploy integrated pods that operate as
              a seamless extension of your team. Our pods combine senior architects, full-stack
              engineers, and specialized talent with strategic context and proprietary tooling.
            </p>
          </div>

          {/* Pod Types */}
          <div className="mb-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-5">
              {podTypes.map((pod, index) => {
                const IconComponent = pod.icon;
                return (
                  <Card
                    key={index}
                    className="bg-gradient-to-br from-[#F1F2FF] to-white border border-[#00000019] rounded-2xl p-5 hover:shadow-lg transition-all duration-300 flex flex-col shadow-md"
                  >
                    <CardContent className="p-0 flex-1">
                      <div
                        className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${pod.color} flex items-center justify-center mb-3 shadow-md`}
                      >
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-lg font-semibold text-foreground-dark mb-2 font-montserrat">
                        {pod.name}
                      </h3>
                      <div className="mb-3">
                        <h4 className="text-xs font-semibold text-foreground-dark/70 mb-1.5">
                          Pod Composition:
                        </h4>
                        <ul className="space-y-1">
                          {pod.composition.map((member, idx) => (
                            <li
                              key={idx}
                              className="text-xs text-foreground-dark/70 flex items-center gap-1.5 font-montserrat"
                            >
                              <div className="w-1 h-1 rounded-full bg-brand-primary" />
                              {member}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="pt-2.5 border-t border-foreground-dark/10">
                        <p className="text-xs text-foreground-dark/70 mb-1.5 font-montserrat">
                          <span className="font-semibold">Best For:</span>{" "}
                          {pod.bestFor}
                        </p>
                        <p className="text-xs font-semibold text-brand-primary">
                          {pod.outcomes}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>

          {/* Differentiators */}
          <div className="mb-6">
            <h3 className="text-lg sm:text-xl font-semibold text-center text-foreground-dark mb-4 font-montserrat">
              What Makes Our Pods Different
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-4">
              {differentiators.map((item, index) => (
                <Card
                  key={index}
                  className="bg-gradient-to-br from-[#F1F2FF] to-white border border-[#00000019] rounded-xl p-4 shadow-md"
                >
                  <CardContent className="p-0">
                    <h4 className="font-semibold text-foreground-dark mb-1.5 text-sm font-montserrat">
                      {item.title}
                    </h4>
                    <p className="text-xs text-foreground-dark/70 leading-relaxed font-montserrat">
                      {item.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="text-center bg-white rounded-2xl p-6 shadow-lg">
            <h3 className="text-lg sm:text-xl font-semibold text-foreground-dark mb-2 font-montserrat">
              Need a Dedicated Engineering Pod?
            </h3>
            <p className="text-sm text-foreground-dark/80 mb-4 max-w-2xl mx-auto font-montserrat">
              Let's discuss your specific needs and configure the right pod to
              accelerate your development velocity.
            </p>
            <Button
              variant="btnPrimary"
              size="lg"
              onClick={() => window.open(CALENDLY_URL, "_blank")}
              className="w-full sm:w-auto min-w-[200px] h-11 text-sm"
            >
              Configure Your Pod
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
