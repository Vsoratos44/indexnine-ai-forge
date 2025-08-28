import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';

interface SplineInspiredBackgroundProps {
  className?: string;
  intensity?: number;
}

const SplineInspiredBackground: React.FC<SplineInspiredBackgroundProps> = ({
  className = '',
  intensity = 0.8,
}) => {
  const mountRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<THREE.Scene>();
  const rendererRef = useRef<THREE.WebGLRenderer>();
  const cameraRef = useRef<THREE.PerspectiveCamera>();
  const mouseRef = useRef({ x: 0, y: 0 });
  const stripsRef = useRef<THREE.Mesh[]>([]);

  useEffect(() => {
    if (!mountRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    mountRef.current.appendChild(renderer.domElement);

    sceneRef.current = scene;
    rendererRef.current = renderer;
    cameraRef.current = camera;

    // Create diagonal glowing strips like in the Spline reference
    const createGlowingStrip = (width: number, height: number, color: number, opacity: number, positionZ: number) => {
      // Main strip geometry
      const geometry = new THREE.PlaneGeometry(width, height);
      
      // Create gradient material with glow effect
      const material = new THREE.ShaderMaterial({
        uniforms: {
          color: { value: new THREE.Color(color) },
          opacity: { value: opacity },
          glowIntensity: { value: intensity }
        },
        vertexShader: `
          varying vec2 vUv;
          void main() {
            vUv = uv;
            gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
          }
        `,
        fragmentShader: `
          uniform vec3 color;
          uniform float opacity;
          uniform float glowIntensity;
          varying vec2 vUv;
          
          void main() {
            // Create gradient from center
            float dist = distance(vUv, vec2(0.5, 0.5));
            float gradient = 1.0 - smoothstep(0.0, 0.7, dist);
            
            // Create horizontal gradient for strip effect
            float stripGradient = 1.0 - abs(vUv.y - 0.5) * 2.0;
            stripGradient = pow(stripGradient, 2.0);
            
            float finalAlpha = gradient * stripGradient * opacity * glowIntensity;
            gl_FragColor = vec4(color, finalAlpha);
          }
        `,
        transparent: true,
        blending: THREE.AdditiveBlending,
        side: THREE.DoubleSide
      });

      const strip = new THREE.Mesh(geometry, material);
      
      // Position and rotate diagonally like in the reference
      strip.position.z = positionZ;
      strip.rotation.z = Math.PI / 6; // 30 degrees
      
      scene.add(strip);
      return strip;
    };

    // Create multiple strips with purple gradient colors (like the reference but purple)
    const strips = [
      createGlowingStrip(8, 1.5, 0x8B5CF6, 0.8, -2), // Primary purple
      createGlowingStrip(10, 2, 0x6366F1, 0.6, -1), // Indigo
      createGlowingStrip(12, 2.5, 0x505dfd, 0.7, 0), // Brand primary  
      createGlowingStrip(9, 1.8, 0x60A5FA, 0.5, 1), // Cyan accent
      createGlowingStrip(7, 1.2, 0xA78BFA, 0.6, 2), // Light purple
    ];

    stripsRef.current = strips;

    // Camera position
    camera.position.z = 8;

    // Mouse interaction
    const handleMouseMove = (event: MouseEvent) => {
      mouseRef.current.x = (event.clientX / window.innerWidth) * 2 - 1;
      mouseRef.current.y = -(event.clientY / window.innerHeight) * 2 + 1;
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);

      // Animate strips based on mouse position and time
      const time = Date.now() * 0.001;
      
      stripsRef.current.forEach((strip, index) => {
        // Mouse-based rotation and position
        const mouseInfluence = 0.1;
        strip.rotation.z = Math.PI / 6 + mouseRef.current.x * mouseInfluence * (index * 0.1 + 0.1);
        
        // Subtle floating animation
        strip.position.x = Math.sin(time + index) * 0.5 + mouseRef.current.x * 2;
        strip.position.y = Math.cos(time * 0.8 + index * 0.5) * 0.3 + mouseRef.current.y * 1.5;
        
        // Pulsing glow effect
        const material = strip.material as THREE.ShaderMaterial;
        material.uniforms.glowIntensity.value = intensity + Math.sin(time * 2 + index) * 0.2;
      });

      renderer.render(scene, camera);
    };

    animate();

    // Handle resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      if (mountRef.current && renderer.domElement) {
        mountRef.current.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, [intensity]);

  return <div ref={mountRef} className={`absolute inset-0 ${className}`} />;
};

export default SplineInspiredBackground;