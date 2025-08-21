import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

// The stats data for the marquee
const stats = [
  { value: '$316M+', label: 'in Supported Client Exits' },
  { value: '220+', label: 'Engineers and Designers' },
  { value: '104+', label: 'Solutions Delivered' },
  { value: '95+', label: 'Customers' },
];

const DiagonalMarquee = () => {
  const targetRef = React.useRef(null);
  
  // Track scroll progress for parallax effect
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ['start end', 'end start'],
  });

  // Transform scroll progress to horizontal movement
  const x = useTransform(scrollYProgress, [0, 1], ['-25%', '25%']);

  return (
    <section ref={targetRef} className="relative min-h-[60vh] bg-background-light">
      {/* Content area with white background on top left */}
      <div className="relative z-20 container mx-auto px-6 lg:px-8 py-16">
        <div className="max-w-2xl">
          <h2 className="heading-h2 text-foreground-dark mb-6 leading-tight">
            The Summit is Within <span className="test-neon-purple">Reach</span>.
          </h2>
          <p className="text-lg sm:text-xl text-foreground-dark-muted leading-relaxed font-light">
            A path is defined by its destination. Our success is measured by the <span className="test-neon-cyan">tangible, market-defining outcomes</span> we deliver for our clients.
          </p>
        </div>
      </div>

      {/* Diagonal dark section with marquee - 35 degree angle from top right to bottom left */}
      <div 
        className="absolute inset-0 bg-background-dark"
        style={{ 
          clipPath: 'polygon(30% 0%, 100% 0%, 100% 100%, 0% 100%)'
        }}
      >
        <div className="sticky top-0 left-0 h-full w-full overflow-hidden">
          {/* Scrolling marquee */}
          <motion.div 
            style={{ x }} 
            className="absolute inset-0 flex items-center justify-center gap-16 whitespace-nowrap"
          >
            {/* Render stats twice for seamless loop */}
            {[...stats, ...stats].map((stat, index) => (
              <div key={index} className="text-center">
                <p className="text-4xl md:text-6xl xl:text-7xl font-bold text-brand-primary font-satoshi">
                  {stat.value}
                </p>
                <p className="text-sm md:text-base text-foreground-light-muted uppercase tracking-widest font-light mt-2">
                  {stat.label}
                </p>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Atmospheric effects for dark area */}
        <div className="absolute inset-0 opacity-40">
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-brand-primary/20 rounded-full blur-3xl animate-pulse-slow"></div>
          <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-brand-cyan/15 rounded-full blur-3xl animate-luminous-drift"></div>
        </div>
      </div>
    </section>
  );
};

export default DiagonalMarquee;