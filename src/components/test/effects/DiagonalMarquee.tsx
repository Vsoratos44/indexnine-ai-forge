import { motion, useScroll, useTransform } from 'framer-motion';
import React from 'react';

const stats = [
  { value: '$316M+', label: 'in Supported Client Exits' },
  { value: '220+', label: 'Engineers and Designers' },
  { value: '104+', label: 'Solutions Delivered' },
  { value: '95+', label: 'Customers' },
];

const DiagonalMarquee = () => {
  const targetRef = React.useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ['start end', 'end start'],
  });

  const x = useTransform(scrollYProgress, [0, 1], ['-25%', '25%']);

  return (
    <section ref={targetRef} className="relative h-[50vh] bg-deep-navy overflow-hidden">
      <div 
        className="sticky top-0 left-0 h-full w-full overflow-hidden" 
        style={{ clipPath: 'polygon(0 5%, 100% 0, 100% 95%, 0 100%)' }}
      >
        <motion.div 
          style={{ x }} 
          className="absolute inset-0 flex items-center justify-center gap-16 whitespace-nowrap"
        >
          {[...stats, ...stats].map((stat, index) => (
            <div key={index} className="text-center min-w-max">
              <motion.p 
                className="text-4xl md:text-6xl font-bold text-signal-green mb-2"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                {stat.value}
              </motion.p>
              <p className="text-sm text-dark-slate uppercase tracking-widest">
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