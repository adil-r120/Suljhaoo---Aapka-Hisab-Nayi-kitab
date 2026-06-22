import React, { useRef, useState } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { MeshDistortMaterial } from '@react-three/drei';
import * as THREE from 'three';
import ParallaxOrb from '../components/ui/ParallaxOrb';

// Reduce particle count on mobile for better FPS
const PARTICLE_COUNT = typeof window !== 'undefined' && window.innerWidth < 768 ? 60 : 150;

// Particle Cloud Component
const ParticleCloud: React.FC = () => {
  const points = useRef<THREE.Points>(null);
  const { mouse } = useThree();

  const count = PARTICLE_COUNT;
  const [positions] = useState(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 12;      // X
      pos[i * 3 + 1] = (Math.random() - 0.5) * 12;  // Y
      pos[i * 3 + 2] = (Math.random() - 0.5) * 6;   // Z
    }
    return pos;
  });

  useFrame((state) => {
    if (!points.current) return;
    
    // Slow rotational drifting
    const t = state.clock.getElapsedTime();
    points.current.rotation.y = t * 0.02;
    points.current.rotation.x = t * 0.01;

    // Parallax mouse follow
    const targetX = mouse.x * 0.8;
    const targetY = mouse.y * 0.8;
    points.current.position.x = THREE.MathUtils.lerp(points.current.position.x, targetX, 0.03);
    points.current.position.y = THREE.MathUtils.lerp(points.current.position.y, targetY, 0.03);
  });

  return (
    <points ref={points}>
      <bufferGeometry>
        {/* Only attach and itemSize are needed — args handles the rest */}
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        color="#B832C5"
        size={0.06}
        sizeAttenuation
        transparent
        opacity={0.4}
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
};

// Distorted Glowing Orb Component
interface OrbProps {
  color: string;
  position: [number, number, number];
  speed: number;
  distort: number;
  size?: number;
}

const FloatingOrb: React.FC<OrbProps> = ({ color, position, speed, distort, size = 1.4 }) => {
  const mesh = useRef<THREE.Mesh>(null);
  const { mouse } = useThree();

  useFrame((state) => {
    if (!mesh.current) return;
    const t = state.clock.getElapsedTime() * speed;
    
    // Orbit floating
    mesh.current.position.y = position[1] + Math.sin(t) * 0.4;
    mesh.current.position.x = position[0] + Math.cos(t * 0.8) * 0.4;

    // Subtle opposite mouse parallax
    const targetX = -mouse.x * 0.4;
    const targetY = -mouse.y * 0.4;
    mesh.current.position.x += THREE.MathUtils.lerp(0, targetX, 0.05);
    mesh.current.position.y += THREE.MathUtils.lerp(0, targetY, 0.05);
  });

  return (
    <mesh ref={mesh} position={position}>
      <sphereGeometry args={[size, 32, 32]} />
      <MeshDistortMaterial
        color={color}
        distort={distort}
        speed={1.8}
        roughness={0.1}
        metalness={0.1}
        transparent
        opacity={0.25}
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </mesh>
  );
};

// Main Scene Component
const Scene: React.FC = () => {
  return (
    <>
      <ambientLight intensity={0.8} />
      <pointLight position={[10, 10, 10]} intensity={1.5} />
      
      {/* Floating particles */}
      <ParticleCloud />

      {/* Floating gradient orbs */}
      <FloatingOrb color="#7B2CBF" position={[-3, 1.5, -2]} speed={0.4} distort={0.45} size={1.8} />
      <FloatingOrb color="#F048A8" position={[3, -1.8, -1]} speed={0.5} distort={0.35} size={1.5} />
      <FloatingOrb color="#8E2DE2" position={[0, 2.5, -3]} speed={0.3} distort={0.5} size={1.2} />
    </>
  );
};

// Background Wrapper Component
export const HeroBackground: React.FC = () => {
  // Respect user's prefers-reduced-motion preference
  const prefersReducedMotion =
    typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  return (
    <div className="absolute inset-0 -z-10 w-full h-full overflow-hidden bg-gradient-soft select-none pointer-events-none">
      {/* Glowing Ambient Blobs */}
      <ParallaxOrb 
        className="top-1/4 left-1/4 w-[500px] h-[500px] bg-brand-purple/10 blur-[140px]" 
        speed={-100} 
      />
      <ParallaxOrb 
        className="bottom-1/4 right-1/4 w-[600px] h-[600px] bg-brand-pink/5 blur-[160px]" 
        speed={150} 
      />
      
      {/* ThreeJS Canvas — skipped if user prefers reduced motion */}
      {!prefersReducedMotion && (
        <Canvas
          camera={{ position: [0, 0, 5], fov: 60 }}
          dpr={[1, 1.5]}
          gl={{ alpha: true, antialias: true, powerPreference: 'high-performance' }}
          className="w-full h-full"
        >
          <Scene />
        </Canvas>
      )}
    </div>
  );
};

export default HeroBackground;
