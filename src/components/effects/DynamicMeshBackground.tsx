import React, { useEffect, useRef } from 'react';

interface DynamicMeshBackgroundProps {
  className?: string;
  intensity?: number;
}

export const DynamicMeshBackground: React.FC<DynamicMeshBackgroundProps> = ({
  className = '',
  intensity = 0.5
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Mesh gradient points
    const points = Array.from({ length: 8 }, (_, i) => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      dx: (Math.random() - 0.5) * 0.5,
      dy: (Math.random() - 0.5) * 0.5,
      color: i % 3 === 0 ? 'rgba(93, 109, 252, 0.3)' : i % 3 === 1 ? 'rgba(0, 255, 255, 0.2)' : 'rgba(139, 92, 246, 0.25)'
    }));

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Create gradient mesh
      const gradient = ctx.createRadialGradient(
        canvas.width / 2, canvas.height / 2, 0,
        canvas.width / 2, canvas.height / 2, Math.max(canvas.width, canvas.height) / 2
      );

      points.forEach((point, index) => {
        // Update positions
        point.x += point.dx * intensity;
        point.y += point.dy * intensity;

        // Bounce off edges
        if (point.x <= 0 || point.x >= canvas.width) point.dx *= -1;
        if (point.y <= 0 || point.y >= canvas.height) point.dy *= -1;

        // Create individual gradients for each point
        const pointGradient = ctx.createRadialGradient(
          point.x, point.y, 0,
          point.x, point.y, 300
        );
        pointGradient.addColorStop(0, point.color);
        pointGradient.addColorStop(1, 'transparent');

        ctx.globalCompositeOperation = 'screen';
        ctx.fillStyle = pointGradient;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [intensity]);

  return (
    <canvas
      ref={canvasRef}
      className={`absolute inset-0 w-full h-full ${className}`}
      style={{ mixBlendMode: 'multiply' }}
    />
  );
};

export default DynamicMeshBackground;