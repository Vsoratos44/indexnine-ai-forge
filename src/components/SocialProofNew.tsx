import React from "react";
import CountUp from "./CountUp";

const SocialProofNew = () => {
  const stats = [
    { value: 104, suffix: "+", label: "Solutions Delivered" },
    { value: 220, suffix: "+", label: "Engineers and Designers" },
    { value: 95, suffix: "+", label: "Customers" },
    { value: 6, suffix: "", label: "Core Studios" },
    { value: 92, suffix: "%", label: "Client Retention" },
    { value: 98, suffix: "%", label: "Client Satisfaction" },
  ];

  const chartData = [110, 112, 125, 130, 150, 140, 160, 211];

  return (
    <section
      data-section="social-proof"
      className="py-24 lg:py-32 bg-white relative overflow-hidden"
    >
      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground-dark mb-6 font-montserrat">
            Client Outcomes
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed font-light max-w-4xl mx-auto">
            Our success isn't measured by the volume of code written; our
            success is measured in the value we create for our clients.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start max-w-7xl mx-auto">
          {/* Left side - Stats grid (2x3) */}
          <div className="order-1">
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="bg-white border border-gray-100 rounded-2xl p-8 text-center hover:shadow-lg transition-all duration-300 animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <h3 className="text-5xl lg:text-6xl font-bold text-foreground-dark mb-4 font-montserrat">
                    <CountUp end={stat.value} suffix={stat.suffix} />
                  </h3>
                  <p className="text-muted-foreground font-medium text-lg">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right side - Chart with $316M+ */}
          <div className="order-2">
            <div className="bg-white border border-gray-100 rounded-2xl p-8 text-center">
              {/* Chart visualization */}
              <div className="flex items-end justify-center space-x-3 h-64 mb-8">
                {chartData.map((height, index) => (
                  <div key={index} className="flex flex-col items-center">
                    <div
                      className="bg-gradient-to-t from-brand-primary to-brand-purple rounded-t-lg w-10 shadow-lg transition-all duration-300 hover:scale-110 animate-fade-in"
                      style={{
                        height: `${(height / 211) * 180}px`,
                        animationDelay: `${index * 0.15}s`,
                      }}
                    ></div>
                    <span className="text-sm text-brand-primary font-semibold mt-2">
                      {height}
                    </span>
                  </div>
                ))}
              </div>

              {/* Main metric */}
              <div className="text-center">
                <h3 className="text-6xl lg:text-7xl font-bold text-foreground-dark mb-4 font-montserrat">
                  $316M+
                </h3>
                <p className="text-muted-foreground font-medium text-xl">
                  In Supported Client Exits
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProofNew;