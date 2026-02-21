import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';

export const Scene3D: React.FC = () => {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mountRef.current) return;

    const scene = new THREE.Scene();
    
    // Camera Setup
    const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 100);
    camera.position.z = 12;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2)); // High DPI
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.2;
    mountRef.current.appendChild(renderer.domElement);

    // Geometry - A High Poly Icosahedron (Jewel-like)
    const geometry = new THREE.IcosahedronGeometry(3.5, 0);
    
    // Material - High-end Glass / Crystal
    const material = new THREE.MeshPhysicalMaterial({
      color: 0xffffff,
      roughness: 0,
      metalness: 0.1,
      transmission: 1, // Glass-like transmission
      thickness: 1.5, // Volume
      ior: 1.5, // Refractive index of glass
      clearcoat: 1,
      clearcoatRoughness: 0,
      dispersion: 0.2, // Chromatic aberration feel
      attenuationColor: new THREE.Color(0xe0e7ff), // Indigo tint inside
      attenuationDistance: 0.5,
    });

    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);

    // Wireframe Overlay for "Architect" feel
    const wireframeGeo = new THREE.IcosahedronGeometry(3.55, 0);
    const wireframeMat = new THREE.MeshBasicMaterial({ 
        color: 0x4338ca, // Accent Indigo
        wireframe: true, 
        transparent: true, 
        opacity: 0.05 
    });
    const wireframeMesh = new THREE.Mesh(wireframeGeo, wireframeMat);
    scene.add(wireframeMesh);


    // Lighting - Studio Setup
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);

    const dirLight = new THREE.DirectionalLight(0xffffff, 3);
    dirLight.position.set(5, 10, 7);
    scene.add(dirLight);

    const blueLight = new THREE.PointLight(0x4338ca, 2, 20);
    blueLight.position.set(-5, -5, 5);
    scene.add(blueLight);

    const clock = new THREE.Clock();
    let mouseX = 0;
    let mouseY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = (e.clientX / window.innerWidth) * 2 - 1;
      mouseY = -(e.clientY / window.innerHeight) * 2 + 1;
    };
    window.addEventListener('mousemove', handleMouseMove);

    const animate = () => {
      const time = clock.getElapsedTime();
      
      // Elegant slow rotation
      mesh.rotation.x = Math.sin(time * 0.1) * 0.2 + mouseY * 0.05;
      mesh.rotation.y += 0.002 + mouseX * 0.005;
      mesh.rotation.z = Math.cos(time * 0.2) * 0.1;

      wireframeMesh.rotation.copy(mesh.rotation);

      // Gentle floating
      const floatY = Math.sin(time * 0.5) * 0.2;
      mesh.position.y = floatY;
      wireframeMesh.position.y = floatY;

      renderer.render(scene, camera);
      requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      if (mountRef.current) mountRef.current.removeChild(renderer.domElement);
      geometry.dispose();
      material.dispose();
      wireframeGeo.dispose();
      wireframeMat.dispose();
    };
  }, []);

  return <div ref={mountRef} className="w-full h-full" />;
};