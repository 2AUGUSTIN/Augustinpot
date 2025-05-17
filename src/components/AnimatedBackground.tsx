import  { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

export default function AnimatedBackground() {
  const mountRef = useRef<HTMLDivElement | null>(null);
  const [scene, setScene] = useState<THREE.Scene | null>(null);
  const [transitionState, setTransitionState] = useState('scene1');
  
  // Animation timing control
  const transitionDuration = 2000; // transition duration in ms
  
  useEffect(() => {
    if (!mountRef.current) return;
    
    // Basic Three.js setup
    const width = window.innerWidth;
    const height = window.innerHeight;
    
    // Create scene, camera, and renderer
    const newScene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    
    renderer.setSize(width, height);
    renderer.setPixelRatio(window.devicePixelRatio);
    mountRef.current.appendChild(renderer.domElement);
    
    // Camera position
    camera.position.z = 5;
    
    // Create two different scene object groups we'll transition between
    const scene1Group = new THREE.Group();
    const scene2Group = new THREE.Group();
    newScene.add(scene1Group);
    newScene.add(scene2Group);
    
    // Scene 1: Floating particles
    const particleGeometry = new THREE.BufferGeometry();
    const particleCount = 500;
    
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);
    
    for (let i = 0; i < particleCount * 3; i += 3) {
      // Position
      positions[i] = (Math.random() - 0.5) * 10;
      positions[i + 1] = (Math.random() - 0.5) * 10;
      positions[i + 2] = (Math.random() - 0.5) * 10;
      
      // Color - use a more consistent color palette with indigo/blue hues
      colors[i] = 0.3 + Math.random() * 0.2;      // R: slight purple tone
      colors[i + 1] = 0.3 + Math.random() * 0.1;  // G: low
      colors[i + 2] = 0.7 + Math.random() * 0.3;  // B: high blue
    }
    
    particleGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    particleGeometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
    
    const particleMaterial = new THREE.PointsMaterial({
      size: 0.05,
      vertexColors: true,
      transparent: true,
      opacity: 0.7
    });
    
    const particles = new THREE.Points(particleGeometry, particleMaterial);
    scene1Group.add(particles);
    
    // Scene 2: Animated digital grid
    const gridGeometry = new THREE.PlaneGeometry(15, 15, 32, 32);
    const gridMaterial = new THREE.MeshBasicMaterial({
      color: 0x4338ca, // indigo color
      wireframe: true,
      transparent: true,
      opacity: 0.5
    });
    
    const grid = new THREE.Mesh(gridGeometry, gridMaterial);
    grid.rotation.x = -Math.PI / 3;
    grid.position.y = -2;
    scene2Group.add(grid);
    
    // Add some floating code-like elements
    const codeElements = new THREE.Group();
    for (let i = 0; i < 15; i++) {
      const size = 0.5 + Math.random() * 0.5;
      const geometry = new THREE.PlaneGeometry(size, size / 2);
      const material = new THREE.MeshBasicMaterial({
        color: 0x6366f1, // primary color
        transparent: true,
        opacity: 0.2 + Math.random() * 0.3
      });
      
      const plane = new THREE.Mesh(geometry, material);
      plane.position.set(
        (Math.random() - 0.5) * 10,
        (Math.random() - 0.5) * 10,
        (Math.random() - 0.5) * 5
      );
      plane.rotation.set(
        Math.random() * Math.PI,
        Math.random() * Math.PI,
        Math.random() * Math.PI
      );
      
      codeElements.add(plane);
    }
    scene2Group.add(codeElements);
    
    // Initially hide scene2
    scene2Group.visible = false;
    
    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);
      
      // Animate scene 1 - rotating particles
      particles.rotation.x += 0.0005;
      particles.rotation.y += 0.001;
      
      // Animate scene 2 - waves
      const positions = gridGeometry.attributes.position;
      const time = Date.now() * 0.0005;
      
      for (let i = 0; i < positions.count; i++) {
        const x = positions.getX(i);
        const y = positions.getY(i);
        const xsin = Math.sin(x + time);
        const ycos = Math.cos(y + time);
        positions.setZ(i, xsin * ycos * 0.5);
      }
      
      positions.needsUpdate = true;
      
      // Animate floating code elements
      codeElements.children.forEach((child, i) => {
        child.position.y += Math.sin(time + i) * 0.003;
        child.rotation.z += 0.001;
      });
      
      renderer.render(newScene, camera);
    };
    
    animate();
    
    // Handle window resize
    const handleResize = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };
    
    window.addEventListener('resize', handleResize);
    
    setScene(newScene);
    
    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      if (mountRef.current) {
        mountRef.current.removeChild(renderer.domElement);
      }
    };
  }, []);
  
  // Handle scene transitions
  useEffect(() => {
    if (!scene) return;
    
    const scene1Group = scene.children[0];
    const scene2Group = scene.children[1];
    
    const transition = () => {
      if (transitionState === 'scene1') {
        // Transition to scene 2
        scene1Group.visible = true;
        scene2Group.visible = true;
        
        // Fade out scene1, fade in scene2
        let progress = 0;
        const startTime = Date.now();
        
        const updateTransition = () => {
          const elapsed = Date.now() - startTime;
          progress = Math.min(elapsed / transitionDuration, 1);
          
          // Update opacity/visibility
          if (scene1Group.children[0] && scene1Group.children[0].material) {
            (scene1Group.children[0].material as THREE.Material).opacity = 1 - progress;
          }
          
          if (scene2Group.children[0] && scene2Group.children[0].material) {
            (scene2Group.children[0].material as THREE.Material).opacity = progress * 0.5;
          }
          
          if (scene2Group.children[1]) {
            scene2Group.children[1].children.forEach((child) => {
              if (child.material) {
                (child.material as THREE.Material).opacity = progress * (0.2 + Math.random() * 0.3);
              }
            });
          }
          
          if (progress < 1) {
            requestAnimationFrame(updateTransition);
          } else {
            scene1Group.visible = false;
            scene2Group.visible = true;
          }
        };
        
        updateTransition();
        setTransitionState('scene2');
      } else {
        // Transition to scene 1
        scene1Group.visible = true;
        scene2Group.visible = true;
        
        // Fade out scene2, fade in scene1
        let progress = 0;
        const startTime = Date.now();
        
        const updateTransition = () => {
          const elapsed = Date.now() - startTime;
          progress = Math.min(elapsed / transitionDuration, 1);
          
          // Update opacity/visibility
          if (scene1Group.children[0] && scene1Group.children[0].material) {
            (scene1Group.children[0].material as THREE.Material).opacity = progress * 0.7;
          }
          
          if (scene2Group.children[0] && scene2Group.children[0].material) {
            (scene2Group.children[0].material as THREE.Material).opacity = (1 - progress) * 0.5;
          }
          
          if (scene2Group.children[1]) {
            scene2Group.children[1].children.forEach((child) => {
              if (child.material) {
                (child.material as THREE.Material).opacity = (1 - progress) * (0.2 + Math.random() * 0.3);
              }
            });
          }
          
          if (progress < 1) {
            requestAnimationFrame(updateTransition);
          } else {
            scene1Group.visible = true;
            scene2Group.visible = false;
          }
        };
        
        updateTransition();
        setTransitionState('scene1');
      }
    };
    
    // Auto transition timer
    const transitionTimer = setInterval(transition, 10000); // transition every 10 seconds
    
    return () => {
      clearInterval(transitionTimer);
    };
  }, [scene, transitionState]);
  
  return (
    <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
      {/* 3D Canvas Container */}
      <div 
        ref={mountRef} 
        className="absolute top-0 left-0 w-full h-full z-0"
      />
    </div>
  );
}
 