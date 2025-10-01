import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Building2, Rocket, Smartphone, RefreshCw, Zap, CheckCircle } from "lucide-react";
import { CALENDLY_URL } from "../../../config/constants";
import styles from "../../../assets/css/stylesheet.module.css";

export const ServicesOverviewSection: React.FC = () => {
  const services = [
    {
      icon: Building2,
      badge: "Enterprise",
      title: "Enterprise Application Development",
      description:
        "Complex, scalable solutions to streamline your core business operations, from ERPs to internal process automation.",
      capabilities: [
        "Custom ERP & CRM Solutions",
        "Workflow Automation Platforms",
        "Data Analytics Dashboards",
        "Integration & API Development",
      ],
      idealFor:
        "Large organizations needing custom internal tools and process optimization.",
      ctaText: "Discuss Your Enterprise Needs",
      variant: "light" as const,
    },
    {
      icon: Rocket,
      badge: "SaaS",
      title: "SaaS Product Development",
      description:
        "End-to-end design and development of multi-tenant, cloud-native SaaS platforms ready for commercial success.",
      capabilities: [
        "Multi-Tenant Architecture",
        "Subscription Management",
        "Auto-Scaling Infrastructure",
        "Analytics & Monitoring",
      ],
      idealFor:
        "Startups and companies building commercial software products for market.",
      ctaText: "Start Your SaaS Journey",
      variant: "dark" as const,
      featured: true,
    },
    {
      icon: Smartphone,
      badge: "Mobile",
      title: "Mobile Application Development",
      description:
        "Native and cross-platform mobile applications with seamless user experiences and robust backend integration.",
      capabilities: [
        "iOS & Android Native Development",
        "React Native & Flutter",
        "Offline-First Architecture",
        "Push Notifications & Real-Time Sync",
      ],
      idealFor:
        "Companies needing customer-facing or internal mobile applications.",
      ctaText: "Build Your Mobile App",
      variant: "light" as const,
    },
    {
      icon: RefreshCw,
      badge: "Modernization",
      title: "Application Modernization",
      description:
        "Transform legacy systems into modern, cloud-native platforms that unlock innovation and reduce operational costs.",
      capabilities: [
        "Legacy Code Refactoring",
        "Cloud Migration (AWS, GCP, Azure)",
        "Microservices Architecture",
        "Database Modernization",
      ],
      idealFor:
        "Enterprises with aging systems that need modernization without business disruption.",
      ctaText: "Modernize Your Platform",
      variant: "light" as const,
    },
    {
      icon: Zap,
      badge: "MVP",
      title: "MVP Development",
      description:
        "Rapid development of minimum viable products to validate your business idea and secure funding with our snap.mvp accelerator.",
      capabilities: [
        "Sprint Zero Validation",
        "Rapid Prototyping",
        "Core Feature Development",
        "Go-To-Market Support",
      ],
      idealFor: "Startups needing to move from idea to market quickly.",
      ctaText: "Launch Your MVP",
      variant: "light" as const,
    },
  ];

  return (
    <section className="py-16 sm:py-24 lg:py-32 bg-[#fff]">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-8xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold mb-4 sm:mb-6 text-foreground-dark font-montserrat px-4 sm:px-0">
              Our Custom Software{" "}
              <span className="text-brand-primary">Development Services</span>
            </h2>
            <p className="text-base sm:text-lg text-foreground-dark/80 max-w-4xl mx-auto font-montserrat px-4 sm:px-0">
              We offer a comprehensive suite of services to build, modernize, and
              scale your mission-critical applications with enterprise-grade
              quality and startup velocity.
            </p>
          </div>

          <div className="relative px-4 sm:px-12">
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              className="w-full"
            >
              <CarouselContent className="-ml-4">
                {services.map((service, index) => {
                  const IconComponent = service.icon;

                  return (
                    <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3">
                      <Card
                        className={`relative overflow-hidden h-full ${
                          service.variant === "dark"
                            ? "bg-gradient-to-br from-[#1c1c1c] via-[#3a3a3a] to-[#4D4E4F] border-0"
                            : "bg-gradient-card-light border border-[#00000019] bg-white"
                        } rounded-2xl p-6 sm:p-8 hover:shadow-xl transition-all duration-500 flex flex-col`}
                      >
                        {service.featured && (
                          <div className="absolute -top-3 -right-3">
                            <span className="bg-gradient-to-r from-brand-primary to-brand-purple text-white px-3 sm:px-4 py-1 rounded-full text-xs font-semibold shadow-lg">
                              Popular
                            </span>
                          </div>
                        )}

                        <CardContent className="p-0 flex-1 flex flex-col">
                          <div className="mb-4">
                            <span
                              className={`inline-block px-3 py-1 rounded-full text-xs font-semibold mb-4 ${
                                service.variant === "dark"
                                  ? "bg-brand-primary/20 text-brand-primary"
                                  : "bg-brand-primary/10 text-brand-primary"
                              }`}
                            >
                              {service.badge}
                            </span>
                          </div>

                          <div
                            className={`relative w-14 h-14 sm:w-16 sm:h-16 flex mb-4 sm:mb-6 items-center justify-center ${
                              service.variant === "dark"
                                ? "bg-gradient-to-br from-brand-primary/20 to-brand-purple/20 rounded-2xl"
                                : styles.icnBg
                            }`}
                          >
                            <IconComponent
                              className={`w-6 h-6 sm:w-8 sm:h-8 ${
                                service.variant === "dark"
                                  ? "text-brand-primary"
                                  : "text-brand-primary"
                              }`}
                            />
                          </div>

                          <h3
                            className={`text-lg sm:text-xl lg:text-2xl font-semibold mb-2 sm:mb-3 font-montserrat ${
                              service.variant === "dark"
                                ? "text-foreground"
                                : "text-foreground-dark"
                            }`}
                          >
                            {service.title}
                          </h3>

                          <p
                            className={`mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base font-montserrat ${
                              service.variant === "dark"
                                ? "text-foreground/80"
                                : "text-foreground-dark/70"
                            }`}
                          >
                            {service.description}
                          </p>

                          <div className="mb-4 sm:mb-6">
                            <h4
                              className={`text-xs sm:text-sm font-semibold mb-2 sm:mb-3 ${
                                service.variant === "dark"
                                  ? "text-foreground"
                                  : "text-foreground-dark"
                              }`}
                            >
                              Capabilities:
                            </h4>
                            <ul className="space-y-2">
                              {service.capabilities.map((capability, idx) => (
                                <li
                                  key={idx}
                                  className={`flex items-start gap-2 text-xs sm:text-sm ${
                                    service.variant === "dark"
                                      ? "text-foreground/70"
                                      : "text-foreground-dark/70"
                                  }`}
                                >
                                  <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 text-brand-primary mt-0.5 flex-shrink-0" />
                                  <span className="font-montserrat">{capability}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          <div
                            className={`pt-4 border-t mb-4 sm:mb-6 ${
                              service.variant === "dark"
                                ? "border-foreground/20"
                                : "border-foreground-dark/10"
                            }`}
                          >
                            <p
                              className={`text-xs sm:text-sm font-montserrat ${
                                service.variant === "dark"
                                  ? "text-foreground/70"
                                  : "text-foreground-dark/70"
                              }`}
                            >
                              <span
                                className={`font-semibold ${
                                  service.variant === "dark"
                                    ? "text-foreground"
                                    : "text-foreground-dark"
                                }`}
                              >
                                Ideal For:
                              </span>{" "}
                              {service.idealFor}
                            </p>
                          </div>

                          <Button
                            variant={
                              service.variant === "dark" ? "btnSecondary" : "btnPrimary"
                            }
                            className="w-full mt-auto text-sm sm:text-base h-10 sm:h-12"
                            onClick={() => window.open(CALENDLY_URL, "_blank")}
                          >
                            {service.ctaText}
                          </Button>
                        </CardContent>
                      </Card>
                    </CarouselItem>
                  );
                })}
              </CarouselContent>
              <CarouselPrevious className="hidden sm:flex -left-6" />
              <CarouselNext className="hidden sm:flex -right-6" />
            </Carousel>
          </div>
        </div>
      </div>
    </section>
  );
};
