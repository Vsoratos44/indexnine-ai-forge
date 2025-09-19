import React, { useState, useEffect, useRef } from 'react';

// IndexNine Strategic Clients - Real Partnership Data
const indexNineStrategicClients = [
  { 
    id: 1, 
    name: 'CyberArk', 
    description: 'The leader in identity security and privileged access management, securing enterprises worldwide',
    src: 'https://logos-world.net/wp-content/uploads/2021/02/CyberArk-Logo.png',
    fallbackSrc: 'https://via.placeholder.com/160x70/ffffff/505dfd?text=CyberArk',
    url: 'https://www.cyberark.com',
    industry: 'Cybersecurity'
  },
  { 
    id: 2, 
    name: 'Ginesys', 
    description: 'Cloud-based retail ERP system built for the retail value chain with omnichannel capabilities',
    src: 'https://www.ginesys.com/wp-content/uploads/2023/03/Ginesys-Logo-White.svg',
    fallbackSrc: 'https://via.placeholder.com/160x70/ffffff/505dfd?text=Ginesys',
    url: 'https://www.ginesys.com',
    industry: 'Retail Technology'
  },
  { 
    id: 3, 
    name: 'Great Place to Work', 
    description: 'The global authority on workplace culture, helping organizations build better workplaces',
    src: 'https://www.greatplacetowork.com/images/gptw-logo-white.svg',
    fallbackSrc: 'https://via.placeholder.com/160x70/ffffff/505dfd?text=GPTW',
    url: 'https://www.greatplacetowork.com',
    industry: 'HR & Culture'
  },
  { 
    id: 4, 
    name: 'Sensable', 
    description: 'Advanced haptic technology solutions enabling touch and force feedback in digital environments',
    src: 'https://sensable.com/wp-content/uploads/2023/01/sensable-logo-white.png',
    fallbackSrc: 'https://via.placeholder.com/160x70/ffffff/505dfd?text=Sensable',
    url: 'https://sensable.com',
    industry: 'Haptic Technology'
  },
  { 
    id: 5, 
    name: 'Equifax', 
    description: 'Global data, analytics and technology company providing consumer credit reporting and insights',
    src: 'https://logos-world.net/wp-content/uploads/2021/02/Equifax-Logo.png',
    fallbackSrc: 'https://via.placeholder.com/160x70/ffffff/505dfd?text=Equifax',
    url: 'https://www.equifax.com',
    industry: 'Financial Services'
  },
  { 
    id: 6, 
    name: 'DocuPhase', 
    description: 'Intelligent process automation platform streamlining business operations with document management',
    src: 'https://www.docuphase.com/wp-content/uploads/2023/02/docuphase-logo-white.svg',
    fallbackSrc: 'https://via.placeholder.com/160x70/ffffff/505dfd?text=DocuPhase',
    url: 'https://www.docuphase.com',
    industry: 'Process Automation'
  },
  { 
    id: 7, 
    name: 'Cygeniq', 
    description: 'AI-powered cybersecurity solutions securing digital ecosystems with adaptive threat defense',
    src: 'https://cygeniq.com/wp-content/uploads/2023/01/cygeniq-logo-white.png',
    fallbackSrc: 'https://via.placeholder.com/160x70/ffffff/505dfd?text=Cygeniq',
    url: 'https://cygeniq.com',
    industry: 'AI Cybersecurity'
  }
];

interface ClientLogo {
  id: number;
  name: string;
  description: string;
  src: string;
  fallbackSrc: string;
  url: string;
  industry: string;
}

interface IndexNineInfiniteCarouselProps {
  logos?: ClientLogo[];
  title?: string;
  subtitle?: string;
  speed?: number;
  pauseOnHover?: boolean;
  showTooltips?: boolean;
  className?: string;
}

