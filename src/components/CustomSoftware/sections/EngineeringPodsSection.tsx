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
    <section className="py-16 sm:py-24 lg:py-32 bg-[#efeff6]">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-8xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 mb-4 sm:mb-6">
              <Users className="w-5 h-5 sm:w-6 sm:h-6 text-brand-primary" />
              <span className="text-xs sm:text-sm font-semibold text-brand-primary uppercase tracking-wider">
                How We Work
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold mb-4 sm:mb-6 text-foreground-dark font-montserrat px-4 sm:px-0">
              Dedicated Engineering Pods:{" "}
              <span className="text-brand-primary">
                Your Flexible Engineering Partner
              </span>
            </h2>
            <p className="text-base sm:text-lg text-foreground-dark/80 max-w-4xl mx-auto mb-4 sm:mb-6 font-montserrat px-4 sm:px-0">
              Beyond staff augmentation—we deploy integrated pods that operate as
              a seamless extension of your team.
            </p>
            <p className="text-sm sm:text-base text-foreground-dark/70 max-w-4xl mx-auto font-montserrat px-4 sm:px-0">
              Our engineering pods combine senior architects, full-stack
              engineers, and specialized talent configured to your specific needs.
              Unlike traditional staff aug, our pods bring strategic context,
              proprietary tooling, and a product mindset to every engagement.
            </p>
          </div>

          {/* Pod Types */}
          <div className="mb-12 sm:mb-16 px-4 sm:px-0">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
              {podTypes.map((pod, index) => {
                const IconComponent = pod.icon;
                return (
                  <Card
                    key={index}
                    className="bg-white border border-[#00000019] rounded-xl sm:rounded-2xl p-6 sm:p-8 hover:shadow-xl transition-all duration-500 flex flex-col"
                  >
                    <CardContent className="p-0 flex-1">
                      <div
                        className={`w-14 h-14 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl bg-gradient-to-br ${pod.color} flex items-center justify-center mb-4 sm:mb-6 shadow-lg`}
                      >
                        <IconComponent className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                      </div>
                      <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-foreground-dark mb-3 sm:mb-4 font-montserrat">
                        {pod.name}
                      </h3>
                      <div className="mb-3 sm:mb-4">
                        <h4 className="text-xs sm:text-sm font-semibold text-foreground-dark/70 mb-2">
                          Pod Composition:
                        </h4>
                        <ul className="space-y-1.5 sm:space-y-2">
                          {pod.composition.map((member, idx) => (
                            <li
                              key={idx}
                              className="text-xs sm:text-sm text-foreground-dark/70 flex items-center gap-2 font-montserrat"
                            >
                              <div className="w-1.5 h-1.5 rounded-full bg-brand-primary" />
                              {member}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="pt-3 sm:pt-4 border-t border-foreground-dark/10">
                        <p className="text-xs sm:text-sm text-foreground-dark/70 mb-2 font-montserrat">
                          <span className="font-semibold">Best For:</span>{" "}
                          {pod.bestFor}
                        </p>
                        <p className="text-xs sm:text-sm font-semibold text-brand-primary">
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
          <div className="mb-8 sm:mb-12 px-4 sm:px-0">
            <h3 className="text-xl sm:text-2xl font-semibold text-center text-foreground-dark mb-6 sm:mb-8 font-montserrat">
              What Makes Our Pods Different
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              {differentiators.map((item, index) => (
                <Card
                  key={index}
                  className="bg-gradient-to-br from-[#F1F2FF] to-white border border-[#00000019] rounded-xl p-4 sm:p-6"
                >
                  <CardContent className="p-0">
                    <h4 className="font-semibold text-foreground-dark mb-2 text-sm sm:text-base font-montserrat">
                      {item.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-foreground-dark/70 leading-relaxed font-montserrat">
                      {item.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="text-center bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12 shadow-lg mx-4 sm:mx-0">
            <h3 className="text-xl sm:text-2xl font-semibold text-foreground-dark mb-3 sm:mb-4 font-montserrat">
              Need a Dedicated Engineering Pod?
            </h3>
            <p className="text-sm sm:text-base text-foreground-dark/80 mb-4 sm:mb-6 max-w-2xl mx-auto font-montserrat">
              Let's discuss your specific needs and configure the right pod to
              accelerate your development velocity.
            </p>
            <Button
              variant="btnPrimary"
              size="lg"
              onClick={() => window.open(CALENDLY_URL, "_blank")}
              className="w-full sm:w-auto min-w-[240px] h-12 sm:h-14 text-sm sm:text-base"
            >
              Configure Your Pod
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
