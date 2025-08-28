import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import CtaButton from "./CtaButton";
import TestVideoBackground from "./TestVideoBackground";
import DynamicMeshBackground from "../effects/DynamicMeshBackground";
import ParticleField from "../effects/ParticleField";
import ScrollTrigger from "../effects/ScrollTriggerAnimations";
import { TextHighlight, AnimatedText } from "../enhanced/TextHighlight";
import { HoverMagnet } from "../effects/MicroInteractions";
import AuroraBackground from "./effects/AuroraBackground";
import LivingGradientBackground from "./effects/LivingGradientBackground";
import ElectricPathSVG from "./effects/ElectricPathSVG";
import SplineInspiredBackground from "./effects/SplineInspiredBackground";
import styles from "../../assets/css/stylesheet.module.css";

const Hero = () => {
  return (
    <>
      {/* Electric Path - Global Navigation Guide */}
      <ElectricPathSVG className="opacity-60" />
      
      <LivingGradientBackground 
        variant="electric"
        className="min-h-[90vh] relative overflow-hidden"
      >
        <AuroraBackground 
          className="min-h-[90vh] bg-gradient-to-br from-brand-darker via-brand-dark to-brand-purple-dark noise-overlay"
          intensity={0.15}
        >
          <section
            data-section="hero"
            className="relative min-h-[90vh] overflow-hidden"
          >
            {/* Enhanced Multi-layered Background with Spline-inspired interaction */}
            <div className="absolute inset-0">
              <SplineInspiredBackground intensity={0.8} className="z-50" />
              <DynamicMeshBackground intensity={0.3} />
              <ParticleField particleCount={20} />
              {/* Electric gradient overlay */}
              <div className="absolute inset-0 bg-gradient-luminous animate-electric-shimmer opacity-10"></div>
            </div>

          {/* Content - Enhanced with Electric Effects */}
          <div className="relative z-20 container mx-auto px-6 pt-52 pb-24">
            <div className="max-w-4xl mx-auto text-center lg:text-left lg:mx-0">
              <ScrollTrigger>
                  <h1 className="heading-h1 text-[2.8rem] sm:text-[3.5rem] lg:text-[5rem] xl:text-[5.5rem] mb-6 leading-[1.1] font-satoshi">
                    Where Ambition Finds <span className="test-electric-text">Its Path</span>
                  </h1>
              </ScrollTrigger>

              <ScrollTrigger delay={200}>
                  <p className="text-lg sm:text-xl lg:text-2xl text-foreground/90 mb-4 leading-relaxed font-light font-montserrat max-w-4xl">
                    In a landscape of overwhelming complexity, we engineer the <span className="test-electric-glow">clarity</span> you need to lead. 
                    We build the products, platforms, and AI-powered solutions that transform market potential into your <span className="test-electric-text">market-defining advantage</span>.
                  </p>
              </ScrollTrigger>

              <ScrollTrigger delay={300}>
                <p className="text-base sm:text-lg text-foreground/75 mb-8 italic font-montserrat test-electric-glow">
                  <AnimatedText>Where ambition finds its path.</AnimatedText>
                </p>
              </ScrollTrigger>

              <ScrollTrigger delay={500}>
                <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start">
                  <HoverMagnet magnetStrength={0.1}>
                    <a href="#home-contact">
                      <Button
                        variant="luminous-primary"
                        size="xl"
                        className={`min-w-[280px] rounded-full ${styles["btn-primary"]} animate-glow-pulse`}
                        glow="intense"
                      >
                        Chart Your Path
                      </Button>
                    </a>
                  </HoverMagnet>
                  <HoverMagnet magnetStrength={0.1}>
                    <Link to="/services/custom-software">
                      <Button
                        variant="luminous-secondary"
                        size="xl"
                        className="min-w-[240px] rounded-full hover:animate-glow-pulse"
                      >
                        Explore Our Solutions
                      </Button>
                    </Link>
                  </HoverMagnet>
                </div>
              </ScrollTrigger>
            </div>
          </div>
          </section>
        </AuroraBackground>
      </LivingGradientBackground>
    </>
  );
};

export default Hero;