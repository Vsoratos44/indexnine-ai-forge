import React from "react";

const ValueProposition = () => {
  return (
    <section
      data-section="value-proposition"
      className="py-24 lg:py-32 relative overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(
          to bottom,
          hsl(0 0% 0%) 0%,
          hsl(0 0% 0%) 10%,
          hsl(var(--brand-primary-dark)) 18%,
          hsl(var(--primary)) 28%,
          hsl(var(--primary)) 32%,
          hsl(var(--background-section)) 40%,
          hsl(var(--background-section)) 70%,
          hsl(var(--background-light)) 100%
        )`
      }}
    >
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-1/4 w-64 h-64 bg-brand-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-1/4 w-80 h-80 bg-brand-purple/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-6xl mx-auto">
          <div className="mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-foreground-dark mb-8 leading-relaxed tracking-tight ">
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Product Engineering Services for the AI Era.
              </span>
            </h2>
          </div>

          <div className="max-w-5xl mx-auto">
            <p className="text-lg sm:text-xl lg:text-2xl text-foreground-dark-muted leading-relaxed font-light">
              Indexnine was founded not just to achieve excellence, but to model it. For years, the industry has been plagued by a perception problem—a belief that offshore partners lack proactive, strategic thinking. We exist to permanently challenge that stigma.
              <br /><br />
              When the stakes are high and you need best-in-class delivery, we're there. We don't churn out solutions; we offer full cycle product development that doesn't compromise on speed or quality. Whether you're working on minimum viable product development or navigating a digital transformation, we can create a solution tailored to you.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValueProposition;
