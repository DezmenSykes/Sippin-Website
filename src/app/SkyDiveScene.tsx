"use client";
import React, { useRef } from "react";
import * as THREE from "three";
import FloatingCan from "./components/FloatingCan";
import { Environment } from "@react-three/drei";

const SkyDiveScene = () => {
  const groupRef = useRef<THREE.Group>(null);
  const canRef = useRef<THREE.Group>(null);
  const cloud1Ref = useRef<THREE.Group>(null);
  const cloud2Ref = useRef<THREE.Group>(null);
  const cloudsRef = useRef<THREE.Group>(null);
  const wordsRef = useRef<THREE.Group>(null);

  return (
    <group ref={groupRef}>
      <FloatingCan ref={canRef}></FloatingCan>
      <ambientLight intensity={2} color="#9ddefa" />
      <Environment
        files={"/assets/imgs/hdr/field.hdr"}
        environmentIntensity={1.5}
      />
    </group>
  );
};

export default SkyDiveScene;
