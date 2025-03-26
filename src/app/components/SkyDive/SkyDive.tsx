"use client";
import React from "react";
import { Bounded } from "../Bounded";
import SkyDiveScene from "./SkyDiveScene";
import { View } from "@react-three/drei";

const SkyDive = () => {
  return (
    <Bounded className="skydive h-screen">
      <h2 className="sr-only">lol</h2>
      <View className="h-screen w-screen">
        <SkyDiveScene flavor="blackCherry" sentence="Fuel The Wild!" />
      </View>
    </Bounded>
  );
};

export default SkyDive;
