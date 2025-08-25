import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { Button } from "@/components/ui/button";
import { CardGlass } from "@/components/ui/CardGlass";
import {
  ServiceSchema,
  WebPageSchema,
  BreadcrumbSchema,
} from "@/components/SEOStructuredData";
import { TestTube, Shield, Zap, Target, CheckCircle, Cog } from "lucide-react";
import ServiceVideoBackground from "@/components/ServiceVideoBackground";

const QaEngineering = () => {
  return (
    <div className="min-h-screen bg-background">
      <ServiceSchema
        name="QA Engineering Services"
        description="Comprehensive quality assurance and testing solutions for reliable, bug-free software delivery"
        serviceType="Quality Assurance"
      />
      <WebPageSchema
        title="QA Engineering Services - Ensure Software Quality & Reliability"
        description="Deliver flawless software with our comprehensive QA engineering services including automated testing, performance testing, and quality processes"
        url="https://yoursite.lovable.app/services/qa-engineering"
      />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://yoursite.lovable.app/" },
          { name: "Services", url: "https://yoursite.lovable.app/services" },
          {
            name: "QA Engineering",
            url: "https://yoursite.lovable.app/services/qa-engineering",
          },
        ]}
      />
      <Header />

      <div className="container mx-auto px-6 lg:px-8 pt-32">
        <Breadcrumbs />
      </div>

      {/* Hero Section */}
      <section className="relative min-h-[90vh] overflow-hidden bg-black">
        <ServiceVideoBackground />

        <div className="container mx-auto px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground-white mb-8 leading-tight font-montserrat">
              Quality Assurance{" "}
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Engineering
              </span>
            </h1>
            <p className="text-xl text-foreground-white/80 mb-12 leading-relaxed font-montserrat">
              Ensure software excellence with comprehensive testing strategies
              and automated quality assurance processes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="btnPrimary" size="xl">
                Improve Quality
              </Button>
              <Button variant="btnSecondary" size="xl">
                View Testing Solutions
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* QA Services */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="heading-h2 text-foreground mb-6">
              QA Engineering Services
            </h2>
            <p className="text-xl text-foreground-muted max-w-3xl mx-auto">
              Comprehensive quality assurance solutions to deliver flawless
              software experiences.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: TestTube,
                title: "Automated Testing",
                description:
                  "Comprehensive test automation frameworks for faster, reliable testing cycles.",
              },
              {
                icon: Shield,
                title: "Security Testing",
                description:
                  "Vulnerability assessments and penetration testing to ensure secure applications.",
              },
              {
                icon: Zap,
                title: "Performance Testing",
                description:
                  "Load, stress, and performance testing to optimize application responsiveness.",
              },
              {
                icon: Target,
                title: "Functional Testing",
                description:
                  "Manual and automated functional testing to validate business requirements.",
              },
              {
                icon: CheckCircle,
                title: "Test Strategy",
                description:
                  "Comprehensive test planning and strategy development for optimal coverage.",
              },
              {
                icon: Cog,
                title: "CI/CD Integration",
                description:
                  "Seamless integration of testing into continuous integration and deployment pipelines.",
              },
            ].map((service, index) => (
              <CardGlass
                key={index}
                className="relative transform hover:scale-105"
              >
                <div className="bg-gradient-to-br from-brand-primary to-brand-accent rounded-2xl w-16 h-16 flex items-center justify-center mb-6">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="heading-h3 text-foreground mb-4">
                  {service.title}
                </h3>
                <p className="text-foreground-muted leading-relaxed">
                  {service.description}
                </p>
              </CardGlass>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-hero">
        <div className="container mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-foreground-white mb-8 font-montserrat">
            Deliver Quality Software with Confidence
          </h2>
          <p className="text-xl text-foreground-white/80 mb-12 max-w-2xl mx-auto font-montserrat">
            Partner with us to implement world-class quality assurance processes
            that ensure your software meets the highest standards.
          </p>
          <Button variant="hero" size="xl">
            Enhance Your QA
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default QaEngineering;
