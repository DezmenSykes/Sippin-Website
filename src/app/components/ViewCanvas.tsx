"use client";

import { Canvas } from "@react-three/fiber";
import { diffProps } from "@react-three/fiber/dist/declarations/src/core/utils";
import { SodaCan } from "./SodaCan";
import { Environment } from "@react-three/drei";

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
      <Environment files={"/assets/imgs/hdr/lobby.hdr"} />
    </Canvas>
  );
};

export default ViewCanvas;
