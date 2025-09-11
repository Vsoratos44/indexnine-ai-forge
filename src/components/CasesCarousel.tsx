import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  BookOpen,
  FileText,
  Target,
  type LucideIcon,
} from "lucide-react";

import styles from "../assets/css/stylesheet.module.css";

import ai1 from "@/assets/images/aiml-1.webp";
import ai2 from "@/assets/images/aiml-2.webp";
import ai3 from "@/assets/images/aiml-3.webp";
import ai4 from "@/assets/images/aiml-4.webp";
import ai5 from "@/assets/images/aiml-5.webp";
import ai6 from "@/assets/images/aiml-6.webp";

// ✅ Renamed to avoid any conflict with CarouselItem (component)
interface CaseCarouselData {
  id: string;
  type: "eBooks" | "Blogs" | "Case Studies";
  title: string;
  description: string;
  usecase: string;
  image?: string;
  link: string;
}

const CasesCarousel = () => {
  // ✅ Icon helper now correctly typed
  const getIcon = (type: CaseCarouselData["type"]): LucideIcon => {
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

  // CMS-ready data structure
  const carouselItems: CaseCarouselData[] = [
    {
      id: "1",
      type: "Case Studies",
      title: "Generative AI Solutions",
      description:
        "We build custom LLM applications, content automation engines, and intelligent chatbots that enhance creativity and efficiency.",
      usecase:
        "Use Cases: Automated Content Creation, Code Generation, Advanced Customer Support",
      image: ai6,
      link: "#",
    },
    {
      id: "2",
      type: "Case Studies",
      title: "Computer Vision & Analytics",
      description:
        "Custom image recognition, video analysis, and real-time monitoring systems for operational excellence and safety.",
      usecase:
        "Use Cases: Quality Control, Security Monitoring, Process Automation",
      image: ai5,
      link: "#",
    },
    {
      id: "3",
      type: "Case Studies",
      title: "Predictive Analytics & ML",
      description:
        "Machine learning models for forecasting, risk assessment, and intelligent decision-making systems.",
      usecase:
        "Use Cases: Demand Forecasting, Risk Management, Personalization",
      image: ai4,
      link: "#",
    },
    {
      id: "4",
      type: "Case Studies",
      title: "Natural Language Processing",
      description:
        "Text analysis, sentiment monitoring, and intelligent document processing to unlock insights from unstructured data.",
      usecase:
        "Use Cases: Document Intelligence, Sentiment Analysis, Knowledge Extraction",
      image: ai3,
      link: "#",
    },
    {
      id: "5",
      type: "Case Studies",
      title: "Intelligent Automation",
      description:
        "AI-powered workflow automation that adapts to changing conditions and makes intelligent decisions.",
      usecase:
        "Use Cases: Process Optimization, Intelligent Routing, Adaptive Systems",
      image: ai2,
      link: "#",
    },
    {
      id: "6",
      type: "Case Studies",
      title: "AI Strategy & Consulting",
      description:
        "Strategic guidance, technology roadmaps, and organizational change management for successful AI adoption.",
      usecase:
        "Use Cases: AI Readiness Assessment, Technology Selection, Change Management",
      image: ai1,
      link: "#",
    },
  ];

  const getTypeColor = (type: CaseCarouselData["type"]) => {
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
    <section data-section="insights" className="relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/6 w-96 h-96 bg-brand-primary/8 rounded-full blur-3xl animate-float"></div>
        <div
          className="absolute bottom-1/4 right-1/6 w-80 h-80 bg-brand-purple/6 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "2s" }}
        ></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-brand-accent/5 rounded-full blur-2xl animate-pulse-slow"></div>

        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `radial-gradient(circle at 50% 50%, hsl(239 84% 67%) 1px, transparent 1px)`,
            backgroundSize: "80px 80px",
          }}
        ></div>
      </div>

      <div className="container mx-auto px-0 lg:px-0 relative z-10">
        <div className="relative w-full mx-auto ">
          <Carousel
            className="w-full"
            opts={{
              align: "start",
              loop: true,
            }}
          >
            <CarouselContent className="ml-3 mr-2">
              {carouselItems.map((item) => {
                const IconComponent = getIcon(item.type);
                return (
                  <CarouselItem
                    key={item.id}
                    className="px-3 py-8 sm:basis-1/1 md:basis-1/2 lg:basis-1/3"
                  >
                    <div className="relative group h-full bg-gradient-to-b from-black/50 via-black/5 to-black/5 border-glass-border rounded-3xl p-3 hover:shadow-glow  transition-all duration-500 transform group-hover:-translate-y-1">
                      <div className="relative overflow-hidden bg-white rounded-2xl p-6 h-full flex flex-col">
                        {/* Image Placeholder */}
                        <div className="relative mb-6 rounded-2xl overflow-hidden bg-gradient-to-br from-brand-primary/10 to-brand-purple/10 backdrop-blur-md border border-glass-border h-48 flex items-center justify-center">
                          <div className="text-foreground-dark-muted text-4xl">
                            {/* <IconComponent className="w-16 h-16" /> */}
                            <img
                              src={item.image}
                              className="w-full h-full object-cover rounded-xl"
                            />
                          </div>
                          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                        </div>
                        {/* Content */}
                        <div className="relative flex-1 flex flex-col">
                          <h3 className="text-xl lg:text-2xl font-semibold text-foreground-dark mb-4 leading-tight font-montserrat group-hover:text-brand-primary transition-colors duration-300">
                            {item.title}
                          </h3>
                          <p className="text-foreground-dark-muted leading-relaxed mb-6 flex-1 font-montserrat">
                            {item.description}
                          </p>
                          <p className="text-foreground-dark-muted leading-relaxed mb-6 flex-1 font-montserrat text-sm">
                            {item.usecase}
                          </p>

                          <div className="text-left">
                            <Button
                              variant="btnLink"
                              size="link"
                              className="pr-2"
                            >
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

            <CarouselPrevious className="left-4 backdrop-blur-md bg-brand-primary/10 border-brand-primary/20 text-foreground-dark hover:bg-brand-primary/20 hover:text-brand-primary transition-all duration-300" />
            <CarouselNext className="right-4 backdrop-blur-md bg-brand-primary/10 border-brand-primary/20 text-foreground-dark hover:bg-brand-primary/20 hover:text-brand-primary transition-all duration-300" />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default CasesCarousel;
