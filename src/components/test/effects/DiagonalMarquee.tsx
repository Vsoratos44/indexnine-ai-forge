import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

// The stats data for the marquee
const stats = [
  { value: '104+', label: 'Solutions Delivered' },
  { value: '220+', label: 'Engineers and Designers' },
  { value: '$1.3B', label: 'in client exits' },
  { value: '92%', label: 'Client Satisfaction' },
  { value: '⭐⭐⭐⭐⭐', label: 'on clutch' },
  { value: '6', label: 'core studios' },
];

const DiagonalMarquee = () => {
  const targetRef = React.useRef(null);
  
  // Track scroll progress for parallax effect
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ['start end', 'end start'],
  });

  // Transform scroll progress to more dramatic horizontal movement
  const x = useTransform(scrollYProgress, [0, 1], ['-60%', '60%']);

  return (
    <section ref={targetRef} className="relative min-h-[70vh] bg-background-light">
      {/* Content area with white background on top left */}
      <div className="relative z-20 container mx-auto px-6 lg:px-8 py-16">
        <div className="max-w-2xl">
          <h2 className="heading-h2 text-foreground-dark mb-6 leading-tight">
            The Summit is Within <span className="bg-gradient-to-r from-brand-purple via-brand-primary to-brand-cyan bg-clip-text text-transparent font-bold">Reach</span>.
          </h2>
          <p className="text-lg sm:text-xl text-foreground-dark-muted leading-relaxed font-light">
            A path is defined by its destination. Our success is measured by the <span className="bg-gradient-to-r from-brand-cyan via-brand-primary to-brand-purple bg-clip-text text-transparent font-semibold">tangible, market-defining outcomes</span> we deliver for our clients.
          </p>
        </div>
      </div>

      {/* Diagonal marquee container - rotated to create true diagonal effect */}
      <div className="absolute inset-0 overflow-hidden">
        <div 
          className="absolute w-[150%] h-[150%] -top-[25%] -left-[25%] bg-gradient-to-br from-slate-900 via-gray-900 to-black"
          style={{ 
            transform: 'rotate(-15deg)',
            background: 'linear-gradient(135deg, hsl(220, 13%, 8%), hsl(220, 13%, 5%), hsl(var(--brand-purple)/0.05))'
          }}
        >
          <div className="sticky top-0 left-0 h-full w-full overflow-hidden">
            {/* Scrolling marquee - rotated back to keep text horizontal */}
            <motion.div 
              style={{ x, transform: 'rotate(15deg)' }} 
              className="absolute inset-0 flex items-center justify-center gap-20 whitespace-nowrap"
            >
              {/* Render stats twice for seamless loop */}
              {[...stats, ...stats].map((stat, index) => (
                <div key={index} className="text-center transform hover:scale-105 transition-transform duration-300">
                  <p className="text-5xl md:text-7xl xl:text-8xl font-bold font-satoshi bg-gradient-to-r from-brand-purple via-brand-primary to-brand-cyan bg-clip-text text-transparent animate-pulse">
                    {stat.value === '⭐⭐⭐⭐⭐' ? (
                      <span className="inline-block animate-pulse text-brand-primary">⭐⭐⭐⭐⭐</span>
                    ) : (
                      stat.value
                    )}
                  </p>
                  <p className="text-sm md:text-lg text-foreground-light uppercase tracking-[0.2em] font-light mt-3 opacity-80">
                    {stat.label}
                  </p>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Enhanced atmospheric effects for dark area */}
          <div className="absolute inset-0 opacity-60">
            <div className="absolute top-1/3 right-1/3 w-[500px] h-[500px] bg-gradient-to-r from-brand-purple/30 to-brand-primary/20 rounded-full blur-3xl animate-pulse-slow"></div>
            <div className="absolute bottom-1/3 left-1/3 w-[400px] h-[400px] bg-gradient-to-r from-brand-cyan/25 to-brand-purple/15 rounded-full blur-3xl animate-luminous-drift"></div>
            <div className="absolute top-1/2 left-1/2 w-[300px] h-[300px] bg-gradient-to-r from-brand-primary/20 to-brand-cyan/20 rounded-full blur-2xl animate-pulse opacity-50"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DiagonalMarquee;