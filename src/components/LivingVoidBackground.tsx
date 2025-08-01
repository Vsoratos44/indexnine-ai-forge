import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

const LivingVoidBackground = () => {
  const mountRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<THREE.Scene>();
  const rendererRef = useRef<THREE.WebGLRenderer>();
  const cameraRef = useRef<THREE.PerspectiveCamera>();
  const frameRef = useRef<number>();
  const mouseRef = useRef({ x: 0, y: 0 });
  const timeRef = useRef(0);

  // Particle systems refs
  const starParticlesRef = useRef<THREE.Points[]>([]);
  const dataPointsRef = useRef<THREE.Mesh[]>([]);
  const helixGroupRef = useRef<THREE.Group>();
  const energySweepsRef = useRef<THREE.Mesh[]>([]);

  useEffect(() => {
    if (!mountRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x000000);
    sceneRef.current = scene;

    // Camera setup
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 5;
    cameraRef.current = camera;

    // Renderer setup
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    rendererRef.current = renderer;
    mountRef.current.appendChild(renderer.domElement);

    // Create star particle systems (3 layers for parallax)
    createStarParticles();

    // Create DNA helix structures
    createDNAHelixStructures();

    // Create floating data points
    createDataPoints();

    // Create energy sweeps
    createEnergySweeps();

    // Add edge glow effect
    createEdgeGlow();

    // Mouse interaction
    const handleMouseMove = (event: MouseEvent) => {
      mouseRef.current.x = (event.clientX / window.innerWidth) * 2 - 1;
      mouseRef.current.y = -(event.clientY / window.innerHeight) * 2 + 1;
    };

    // Window resize handler
    const handleResize = () => {
      if (!camera || !renderer) return;
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('resize', handleResize);

    // Animation loop
    const animate = () => {
      timeRef.current += 0.016; // ~60fps
      const loopTime = timeRef.current % 8; // 8-second loop

      // Update star particles with parallax and mouse interaction
      updateStarParticles(loopTime);

      // Update DNA helix with organic movement
      updateDNAHelix(loopTime);

      // Update floating data points
      updateDataPoints(loopTime);

      // Update energy sweeps
      updateEnergySweeps(loopTime);

      // Slow zoom effect (100% to 102% over 8 seconds)
      const zoomFactor = 1 + (Math.sin(loopTime * Math.PI / 4) * 0.01);
      scene.scale.setScalar(zoomFactor);

      // Camera slight drift based on mouse
      camera.position.x += (mouseRef.current.x * 0.1 - camera.position.x) * 0.02;
      camera.position.y += (mouseRef.current.y * 0.1 - camera.position.y) * 0.02;

      renderer.render(scene, camera);
      frameRef.current = requestAnimationFrame(animate);
    };

    animate();

    // Cleanup
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      if (frameRef.current) {
        cancelAnimationFrame(frameRef.current);
      }
      if (mountRef.current && renderer.domElement) {
        mountRef.current.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  const createStarParticles = () => {
    const scene = sceneRef.current!;
    
    // Layer 1: Close particles (bright white)
    const geometry1 = new THREE.BufferGeometry();
    const positions1 = new Float32Array(50 * 3);
    const colors1 = new Float32Array(50 * 3);
    
    for (let i = 0; i < 50; i++) {
      positions1[i * 3] = (Math.random() - 0.5) * 20;
      positions1[i * 3 + 1] = (Math.random() - 0.5) * 20;
      positions1[i * 3 + 2] = (Math.random() - 0.5) * 5;
      
      colors1[i * 3] = 1;     // R
      colors1[i * 3 + 1] = 1; // G
      colors1[i * 3 + 2] = 1; // B
    }
    
    geometry1.setAttribute('position', new THREE.BufferAttribute(positions1, 3));
    geometry1.setAttribute('color', new THREE.BufferAttribute(colors1, 3));
    
    const material1 = new THREE.PointsMaterial({
      size: 0.05,
      vertexColors: true,
      transparent: true,
      opacity: 0.8,
      blending: THREE.AdditiveBlending
    });
    
    const particles1 = new THREE.Points(geometry1, material1);
    scene.add(particles1);
    starParticlesRef.current.push(particles1);

    // Layer 2: Medium particles (cyan tint)
    const geometry2 = new THREE.BufferGeometry();
    const positions2 = new Float32Array(80 * 3);
    const colors2 = new Float32Array(80 * 3);
    
    for (let i = 0; i < 80; i++) {
      positions2[i * 3] = (Math.random() - 0.5) * 30;
      positions2[i * 3 + 1] = (Math.random() - 0.5) * 30;
      positions2[i * 3 + 2] = (Math.random() - 0.5) * 8;
      
      colors2[i * 3] = 0.8;     // R
      colors2[i * 3 + 1] = 1;   // G  
      colors2[i * 3 + 2] = 1;   // B (cyan)
    }
    
    geometry2.setAttribute('position', new THREE.BufferAttribute(positions2, 3));
    geometry2.setAttribute('color', new THREE.BufferAttribute(colors2, 3));
    
    const material2 = new THREE.PointsMaterial({
      size: 0.03,
      vertexColors: true,
      transparent: true,
      opacity: 0.6,
      blending: THREE.AdditiveBlending
    });
    
    const particles2 = new THREE.Points(geometry2, material2);
    scene.add(particles2);
    starParticlesRef.current.push(particles2);

    // Layer 3: Distant particles (pale)
    const geometry3 = new THREE.BufferGeometry();
    const positions3 = new Float32Array(70 * 3);
    const colors3 = new Float32Array(70 * 3);
    
    for (let i = 0; i < 70; i++) {
      positions3[i * 3] = (Math.random() - 0.5) * 40;
      positions3[i * 3 + 1] = (Math.random() - 0.5) * 40;
      positions3[i * 3 + 2] = (Math.random() - 0.5) * 12;
      
      colors3[i * 3] = 0.6;     // R
      colors3[i * 3 + 1] = 0.8; // G
      colors3[i * 3 + 2] = 1;   // B
    }
    
    geometry3.setAttribute('position', new THREE.BufferAttribute(positions3, 3));
    geometry3.setAttribute('color', new THREE.BufferAttribute(colors3, 3));
    
    const material3 = new THREE.PointsMaterial({
      size: 0.02,
      vertexColors: true,
      transparent: true,
      opacity: 0.4,
      blending: THREE.AdditiveBlending
    });
    
    const particles3 = new THREE.Points(geometry3, material3);
    scene.add(particles3);
    starParticlesRef.current.push(particles3);
  };

  const createDNAHelixStructures = () => {
    const scene = sceneRef.current!;
    const helixGroup = new THREE.Group();
    helixGroupRef.current = helixGroup;
    scene.add(helixGroup);

    // Create multiple DNA helix strands
    for (let strand = 0; strand < 3; strand++) {
      const curve = new THREE.CatmullRomCurve3([
        new THREE.Vector3(-10, -5, strand * 2),
        new THREE.Vector3(-5, 0, strand * 2),
        new THREE.Vector3(0, 2, strand * 2),
        new THREE.Vector3(5, 0, strand * 2),
        new THREE.Vector3(10, -2, strand * 2)
      ]);

      const geometry = new THREE.TubeGeometry(curve, 64, 0.01, 8, false);
      const material = new THREE.MeshBasicMaterial({
        color: new THREE.Color().setHSL(0.6 + strand * 0.1, 0.7, 0.6),
        transparent: true,
        opacity: 0.4,
        blending: THREE.AdditiveBlending
      });

      const mesh = new THREE.Mesh(geometry, material);
      helixGroup.add(mesh);

      // Add connecting nodes along the helix
      const points = curve.getPoints(32);
      points.forEach((point, index) => {
        if (index % 4 === 0) {
          const nodeGeometry = new THREE.SphereGeometry(0.02, 8, 8);
          const nodeMaterial = new THREE.MeshBasicMaterial({
            color: 0xE6F7FF,
            transparent: true,
            opacity: 0.6,
            blending: THREE.AdditiveBlending
          });
          const node = new THREE.Mesh(nodeGeometry, nodeMaterial);
          node.position.copy(point);
          helixGroup.add(node);
        }
      });
    }
  };

  const createDataPoints = () => {
    const scene = sceneRef.current!;
    
    for (let i = 0; i < 12; i++) {
      const geometry = new THREE.SphereGeometry(0.03, 8, 8);
      const material = new THREE.MeshBasicMaterial({
        color: 0x9FAAFF,
        transparent: true,
        opacity: 0.4,
        blending: THREE.AdditiveBlending
      });
      
      const dataPoint = new THREE.Mesh(geometry, material);
      dataPoint.position.set(
        (Math.random() - 0.5) * 15,
        (Math.random() - 0.5) * 15,
        (Math.random() - 0.5) * 8
      );
      
      scene.add(dataPoint);
      dataPointsRef.current.push(dataPoint);
    }
  };

  const createEnergySweeps = () => {
    const scene = sceneRef.current!;
    
    for (let i = 0; i < 3; i++) {
      const geometry = new THREE.PlaneGeometry(20, 0.05);
      const material = new THREE.MeshBasicMaterial({
        color: 0x7D88FF,
        transparent: true,
        opacity: 0.2,
        blending: THREE.AdditiveBlending
      });
      
      const sweep = new THREE.Mesh(geometry, material);
      sweep.position.set(-15, 0, i * 0.5);
      sweep.rotation.z = -Math.PI / 12; // -15 degrees
      
      scene.add(sweep);
      energySweepsRef.current.push(sweep);
    }
  };

  const createEdgeGlow = () => {
    const scene = sceneRef.current!;
    
    // Create edge glow effect using a large sphere
    const geometry = new THREE.SphereGeometry(25, 32, 32);
    const material = new THREE.MeshBasicMaterial({
      color: 0x5E5EFF,
      transparent: true,
      opacity: 0.05,
      side: THREE.BackSide,
      blending: THREE.AdditiveBlending
    });
    
    const edgeGlow = new THREE.Mesh(geometry, material);
    scene.add(edgeGlow);
  };

  const updateStarParticles = (time: number) => {
    starParticlesRef.current.forEach((particles, layerIndex) => {
      const positions = particles.geometry.attributes.position.array as Float32Array;
      const originalPositions = particles.userData.originalPositions || positions.slice();
      
      if (!particles.userData.originalPositions) {
        particles.userData.originalPositions = originalPositions;
      }

      for (let i = 0; i < positions.length; i += 3) {
        // Twinkle effect
        const twinkleOffset = Math.sin(time * 2 + i) * 0.1;
        
        // Mouse interaction
        const mouseInfluence = 0.1 / (layerIndex + 1);
        
        positions[i] = originalPositions[i] + 
          Math.sin(time * 0.5 + i * 0.1) * 0.2 + 
          mouseRef.current.x * mouseInfluence;
        positions[i + 1] = originalPositions[i + 1] + 
          Math.cos(time * 0.3 + i * 0.1) * 0.1 + 
          mouseRef.current.y * mouseInfluence;
        positions[i + 2] = originalPositions[i + 2] + twinkleOffset;
      }
      
      particles.geometry.attributes.position.needsUpdate = true;
      
      // Opacity animation for twinkling
      particles.material.opacity = 0.6 + Math.sin(time * 2) * 0.2;
    });
  };

  const updateDNAHelix = (time: number) => {
    if (!helixGroupRef.current) return;
    
    // Organic breathing motion
    const breathe = Math.sin(time * 0.8) * 0.05;
    helixGroupRef.current.scale.setScalar(1 + breathe);
    
    // Helix rotation
    helixGroupRef.current.rotation.y = time * 0.1;
    
    // Undulation effect
    helixGroupRef.current.children.forEach((child, index) => {
      if (child instanceof THREE.Mesh) {
        child.position.y = Math.sin(time * 0.5 + index * 0.5) * 0.3;
        child.rotation.z = Math.sin(time * 0.3 + index * 0.2) * 0.1;
      }
    });
    
    // Mouse interaction - helix responds to cursor
    helixGroupRef.current.rotation.x = mouseRef.current.y * 0.1;
    helixGroupRef.current.position.x = mouseRef.current.x * 0.5;
  };

  const updateDataPoints = (time: number) => {
    dataPointsRef.current.forEach((point, index) => {
      // Floating motion
      point.position.y += Math.sin(time * 0.5 + index) * 0.002;
      point.position.x += Math.cos(time * 0.3 + index) * 0.001;
      
      // Pulsing effect
      const pulse = 1 + Math.sin(time * 2 + index) * 0.3;
      point.scale.setScalar(pulse);
      
      // Opacity variation
      point.material.opacity = 0.4 + Math.sin(time * 1.5 + index) * 0.2;
    });
  };

  const updateEnergySweeps = (time: number) => {
    energySweepsRef.current.forEach((sweep, index) => {
      // Diagonal sweep motion
      const sweepSpeed = 3; // Complete sweep every 3 seconds
      const progress = ((time * sweepSpeed + index * 2) % 8) / 8;
      
      sweep.position.x = -15 + progress * 30;
      sweep.material.opacity = Math.sin(progress * Math.PI) * 0.2;
      
      // Slight vertical oscillation
      sweep.position.y = Math.sin(time * 0.5 + index) * 0.5;
    });
  };

  return (
    <div 
      ref={mountRef} 
      className="absolute inset-0 z-0"
      style={{ 
        width: '100%', 
        height: '100%',
        overflow: 'hidden'
      }}
    />
  );
};

export default LivingVoidBackground;