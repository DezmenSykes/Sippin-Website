"use client";

import { Canvas } from "@react-three/fiber";

const ViewCanvas = () => {
  return (
    <Canvas>
      <mesh>
        <boxGeometry />
        <meshStandardMaterial />
      </mesh>
    </Canvas>
  );
};

export default ViewCanvas;
