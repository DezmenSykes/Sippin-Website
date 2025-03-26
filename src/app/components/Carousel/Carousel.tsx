"use client";

import { Center, Environment, View } from "@react-three/drei";
import { Bounded } from "../Bounded";
import { SodaCanProps } from "../SodaCan";
import FloatingCan from "../FloatingCan";
import { DirectionalLight } from "three";
import { useState } from "react";
import { ArrowIcon } from "./ArrowIcon";
import clsx from "clsx";

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
        <ArrowBtn
          onClick={() => changeFlavor(currentFlavorIndex - 1)}
          direction="left"
          label="Previous Flavor"
        />
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
        <ArrowBtn
          onClick={() => changeFlavor(currentFlavorIndex + 1)}
          direction="right"
          label="Next Flavor"
        />
      </div>
      <div className="text-area relative mx-auto text-center">
        <div className="text-wrapper text-4xl font-medium">
          <p>{FLAVORS[currentFlavorIndex].name}</p>
        </div>
        <div className="mt-2 text-2xl font-normal opacity-90">
          <p>12 cans - $25.99</p>
        </div>
      </div>
    </section>
  );
};

export default Carousel;

type ArrowBtnProps = {
  direction?: "right" | "left";
  label: string;
  onClick: () => void;
};

const ArrowBtn = ({ label, onClick, direction = "right" }: ArrowBtnProps) => {
  return (
    <button onClick={onClick} className="z-30 size-12 rounded-full border-2 border-white bg-white/10 p-3 opacity-85 ring-white focus:outline-none focus-visible:opacity-100 focus-visible:ring-4 md:size-16 lg:size-20">
      <ArrowIcon className={clsx(direction === 'right' && '-scale-x-100')} />
      <span className="sr-only">{label}</span>
    </button>
  );
};
