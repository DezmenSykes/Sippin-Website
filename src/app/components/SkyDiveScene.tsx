"use client";
import React, { useRef } from "react";
import * as THREE from "three";
import FloatingCan from "./FloatingCan";
import {
  Cloud,
  Clouds,
  Environment,
  OrbitControls,
  Text,
} from "@react-three/drei";
import { SodaCanProps } from "./SodaCan";
import { useMediaQuery } from "@/hooks/useMediaQuery";

type SkyDiveProps = {
  sentence: string | null;
  flavor: SodaCanProps["flavor"];
};

const SkyDiveScene = ({ sentence, flavor }: SkyDiveProps) => {
  const groupRef = useRef<THREE.Group>(null);
  const canRef = useRef<THREE.Group>(null);
  const cloud1Ref = useRef<THREE.Group>(null);
  const cloud2Ref = useRef<THREE.Group>(null);
  const cloudsRef = useRef<THREE.Group>(null);
  const wordsRef = useRef<THREE.Group>(null);

  return (
    <group ref={groupRef}>
      <group rotation={[0, 0, 0.5]}>
        <FloatingCan ref={canRef}></FloatingCan>
      </group>

      <Clouds ref={cloudsRef}>
        <Cloud ref={cloud1Ref} bounds={[10, 10, 2]} />
        <Cloud ref={cloud2Ref} bounds={[10, 10, 2]} />
      </Clouds>

      <group ref={wordsRef}>
        {sentence && <ThreeText sentence={sentence} color="#f97315" />}
      </group>

      <OrbitControls />

      <ambientLight intensity={2} color="#9ddefa" />
      <Environment
        files={"/assets/imgs/hdr/field.hdr"}
        environmentIntensity={1.5}
      />
    </group>
  );
};

function ThreeText({
  sentence,
  color = "white",
}: {
  sentence: string;
  color?: string;
}) {
  const words = sentence.toUpperCase().split(" ");
  const material = new THREE.MeshLambertMaterial();
  const isDesktop = useMediaQuery("(min-width: 950px)", true);

  return words.map((word: string, wordIndex: number) => (
    <Text key={`${wordIndex}-${word}`}>{word}</Text>
  ));

  return <Text>{sentence}</Text>;
}

export default SkyDiveScene;
