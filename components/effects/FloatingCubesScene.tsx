"use client";

import { useRef, useMemo, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import * as THREE from "three";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { useMediaQuery } from "@/hooks/useMediaQuery";

function Cube({
  position,
  color,
  scale,
}: {
  position: [number, number, number];
  color: string;
  scale: number;
}) {
  const ref = useRef<THREE.Mesh>(null);
  const geometry = useMemo(() => new THREE.BoxGeometry(1, 1, 1), []);
  const material = useMemo(
    () =>
      new THREE.MeshStandardMaterial({
        color,
        transparent: true,
        opacity: 0.15,
        wireframe: true,
      }),
    [color]
  );

  useEffect(() => {
    return () => {
      geometry.dispose();
      material.dispose();
    };
  }, [geometry, material]);

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.x = state.clock.elapsedTime * 0.15;
      ref.current.rotation.y = state.clock.elapsedTime * 0.2;
    }
  });

  return (
    <Float speed={1.5} rotationIntensity={0.4} floatIntensity={0.8}>
      <mesh
        ref={ref}
        position={position}
        scale={scale}
        geometry={geometry}
        material={material}
      />
    </Float>
  );
}

export function FloatingCubesScene() {
  const reducedMotion = useReducedMotion();
  const isMobile = useMediaQuery("(max-width: 1024px)");

  if (reducedMotion || isMobile) return null;

  return (
    <Canvas
      camera={{ position: [0, 0, 8], fov: 50 }}
      style={{ background: "transparent" }}
      gl={{ alpha: true, antialias: true, powerPreference: "high-performance" }}
      dpr={[1, 1.5]}
      frameloop="always"
    >
      <ambientLight intensity={0.4} />
      <pointLight position={[10, 10, 10]} intensity={0.4} color="#00C2FF" />
      <Cube position={[-3, 2, 0]} color="#00C2FF" scale={0.8} />
      <Cube position={[4, -1, -2]} color="#38BDF8" scale={1.0} />
      <Cube position={[-2, -2, 1]} color="#00C2FF" scale={0.5} />
    </Canvas>
  );
}
