"use client";

import { useMemo, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Billboard, Float, Sparkles } from "@react-three/drei";
import * as THREE from "three";
import { techLogos, type TechLogo } from "@/data/techLogos";

// Distribute N points evenly on a sphere (fibonacci).
// yFlatten squashes the sphere vertically (oblate) so the pole cards
// (first/last index) don't sit at the extreme top/bottom and get clipped
// by the canvas edge — full horizontal spread is preserved.
function fibonacciSphere(count: number, radius: number, yFlatten = 0.72) {
  const points: [number, number, number][] = [];
  const golden = Math.PI * (3 - Math.sqrt(5));
  for (let i = 0; i < count; i++) {
    const y = 1 - (i / (count - 1)) * 2;
    const r = Math.sqrt(1 - y * y);
    const theta = golden * i;
    points.push([
      Math.cos(theta) * r * radius,
      y * radius * yFlatten,
      Math.sin(theta) * r * radius,
    ]);
  }
  return points;
}

function useLogoTexture(logo: TechLogo) {
  return useMemo(() => {
    const size = 256;
    const canvas = document.createElement("canvas");
    canvas.width = canvas.height = size;
    const ctx = canvas.getContext("2d")!;

    // rounded glass card
    const radius = 48;
    ctx.beginPath();
    ctx.moveTo(radius, 0);
    ctx.arcTo(size, 0, size, size, radius);
    ctx.arcTo(size, size, 0, size, radius);
    ctx.arcTo(0, size, 0, 0, radius);
    ctx.arcTo(0, 0, size, 0, radius);
    ctx.closePath();

    const grad = ctx.createLinearGradient(0, 0, size, size);
    grad.addColorStop(0, "rgba(22,26,42,0.96)");
    grad.addColorStop(1, "rgba(10,12,22,0.96)");
    ctx.fillStyle = grad;
    ctx.fill();

    ctx.lineWidth = 3;
    ctx.strokeStyle = logo.color + "66";
    ctx.stroke();

    // logo glyph, centered
    const pad = size * 0.22;
    const inner = size - pad * 2;
    ctx.save();
    ctx.translate(pad, pad);
    ctx.scale(inner / 24, inner / 24);
    ctx.fillStyle = logo.color;
    ctx.shadowColor = logo.color;
    ctx.shadowBlur = 2;
    // evenodd so square-background icons (e.g. JavaScript) cut their holes
    // instead of filling as a flat block
    ctx.fill(new Path2D(logo.path), "evenodd");
    ctx.restore();

    const texture = new THREE.CanvasTexture(canvas);
    texture.anisotropy = 8;
    texture.colorSpace = THREE.SRGBColorSpace;
    return texture;
  }, [logo]);
}

function LogoCard({
  logo,
  position,
  index,
}: {
  logo: TechLogo;
  position: [number, number, number];
  index: number;
}) {
  const texture = useLogoTexture(logo);
  const [hovered, setHovered] = useState(false);

  const setCursor = (on: boolean) => {
    setHovered(on);
    document.body.style.cursor = on ? "pointer" : "auto";
  };

  return (
    <Float
      speed={1.4 + (index % 4) * 0.25}
      rotationIntensity={0.15}
      floatIntensity={0.6}
      position={position}
    >
      <Billboard>
        <mesh
          scale={hovered ? 1.25 : 1}
          onClick={(e) => {
            e.stopPropagation();
            window.open(logo.url, "_blank", "noopener,noreferrer");
          }}
          onPointerOver={(e) => {
            e.stopPropagation();
            setCursor(true);
          }}
          onPointerOut={() => setCursor(false)}
        >
          <planeGeometry args={[1, 1]} />
          <meshBasicMaterial map={texture} transparent toneMapped={false} />
        </mesh>
      </Billboard>
    </Float>
  );
}

function LogoCloud() {
  const group = useRef<THREE.Group>(null);
  const positions = useMemo(
    () => fibonacciSphere(techLogos.length, 2.2),
    []
  );
  useFrame((_, delta) => {
    if (group.current) {
      group.current.rotation.y += delta * 0.18;
      group.current.rotation.x = Math.sin(Date.now() * 0.0001) * 0.12;
    }
  });
  return (
    <group ref={group}>
      {techLogos.map((logo, i) => (
        <LogoCard
          key={logo.name}
          logo={logo}
          position={positions[i]}
          index={i}
        />
      ))}
    </group>
  );
}

function CoreGlow() {
  return (
    <mesh>
      <icosahedronGeometry args={[0.85, 2]} />
      <meshBasicMaterial
        color="#7d87ff"
        wireframe
        transparent
        opacity={0.25}
      />
    </mesh>
  );
}

export default function HeroCanvas() {
  return (
    <Canvas
      camera={{ position: [0, 0, 7.5], fov: 45 }}
      dpr={[1, 2]}
      gl={{ antialias: true, alpha: true }}
    >
      <ambientLight intensity={1} />
      <CoreGlow />
      <LogoCloud />
      <Sparkles count={70} scale={9} size={2} speed={0.3} color="#a5b4fc" />
    </Canvas>
  );
}
