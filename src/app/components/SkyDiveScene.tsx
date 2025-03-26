"use client";
import React, { useRef } from "react";
import * as THREE from "three";
import FloatingCan from "./FloatingCan";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

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

  const ANGLE = 75 * (Math.PI / 180);
  const getXPosition = (distance: number) => distance * Math.cos(ANGLE);
  const getYPosition = (distance: number) => distance * Math.sin(ANGLE);
  const getXYPositions = (distance: number) => ({
    x: getXPosition(distance),
    y: getYPosition(-1 * distance),
  });

  useGSAP(() => {
    if (
      !cloudsRef.current ||
      !canRef.current ||
      !wordsRef.current ||
      !cloud1Ref.current ||
      !cloud2Ref.current
    )
      return;

    gsap.set(cloudsRef.current.position, { z: 10 });

    gsap.set(canRef.current.position, {
      ...getXYPositions(-4),
    });

    gsap.set(
      wordsRef.current.children.map((word) => word.position),
      { ...getXYPositions(7), z: 2 }
    );

    //Spinning Can
    gsap.to(canRef.current.rotation, {
      y: Math.PI * 2,
      duration: 1.7,
      repeat: -1,
      ease: "none",
    });

    // Infinite Cloud Movement
    const DISTANCE = 15;
    const DURATION = 6;

    gsap.set([cloud2Ref.current?.position, cloud1Ref.current?.position], {
      ...getXYPositions(DISTANCE),
    });

    gsap.to(cloud1Ref.current.position, {
      x: `+=${getXPosition(DISTANCE * -2)}`,
      y: `+=${getYPosition(DISTANCE * 2)}`,
      ease: "none",
      repeat: -1,
      duration: DURATION,
    });

    gsap.to(cloud2Ref.current.position, {
      x: `+=${getXPosition(DISTANCE * -2)}`,
      y: `+=${getYPosition(DISTANCE * 2)}`,
      ease: "none",
      repeat: -1,
      delay: DURATION / 2,
      duration: DURATION,
    });
  });

  return (
    <group ref={groupRef}>
      <group rotation={[0, 0, 0.5]}>
        <FloatingCan
          ref={canRef}
          floatIntensity={3}
          speed={3}
          rotateIntensity={0.2}
        ></FloatingCan>
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
    <Text
      key={`${wordIndex}-${word}`}
      scale={isDesktop ? 1 : 0.5}
      color={color}
      material={material}
      font="/fonts/Alpino-Variable.woff"
      fontWeight={900}
      anchorX={"center"}
      anchorY={"middle"}
      characters="ABCDEFGHIJKLMNOPQRSTUVWXYZ!.,?"
    >
      {word}
    </Text>
  ));

  return <Text>{sentence}</Text>;
}

export default SkyDiveScene;
