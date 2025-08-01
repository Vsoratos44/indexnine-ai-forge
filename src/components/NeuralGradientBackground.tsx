import React, { useEffect, useRef } from 'react';

/**
 * Canvas-Based Neural Gradient Background Component
 * 
 * High-performance animated gradient using HTML5 Canvas for hardware acceleration
 * Features neural network-inspired particle systems and quantum field effects
 * 
 * Performance Budget:
 * - 60fps target with hardware acceleration
 * - Isolated rendering context to prevent DOM reflows
 * - Optimized particle count and animation cycles
 */

interface NeuralGradientBackgroundProps {
  /** Intensity of the neural network effect (0-1) */
  intensity?: number;
  /** Enable quantum field overlay effect */
  quantumField?: boolean;
  /** Custom color scheme override */
  colors?: {
    primary: string;
    secondary: string;
    accent: string;
  };
  /** Animation speed multiplier */
  speed?: number;
}

export const NeuralGradientBackground: React.FC<NeuralGradientBackgroundProps> = ({
  intensity = 0.8,
  quantumField = true,
  colors,
  speed = 1,
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>();
  const particlesRef = useRef<NeuralParticle[]>([]);
  const timeRef = useRef(0);

  // Neural particle system configuration
  const PARTICLE_COUNT = Math.floor(50 * intensity);
  const CONNECTION_DISTANCE = 120;
  const MAX_CONNECTIONS = 3;

  // Default neural color scheme
  const defaultColors = {
    primary: '#6366F1',    // brand-primary
    secondary: '#8B5CF6',  // brand-purple  
    accent: '#66E6FF',     // brand-matrix
  };

  const colorScheme = colors || defaultColors;

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Setup canvas for high DPI displays
    const setupCanvas = () => {
      const rect = canvas.getBoundingClientRect();
      const dpr = window.devicePixelRatio || 1;
      
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      
      ctx.scale(dpr, dpr);
      canvas.style.width = rect.width + 'px';
      canvas.style.height = rect.height + 'px';
    };

    // Initialize neural particles
    const initializeParticles = () => {
      particlesRef.current = [];
      for (let i = 0; i < PARTICLE_COUNT; i++) {
        particlesRef.current.push(new NeuralParticle(canvas.width, canvas.height, colorScheme));
      }
    };

    // Main animation loop with performance optimization
    const animate = () => {
      timeRef.current += 0.016 * speed; // 60fps delta time
      
      // Clear canvas with performance optimized method
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Render neural gradient base
      renderNeuralGradient(ctx, canvas.width, canvas.height, timeRef.current);
      
      // Update and render particles
      updateParticles(ctx, timeRef.current);
      
      // Render quantum field overlay if enabled
      if (quantumField) {
        renderQuantumField(ctx, canvas.width, canvas.height, timeRef.current);
      }
      
      animationRef.current = requestAnimationFrame(animate);
    };

    // Event handlers
    const handleResize = () => {
      setupCanvas();
      initializeParticles();
    };

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      // Create mouse interaction effect
      particlesRef.current.forEach(particle => {
        const dx = x - particle.x;
        const dy = y - particle.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance < 100) {
          particle.attraction.x = dx * 0.001;
          particle.attraction.y = dy * 0.001;
        } else {
          particle.attraction.x *= 0.95;
          particle.attraction.y *= 0.95;
        }
      });
    };

    // Initialize
    setupCanvas();
    initializeParticles();
    animate();

    // Event listeners
    window.addEventListener('resize', handleResize);
    canvas.addEventListener('mousemove', handleMouseMove);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      window.removeEventListener('resize', handleResize);
      canvas.removeEventListener('mousemove', handleMouseMove);
    };
  }, [intensity, quantumField, speed, colorScheme]);

  // Render neural gradient background
  const renderNeuralGradient = (ctx: CanvasRenderingContext2D, width: number, height: number, time: number) => {
    // Create dynamic radial gradient
    const centerX = width / 2 + Math.sin(time * 0.5) * 50;
    const centerY = height / 2 + Math.cos(time * 0.3) * 30;
    
    const gradient = ctx.createRadialGradient(
      centerX, centerY, 0,
      centerX, centerY, Math.max(width, height) * 0.8
    );
    
    // Dynamic color stops with neural pulse effect
    const pulse = Math.sin(time * 2) * 0.1 + 0.9;
    gradient.addColorStop(0, `${colorScheme.primary}${Math.floor(pulse * 40).toString(16).padStart(2, '0')}`);
    gradient.addColorStop(0.5, `${colorScheme.secondary}20`);
    gradient.addColorStop(1, 'transparent');
    
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, width, height);
  };

  // Update particle system
  const updateParticles = (ctx: CanvasRenderingContext2D, time: number) => {
    const particles = particlesRef.current;
    
    // Update positions
    particles.forEach(particle => {
      particle.update(time);
    });
    
    // Render connections
    ctx.strokeStyle = `${colorScheme.accent}30`;
    ctx.lineWidth = 1;
    
    particles.forEach((particle, i) => {
      let connections = 0;
      
      for (let j = i + 1; j < particles.length && connections < MAX_CONNECTIONS; j++) {
        const other = particles[j];
        const distance = particle.distanceTo(other);
        
        if (distance < CONNECTION_DISTANCE) {
          const opacity = (1 - distance / CONNECTION_DISTANCE) * 0.5;
          ctx.globalAlpha = opacity;
          
          ctx.beginPath();
          ctx.moveTo(particle.x, particle.y);
          ctx.lineTo(other.x, other.y);
          ctx.stroke();
          
          connections++;
        }
      }
    });
    
    ctx.globalAlpha = 1;
    
    // Render particles
    particles.forEach(particle => {
      particle.render(ctx);
    });
  };

  // Render quantum field overlay
  const renderQuantumField = (ctx: CanvasRenderingContext2D, width: number, height: number, time: number) => {
    const fieldSize = 50;
    const rows = Math.ceil(height / fieldSize);
    const cols = Math.ceil(width / fieldSize);
    
    ctx.globalAlpha = 0.1;
    
    for (let row = 0; row < rows; row++) {
      for (let col = 0; col < cols; col++) {
        const x = col * fieldSize;
        const y = row * fieldSize;
        
        const wave = Math.sin((x + y) * 0.01 + time) * 0.5 + 0.5;
        const hue = (time * 50 + x + y) % 360;
        
        ctx.fillStyle = `hsl(${hue}, 70%, 60%)`;
        ctx.fillRect(x, y, fieldSize * wave, fieldSize * wave);
      }
    }
    
    ctx.globalAlpha = 1;
  };

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{
        background: 'transparent',
        mixBlendMode: 'normal',
      }}
      aria-hidden="true"
    />
  );
};

