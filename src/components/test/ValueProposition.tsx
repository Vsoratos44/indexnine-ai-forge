import React from "react";

const ValueProposition = () => {
  return (
    <section
      data-section="value-proposition"
      className="py-16 md:pt-20 lg:pt-28 relative overflow-hidden bg-[#fff] border-t border-border/20"
    >
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-1/4 w-64 h-64 bg-brand-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-1/4 w-80 h-80 bg-brand-purple/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-screen-xl relative z-10">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-foreground-dark mb-12 max-w-3xl mx-auto leading-[1.4]">
            We Saw a Need for a Better Guide.
          </h2>

          <div className="max-w-5xl mx-auto">
            <p className="text-lg text-foreground-dark-muted leading-relaxed font-light">
              The industry was full of vendors but starved for true partners. For years, leaders have navigated the fog of outsourcing—enduring opaque processes, reactive partners, and a frustrating lack of strategic ownership.
              <br />
              <br />
              Indexnine was founded to be the strategic partner the industry was missing.
              <br />
              <br />
              We exist to guide high-stakes ventures with a proactive, strategic mindset. We provide full-cycle product development that moves beyond simple execution to deliver a clear, decisive path forward from MVP validation to enterprise-wide transformation.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValueProposition;