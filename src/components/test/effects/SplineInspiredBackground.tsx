import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';

interface SplineInspiredBackgroundProps {
  className?: string;
  intensity?: number;
}

const SplineInspiredBackground: React.FC<SplineInspiredBackgroundProps> = ({
  className = '',
  intensity = 1.0
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const frameIdRef = useRef<number>();
  const mouseRef = useRef({ x: 0, y: 0 });
  const targetMouseRef = useRef({ x: 0, y: 0 });
  const wavesRef = useRef<THREE.Mesh[]>([]);
  const particlesRef = useRef<THREE.Points | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ 
      antialias: true, 
      alpha: true,
      powerPreference: 'high-performance'
    });

    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x000000, 0);
    containerRef.current.appendChild(renderer.domElement);

    // Store references
    sceneRef.current = scene;
    rendererRef.current = renderer;
    cameraRef.current = camera;

    // Create flowing wave geometry
    const createFlowingWave = (color: number, position: [number, number, number], scale = 1) => {
      const geometry = new THREE.PlaneGeometry(20, 20, 64, 64);
      const material = new THREE.MeshBasicMaterial({
        color: color,
        transparent: true,
        opacity: 0.15,
        side: THREE.DoubleSide,
        blending: THREE.AdditiveBlending
      });

      const mesh = new THREE.Mesh(geometry, material);
      mesh.position.set(...position);
      mesh.scale.multiplyScalar(scale);
      mesh.rotation.x = -Math.PI / 4;
      
      return mesh;
    };

    // Create particle system
    const createParticleSystem = () => {
      const particleCount = 2000;
      const positions = new Float32Array(particleCount * 3);
      const colors = new Float32Array(particleCount * 3);
      
      // Purple color palette from design system
      const purpleColors = [
        new THREE.Color().setHSL(262 / 360, 0.83, 0.58), // brand-purple
        new THREE.Color().setHSL(237 / 360, 0.98, 0.65), // brand-primary
        new THREE.Color().setHSL(180 / 360, 1.0, 0.6),   // brand-cyan
        new THREE.Color().setHSL(260 / 360, 0.7, 0.35),  // brand-purple-dark
      ];

      for (let i = 0; i < particleCount; i++) {
        const i3 = i * 3;
        
        // Create flowing distribution
        positions[i3] = (Math.random() - 0.5) * 40;
        positions[i3 + 1] = (Math.random() - 0.5) * 40;
        positions[i3 + 2] = (Math.random() - 0.5) * 20;

        const color = purpleColors[Math.floor(Math.random() * purpleColors.length)];
        colors[i3] = color.r;
        colors[i3 + 1] = color.g;
        colors[i3 + 2] = color.b;
      }

      const geometry = new THREE.BufferGeometry();
      geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
      geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

      const material = new THREE.PointsMaterial({
        size: 0.05,
        transparent: true,
        opacity: 0.8,
        vertexColors: true,
        blending: THREE.AdditiveBlending
      });

      return new THREE.Points(geometry, material);
    };

    // Create flowing waves with purple colors
    const wave1 = createFlowingWave(0x8B5CF6, [-5, 0, -10], 1.2); // brand-primary-dark
    const wave2 = createFlowingWave(0x505dfd, [5, -2, -8], 0.8);   // brand-primary
    const wave3 = createFlowingWave(0x60A5FA, [0, 3, -12], 1.0);   // brand-cyan
    
    wavesRef.current = [wave1, wave2, wave3];
    wavesRef.current.forEach(wave => scene.add(wave));

    // Add particles
    const particles = createParticleSystem();
    particlesRef.current = particles;
    scene.add(particles);

    // Position camera
    camera.position.z = 15;
    camera.position.y = 2;

    // Mouse interaction
    const handleMouseMove = (event: MouseEvent) => {
      targetMouseRef.current.x = (event.clientX / window.innerWidth) * 2 - 1;
      targetMouseRef.current.y = -(event.clientY / window.innerHeight) * 2 + 1;
    };

    // Resize handler
    const handleResize = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;

      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };

    // Animation loop
    const animate = (time: number) => {
      // Smooth mouse interpolation
      mouseRef.current.x += (targetMouseRef.current.x - mouseRef.current.x) * 0.05;
      mouseRef.current.y += (targetMouseRef.current.y - mouseRef.current.y) * 0.05;

      // Animate waves with mouse interaction
      wavesRef.current.forEach((wave, index) => {
        const positions = wave.geometry.attributes.position;
        const originalPositions = wave.geometry.userData.originalPositions;

        if (!originalPositions) {
          wave.geometry.userData.originalPositions = positions.array.slice();
          return;
        }

        for (let i = 0; i < positions.count; i++) {
          const x = originalPositions[i * 3];
          const z = originalPositions[i * 3 + 2];
          
          // Create flowing wave effect
          const distance = Math.sqrt(x * x + z * z);
          const waveHeight = Math.sin(distance * 0.1 + time * 0.001 + index) * 2 * intensity;
          
          // Add mouse interaction
          const mouseInfluence = 1.0 / (1.0 + distance * 0.1);
          const mouseWave = (mouseRef.current.x * x * 0.5 + mouseRef.current.y * z * 0.5) * mouseInfluence * intensity;
          
          positions.setY(i, waveHeight + mouseWave);
        }
        
        positions.needsUpdate = true;
        
        // Rotate waves
        wave.rotation.z += 0.001 * (index + 1) * intensity;
      });

      // Animate particles
      if (particlesRef.current) {
        const positions = particlesRef.current.geometry.attributes.position;
        
        for (let i = 0; i < positions.count; i++) {
          const x = positions.getX(i);
          const z = positions.getZ(i);
          
          // Create flowing particle movement
          const flowX = Math.sin(time * 0.001 + z * 0.1) * 0.01 * intensity;
          const flowY = Math.cos(time * 0.001 + x * 0.1) * 0.01 * intensity;
          
          // Add mouse interaction to particles
          const mouseDistX = x - mouseRef.current.x * 10;
          const mouseDistZ = z - mouseRef.current.y * 10;
          const mouseDist = Math.sqrt(mouseDistX * mouseDistX + mouseDistZ * mouseDistZ);
          const mouseForce = Math.max(0, 5 - mouseDist) * 0.01 * intensity;
          
          positions.setX(i, x + flowX + mouseDistX * mouseForce);
          positions.setY(i, positions.getY(i) + flowY);
        }
        
        positions.needsUpdate = true;
        particlesRef.current.rotation.y += 0.0005 * intensity;
      }

      // Camera gentle movement
      camera.position.x = mouseRef.current.x * 2;
      camera.position.y = 2 + mouseRef.current.y * 1;
      camera.lookAt(0, 0, 0);

      renderer.render(scene, camera);
      frameIdRef.current = requestAnimationFrame(animate);
    };

    // Start animation
    animate(0);

    // Add event listeners
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      
      if (frameIdRef.current) {
        cancelAnimationFrame(frameIdRef.current);
      }
      
      if (containerRef.current && renderer.domElement) {
        containerRef.current.removeChild(renderer.domElement);
      }
      
      // Dispose Three.js resources
      wavesRef.current.forEach(wave => {
        wave.geometry.dispose();
        (wave.material as THREE.Material).dispose();
      });
      
      if (particlesRef.current) {
        particlesRef.current.geometry.dispose();
        (particlesRef.current.material as THREE.Material).dispose();
      }
      
      renderer.dispose();
    };
  }, [intensity]);

  return (
    <div 
      ref={containerRef} 
      className={`absolute inset-0 pointer-events-none ${className}`}
      style={{ zIndex: 1 }}
    />
  );
};

export default SplineInspiredBackground;