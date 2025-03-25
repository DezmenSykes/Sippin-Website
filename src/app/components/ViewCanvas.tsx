"use client";

import { Canvas } from "@react-three/fiber";
import { diffProps } from "@react-three/fiber/dist/declarations/src/core/utils";
import { SodaCan } from "./SodaCan";

const ViewCanvas = () => {
  return (
    <Canvas
      style={{
        position: "fixed",
        top: 0,
        left: "50%",
        transform: "translateX(-50%)",
        overflow: "hidden",
        pointerEvents: "none",
        zIndex: 30,
      }}
      shadows
      dpr={[1, 1.5]}
      gl={{
        antialias: true,
      }}
      camera={{
        fov: 30,
      }}
    >
      <SodaCan flavor="strawberryLemonade" />
      <ambientLight intensity={2} />
      <spotLight intensity={3} position={[1, 1, 1]} />
    </Canvas>
  );
};

export default ViewCanvas;
