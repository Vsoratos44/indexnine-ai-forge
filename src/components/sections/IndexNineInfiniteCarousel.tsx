import React, { useState, useEffect, useRef } from 'react';
import _ from 'lodash';

// Client logos data - replace with your actual client logos
const indexNineClients = [
  { id: 1, name: 'Microsoft', src: 'https://via.placeholder.com/140x50/ffffff/505dfd?text=Microsoft', url: '#' },
  { id: 2, name: 'Google', src: 'https://via.placeholder.com/140x50/ffffff/505dfd?text=Google', url: '#' },
  { id: 3, name: 'Amazon', src: 'https://via.placeholder.com/140x50/ffffff/505dfd?text=Amazon', url: '#' },
  { id: 4, name: 'Meta', src: 'https://via.placeholder.com/140x50/ffffff/505dfd?text=Meta', url: '#' },
  { id: 5, name: 'Tesla', src: 'https://via.placeholder.com/140x50/ffffff/505dfd?text=Tesla', url: '#' },
  { id: 6, name: 'Netflix', src: 'https://via.placeholder.com/140x50/ffffff/505dfd?text=Netflix', url: '#' },
  { id: 7, name: 'Spotify', src: 'https://via.placeholder.com/140x50/ffffff/505dfd?text=Spotify', url: '#' },
  { id: 8, name: 'Stripe', src: 'https://via.placeholder.com/140x50/ffffff/505dfd?text=Stripe', url: '#' },
];

interface ClientLogo {
  id: number;
  name: string;
  src: string;
  url: string;
}

interface IndexNineInfiniteCarouselProps {
  logos?: ClientLogo[];
  title?: string;
  subtitle?: string;
  speed?: number;
  pauseOnHover?: boolean;
  className?: string;
}

