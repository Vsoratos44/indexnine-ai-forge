import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export const CaseStudiesSection: React.FC = () => {
  const caseStudies = [
    {
      title: "Sportz Interactive - AI Transformation",
      outcome:
        "Key Outcome: Progressing towards a 65% gross margin through AI-driven operational efficiency.",
      link: "/insights/case-studies/si",
      tag: "AI Transformation",
    },
    {
      title: "Surge Ventures - AI-Driven Compliance Automation",
      outcome:
        "Key Outcome: Saved 50 hours in audit prep time and achieved 35% faster regulatory reviews.",
      link: "#.",
      tag: "Compliance Automation",
    },
    {
      title: "The Future is Agentic. Is Your Enterprise Ready?",
      outcome:
        "The enterprise technology landscape is buzzing with AI agents. Learn strategic adoption with extreme caution.",
      link: "/insights/blogs/agentic-ai-enterprise-future",
      tag: "Thought Leadership",
    },
  ];

  return (
    <section className="pb-24 lg:pb-32 bg-transparent">
      <div className="container mx-auto px-6">
        <div className="max-w-8xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold mb-6 text-foreground-dark">
              See Our Engine in{" "}
              <span className="text-brand-primary">Action</span>
            </h2>
            <p className="text-lg text-foreground-dark/80 max-w-3xl mx-auto">
              Real-world results from organizations that partnered with us to
              transform their AI capabilities.
            </p>
          </div>

          <Carousel
            className="w-full"
            opts={{
              align: "start",
              loop: true,
            }}
          >
            <CarouselContent className="ml-4 mr-4">
              {caseStudies.map((item, index) => {
                return (
                  <CarouselItem
                    key={index}
                    className="px-3 py-8 sm:basis-1/1 md:basis-1/2 lg:basis-1/3"
                  >
                    <div className="relative group h-full bg-gradient-to-b from-brand-primary/40 via-brand-primary/5 to-brand-primary/5 border-glass-border rounded-[1.25rem] p-1 hover:shadow-glow  transition-all duration-500 transform group-hover:-translate-y-1 backdrop-blur-lg">
                      {/* Enhanced Glassmorphism Card */}

                      <div className="relative overflow-hidden bg-white rounded-2xl p-6 h-full flex flex-col">
                        <div>
                          <span className="inline-block px-4 mb-4 py-2 bg-brand-primary/10 text-brand-primary rounded-full text-xs font-semibold">
                            {item.tag}
                          </span>
                        </div>
                        {/* Content Header */}

                        {/* Image with Glassmorphism */}

                        {/* Content Body */}
                        <div className="relative flex-1 flex flex-col">
                          <h3 className="text-xl lg:text-2xl font-semibold text-foreground-dark mb-4 leading-tight font-montserrat group-hover:text-brand-primary transition-colors duration-300">
                            {item.title}
                          </h3>

                          <div className="relative flex items-start justify-between mb-6 text-foreground-dark">
                            {item.outcome}
                          </div>

                          <div className="text-left">
                            <Button variant="btnLink" size="link">
                              <Link
                                className="flex items-center pr-2"
                                to={item.link}
                              >
                                Read More{" "}
                                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                              </Link>
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CarouselItem>
                );
              })}
            </CarouselContent>

            {/* Enhanced Glassmorphism Navigation */}
            <CarouselPrevious className="left-4 backdrop-blur-md bg-brand-primary/10 border-brand-primary/20 text-foreground-dark hover:bg-brand-primary/20 hover:text-brand-primary transition-all duration-300" />
            <CarouselNext className="right-4 backdrop-blur-md bg-brand-primary/10 border-brand-primary/20 text-foreground-dark hover:bg-brand-primary/20 hover:text-brand-primary transition-all duration-300" />
          </Carousel>

          {/* Featured Case Studies */}
          {/* <div className="mb-16">
            <h3 className="text-2xl font-semibold text-foreground-dark mb-8">
              Featured Case Studies
            </h3>
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              {caseStudies.map((study, index) => (
                <Card
                  key={index}
                  className="relative overflow-hidden bg-white border border-[#00000019] rounded-2xl p-8 hover:shadow-xl transition-all duration-500 group"
                >
                  <CardContent className="p-0">
                    <div className="mb-4">
                      <span className="inline-block px-4 py-2 bg-brand-primary/10 text-brand-primary rounded-full text-xs font-semibold">
                        {study.tag}
                      </span>
                    </div>
                    <h4 className="text-xl font-semibold mb-4 text-foreground-dark">
                      {study.title}
                    </h4>
                    <p className="text-foreground-dark/80 mb-6 leading-relaxed">
                      <span className="font-semibold"></span>{" "}
                      {study.outcome}
                    </p>
                    <Link
                      to={study.link}
                      className="inline-flex items-center gap-2 text-brand-primary font-semibold hover:gap-3 transition-all duration-300"
                    >
                      Read Case Study
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div> */}

          {/* Latest Insights */}
          {/* <div className="mb-12">
            <h3 className="text-2xl font-semibold text-foreground-dark mb-8">
              Latest Insights from Our Blog
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogs.map((blog, index) => (
                <Card
                  key={index}
                  className="relative overflow-hidden bg-white border border-[#00000019] rounded-2xl p-8 hover:shadow-xl transition-all duration-500 group"
                >
                  <CardContent className="p-0">
                    <div className="mb-4">
                      <span className="inline-block px-4 py-2 bg-brand-purple/10 text-brand-purple rounded-full text-xs font-semibold">
                        {blog.tag}
                      </span>
                    </div>
                    <h4 className="text-xl font-semibold mb-4 text-foreground-dark">
                      {blog.title}
                    </h4>
                    <p className="text-foreground-dark/70 mb-6 leading-relaxed text-sm">
                      {blog.excerpt}
                    </p>
                    <Link
                      to={blog.link}
                      className="inline-flex items-center gap-2 text-brand-purple font-semibold hover:gap-3 transition-all duration-300"
                    >
                      Read Full Article
                      <ExternalLink className="w-4 h-4" />
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div> */}

          {/* CTA */}
          <div className="text-center">
            <Button variant="btnPrimary" size="lg" asChild>
              <Link to="/insights/case-studies">Explore All Insights</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
