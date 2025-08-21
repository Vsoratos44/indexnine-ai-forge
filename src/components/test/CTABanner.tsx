import React from "react";
import { Button } from "@/components/ui/button";
import { Section } from "@/components/ui/section";
import styles from "../../assets/css/stylesheet.module.css";

const CTABanner = () => {
  return (
    <Section variant="alternate" containerSize="6xl">
      <div
        className={`bg-gradient-subtle p-[5px]  text-center  ${styles["bord-lt-rb"]} rounded-[1.125rem]`}
      >
        <div className="bg-[#fff] rounded-[1rem] p-12">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground-dark mb-4 font-semibold">
            Your Ambition Has a Starting Point.
          </h2>
          <p className="text-lg text-foreground-dark-muted mb-8 max-w-2xl mx-auto">
            The path from complexity to clarity begins with a single conversation. Let's discuss your vision, map your challenges, and chart the course to your market-defining destination.
          </p>
          <Button variant="default" size="lg" className="rounded-full">
            Schedule Your Strategy Session
          </Button>
        </div>
      </div>
    </Section>
  );
};

export default CTABanner;