import React from 'react';

const SocialProof = () => {
  const stats = [
    { value: "104+", label: "Solutions Delivered" },
    { value: "220+", label: "Engineers and Designers" },
    { value: "99+", label: "Successful Projects" },
    { value: "6", label: "Studios" },
    { value: "92%", label: "Client Retention" }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Chart visualization and main metric */}
          <div className="relative">
            <div className="bg-brand-purple-light rounded-3xl p-8 relative overflow-hidden">
              {/* Bar Chart */}
              <div className="flex items-end justify-center space-x-2 h-48 mb-6">
                {[110, 112, 125, 130, 150, 140, 160, 211].map((height, index) => (
                  <div key={index} className="flex flex-col items-center">
                    <div 
                      className="bg-brand-primary rounded-t-lg w-8 animate-slide-up"
                      style={{ 
                        height: `${(height / 211) * 120}px`,
                        animationDelay: `${index * 0.1}s`
                      }}
                    ></div>
                    <span className="text-xs text-brand-primary font-medium mt-2">{height}</span>
                  </div>
                ))}
              </div>
              
              {/* Main metric */}
              <div className="text-center">
                <h3 className="text-4xl md:text-5xl font-bold text-brand-primary mb-2">$316M+</h3>
                <p className="text-foreground font-medium">In Supported Client Exits</p>
              </div>
            </div>
          </div>

          {/* Right side - Stats grid */}
          <div className="grid grid-cols-2 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center animate-fade-in" style={{animationDelay: `${index * 0.2}s`}}>
                <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-2">{stat.value}</h3>
                <p className="text-foreground-light">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProof;