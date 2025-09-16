import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import { ArrowRight, BookOpen, FileText, Target } from "lucide-react";
import styles from "../assets/css/stylesheet.module.css";

import carlImg1 from "../assets/images/blog-ai-mgmt.webp";
import carlImg2 from "../assets/images/case-img.webp";
import carlImg3 from "../assets/images/blog-micros-monolth.webp";

import carlImgBlogData from "../assets/images/carsl-img-blog-data.webp";
import { Link } from "react-router-dom";

interface CarouselItem {
  id: string;
  type: "eBooks" | "Blogs" | "Case Study";
  title: string;
  description: string;
  date: string;
  readTime?: string;
  category?: string;
  image?: string;
  link: string;
}

const InsightsCarousel = () => {
  // CMS-ready data structure - can be replaced with API call
  const carouselItems: CarouselItem[] = [
    {
      id: "1",
      type: "Blogs",
      title: "The AI Change Management Playbook: Modernizing Legacy Systems",
      description:
        "AI adoption is more than a technical challenge. Discover a strategic framework for change management, data modernization, and identifying high-impact AI initiatives in legacy organizations.",
      date: "January 15, 2025",
      readTime: "15 min read",
      category: "AI Strategy",
      image: carlImg1,
      link: "/insights/blogs/ai-change-management-playbook",
    },
    {
      id: "2",
      type: "Case Study",
      title: "TripJack: Engineering the Platform for Next-Generation Travel",
      description:
        "How Indexnine's Expertise in Microservices and API Integration Reduced Time-to-Market by 75%, Powering TripJack's Expansion into New B2B2C Revenue Streams.",
      date: "January 10, 2025",
      readTime: "18 min read",
      category: "Travel Technology",
      image: carlImg2,
      link: "/insights/case-studies/tripjack",
    },
    {
      id: "3",
      type: "Blogs",
      title:
        "Microservices vs Monolith: Making the Right Architectural Choice for Scale",
      description:
        "A comprehensive guide to choosing between microservices and monolithic architecture based on your business stage, team size, and technical requirements.",
      date: "January 10, 2025",
      readTime: "11 min read",
      category: "Architecture Team",
      image: carlImg3,
      link: "/insights/blogs/microservices-vs-monolith",
    },
  ];

  const getTypeColor = (type: string) => {
    switch (type) {
      case "eBooks":
        return "bg-brand-primary/10 text-brand-primary border-brand-primary/20";
      case "Blogs":
        return "bg-brand-purple/10 text-brand-purple border-brand-purple/20";
      case "Case Studies":
        return "bg-brand-accent/10 text-brand-accent border-brand-accent/20";
      default:
        return "bg-brand-primary/10 text-brand-primary border-brand-primary/20";
    }
  };

  return (
    <section
      data-section="insights"
      className="pb-4 pt-24 lg:pt-32 bg-[#fff] relative overflow-hidden"
    >
      {/* Enhanced Background Effects */}

      <div className="container mx-auto px-0 lg:px-0 relative z-10">
        <div className="container text-center mb-20">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-foreground-dark mb-8 leading-tight tracking-tight font-montserrat">
            <span className="text-brand-primary">
              Insights That Shape Products
            </span>
          </h2>
          <p className="text-xl text-foreground-dark-muted max-w-3xl mx-auto font-light font-montserrat">
            Our work at the forefront of product engineering and AI consulting
            offers a unique perspective. We're committed to sharing what we
            learn with leaders navigating the complex landscape of digital
            innovation. Explore our thought leadership to gain actionable
            insights for your product journey.
          </p>
        </div>

        {/* Enhanced Glassmorphism Carousel Container */}
        <div className="relative w-full mx-auto ">
          <Carousel
            className="w-full"
            opts={{
              align: "start",
              loop: true,
            }}
          >
            <CarouselContent className="ml-4 mr-4">
              {carouselItems.map((item, index) => {
                return (
                  <CarouselItem
                    key={item.id}
                    className="px-3 py-8 sm:basis-1/1 md:basis-1/2 lg:basis-1/3"
                  >
                    <div className="relative group h-full bg-gradient-to-b from-black/50 via-black/5 to-black/5 border-glass-border rounded-3xl p-3 hover:shadow-glow  transition-all duration-500 transform group-hover:-translate-y-1">
                      {/* Enhanced Glassmorphism Card */}
                      <div className="relative overflow-hidden bg-white rounded-2xl p-6 h-full flex flex-col">
                        {/* Content Header */}
                        <div className="relative flex items-start justify-between mb-6">
                          <div
                            className={`flex items-center gap-2 px-3 py-1 rounded-full text-sm font-medium border backdrop-blur-sm ${getTypeColor(
                              item.type
                            )}`}
                          >
                            {item.type}
                          </div>
                          {/* <div className="text-sm text-foreground-dark-muted font-montserrat">
                            {item.date}
                          </div> */}
                        </div>

                        {/* Image with Glassmorphism */}
                        <div className="relative mb-6 rounded-xl overflow-hidden bg-gradient-to-br from-brand-primary/10 to-brand-purple/10 backdrop-blur-md border border-glass-border h-48 flex items-center justify-center">
                          <img
                            src={item.image}
                            className="w-full h-full object-cover rounded-xl"
                          />
                          {/* CMS Image Overlay - Dynamic */}
                          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                        </div>

                        {/* Content Body */}
                        <div className="relative flex-1 flex flex-col">
                          <h3 className="text-xl lg:text-2xl font-semibold text-foreground-dark mb-4 leading-tight font-montserrat group-hover:text-brand-primary transition-colors duration-300">
                            {item.title}
                          </h3>
                          <p className="text-foreground-dark-muted leading-relaxed mb-6 flex-1 font-montserrat">
                            {item.description}
                          </p>

                          {/* Meta Information */}
                          <div className="flex items-center justify-between mb-6">
                            {item.readTime && (
                              <span className="text-sm text-foreground-dark-muted font-montserrat">
                                {item.readTime}
                              </span>
                            )}
                            {item.category && (
                              <span className="text-sm bg-brand-primary/10 text-foreground-dark px-2 py-1 rounded-full font-montserrat">
                                {item.category}
                              </span>
                            )}
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

          {/* View All CTA */}
          <div className="text-center mt-16">
            <Button variant="btnPrimary" size="lg">
              Explore All Our Insights <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InsightsCarousel;
