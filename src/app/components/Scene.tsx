"use client";
import React from "react";
import { Canvas, useThree } from "@react-three/fiber";
import FloatingCan from "./FloatingCan";
import { Environment } from "@react-three/drei";

const Scene = () => {
  return (
    <group>
      <FloatingCan flavor="strawberryLemonade" />
      <Environment
        files={"/assets/imgs/hdr/lobby.hdr"}
        environmentIntensity={1.5}
      />
    </group>
  );
};

export default Scene;