const IndexNineInfiniteCarousel: React.FC<IndexNineInfiniteCarouselProps> = ({
  logos = indexNineStrategicClients,
  title = "Powering Enterprise Innovation Globally",
  subtitle = "From Fortune 500 leaders to cutting-edge startups, IndexNine delivers transformational results across industries",
  speed = 35,
  pauseOnHover = true,
  showTooltips = true,
  className = ""
}) => {
  const [isPaused, setIsPaused] = useState(false);
  const [hoveredLogo, setHoveredLogo] = useState<string | null>(null);
  const [tooltipData, setTooltipData] = useState<{ client: ClientLogo; position: { x: number; y: number } } | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Create seamless infinite scroll with proper logo distribution
  const duplicatedLogos = Array(4).fill(logos).flat();

  // Handle logo interaction with enhanced tooltip support
  const handleLogoClick = (logo: ClientLogo) => {
    if (logo.url && logo.url !== '#') {
      window.open(logo.url, '_blank', 'noopener,noreferrer');
    }
  };

  // Handle logo image error with fallback
  const handleImageError = (event: React.SyntheticEvent<HTMLImageElement>, logo: ClientLogo) => {
    const img = event.currentTarget;
    if (img.src !== logo.fallbackSrc) {
      img.src = logo.fallbackSrc;
    }
  };

  // Handle tooltip display
  const handleLogoHover = (logoKey: string, event: React.MouseEvent, logo: ClientLogo) => {
    setHoveredLogo(logoKey);
    if (showTooltips) {
      const rect = event.currentTarget.getBoundingClientRect();
      setTooltipData({
        client: logo,
        position: {
          x: rect.left + rect.width / 2,
          y: rect.top - 10
        }
      });
    }
  };

  const handleLogoLeave = () => {
    setHoveredLogo(null);
    setTooltipData(null);
  };

  // Handle hover interactions
  const handleContainerMouseEnter = () => {
    if (pauseOnHover) setIsPaused(true);
  };

  const handleContainerMouseLeave = () => {
    if (pauseOnHover) setIsPaused(false);
  };

  // Get unique industries for display
  const uniqueIndustries = Array.from(new Set(logos.map(logo => logo.industry)));

  // Enhanced IndexNine brand-specific styles with tooltip support
  const styles = {
    sectionContainer: {
      position: 'relative' as const,
      background: 'hsl(234 50% 15%)', // --brand-dark
      borderTop: '1px solid hsl(262 83% 58% / 0.2)', // --brand-purple with opacity
      borderBottom: '1px solid hsl(262 83% 58% / 0.2)',
      overflow: 'hidden' as const,
      padding: '5rem 0',
      minHeight: '500px'
    },

    neuralBackground: {
      position: 'absolute' as const,
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      background: `
        radial-gradient(ellipse at 20% 30%, hsl(262 83% 58% / 0.15) 0%, transparent 60%),
        radial-gradient(ellipse at 80% 70%, hsl(180 100% 60% / 0.1) 0%, transparent 60%),
        radial-gradient(circle at 50% 50%, hsl(262 83% 58% / 0.05) 0%, transparent 80%)
      `,
      animation: 'neural-pulse 12s ease-in-out infinite',
      pointerEvents: 'none' as const
    },

    container: {
      maxWidth: '1400px',
      margin: '0 auto',
      padding: '0 1.5rem',
      position: 'relative' as const,
      zIndex: 2
    },

    header: {
      textAlign: 'center' as const,
      marginBottom: '4rem',
      position: 'relative' as const
    },

    title: {
      fontSize: 'clamp(2.5rem, 5vw, 4rem)',
      fontWeight: '700',
      background: 'linear-gradient(135deg, hsl(262 83% 58%), hsl(180 100% 60%), hsl(262 83% 70%), hsl(180 100% 50%))',
      backgroundSize: '400% 400%',
      backgroundClip: 'text',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      marginBottom: '1.5rem',
      lineHeight: '1.1',
      letterSpacing: '-0.025em',
      animation: 'gradient-flow 8s ease-in-out infinite'
    },

    subtitle: {
      fontSize: 'clamp(1.125rem, 2vw, 1.375rem)',
      color: 'hsl(0 0% 100% / 0.85)',
      fontWeight: '400',
      lineHeight: '1.7',
      maxWidth: '800px',
      margin: '0 auto'
    },

    industryGrid: {
      display: 'flex',
      justifyContent: 'center',
      gap: '1rem',
      marginTop: '2rem',
      flexWrap: 'wrap' as const
    },

    industryTag: {
      padding: '0.5rem 1rem',
      background: 'hsl(262 83% 58% / 0.1)',
      border: '1px solid hsl(262 83% 58% / 0.3)',
      borderRadius: '20px',
      fontSize: '0.875rem',
      color: 'hsl(180 100% 60%)',
      fontWeight: '500'
    },

    carouselContainer: {
      position: 'relative' as const,
      overflow: 'hidden' as const,
      padding: '3rem 0',
      maskImage: 'linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)'
    },

    track: {
      display: 'flex',
      alignItems: 'center',
      gap: '4rem',
      animation: `scrollLeft ${speed}s linear infinite`,
      animationPlayState: isPaused ? 'paused' as const : 'running' as const,
      marginBottom: '3rem'
    },

    trackReverse: {
      display: 'flex',
      alignItems: 'center',
      gap: '4rem',
      animation: `scrollRight ${speed + 18}s linear infinite`,
      animationPlayState: isPaused ? 'paused' as const : 'running' as const,
    },

    logoCard: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      minWidth: '240px',
      height: '120px',
      padding: '2rem',
      background: 'hsl(234 50% 15% / 0.95)',
      border: '1px solid hsl(262 83% 58% / 0.25)',
      borderRadius: '16px',
      boxShadow: '0 10px 40px 0 hsl(262 83% 58% / 0.12)',
      backdropFilter: 'blur(20px)',
      cursor: 'pointer',
      transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
      flexShrink: 0,
      position: 'relative' as const,
      overflow: 'hidden' as const
    },

    logoCardHover: {
      transform: 'translateY(-12px) scale(1.05)',
      boxShadow: '0 25px 60px 0 hsl(262 83% 58% / 0.35), 0 0 0 1px hsl(262 83% 58% / 0.6)',
      borderColor: 'hsl(262 83% 58% / 0.7)'
    },

    logoCardGlow: {
      position: 'absolute' as const,
      inset: 0,
      background: 'linear-gradient(135deg, hsl(262 83% 58% / 0.15), hsl(180 100% 60% / 0.1))',
      opacity: 0,
      transition: 'opacity 0.5s ease',
      borderRadius: '16px'
    },

    logoCardGlowHover: {
      opacity: 1
    },

    logoImage: {
      maxWidth: '100%',
      maxHeight: '80px',
      objectFit: 'contain' as const,
      filter: 'brightness(0) invert(1) opacity(0.8)',
      transition: 'all 0.5s ease',
      position: 'relative' as const,
      zIndex: 2
    },

    logoImageHover: {
      filter: 'brightness(0) invert(1) opacity(1)',
      transform: 'scale(1.1)'
    },

    tooltip: {
      position: 'fixed' as const,
      zIndex: 1000,
      background: 'hsl(234 50% 8% / 0.98)',
      border: '1px solid hsl(262 83% 58% / 0.4)',
      borderRadius: '12px',
      padding: '1.5rem',
      maxWidth: '320px',
      boxShadow: '0 20px 60px 0 hsl(262 83% 58% / 0.3)',
      backdropFilter: 'blur(24px)',
      transform: 'translateX(-50%) translateY(-100%)',
      marginTop: '-10px',
      animation: 'tooltip-appear 0.3s ease-out'
    },

    tooltipTitle: {
      fontSize: '1.125rem',
      fontWeight: '600',
      color: 'hsl(0 0% 100%)',
      marginBottom: '0.5rem',
      background: 'linear-gradient(135deg, hsl(262 83% 58%), hsl(180 100% 60%))',
      backgroundClip: 'text',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent'
    },

    tooltipDescription: {
      fontSize: '0.925rem',
      color: 'hsl(0 0% 100% / 0.8)',
      lineHeight: '1.5',
      marginBottom: '1rem'
    },

    tooltipIndustry: {
      display: 'inline-block',
      padding: '0.375rem 0.75rem',
      background: 'hsl(262 83% 58% / 0.2)',
      border: '1px solid hsl(262 83% 58% / 0.4)',
      borderRadius: '16px',
      fontSize: '0.8rem',
      color: 'hsl(180 100% 60%)',
      fontWeight: '500'
    }
  };

  // Create enhanced neural animation keyframes
  useEffect(() => {
    const styleSheet = document.createElement('style');
    styleSheet.textContent = `
      @keyframes scrollLeft {
        0% { transform: translateX(0); }
        100% { transform: translateX(-100%); }
      }
      
      @keyframes scrollRight {
        0% { transform: translateX(-100%); }
        100% { transform: translateX(0); }
      }
      
      @keyframes neural-pulse {
        0%, 100% { opacity: 0.3; transform: scale(1) rotate(0deg); }
        25% { opacity: 0.5; transform: scale(1.01) rotate(0.5deg); }
        50% { opacity: 0.7; transform: scale(1.02) rotate(0deg); }
        75% { opacity: 0.5; transform: scale(1.01) rotate(-0.5deg); }
      }
      
      @keyframes gradient-flow {
        0%, 100% { background-position: 0% 50%; }
        50% { background-position: 100% 50%; }
      }
      
      @keyframes tooltip-appear {
        0% { 
          opacity: 0; 
          transform: translateX(-50%) translateY(-90%) scale(0.9);
        }
        100% { 
          opacity: 1; 
          transform: translateX(-50%) translateY(-100%) scale(1);
        }
      }
      
      @media (prefers-reduced-motion: reduce) {
        *, *::before, *::after {
          animation-duration: 0.01ms !important;
          animation-iteration-count: 1 !important;
          transition-duration: 0.01ms !important;
        }
      }
    `;
    document.head.appendChild(styleSheet);

    return () => {
      if (document.head.contains(styleSheet)) {
        document.head.removeChild(styleSheet);
      }
    };
  }, []);

  return (
    <section
      className={`indexnine-carousel-section ${className}`}
      style={styles.sectionContainer}
      aria-label="Strategic client partnerships and company information"
    >
      {/* Neural background animation */}
      <div style={styles.neuralBackground} />

      <div style={styles.container}>
        {/* Header */}
        <header style={styles.header}>
          <h2 style={styles.title}>
            {title}
          </h2>
          <p style={styles.subtitle}>
            {subtitle}
          </p>
          
          {/* Industry diversity showcase */}
          <div style={styles.industryGrid}>
            {uniqueIndustries.slice(0, 4).map((industry) => (
              <div key={industry} style={styles.industryTag}>
                {industry}
              </div>
            ))}
          </div>
        </header>

        {/* Tooltip */}
        {tooltipData && showTooltips && (
          <div
            style={{
              ...styles.tooltip,
              left: tooltipData.position.x,
              top: tooltipData.position.y
            }}
          >
            <div style={styles.tooltipTitle}>
              {tooltipData.client.name}
            </div>
            <div style={styles.tooltipDescription}>
              {tooltipData.client.description}
            </div>
            <div style={styles.tooltipIndustry}>
              {tooltipData.client.industry}
            </div>
          </div>
        )}

        {/* Carousel */}
        <div
          ref={containerRef}
          style={styles.carouselContainer}
          onMouseEnter={handleContainerMouseEnter}
          onMouseLeave={handleContainerMouseLeave}
          role="region"
          aria-label="Strategic client company logos"
        >
          {/* First track - left scroll */}
          <div style={styles.track}>
            {duplicatedLogos.map((logo, index) => {
              const logoKey = `track1-${logo.id}-${index}`;
              const isHovered = hoveredLogo === logoKey;
              
              return (
                <div
                  key={logoKey}
                  style={{
                    ...styles.logoCard,
                    ...(isHovered ? styles.logoCardHover : {})
                  }}
                  onClick={() => handleLogoClick(logo)}
                  onMouseEnter={(e) => handleLogoHover(logoKey, e, logo)}
                  onMouseLeave={handleLogoLeave}
                  role="button"
                  tabIndex={0}
                  aria-label={`Visit ${logo.name} website - ${logo.industry} leader`}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      handleLogoClick(logo);
                    }
                  }}
                >
                  {/* Glow effect */}
                  <div 
                    style={{
                      ...styles.logoCardGlow,
                      ...(isHovered ? styles.logoCardGlowHover : {})
                    }} 
                  />
                  
                  {/* Logo image */}
                  <img
                    src={logo.src}
                    alt={`${logo.name} - ${logo.industry} solutions partner`}
                    loading="lazy"
                    style={{
                      ...styles.logoImage,
                      ...(isHovered ? styles.logoImageHover : {})
                    }}
                    onError={(e) => handleImageError(e, logo)}
                  />
                </div>
              );
            })}
          </div>

          {/* Second track - right scroll */}
          <div style={styles.trackReverse}>
            {duplicatedLogos.slice().reverse().map((logo, index) => {
              const logoKey = `track2-${logo.id}-${index}`;
              const isHovered = hoveredLogo === logoKey;
              
              return (
                <div
                  key={logoKey}
                  style={{
                    ...styles.logoCard,
                    ...(isHovered ? styles.logoCardHover : {})
                  }}
                  onClick={() => handleLogoClick(logo)}
                  onMouseEnter={(e) => handleLogoHover(logoKey, e, logo)}
                  onMouseLeave={handleLogoLeave}
                  role="button"
                  tabIndex={0}
                  aria-label={`Visit ${logo.name} website - ${logo.industry} leader`}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      handleLogoClick(logo);
                    }
                  }}
                >
                  {/* Glow effect */}
                  <div 
                    style={{
                      ...styles.logoCardGlow,
                      ...(isHovered ? styles.logoCardGlowHover : {})
                    }} 
                  />
                  
                  {/* Logo image */}
                  <img
                    src={logo.src}
                    alt={`${logo.name} - ${logo.industry} solutions partner`}
                    loading="lazy"
                    style={{
                      ...styles.logoImage,
                      ...(isHovered ? styles.logoImageHover : {})
                    }}
                    onError={(e) => handleImageError(e, logo)}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default IndexNineInfiniteCarousel;