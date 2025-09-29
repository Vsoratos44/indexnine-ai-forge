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
      className="relative min-h-[780px] overflow-hidden bg-black"
    >
      {/* Three.js Living Void Background */}
      <VideoBackground />

      {/* Content - Precisely positioned */}
      <div className="relative z-10 container mx-auto px-6 pt-52 pb-32">
        <div className=" mx-auto text-center lg:text-left lg:mx-0">
          <h1 className="max-w-3xl text-[2.5rem] sm:text-[3rem] lg:text-[4rem] xl:text-[4rem] font-semibold text-foreground mb-6 leading-[1.1]  animate-fade-in font-montserrat">
            Product Innovation & <br />
            Software Engineering
            <br />
            <TypewriterText />
          </h1>

          <p className=" max-w-6xl text-base sm:text-lg lg:text-xl text-foreground/85 mb-8 leading-relaxed font-light animate-slide-up font-montserrat">
            The industry leader in human centric, AI accelerated, digital
            product engineering. We don't just code…
            <br />
            &#9671; We build products users love &#9671; We help Launch new
            digital revenue streams &#9671;
            <br />
            &#9671; We visually engineer with humans for humans &#9671; We
            leverage AI responsibly & securely &#9671;
            <br />
            &#9671; We engineer AI integrated solutions that define market
            leaders
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-scale-in">
            <a
              href="https://calendly.com/vaughn-soratos-indexnine"
              target="_blank"
            >
              <Button
                variant="btnPrimary"
                size="xl"
                className={`min-w-[280px]`}
              >
                Schedule a Strategy Session
              </Button>
            </a>
            <Link to="/services/custom-software">
              <Button
                variant="btnSecondary"
                size="xl"
                className="min-w-[240px]"
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
