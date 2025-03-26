"use client";

import { View } from "@react-three/drei";
import { Bounded } from "../Bounded";
import { SodaCanProps } from "../SodaCan";

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
  return (
    <section className="carousel relative grid h-screen grid-rows-[auto,4fr,auto] justify-center overflow-hidden bg-white py-12 text-white">
      <div className="background pointer-events-none absolute inset-0 bg-[#710523] opacity-50" />
      <h2 className="relative text-center text-5xl font-bold">
        Choose Your Flavor
      </h2>
      <div className="grid grid-cols-[auto,auto,auto] items-center">
        {/* Left */}
        {/* Can */}
        {/* Right */}
      </div>
    </section>
  );
};

export default Carousel;
