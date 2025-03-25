import { Float } from "@react-three/drei";
import React from "react";
import { SodaCan } from "./SodaCan";

type FloatingCanProps = {
  range: [];
  floatIntensity: number;
  rotateIntensity: number;
  speed: number;
};

const FloatingCan = (props: FloatingCanProps) => {
  return (
    <group>
      <Float
        floatingRange={[-0.1, 0.14]}
        floatIntensity={1.2}
        rotationIntensity={2}
        speed={1}
      >
        <SodaCan flavor="strawberryLemonade" />
      </Float>
    </group>
  );
};

export default FloatingCan;