/**
 * Neural Particle Class
 * 
 * Represents individual nodes in the neural network visualization
 * Features autonomous movement, attraction forces, and connection rendering
 */
class NeuralParticle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  color: string;
  attraction: { x: number; y: number };
  phase: number;
  maxX: number;
  maxY: number;

  constructor(maxX: number, maxY: number, colors: { primary: string; secondary: string; accent: string }) {
    this.maxX = maxX;
    this.maxY = maxY;
    this.x = Math.random() * maxX;
    this.y = Math.random() * maxY;
    this.vx = (Math.random() - 0.5) * 0.5;
    this.vy = (Math.random() - 0.5) * 0.5;
    this.size = Math.random() * 3 + 1;
    this.color = Math.random() > 0.5 ? colors.primary : colors.accent;
    this.attraction = { x: 0, y: 0 };
    this.phase = Math.random() * Math.PI * 2;
  }

  update(time: number) {
    // Add attraction force
    this.vx += this.attraction.x;
    this.vy += this.attraction.y;
    
    // Add autonomous movement with neural wave pattern
    this.vx += Math.sin(time + this.phase) * 0.01;
    this.vy += Math.cos(time + this.phase) * 0.01;
    
    // Apply velocity with damping
    this.x += this.vx;
    this.y += this.vy;
    this.vx *= 0.99;
    this.vy *= 0.99;
    
    // Boundary wrapping
    if (this.x < 0) this.x = this.maxX;
    if (this.x > this.maxX) this.x = 0;
    if (this.y < 0) this.y = this.maxY;
    if (this.y > this.maxY) this.y = 0;
  }

  render(ctx: CanvasRenderingContext2D) {
    ctx.globalAlpha = 0.8;
    ctx.fillStyle = this.color;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fill();
    
    // Add glow effect
    ctx.globalAlpha = 0.3;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size * 2, 0, Math.PI * 2);
    ctx.fill();
    
    ctx.globalAlpha = 1;
  }

  distanceTo(other: NeuralParticle): number {
    const dx = this.x - other.x;
    const dy = this.y - other.y;
    return Math.sqrt(dx * dx + dy * dy);
  }
}

export default NeuralGradientBackground;