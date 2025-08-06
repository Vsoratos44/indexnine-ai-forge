import React from "react";

const ValueProposition = () => {
  return (
    <section
      data-section="value-proposition"
      className="py-24 lg:py-32 bg-[#fff] relative overflow-hidden"
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
              Not Just Another IT Services Firm... We Deliver{" "}
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Product Engineering Services for the AI-First Era
              </span>
            </h2>
          </div>

          <div className="max-w-5xl mx-auto">
            <p className="text-md sm:text-lg lg:text-xl text-foreground-dark-muted leading-relaxed font-light">
              In a market often defined by reactive order-takers, we were
              founded on a refusal to be just another vendor. Our mission is to
              permanently challenge that stigma. We prove every day that a
              globally-recognized, product-first engineering powerhouse can be
              built in India. We don't just take orders; we challenge
              assumptions, contribute to your product strategy, and build
              enduring value. We are the high-value, strategic partner you
              thought you couldn't find.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValueProposition;
