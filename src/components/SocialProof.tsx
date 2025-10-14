import React from "react";
import CountUp from "./CountUp";
import aboutInfoSvg from "@/assets/images/about-info.svg";

const SocialProof = () => {
  const stats = [
    { value: 0, suffix: "", label: "", hideCount: true }, // blank card
    { value: 104, suffix: "+", label: "Solutions Delivered" },
    { value: 220, suffix: "+", label: "Engineers and Designers" },
    { value: 95, suffix: "+", label: "Customers" },
    { value: 6, suffix: "", label: "Core Studios" },
    { value: 92, suffix: "%", label: "Client Satisfaction" },
  ];

  const chartData = [110, 112, 125, 130, 150, 140, 160, 211];

  return (
    <section
      data-section="social-proof"
      className="pt-8 lg:pt-16 bg-[#fff] relative overflow-hidden"
    >
      {/* Background blur elements */}
      <div className="absolute inset-0 ">
        <div className="absolute top-20 left-1/6 w-80 h-80 bg-brand-primary/8 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-1/6 w-96 h-96 bg-brand-purple/6 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="text-center mb-8 lg:mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-foreground-dark mb-6 font-montserrat leading-[1.2]">
            Client Outcomes
          </h2>
          <p className="text-lg sm:text-xl lg:text-2xl text-foreground-dark-muted leading-relaxed font-light max-w-4xl mx-auto">
            Our success isn't measured by the volume of code written; our
            success is measured in the value we create for our clients.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left side - Chart with glassmorphism */}
          <div className="relative order-2 lg:order-1">
            {/* <div className="relative overflow-hidden backdrop-blur-xl bg-gradient-card-light border border-glass-border rounded-3xl p-8 lg:p-12 shadow-glass hover:shadow-glass-lg transition-all duration-500">
               <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/5 via-transparent to-brand-purple/5 rounded-3xl"></div>

               <div className="relative z-10">
                <div className="flex items-end justify-center space-x-2 lg:space-x-3 h-56 mb-8">
                  {chartData.map((height, index) => (
                    <div key={index} className="flex flex-col items-center">
                      <div
                        className="bg-gradient-primary rounded-t-xl w-8 lg:w-10 shadow-lg transition-all duration-300 hover:scale-110 animate-fade-in"
                        style={{
                          height: `${(height / 211) * 140}px`,
                          animationDelay: `${index * 0.15}s`,
                          animation: `fade-in 0.8s ease-out ${
                            index * 0.15
                          }s both, scale-in 0.6s ease-out ${
                            index * 0.15 + 0.2
                          }s both`,
                        }}
                      ></div>
                      <span
                        className="text-xs lg:text-sm text-brand-primary font-semibold mt-2 animate-fade-in"
                        style={{ animationDelay: `${index * 0.15 + 0.4}s` }}
                      >
                        {height}
                      </span>
                    </div>
                  ))}
                </div>

                 <div
                  className="text-center animate-scale-in"
                  style={{ animationDelay: "1.2s" }}
                >
                  <h3 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-foreground-dark mb-3 font-montserrat">
                    $316M+
                  </h3>
                  <p className="text-foreground-dark-muted font-medium text-base lg:text-lg font-montserrat">
                    In Supported Client Exits
                  </p>
                </div>
              </div>
            </div> */}
            <img
              src={aboutInfoSvg}
              alt="Client success metrics and analytics chart"
              className="w-full h-auto max-w-xl mx-auto"
            />
          </div>

          {/* Right side - Stats grid with glassmorphism */}
          <div className="order-1">
            <div className="grid grid-cols-2 gap-4">
              {stats.slice(0, 6).map((stat, index) => (
                <div
                  key={index}
                  className="relative overflow-hidden backdrop-blur-xl bg-gradient-card-light border-glass-border p-2 transition-all duration-500 hover:scale-105 animate-fade-in group"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="relative z-10">
                    <h3 className="text-3xl lg:text-4xl xl:text-5xl font-semibold text-foreground-dark mb-2 font-montserrat">
                      {index === 0 ? (
                        ""
                      ) : (
                        <CountUp end={stat.value} suffix={stat.suffix} />
                      )}
                    </h3>
                    <p className="text-foreground-dark-muted font-light text-sm lg:text-lg font-montserrat">
                      {stat.label}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProof;
