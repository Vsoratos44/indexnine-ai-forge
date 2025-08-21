import { motion, useScroll, useTransform } from 'framer-motion';
import React from 'react';

// The stats data can be passed in as a prop
const stats = [
  { value: '$316M+', label: 'in Supported Client Exits' },
  { value: '220+', label: 'Engineers and Designers' },
  { value: '104+', label: 'Solutions Delivered' },
  { value: '95+', label: 'Customers' },
];

const DiagonalMarquee = () => {
  // 1. We need a reference to the component to track its scroll position
  const targetRef = React.useRef(null);
  
  // 2. useScroll tracks how far the user has scrolled *within a specific element*
  const { scrollYProgress } = useScroll({
    target: targetRef,
    // Start tracking when the top of the element hits the bottom of the screen
    // End tracking when the bottom of the element hits the top of the screen
    offset: ['start end', 'end start'],
  });

  // 3. useTransform maps one value range to another.
  // We map scroll progress (0 to 1) to a horizontal movement (-25% to 25%)
  const x = useTransform(scrollYProgress, [0, 1], ['-25%', '25%']);

  return (
    // The main container needs a ref for scroll tracking and a clip-path
    <section ref={targetRef} className="relative h-[50vh] bg-brand-darker">
      <div 
        className="sticky top-0 left-0 h-full w-full overflow-hidden" 
        style={{ clipPath: 'polygon(0 5%, 100% 0, 100% 95%, 0 100%)' }}
      >
        {/* The motion.div is the scrolling element. Its 'x' position is animated. */}
        <motion.div 
          style={{ x }} 
          className="absolute inset-0 flex items-center justify-center gap-16 whitespace-nowrap"
        >
          {/* We render the stats twice to create a seamless loop */}
          {[...stats, ...stats].map((stat, index) => (
            <div key={index} className="text-center">
              <p className="text-4xl md:text-6xl font-bold text-brand-primary font-montserrat">
                {stat.value}
              </p>
              <p className="text-sm text-foreground-dark-muted uppercase tracking-widest font-montserrat">
                {stat.label}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default DiagonalMarquee;