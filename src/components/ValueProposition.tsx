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
            <span className="text-brand-primary leading-[1.4]">
              Product Engineering Services
            </span>{" "}
            for the AI Era.
          </h2>

          <div className="max-w-5xl mx-auto">
            <p className="text-lg text-foreground-dark-muted leading-relaxed font-light">
              Indexnine was founded not just to achieve excellence, but to model
              it. For years, the industry has been plagued by a perception
              problem—a belief that offshore partners lack proactive, strategic
              thinking. We exist to permanently challenge that stigma.
              <br />
              <br />
              When the stakes are high and you need best-in-class delivery,
              we're there. We don't churn out solutions; we offer full cycle
              product development that doesn't compromise on speed or quality.
              Whether you're working on minimum viable product development or
              navigating a digital transformation, we can create a solution
              tailored to you.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValueProposition;
