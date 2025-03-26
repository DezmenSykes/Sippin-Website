"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

import { Environment } from "@react-three/drei";
import FloatingCan from "../FloatingCan";
import { useRef } from "react";
import { Group } from "three";

gsap.registerPlugin(useGSAP);

const DetailsScene = () => {
  const canRef = useRef<Group>(null);
  const bgColors = ["#ffa6b5", "#e9cff6", "#cbef9a"];

  useGSAP(() => {
    if (!canRef.current) return;
  });

  return (
    <group ref={canRef}>
      <FloatingCan flavor="strawberryLemonade" />
      <Environment
        files={"/assets/imgs/hdr/lobby.hdr"}
        environmentIntensity={1.5}
      />
    </group>
  );
};

export default DetailsScene;
