import React from 'react';
import CountUp from './CountUp';

const SocialProof = () => {
  const stats = [
    { value: 104, suffix: "+", label: "Solutions Delivered" },
    { value: 220, suffix: "+", label: "Engineers & Designers" },
    { value: 99, suffix: "+", label: "Successful Projects" },
    { value: 95, suffix: "+", label: "Customers Past & Present" },
    { value: 6, suffix: "", label: "Core Studios" },
    { value: 92, suffix: "%", label: "Client Retention" }
  ];

  const chartData = [110, 112, 125, 130, 150, 140, 160, 211];

  return (
    <section className="py-24 lg:py-32 bg-gradient-section relative overflow-hidden">
      {/* Background blur elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-1/6 w-80 h-80 bg-brand-primary/8 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-1/6 w-96 h-96 bg-brand-purple/6 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left side - Chart with glassmorphism */}
          <div className="relative order-2 lg:order-1">
            <div className="relative overflow-hidden backdrop-blur-xl bg-white/5 border border-white/20 rounded-3xl p-8 lg:p-12 shadow-glass hover:shadow-glass-lg transition-all duration-500">
              {/* Inner glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/5 via-transparent to-brand-purple/5 rounded-3xl"></div>
              
              {/* Enhanced Bar Chart */}
              <div className="relative z-10">
                <div className="flex items-end justify-center space-x-2 lg:space-x-3 h-56 mb-8">
                  {chartData.map((height, index) => (
                    <div key={index} className="flex flex-col items-center">
                      <div 
                        className="bg-gradient-to-t from-[#6366f1] via-[#8b5cf6] to-[#a855f7] rounded-t-xl w-8 lg:w-10 shadow-lg transition-all duration-300 hover:scale-110 animate-fade-in"
                        style={{ 
                          height: `${(height / 211) * 140}px`,
                          animationDelay: `${index * 0.15}s`,
                          animation: `fade-in 0.8s ease-out ${index * 0.15}s both, scale-in 0.6s ease-out ${index * 0.15 + 0.2}s both`
                        }}
                      ></div>
                      <span className="text-xs lg:text-sm text-[#6366f1] font-semibold mt-2 animate-fade-in" style={{animationDelay: `${index * 0.15 + 0.4}s`}}>{height}</span>
                    </div>
                  ))}
                </div>
                
                {/* Main metric */}
                <div className="text-center animate-scale-in" style={{animationDelay: '1.2s'}}>
                  <h3 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-foreground mb-3 font-montserrat">
                    $316M+
                  </h3>
                  <p className="text-foreground-muted font-medium text-base lg:text-lg font-montserrat">In Supported Client Exits</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right side - Stats grid with glassmorphism */}
          <div className="order-1 lg:order-2">
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
              {stats.slice(0, 5).map((stat, index) => (
                <div 
                  key={index} 
                  className="relative overflow-hidden backdrop-blur-xl bg-white/5 border border-white/20 rounded-2xl p-6 lg:p-8 text-center shadow-glass hover:shadow-glass-lg transition-all duration-500 hover:scale-105 animate-fade-in group"
                  style={{animationDelay: `${index * 0.1}s`}}
                >
                  {/* Inner glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/3 via-transparent to-brand-purple/3 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  <div className="relative z-10">
                    <h3 className="text-2xl lg:text-3xl xl:text-4xl font-bold text-foreground mb-2 font-montserrat">
                      <CountUp end={stat.value} suffix={stat.suffix} />
                    </h3>
                    <p className="text-foreground-muted font-medium text-xs lg:text-sm font-montserrat">{stat.label}</p>
                  </div>
                </div>
              ))}
              
              {/* Client Retention - Full Width */}
              <div className="lg:col-span-3 relative overflow-hidden backdrop-blur-xl bg-white/5 border border-white/20 rounded-2xl p-6 lg:p-8 text-center shadow-glass hover:shadow-glass-lg transition-all duration-500 hover:scale-105 animate-fade-in group" style={{animationDelay: '0.5s'}}>
                <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/3 via-transparent to-brand-purple/3 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10">
                  <h3 className="text-2xl lg:text-3xl xl:text-4xl font-bold text-foreground mb-2 font-montserrat">
                    <CountUp end={92} suffix="%" />
                  </h3>
                  <p className="text-foreground-muted font-medium text-xs lg:text-sm font-montserrat">Client Retention</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProof;