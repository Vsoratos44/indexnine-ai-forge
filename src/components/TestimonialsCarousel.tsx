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
import carlImg3 from "../assets/images/blog-agentic.webp";

import carlImgBlogData from "../assets/images/carsl-img-blog-data.webp";
import { Link } from "react-router-dom";

interface CarouselItem {
  id: string;
  title: string;
  description: string;
  category?: string;
  image?: string;
}

const TestimonialsCarousel = () => {
  // CMS-ready data structure - can be replaced with API call
  const carouselItems: CarouselItem[] = [
    {
      id: "1",
      title: "Cloud/Android/iOS Customer",
      description:
        "We have successfully built multiple modules with Indexnine over the past year ranging from web applications to Android and iOS components. Strongly recommend Indexnine as a technical partner.",
      category: "CTO",
      image: carlImg3,
    },
    {
      id: "2",
      title: "Cloud/Android/iOS Customer",
      description:
        "We have successfully built multiple modules with Indexnine over the past year ranging from web applications to Android and iOS components. Strongly recommend Indexnine as a technical partner.",
      category: "CTO",
      image: carlImg3,
    },
    {
      id: "3",
      title: "Cloud/Android/iOS Customer",
      description:
        "We have successfully built multiple modules with Indexnine over the past year ranging from web applications to Android and iOS components. Strongly recommend Indexnine as a technical partner.",
      category: "CTO",
      image: carlImg3,
    },
    {
      id: "4",
      title: "Cloud/Android/iOS Customer",
      description:
        "We have successfully built multiple modules with Indexnine over the past year ranging from web applications to Android and iOS components. Strongly recommend Indexnine as a technical partner.",
      category: "CTO",
      image: carlImg3,
    },
  ];

  return (
    <section data-section="testimonials" className=" relative overflow-hidden">
      <div className="container mx-auto px-0 lg:px-0 relative z-10">
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
                    className="px-4 py-8 sm:basis-1/1 md:basis-1/2 "
                  >
                    <div className="relative group h-full bg-gradient-to-b from-black/50 via-black/5 to-black/5 border-glass-border rounded-3xl p-3 hover:shadow-glow  transition-all duration-500 transform group-hover:-translate-y-1">
                      {/* Enhanced Glassmorphism Card */}
                      <div className="relative overflow-hidden bg-white rounded-2xl p-6 h-full flex flex-col">
                        <div className="grid grid-cols-4 items-center gap-4 mb-4">
                          <div className="col-span-1">
                            <img
                              src={item.image}
                              className="w-24 h-24 object-cover rounded-full "
                            />
                          </div>
                          <div className="col-span-3">
                            <h3 className="text-xl lg:text-2xl font-semibold text-foreground-dark mb-2 mt-4 leading-tight font-montserrat  transition-colors duration-300">
                              {item.title}
                            </h3>
                            <div className="flex items-center justify-between mb-6">
                              {item.category && (
                                <span className="text-sm bg-brand-primary/10 text-foreground-dark px-2 py-1 rounded-full font-montserrat">
                                  {item.category}
                                </span>
                              )}
                            </div>
                          </div>
                        </div>
                        <div className="relative ">
                          <p className="text-foreground-dark-muted leading-relaxed flex-1 font-montserrat">
                            {item.description}
                          </p>
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
        </div>
      </div>
    </section>
  );
};

export default TestimonialsCarousel;
