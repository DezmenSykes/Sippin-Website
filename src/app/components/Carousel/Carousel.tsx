"use client";

import { Center, Environment, View } from "@react-three/drei";
import { Bounded } from "../Bounded";
import { SodaCanProps } from "../SodaCan";
import FloatingCan from "../FloatingCan";
import { DirectionalLight } from "three";
import { useState } from "react";

const FLAVORS: {
  flavor: SodaCanProps["flavor"];
  color: string;
  name: string;
}[] = [
  { flavor: "blackCherry", color: "#710523", name: "Black Cherry" },
  { flavor: "grape", color: "#572981", name: "Grape Goodness" },
  { flavor: "lemonLime", color: "#164405", name: "Lemon Lime" },
  {
    flavor: "strawberryLemonade",
    color: "#690B3D",
    name: "Strawberry Lemonade",
  },
  { flavor: "watermelon", color: "#4B7002", name: "Watermelon Crush" },
];

const Carousel = () => {
  const [currentFlavorIndex, setCurrentFlavorIndex] = useState(0);

  function changeFlavor(index: number) {
    const nextIndex = (index + FLAVORS.length) % FLAVORS.length;
    setCurrentFlavorIndex(nextIndex);
  }

  return (
    <section className="carousel relative grid h-screen grid-rows-[auto,4fr,auto] justify-center overflow-hidden bg-white py-12 text-white">
      <div className="background pointer-events-none absolute inset-0 bg-[#710523] opacity-50" />
      <h2 className="relative text-center text-5xl font-bold">
        Choose Your Flavor
      </h2>
      <div className="grid grid-cols-[auto,auto,auto] items-center">
        {/* Left */}
        <button
          onClick={() => changeFlavor(currentFlavorIndex - 1)}
          className="z-20"
        >
          Left
        </button>
        {/* Can */}
        <View className="aspect-square h-[70vmin] min-h-40">
          <Center position={[0, 0, 1.5]}>
            <FloatingCan
              flavor={FLAVORS[currentFlavorIndex].flavor}
              floatIntensity={0.3}
              rotateIntensity={1}
            />
          </Center>
          <Environment
            files={"/assets/imgs/hdr/lobby.hdr"}
            environmentIntensity={0.6}
            environmentRotation={[0, 3, 0]}
          />
          <directionalLight intensity={6} position={[0, 1, 1]} />
        </View>
        {/* Right */}
        <button
          onClick={() => changeFlavor(currentFlavorIndex + 1)}
          className="z-20"
        >
          Right
        </button>
      </div>
    </section>
  );
};

export default Carousel;
