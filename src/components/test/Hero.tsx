import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import VideoBackground from "../VideoBackground";
import DynamicMeshBackground from "../effects/DynamicMeshBackground";
import ParticleField from "../effects/ParticleField";
import ScrollTrigger from "../effects/ScrollTriggerAnimations";
import { TextHighlight, AnimatedText } from "../enhanced/TextHighlight";
import { HoverMagnet } from "../effects/MicroInteractions";
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
          <ScrollTrigger>
            <h1 className="heading-h1 text-[2.8rem] sm:text-[3.5rem] lg:text-[5rem] xl:text-[5.5rem] mb-6 leading-[1.1] font-satoshi">
              Where Ambition Finds <TextHighlight variant="gradient">Its Path</TextHighlight>
            </h1>
          </ScrollTrigger>

          <ScrollTrigger delay={200}>
            <p className="text-lg sm:text-xl lg:text-2xl text-foreground/90 mb-4 leading-relaxed font-light font-montserrat max-w-4xl">
              In a landscape of overwhelming complexity, we engineer the <TextHighlight variant="luminous">clarity</TextHighlight> you need to lead. 
              We build the products, platforms, and AI-powered solutions that transform market potential into your <TextHighlight variant="gradient">market-defining advantage</TextHighlight>.
            </p>
          </ScrollTrigger>

          <ScrollTrigger delay={300}>
            <p className="text-base sm:text-lg text-foreground/75 mb-8 italic font-montserrat glow-cyan">
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
                    className={`min-w-[280px] rounded-full ${styles["btn-primary"]}`}
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
                    className="min-w-[240px] rounded-full"
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
  );
};

export default Hero;