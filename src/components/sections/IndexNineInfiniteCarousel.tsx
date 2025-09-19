import React, { useEffect, useRef } from 'react';

interface ClientLogo {
  id: number;
  name: string;
  src: string;
  url: string;
}

interface IndexNineInfiniteCarouselProps {
  logos: ClientLogo[];
  title?: string;
  subtitle?: string;
  showStats?: boolean;
  speed?: number;
  pauseOnHover?: boolean;
  className?: string;
}

const IndexNineInfiniteCarousel: React.FC<IndexNineInfiniteCarouselProps> = ({
  logos,
  title = "Trusted by Fortune 500 Leaders",
  subtitle = "Join enterprises who've accelerated their digital transformation and AI adoption with IndexNine's proven methodologies",
  showStats = true,
  speed = 30,
  pauseOnHover = true,
  className = ""
}) => {
  const trackRef1 = useRef<HTMLDivElement>(null);
  const trackRef2 = useRef<HTMLDivElement>(null);

  // Enterprise statistics
  const enterpriseStats = [
    { value: "150+", label: "Enterprise Clients" },
    { value: "98%", label: "Client Retention" },
    { value: "500+", label: "Products Delivered" },
    { value: "15+", label: "Industries Served" }
  ];

  // Duplicate logos for seamless infinite scroll
  const duplicatedLogos = [...logos, ...logos];

  useEffect(() => {
    const tracks = [trackRef1.current, trackRef2.current];
    
    tracks.forEach((track, index) => {
      if (track) {
        const direction = index === 0 ? -1 : 1;
        track.style.animation = `scroll-${index === 0 ? 'left' : 'right'} ${speed}s linear infinite`;
      }
    });

    // Add CSS animations dynamically
    const style = document.createElement('style');
    style.textContent = `
      @keyframes scroll-left {
        0% { transform: translateX(0); }
        100% { transform: translateX(-50%); }
      }
      @keyframes scroll-right {
        0% { transform: translateX(-50%); }
        100% { transform: translateX(0); }
      }
    `;
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style);
    };
  }, [speed]);

  return (
    <section 
      className={`relative py-20 lg:py-28 overflow-hidden bg-gradient-to-br from-brand-dark via-brand-dark/95 to-brand-dark/90 ${className}`}
      aria-labelledby="client-carousel-title"
    >
      {/* Neural pulse background effect */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0 bg-gradient-radial from-brand-purple/20 via-transparent to-transparent animate-pulse"></div>
        <div className="absolute inset-0 bg-gradient-conic from-brand-cyan/10 via-transparent to-brand-purple/10 animate-spin-slow"></div>
      </div>

      {/* Glassmorphism container */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="text-center mb-16 lg:mb-20">
          <h2 
            id="client-carousel-title"
            className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-white via-brand-cyan to-brand-purple bg-clip-text text-transparent tracking-tight leading-tight"
            style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', letterSpacing: '-0.025em' }}
          >
            {title}
          </h2>
          <p className="text-lg sm:text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
            {subtitle}
          </p>
        </div>

        {/* Statistics Section */}
        {showStats && (
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-16 lg:mb-20">
            {enterpriseStats.map((stat, index) => (
              <div 
                key={index}
                className="text-center p-6 rounded-xl bg-white/5 backdrop-blur-md border border-white/10 hover:bg-white/10 hover:border-brand-purple/30 transition-all duration-300 group"
              >
                <div className="text-2xl sm:text-3xl font-bold text-white mb-2 group-hover:text-brand-cyan transition-colors duration-300">
                  {stat.value}
                </div>
                <div className="text-sm sm:text-base text-white/70 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Infinite Carousel */}
        <div className="relative">
          {/* Gradient masks for smooth edges */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-brand-dark to-transparent z-10"></div>
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-brand-dark to-transparent z-10"></div>
          
          {/* Carousel container */}
          <div 
            className={`overflow-hidden ${pauseOnHover ? 'hover:[&>*]:animation-play-state-paused' : ''}`}
            style={{ 
              maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
              WebkitMaskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)'
            }}
          >
            
            {/* First track - moving left */}
            <div 
              ref={trackRef1}
              className="flex gap-12 mb-8 will-change-transform"
              style={{ width: 'fit-content' }}
            >
              {duplicatedLogos.map((logo, index) => (
                <LogoCard key={`track1-${logo.id}-${index}`} logo={logo} />
              ))}
            </div>

            {/* Second track - moving right */}
            <div 
              ref={trackRef2}
              className="flex gap-12 will-change-transform"
              style={{ width: 'fit-content' }}
            >
              {duplicatedLogos.map((logo, index) => (
                <LogoCard key={`track2-${logo.id}-${index}`} logo={logo} />
              ))}
            </div>
          </div>
        </div>

        {/* Call-to-action */}
        <div className="text-center mt-16 lg:mt-20">
          <p className="text-white/60 mb-6 text-lg">
            Ready to join these industry leaders?
          </p>
          <button className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-brand-purple to-brand-cyan text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-brand-purple/25 transition-all duration-300 transform hover:scale-105">
            Start Your Transformation
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

// Logo Card Component
const LogoCard: React.FC<{ logo: ClientLogo }> = ({ logo }) => {
  return (
    <div className="flex-shrink-0 w-40 h-20 flex items-center justify-center p-4 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 hover:border-brand-purple/30 hover:shadow-lg hover:shadow-brand-purple/20 transition-all duration-300 group">
      <a 
        href={logo.url}
        target="_blank"
        rel="noopener noreferrer"
        className="w-full h-full flex items-center justify-center"
        aria-label={`Visit ${logo.name} website`}
      >
        <img
          src={logo.src}
          alt={`${logo.name} logo`}
          className="max-w-full max-h-full object-contain opacity-70 group-hover:opacity-100 transition-opacity duration-300 filter grayscale group-hover:grayscale-0"
          loading="lazy"
          onError={(e) => {
            // Fallback to text if image fails to load
            const target = e.target as HTMLImageElement;
            target.style.display = 'none';
            const textElement = document.createElement('div');
            textElement.textContent = logo.name;
            textElement.className = 'text-white/80 font-medium text-sm text-center';
            target.parentNode?.appendChild(textElement);
          }}
        />
      </a>
    </div>
  );
};

export default IndexNineInfiniteCarousel;