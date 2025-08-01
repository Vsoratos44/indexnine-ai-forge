import React from 'react';

const SocialProof = () => {
  const stats = [
    { value: "104+", label: "Solutions Delivered" },
    { value: "220+", label: "Engineers and Designers" },
    { value: "99+", label: "Successful Projects" },
    { value: "6", label: "Studios" },
    { value: "92%", label: "Client Retention" }
  ];

  const chartData = [110, 112, 125, 130, 150, 140, 160, 211];

  return (
    <section className="py-24 lg:py-32 bg-background relative overflow-hidden">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left side - Enhanced Chart visualization */}
          <div className="relative order-2 lg:order-1">
            <div className="bg-gradient-stats rounded-3xl p-8 lg:p-12 relative overflow-hidden border border-border shadow-lg">
              {/* Decorative background elements */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand-primary/5 rounded-full blur-2xl"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-brand-purple/5 rounded-full blur-xl"></div>
              
              {/* Enhanced Bar Chart */}
              <div className="relative z-10">
                <div className="flex items-end justify-center space-x-3 h-56 mb-8">
                  {chartData.map((height, index) => (
                    <div key={index} className="flex flex-col items-center">
                      <div 
                        className="bg-gradient-primary rounded-t-2xl w-10 lg:w-12 animate-slide-up shadow-md transition-all duration-300 hover:scale-110"
                        style={{ 
                          height: `${(height / 211) * 140}px`,
                          animationDelay: `${index * 0.15}s`
                        }}
                      ></div>
                      <span className="text-xs lg:text-sm text-brand-primary font-semibold mt-3">{height}</span>
                    </div>
                  ))}
                </div>
                
                {/* Main metric - Enhanced */}
                <div className="text-center">
                  <h3 className="text-5xl lg:text-6xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-3">
                    $316M+
                  </h3>
                  <p className="text-foreground-muted font-semibold text-lg">In Supported Client Exits</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right side - Enhanced Stats grid */}
          <div className="order-1 lg:order-2">
            <div className="grid grid-cols-2 gap-6 lg:gap-8">
              {stats.map((stat, index) => (
                <div 
                  key={index} 
                  className="bg-background-card rounded-2xl p-6 lg:p-8 text-center shadow-md border border-border hover:shadow-lg transition-all duration-300 hover:scale-105 animate-fade-in"
                  style={{animationDelay: `${index * 0.1}s`}}
                >
                  <h3 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-foreground mb-3 bg-gradient-primary bg-clip-text text-transparent">
                    {stat.value}
                  </h3>
                  <p className="text-foreground-muted font-medium text-sm lg:text-base">{stat.label}</p>
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