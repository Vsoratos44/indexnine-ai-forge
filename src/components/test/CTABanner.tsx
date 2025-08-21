import React from "react";
import { Button } from "@/components/ui/button";
import { Section } from "@/components/ui/section";
import ScrollTrigger from "../effects/ScrollTriggerAnimations";
import EnhancedScrollReveal from "./effects/EnhancedScrollReveal";
import styles from "../../assets/css/stylesheet.module.css";

const CTABanner = () => {
  console.log("CTABanner component loading...");
  return (
    <Section variant="alternate" containerSize="6xl">
      <EnhancedScrollReveal direction="scale" delay={200}>
        <div className={`glass-card-light p-2 text-center ${styles["bord-lt-rb"]} rounded-3xl noise-overlay`}>
          <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/6 via-transparent to-brand-cyan/6 rounded-3xl opacity-60"></div>
          
          <div className="bg-background-light rounded-2xl p-12 relative z-10">
            <EnhancedScrollReveal direction="fade" delay={400}>
              <h2 className="heading-h2 text-foreground-dark mb-4">
                Your Ambition Has a <span className="test-neon-purple">Starting Point</span>.
              </h2>
            </EnhancedScrollReveal>
            <EnhancedScrollReveal direction="up" delay={600}>
              <p className="text-lg text-foreground-dark-muted mb-8 max-w-2xl mx-auto font-light">
                The path from complexity to clarity begins with a single conversation. Let's discuss your vision, map your challenges, and <span className="test-neon-cyan">chart the course</span> to your market-defining destination.
              </p>
            </EnhancedScrollReveal>
            <EnhancedScrollReveal direction="scale" delay={800}>
              <Button 
                variant="luminous-primary" 
                size="xl" 
                className="rounded-full"
                glow="intense"
              >
                Schedule Your Strategy Session
              </Button>
            </EnhancedScrollReveal>
          </div>
        </div>
      </EnhancedScrollReveal>
    </Section>
  );
};

export default CTABanner;