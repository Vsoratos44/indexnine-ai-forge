import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import VideoBackground from "../VideoBackground";
import TypewriterText from "../TypewriterText";
import styles from "../../assets/css/stylesheet.module.css";

const Hero = () => {
  return (
    <section
      data-section="hero"
      className="relative min-h-[90vh] overflow-hidden bg-black"
    >
      {/* Three.js Living Void Background */}
      <VideoBackground />

      {/* Content - Precisely positioned */}
      <div className="relative z-10 container mx-auto px-6 pt-52 pb-24">
        <div className="max-w-3xl mx-auto text-center lg:text-left lg:mx-0">
          <h1 className="text-[2.5rem] sm:text-[3rem] lg:text-[4rem] xl:text-[4rem] font-semibold text-foreground mb-6 leading-[1.25] animate-fade-in font-montserrat">
            Where Ambition Finds Its Path
          </h1>

          <p className="text-base sm:text-lg lg:text-xl text-foreground/85 mb-4 leading-relaxed font-light animate-slide-up font-montserrat">
            In a landscape of overwhelming complexity, we engineer the clarity you need to lead. We build the products, platforms, and AI-powered solutions that transform market potential into your market-defining advantage.
          </p>

          <p className="text-sm sm:text-base text-foreground/70 mb-8 italic animate-slide-up font-montserrat" style={{animationDelay: "0.2s"}}>
            Where ambition finds its path.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-scale-in">
            <a href="#home-contact">
              <Button
                variant="default"
                size="xl"
                className={`min-w-[280px] rounded-full ${styles["btn-primary"]} `}
              >
                Chart Your Path
              </Button>
            </a>
            <Link to="/services/custom-software">
              <Button
                variant="hero-secondary"
                size="xl"
                className="min-w-[240px] rounded-full"
              >
                Explore Our Solutions
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;