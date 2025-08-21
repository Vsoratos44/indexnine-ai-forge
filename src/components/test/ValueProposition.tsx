import React from "react";

const ValueProposition = () => {
  return (
    <section
      data-section="value-proposition"
      className="py-16 md:pt-20 lg:pt-28 relative overflow-hidden bg-background-light border-t border-border/20 noise-overlay"
    >
      {/* Enhanced Atmospheric Background */}
      <div className="absolute inset-0 opacity-40">
        <div className="absolute top-20 left-1/4 w-80 h-80 bg-brand-primary/8 rounded-full blur-3xl animate-luminous-drift"></div>
        <div 
          className="absolute bottom-20 right-1/4 w-96 h-96 bg-brand-cyan/6 rounded-full blur-3xl animate-luminous-drift"
          style={{ animationDelay: "3s" }}
        ></div>
        <div 
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-brand-purple/5 rounded-full blur-2xl animate-pulse-slow"
          style={{ animationDelay: "1.5s" }}
        ></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-screen-xl relative z-10">
        <div className="text-center">
          <h2 className="heading-h2 text-foreground-dark mb-12 max-w-4xl mx-auto leading-[1.3] animate-fade-in">
            We Saw a Need for a <span className="test-neon-purple">Better Guide</span>.
          </h2>

          <div className="max-w-5xl mx-auto animate-slide-up">
            <p className="text-lg text-foreground-dark-muted leading-relaxed font-light">
              The industry was full of vendors but starved for <span className="test-neon-cyan">true partners</span>. For years, leaders have navigated the fog of outsourcing—enduring opaque processes, reactive partners, and a frustrating lack of strategic ownership.
              <br />
              <br />
              <span className="test-neon-purple font-semibold">Indexnine was founded to be the strategic partner the industry was missing.</span>
              <br />
              <br />
              We exist to guide high-stakes ventures with a proactive, strategic mindset. We provide <span className="test-neon-cyan">full-cycle product development</span> that moves beyond simple execution to deliver a clear, decisive path forward from MVP validation to enterprise-wide transformation.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValueProposition;