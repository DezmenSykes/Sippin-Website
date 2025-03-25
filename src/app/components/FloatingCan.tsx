"use client";
import { Float } from "@react-three/drei";
import { ReactNode, forwardRef } from "react";
import { SodaCan, SodaCanProps } from "./SodaCan";
import { Group } from "three/examples/jsm/libs/tween.module.js";

type FloatingCanProps = {
  range?: [number, number];
  flavor?: SodaCanProps["flavor"];
  speed?: number;
  rotateIntensity?: number;
  floatIntensity?: number;
  children?: ReactNode;
};

const FloatingCan = forwardRef<Group, FloatingCanProps>(
  (
    {
      range = [-0.1, 0.1],
      flavor = "blackCherry",
      speed = 1.5,
      rotateIntensity = 1,
      floatIntensity = 1,
      children,
      ...props
    },
    ref
  ) => {
    return (
      <group ref={ref} {...props}>
        <Float
          floatingRange={range}
          floatIntensity={floatIntensity}
          rotationIntensity={rotateIntensity}
          speed={speed}
        >
          {children}
          <SodaCan flavor={flavor} />
        </Float>
      </group>
    );
  }
);

FloatingCan.displayName = "FloatingCan";

export default FloatingCan;
