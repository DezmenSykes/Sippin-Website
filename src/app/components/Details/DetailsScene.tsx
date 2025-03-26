"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

import { Environment } from "@react-three/drei";
import FloatingCan from "../FloatingCan";
import { useRef } from "react";
import { Group } from "three";
import { useMediaQuery } from "@/hooks/useMediaQuery";

gsap.registerPlugin(useGSAP);

const DetailsScene = () => {
  const canRef = useRef<Group>(null);
  const isDesktop = useMediaQuery("(min-width: 768px)", true);

  const bgColors = ["#ffa6b5", "#e9cff6", "#cbef9a"];

  useGSAP(() => {
    if (!canRef.current) return;

    const sections = gsap.utils.toArray(".details-section");

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".details-view",
        markers: true,
        endTrigger: ".details-container",
        pin: true,
        start: "top top",
        end: "bottom bottom",
        scrub: true,
      },
    });

    sections.forEach((_, index) => {
      if (!canRef.current) return;
      if (index === 0) return;

      const isOdd = index % 2 !== 0;

      tl.to(canRef.current.position, {
        x: isOdd ? "0.58" : "-0.58",
        ease: "circ.inOut",
        delay: 0.5,
      })

        .to(
          canRef.current.rotation,
          {
            z: isOdd ? "0.33" : "-0.33",
            y: isOdd ? Math.PI * 2 * -1 : Math.PI * 2 * 1,
            ease: "back.inOut",
          },
          "<"
        )
        .to(".details-container", {
          backgroundColor: gsap.utils.wrap(bgColors, index),
        });
    });
  });

  return (
    <>
      {isDesktop && (
        <group ref={canRef} position-x={-0.58}>
          <FloatingCan flavor="strawberryLemonade" />
          <Environment
            files={"/assets/imgs/hdr/lobby.hdr"}
            environmentIntensity={1.5}
          />
        </group>
      )}
    </>
  );
};

export default DetailsScene;
