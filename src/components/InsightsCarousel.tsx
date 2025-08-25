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

interface CarouselItem {
  id: string;
  type: "eBooks" | "Blogs" | "Case Studies";
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
      type: "eBooks",
      title: "The CXO's Guide to Building AI Products",
      description:
        "A comprehensive guide for executive leaders on strategic AI product development and implementation.",
      date: "January 15, 2025",
      readTime: "45 min read",
      category: "AI Strategy",
      image: "/api/placeholder/400/300",
      link: "/ebooks/cxo-guide-ai-products",
    },
    {
      id: "2",
      type: "Blogs",
      title:
        "The Modern Analytics Platform: A Blueprint for Your Data Strategy",
      description:
        "Essential patterns and architecture for building scalable, modern analytics platforms that drive business value.",
      date: "January 12, 2025",
      readTime: "12 min read",
      category: "Data Strategy",
      image: "/api/placeholder/400/300",
      link: "/blog/modern-analytics-platform",
    },
    {
      id: "3",
      type: "Blogs",
      title: "Beyond Testing: A Leader's Guide to True Quality Engineering",
      description:
        "How modern QE practices go beyond traditional testing to embed quality throughout the product development lifecycle.",
      date: "January 10, 2025",
      readTime: "10 min read",
      category: "Quality Engineering",
      image: "/api/placeholder/400/300",
      link: "/blog/beyond-testing-quality-engineering",
    },
  ];

  const getIcon = (type: string) => {
    switch (type) {
      case "eBooks":
        return BookOpen;
      case "Blogs":
        return FileText;
      case "Case Studies":
        return Target;
      default:
        return FileText;
    }
  };

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
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/6 w-96 h-96 bg-brand-primary/8 rounded-full blur-3xl animate-float"></div>
        <div
          className="absolute bottom-1/4 right-1/6 w-80 h-80 bg-brand-purple/6 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "2s" }}
        ></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-brand-accent/5 rounded-full blur-2xl animate-pulse-slow"></div>

        {/* Animated Grid Pattern */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `radial-gradient(circle at 50% 50%, hsl(239 84% 67%) 1px, transparent 1px)`,
            backgroundSize: "80px 80px",
          }}
        ></div>
      </div>

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
            <CarouselContent className="ml-2">
              {carouselItems.map((item) => {
                const IconComponent = getIcon(item.type);
                return (
                  <CarouselItem
                    key={item.id}
                    className="px-4 py-10 sm:basis-1/1 md:basis-1/2 lg:basis-1/3"
                  >
                    <div className="relative group h-full">
                      {/* Enhanced Glassmorphism Card */}
                      <div className="relative overflow-hidden  bg-[#fff] border-[.75rem] border-glass-border rounded-3xl p-6  hover:shadow-glow transition-all duration-500 transform group-hover:scale-101 group-hover:-translate-y-2 h-full flex flex-col">
                        {/* Frosted Glass Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-brand-primary/5 rounded-2xl opacity-50"></div>

                        {/* Dynamic Glow Effect */}
                        <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/5 via-transparent to-brand-purple/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                        {/* Content Header */}
                        <div className="relative flex items-start justify-between mb-6">
                          <div
                            className={`flex items-center gap-2 px-3 py-1 rounded-full text-sm font-medium border backdrop-blur-sm ${getTypeColor(
                              item.type
                            )}`}
                          >
                            <IconComponent className="w-4 h-4" />
                            {item.type}
                          </div>
                          <div className="text-sm text-foreground-dark-muted font-montserrat">
                            {item.date}
                          </div>
                        </div>

                        {/* Image Placeholder with Glassmorphism */}
                        <div className="relative mb-6 rounded-2xl overflow-hidden bg-gradient-to-br from-brand-primary/10 to-brand-purple/10 backdrop-blur-md border border-glass-border h-48 flex items-center justify-center">
                          <div className="text-foreground-dark-muted text-4xl">
                            <IconComponent className="w-16 h-16" />
                          </div>
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

                          {/* CTA Button */}
                          <div className="text-left">
                            <Button variant="btnLink" size="link">
                              Read More{" "}
                              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
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
