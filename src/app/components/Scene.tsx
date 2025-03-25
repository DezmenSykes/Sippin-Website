"use client";
import React, { useRef } from "react";
import { Canvas, useThree } from "@react-three/fiber";
import FloatingCan from "./FloatingCan";
import { Environment, OrbitControls } from "@react-three/drei";
import { Group } from "three";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

const Scene = () => {
  const can1Ref = useRef<Group>(null);
  const can2Ref = useRef<Group>(null);
  const can3Ref = useRef<Group>(null);
  const can4Ref = useRef<Group>(null);
  const can5Ref = useRef<Group>(null);

  const can1GroupRef = useRef<Group>(null);
  const can2GroupRef = useRef<Group>(null);

  const groupRef = useRef<Group>(null);

  const FLOAT_SPEED = 1.5;

  useGSAP(() => {
    if (
      !can1Ref.current ||
      !can2Ref.current ||
      !can3Ref.current ||
      !can4Ref.current ||
      !can5Ref.current ||
      !can1GroupRef.current ||
      !can2GroupRef.current ||
      !groupRef.current
    )
      return;

    gsap.set(can1Ref.current.position, { x: -1.5, y: -0.1 });
    gsap.set(can1Ref.current.rotation, { z: -0.5, x: 0.1 });

    gsap.set(can2Ref.current.position, { x: 1.5, y: 0.1 });
    gsap.set(can2Ref.current.rotation, { z: 0.3, x: -0.2 });

    gsap.set(can3Ref.current.position, { y: 5, z: 2 });
    gsap.set(can4Ref.current.position, { y: 4, z: 4 });
    gsap.set(can5Ref.current.position, { y: -5, z: 6 });

    const introTl = gsap.timeline({
      defaults: {
        duration: 3,
        ease: "back.out(1.4)",
      },
    });

    const introTl
      .from(can1GroupRef.current.position, { y: -5, x: 1 }, 0)
      .from(can1GroupRef.current.rotation, { z: 3 }, 0)
      .from(can2GroupRef.current.position, { y: 5, x: 1 }, 0)
      .from(can2GroupRef.current.rotation, { z: 3 }, 0);

    const scrollTl = gsap.timeline({
      defaults: {
        duration: 2,
      },
      scrollTrigger: {
        trigger: ".hero",
        start: "top top",
        end: "bottom bottom",
        scrub: 1.5,
      },
    });

    scrollTl
    // Rotate can group
      .to(groupRef.current.rotation, {y: Math.PI * 2})
  });

  return (
    <group ref={groupRef}>
      <group ref={can1GroupRef}>
        <FloatingCan
          ref={can1Ref}
          flavor="strawberryLemonade"
          speed={FLOAT_SPEED}
        />
      </group>
      <group ref={can2GroupRef}>
        <FloatingCan ref={can2Ref} flavor="lemonLime" speed={FLOAT_SPEED} />
      </group>
      <FloatingCan ref={can3Ref} flavor="grape" speed={FLOAT_SPEED} />
      <FloatingCan ref={can4Ref} flavor="watermelon" speed={FLOAT_SPEED} />
      <FloatingCan ref={can5Ref} flavor="blackCherry" speed={FLOAT_SPEED} />

      {/* <OrbitControls /> */}
      <Environment
        files={"/assets/imgs/hdr/lobby.hdr"}
        environmentIntensity={1.5}
      />
    </group>
  );
};

export default Scene;
