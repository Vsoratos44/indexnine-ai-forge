import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import VideoBackground from "./VideoBackground";
import TypewriterText from "./TypewriterText";
import styles from "../assets/css/stylesheet.module.css";

const Hero = () => {
  return (
    <section
      data-section="hero"
      className="relative min-h-[90vh] overflow-hidden bg-black"
    >
      {/* Three.js Living Void Background */}
      <VideoBackground />

      {/* Content - Precisely positioned */}
      <div className="relative z-10 container mx-auto px-6 pt-60 pb-24">
        <div className="mx-auto text-center lg:text-left">
          <h1 className="text-[2.5rem] sm:text-[3rem] lg:text-[4rem] xl:text-[4rem] font-semibold text-foreground mb-8 leading-[1.2] tracking-tight animate-fade-in font-montserrat">
            Product Innovation & <br />
            Software Engineering
            <br />
            <TypewriterText />
          </h1>
          
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-foreground/85 mb-6 sm:mb-8 max-w-4xl leading-relaxed font-light animate-slide-up font-montserrat px-2 sm:px-0">
            The industry leader in infrastructure modernization, launching digital revenue streams, and AI integration. We don't just build software; we engineer products, platforms, and AI-powered solutions that define market leaders.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-scale-in">
            <a href="#home-contact">
              <Button
                variant="hero"
                size="xl"
                className={`min-w-[280px] rounded-full ${styles["btn-primary"]} `}
              >
                Schedule a Strategy Session
              </Button>
            </a>
            <Link to="/services/custom-software">
              <Button
                variant="hero-secondary"
                size="xl"
                className="min-w-[240px] rounded-full"
              >
                Explore our Solutions
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
