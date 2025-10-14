// "use client";

// import { useEffect, useRef } from "react";
// import * as THREE from "three";

// import HALO from "vanta/dist/vanta.halo.min.js";

// export default function HaloBackground() {
//   const vantaRef = useRef<HTMLDivElement>(null);
//   const vantaEffect = useRef<unknown>(null);

//   useEffect(() => {
//     if (!vantaRef.current) return;

//     // Get Tailwind bg-background color from CSS variable
//     const style = getComputedStyle(vantaRef.current);
//     const bgColor = style.backgroundColor;

//     // Convert "rgb(r, g, b)" → hex number for Vanta
//     const rgbToHex = (rgb: string) => {
//       const result = rgb.match(/\d+/g)?.map(Number) || [0, 0, 0];
//       return (result[0] << 16) + (result[1] << 8) + result[2];
//     };

//     if (!vantaEffect.current) {
//       vantaEffect.current = HALO({
//         el: vantaRef.current,
//         THREE,
//         mouseControls: true,
//         touchControls: true,
//         gyroControls: false,
//         minHeight: 200.0,
//         minWidth: 200.0,
//         backgroundColor: rgbToHex(bgColor),
//         baseColor: 0x1a59,
//         size: 1,
//         amplitudeFactor: 1,
//         xOffset: 0,
//         yOffset: 0,
//       });
//     }

//     return () => {
//       (vantaEffect.current as { destroy: () => void })?.destroy();
//     };
//   }, []);

//   return (
//     <div
//       ref={vantaRef}
//       className="fixed inset-0 -z-10 bg-background transition-colors duration-300"
//     />
//   );
// }


// components/AlienBlob.tsx
'use client';

import { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function AlienBlob() {
  const mountRef = useRef<HTMLDivElement>(null);
  const frameRef = useRef<number>();

  useEffect(() => {
    if (!mountRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    mountRef.current.appendChild(renderer.domElement);

    // Custom shader material for the alien blob
    const vertexShader = `
      uniform float uTime;
      uniform float uAmplitude;
      uniform float uFrequency;
      
      varying vec3 vNormal;
      varying vec3 vPosition;
      varying vec2 vUv;
      
      void main() {
        vNormal = normal;
        vPosition = position;
        vUv = uv;
        
        // Create organic movement using noise-like functions
        float displacement = sin(position.x * uFrequency + uTime) * 
                            cos(position.y * uFrequency + uTime) * 
                            sin(position.z * uFrequency + uTime) * uAmplitude;
        
        vec3 newPosition = position + normal * displacement;
        
        gl_Position = projectionMatrix * modelViewMatrix * vec4(newPosition, 1.0);
      }
    `;

    const fragmentShader = `
  uniform float uTime;
  uniform vec3 uColor1;
  uniform vec3 uColor2;

  varying vec3 vNormal;
  varying vec3 vPosition;
  varying vec2 vUv;

  void main() {
    // Normal-based shading for smooth 3D depth
    vec3 normal = normalize(vNormal);
    vec3 lightDir = normalize(vec3(0.3, 0.5, 1.0));
    float diffuse = dot(normal, lightDir) * 0.5 + 0.5;

    // Add soft environment reflection tint
    vec3 viewDir = normalize(-vPosition);
    float fresnel = pow(1.0 - max(dot(viewDir, normal), 0.0), 2.0);

    // Iridescent gradient shimmer
    float hueShift = sin(uTime * 0.5 + vUv.y * 4.0) * 0.5 + 0.5;
    vec3 gradient = mix(uColor1, uColor2, hueShift);

    // Soft metallic tone using fresnel and diffuse blending
    vec3 color = mix(gradient, vec3(1.0), fresnel * 0.6);
    color *= 0.7 + 0.3 * diffuse;

    // Add a pastel iridescent overlay
    color += vec3(
      sin(vUv.x * 6.0 + uTime) * 0.05,
      cos(vUv.y * 6.0 + uTime * 0.8) * 0.05,
      sin(vUv.x * 4.0 + vUv.y * 4.0 + uTime * 0.6) * 0.05
    );

    gl_FragColor = vec4(color, 1.0);
  }
`;



    // Create blob geometry (icosphere for smooth deformation)
    const geometry = new THREE.IcosahedronGeometry(2, 64);
    
    // Shader uniforms
    const uniforms = {
      uTime: { value: 0 },
      uAmplitude: { value: 0.3 },
      uFrequency: { value: 2.0 },
      uColor1: { value: new THREE.Color(0.2, 0.8, 0.3) }, // Alien green
      uColor2: { value: new THREE.Color(0.1, 0.4, 0.8) }  // Blue accent
    };

    const material = new THREE.ShaderMaterial({
      vertexShader,
      fragmentShader,
      uniforms,
      transparent: true,
      side: THREE.DoubleSide,
    });

    const blob = new THREE.Mesh(geometry, material);
    scene.add(blob);

    // Add some ambient light
    const ambientLight = new THREE.AmbientLight(0x404040, 1);
    scene.add(ambientLight);

    // Add directional light for better depth
    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(5, 5, 5);
    scene.add(directionalLight);

    // Camera position
    camera.position.z = 5;

    // Mouse interaction
    const mouse = new THREE.Vector2();
    const targetRotation = new THREE.Vector2();
    const currentRotation = new THREE.Vector2();

    const handleMouseMove = (event: MouseEvent) => {
      mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
      mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
      
      targetRotation.x = mouse.y * 0.5;
      targetRotation.y = mouse.x * 0.5;
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Animation loop
    const clock = new THREE.Clock();

    const animate = () => {
      frameRef.current = requestAnimationFrame(animate);

      const elapsedTime = clock.getElapsedTime();

      // Update shader uniforms
      uniforms.uTime.value = elapsedTime;

      // Smooth rotation towards mouse target
      currentRotation.x += (targetRotation.x - currentRotation.x) * 0.05;
      currentRotation.y += (targetRotation.y - currentRotation.y) * 0.05;

      blob.rotation.x = currentRotation.x;
      blob.rotation.y = currentRotation.y;

      // Additional gentle floating animation
      blob.position.y = Math.sin(elapsedTime) * 0.2;

      // Pulsating amplitude for more dynamic movement
      uniforms.uAmplitude.value = 0.2 + Math.sin(elapsedTime * 0.5) * 0.1;

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

    // Cleanup
    return () => {
      if (frameRef.current) {
        cancelAnimationFrame(frameRef.current);
      }
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      
      if (mountRef.current) {
        mountRef.current.removeChild(renderer.domElement);
      }
      
      geometry.dispose();
      material.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div className="fixed w-full h-screen bg-background overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-500 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>
      
      {/* Three.js canvas container */}
      <div 
        ref={mountRef} 
        className="absolute inset-0 z-0 cursor-auto"
      />
    </div>
  );
};

// export default AlienBlob;