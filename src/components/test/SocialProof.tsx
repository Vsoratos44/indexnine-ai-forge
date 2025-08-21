import React from "react";
import { EnhancedCountUp } from "../enhanced/EnhancedCountUp";
import ScrollTrigger from "../effects/ScrollTriggerAnimations";
import aboutInfoSvg from "@/assets/images/about-info.svg";

const SocialProof = () => {
  const stats = [
    { value: 316, suffix: "M+", label: "in Supported Client Exits" }, 
    { value: 220, suffix: "+", label: "Engineers and Designers" },
    { value: 104, suffix: "+", label: "Solutions Delivered" },
    { value: 95, suffix: "+", label: "Customers" },
    { value: 6, suffix: "", label: "Core Studios" },
    { value: 92, suffix: "%", label: "Client Retention" },
  ];

  return (
    <section
      data-section="social-proof"
      className="py-24 lg:py-32 bg-background-light relative overflow-hidden noise-overlay"
    >
      {/* Enhanced Atmospheric Background */}
      <div className="absolute inset-0 opacity-60">
        <div className="absolute top-20 left-1/6 w-96 h-96 bg-brand-primary/10 rounded-full blur-3xl animate-luminous-drift"></div>
        <div className="absolute bottom-20 right-1/6 w-80 h-80 bg-brand-cyan/8 rounded-full blur-3xl animate-luminous-drift" style={{ animationDelay: "2s" }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-brand-purple/6 rounded-full blur-2xl animate-pulse-slow"></div>
      </div>

      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <ScrollTrigger>
          <div className="text-center mb-16">
            <h2 className="heading-h2 text-foreground-dark mb-8 leading-tight">
              The Summit is Within <span className="text-highlight-on-light">Reach</span>.
            </h2>
            <p className="text-lg sm:text-xl lg:text-2xl text-foreground-dark-muted leading-relaxed font-light max-w-4xl mx-auto">
              A path is defined by its destination. Our success is measured by the <span className="text-luminous-on-light">tangible, market-defining outcomes</span> we deliver for our clients.
            </p>
          </div>
        </ScrollTrigger>

        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Enhanced Visual */}
          <ScrollTrigger animation="slideRight" className="relative order-2 lg:order-1">
            <div className="glass-card-light glass-hover rounded-3xl p-8 noise-overlay">
              <img
                src={aboutInfoSvg}
                alt="Client success metrics and analytics chart"
                className="w-full h-auto max-w-xl mx-auto glow-primary"
              />
            </div>
          </ScrollTrigger>

          {/* Enhanced Stats Grid */}
          <div className="order-1">
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <ScrollTrigger
                  key={index}
                  delay={index * 150}
                  animation="scaleIn"
                  className="glass-card-light glass-hover rounded-2xl p-6 group noise-overlay"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/4 via-transparent to-brand-cyan/4 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                  
                  <div className="relative z-10">
                    <h3 className="text-2xl lg:text-3xl xl:text-4xl font-semibold text-foreground-dark mb-2 font-satoshi">
                      <EnhancedCountUp 
                        end={stat.value} 
                        suffix={stat.suffix}
                        duration={2000}
                      />
                    </h3>
                    <p className="text-foreground-dark-muted font-light text-sm lg:text-base">
                      {stat.label}
                    </p>
                  </div>
                </ScrollTrigger>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProof;