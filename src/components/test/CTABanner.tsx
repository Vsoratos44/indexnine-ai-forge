import React from "react";
import { Button } from "@/components/ui/button";
import { Section } from "@/components/ui/section";
import ScrollTrigger from "../effects/ScrollTriggerAnimations";
import EnhancedScrollReveal from "./effects/EnhancedScrollReveal";
import CtaButton from "./CtaButton";
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
              <h2 className="heading-h2 text-transparent bg-clip-text bg-gradient-to-r from-brand-purple via-brand-primary to-brand-cyan mb-4">
                Your Ambition Has a <span className="font-bold">Starting Point</span>.
              </h2>
            </EnhancedScrollReveal>
            <EnhancedScrollReveal direction="up" delay={600}>
              <p className="text-lg text-foreground-light mb-8 max-w-2xl mx-auto font-light">
                The summit is not a destination—it's a vantage point for the next peak. 
                Ready to begin the ascent that defines your legacy?
              </p>
            </EnhancedScrollReveal>
            <EnhancedScrollReveal direction="scale" delay={800}>
              <CtaButton className="px-12 py-6 text-xl font-semibold">
                Begin Your Ascent
              </CtaButton>
            </EnhancedScrollReveal>
          </div>
        </div>
      </EnhancedScrollReveal>
    </Section>
  );
};

export default CTABanner;