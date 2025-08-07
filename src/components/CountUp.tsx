import React, { useState, useEffect, useRef } from "react";

interface CountUpProps {
  end: number;
  duration?: number;
  suffix?: string;
}

const CountUp: React.FC<CountUpProps> = ({
  end,
  duration = 2000,
  suffix = "",
}) => {
  const [displayValue, setDisplayValue] = useState("0" + suffix);
  const [hasStarted, setHasStarted] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasStarted) {
          setHasStarted(true);

          const startTime = Date.now();
          const animate = () => {
            const currentTime = Date.now();
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);

            // Easing function for smooth animation
            const easeOutQuart = 1 - Math.pow(1 - progress, 4);
            const currentValue = Math.floor(end * easeOutQuart);

            setDisplayValue(currentValue.toString() + suffix);

            if (progress < 1) {
              requestAnimationFrame(animate);
            } else {
              // Ensure the final value is exact
              setDisplayValue(end.toString() + suffix);
            }
          };

          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.5 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [end, duration, suffix, hasStarted]);

  return <div ref={elementRef}>{displayValue}</div>;
};

export default CountUp;
