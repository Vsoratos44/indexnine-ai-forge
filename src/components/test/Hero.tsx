import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import VideoBackground from "../VideoBackground";
import TypewriterText from "../TypewriterText";
import DynamicMeshBackground from "../effects/DynamicMeshBackground";
import ParticleField from "../effects/ParticleField";
import styles from "../../assets/css/stylesheet.module.css";

const Hero = () => {
  return (
    <section
      data-section="hero"
      className="relative min-h-[90vh] overflow-hidden bg-gradient-to-br from-brand-darker via-brand-dark to-brand-purple-dark noise-overlay"
    >
      {/* Enhanced Multi-layered Background */}
      <div className="absolute inset-0">
        <DynamicMeshBackground intensity={0.7} />
        <ParticleField particleCount={60} />
        <VideoBackground />
        {/* Luminous gradient overlay */}
        <div className="absolute inset-0 bg-gradient-luminous animate-mesh-shift opacity-40"></div>
      </div>

      {/* Content - Enhanced with Glass Morphism */}
      <div className="relative z-10 container mx-auto px-6 pt-52 pb-24">
        <div className="max-w-4xl mx-auto text-center lg:text-left lg:mx-0">
          <h1 className="heading-h1 text-[2.8rem] sm:text-[3.5rem] lg:text-[5rem] xl:text-[5.5rem] mb-6 leading-[1.1] animate-fade-in font-satoshi">
            Where Ambition Finds <span className="text-highlight">Its Path</span>
          </h1>

          <p className="text-lg sm:text-xl lg:text-2xl text-foreground/90 mb-4 leading-relaxed font-light animate-slide-up font-montserrat max-w-4xl">
            In a landscape of overwhelming complexity, we engineer the <span className="text-luminous">clarity</span> you need to lead. 
            We build the products, platforms, and AI-powered solutions that transform market potential into your <span className="text-highlight">market-defining advantage</span>.
          </p>

          <p className="text-base sm:text-lg text-foreground/75 mb-8 italic animate-slide-up font-montserrat glow-cyan" 
             style={{animationDelay: "0.3s"}}>
            Where ambition finds its path.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start animate-scale-in" 
               style={{animationDelay: "0.5s"}}>
            <a href="#home-contact">
              <Button
                variant="default"
                size="xl"
                className={`min-w-[280px] rounded-full glass-hover glow-pulse ${styles["btn-primary"]}`}
              >
                Chart Your Path
              </Button>
            </a>
            <Link to="/services/custom-software">
              <Button
                variant="hero-secondary"
                size="xl"
                className="min-w-[240px] rounded-full glass-card border-brand-cyan/30 text-brand-cyan hover:shadow-glow transition-all duration-500"
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