const IndexNineInfiniteCarousel: React.FC<IndexNineInfiniteCarouselProps> = ({
  logos = indexNineClients,
  title = "Trusted by Industry Leaders",
  subtitle = "Join enterprises who've accelerated their digital transformation with IndexNine",
  speed = 35,
  pauseOnHover = true,
  className = ""
}) => {
  const [isPaused, setIsPaused] = useState(false);
  const [hoveredLogo, setHoveredLogo] = useState<string | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Create seamless infinite scroll with proper logo distribution
  const duplicatedLogos = _.flatten(Array(4).fill(logos));

  // Handle logo interaction
  const handleLogoClick = (logo: ClientLogo) => {
    if (logo.url && logo.url !== '#') {
      window.open(logo.url, '_blank', 'noopener,noreferrer');
    }
  };

  // IndexNine brand-specific styles matching your design system
  const styles = {
    sectionContainer: {
      position: 'relative' as const,
      background: 'hsl(234 50% 15%)', // --brand-dark
      borderTop: '1px solid hsl(262 83% 58% / 0.2)', // --brand-purple with opacity
      borderBottom: '1px solid hsl(262 83% 58% / 0.2)',
      overflow: 'hidden' as const,
      padding: '4rem 0',
      minHeight: '400px'
    },

    neuralBackground: {
      position: 'absolute' as const,
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      background: `
        radial-gradient(ellipse at top, hsl(262 83% 58% / 0.1) 0%, transparent 50%),
        radial-gradient(ellipse at bottom, hsl(180 100% 60% / 0.05) 0%, transparent 50%)
      `,
      animation: 'neural-pulse 8s ease-in-out infinite',
      pointerEvents: 'none' as const
    },

    container: {
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '0 1rem',
      position: 'relative' as const,
      zIndex: 2
    },

    header: {
      textAlign: 'center' as const,
      marginBottom: '3rem',
      position: 'relative' as const
    },

    title: {
      fontSize: 'clamp(2rem, 4vw, 3rem)', // Matching your text-h2 scale
      fontWeight: '700',
      background: 'linear-gradient(135deg, hsl(262 83% 58%), hsl(180 100% 60%), hsl(262 83% 58%))',
      backgroundClip: 'text',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      marginBottom: '1rem',
      lineHeight: '1.2',
      letterSpacing: '-0.025em'
    },

    subtitle: {
      fontSize: '1.125rem',
      color: 'hsl(0 0% 100% / 0.8)',
      fontWeight: '400',
      lineHeight: '1.6',
      maxWidth: '600px',
      margin: '0 auto'
    },

    carouselContainer: {
      position: 'relative' as const,
      overflow: 'hidden' as const,
      padding: '2rem 0',
      maskImage: 'linear-gradient(to right, transparent 0%, black 15%, black 85%, transparent 100%)'
    },

    track: {
      display: 'flex',
      alignItems: 'center',
      gap: '3rem',
      animation: `scrollLeft ${speed}s linear infinite`,
      animationPlayState: isPaused ? 'paused' as const : 'running' as const,
      marginBottom: '2rem'
    },

    trackReverse: {
      display: 'flex',
      alignItems: 'center',
      gap: '3rem',
      animation: `scrollRight ${speed + 15}s linear infinite`,
      animationPlayState: isPaused ? 'paused' as const : 'running' as const,
    },

    logoCard: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      minWidth: '200px',
      height: '100px',
      padding: '1.5rem',
      background: 'hsl(234 50% 15% / 0.95)', // --glass-bg
      border: '1px solid hsl(262 83% 58% / 0.3)', // --glass-border
      borderRadius: '12px',
      boxShadow: '0 8px 32px 0 hsl(262 83% 58% / 0.15)', // --glass-shadow variant
      backdropFilter: 'blur(16px)',
      cursor: 'pointer',
      transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
      flexShrink: 0,
      position: 'relative' as const,
      overflow: 'hidden' as const
    },

    logoCardHover: {
      transform: 'translateY(-8px) scale(1.02)',
      boxShadow: '0 20px 40px 0 hsl(262 83% 58% / 0.3)',
      borderColor: 'hsl(262 83% 58% / 0.6)'
    },

    logoCardGlow: {
      position: 'absolute' as const,
      inset: 0,
      background: 'linear-gradient(135deg, hsl(262 83% 58% / 0.1), hsl(180 100% 60% / 0.1))',
      opacity: 0,
      transition: 'opacity 0.4s ease',
      borderRadius: '12px'
    },

    logoCardGlowHover: {
      opacity: 1
    },

    logoImage: {
      maxWidth: '100%',
      maxHeight: '60px',
      objectFit: 'contain' as const,
      filter: 'brightness(0) invert(1) opacity(0.7)', // White logo effect
      transition: 'all 0.4s ease',
      position: 'relative' as const,
      zIndex: 2
    },

    logoImageHover: {
      filter: 'brightness(0) invert(1) opacity(1)',
      transform: 'scale(1.05)'
    }
  };

  // Create neural animation keyframes
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
        0%, 100% { opacity: 0.3; transform: scale(1); }
        50% { opacity: 0.6; transform: scale(1.02); }
      }
      
      @keyframes glow-pulse {
        0%, 100% { box-shadow: 0 0 20px hsl(262 83% 58% / 0.3); }
        50% { box-shadow: 0 0 40px hsl(262 83% 58% / 0.6), 0 0 60px hsl(180 100% 60% / 0.3); }
      }
      
      @media (prefers-reduced-motion: reduce) {
        * {
          animation-duration: 0.01ms !important;
          animation-iteration-count: 1 !important;
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

  // Handle hover interactions
  const handleContainerMouseEnter = () => {
    if (pauseOnHover) setIsPaused(true);
  };

  const handleContainerMouseLeave = () => {
    if (pauseOnHover) setIsPaused(false);
  };

  const handleLogoHover = (logoKey: string) => {
    setHoveredLogo(logoKey);
  };

  const handleLogoLeave = () => {
    setHoveredLogo(null);
  };

  return (
    <section
      className={`indexnine-carousel-section ${className}`}
      style={styles.sectionContainer}
      aria-label="Client logos and company statistics"
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
        </header>

        {/* Carousel */}
        <div
          ref={containerRef}
          style={styles.carouselContainer}
          onMouseEnter={handleContainerMouseEnter}
          onMouseLeave={handleContainerMouseLeave}
          role="region"
          aria-label="Client company logos"
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
                  onMouseEnter={() => handleLogoHover(logoKey)}
                  onMouseLeave={handleLogoLeave}
                  role="button"
                  tabIndex={0}
                  aria-label={`Visit ${logo.name} website`}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
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
                    alt={`${logo.name} logo`}
                    loading="lazy"
                    style={{
                      ...styles.logoImage,
                      ...(isHovered ? styles.logoImageHover : {})
                    }}
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
                  onMouseEnter={() => handleLogoHover(logoKey)}
                  onMouseLeave={handleLogoLeave}
                  role="button"
                  tabIndex={0}
                  aria-label={`Visit ${logo.name} website`}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
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
                    alt={`${logo.name} logo`}
                    loading="lazy"
                    style={{
                      ...styles.logoImage,
                      ...(isHovered ? styles.logoImageHover : {})
                    }}
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