"use client";
import React from "react";
import { Bounded } from "./Bounded";
import Link from "next/link";
import Image from "next/image";
import Button from "./Button";
import { TextSplitter } from "./TextSplitter";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

const Hero = () => {
  useGSAP(() => {
    const introTl = gsap.timeline();

    introTl.set(".hero", { opacity: 1 }).from(".hero-header-word", {
      scale: 3,
      opacity: 0,
      ease: "power4.in",
      delay: 0.3,
      stagger: 0.5,
    });
  });

  return (
    <Bounded className="hero opacity-0">
      <div className="grid">
        <div className="grid h-screen place-items-center">
          <div className="grid auto-rows-min place-items-center text-center">
            <h1 className="hero-header lg:text-[13rem] text-7xl font-black uppercase leading-[.8] text-orange-500 md:text-[9rem]">
              <TextSplitter
                wordDisplayStyle="block"
                className="hero-header-word"
                text={"Stay Bubbly"}
              />
            </h1>
            <div className="hero-subheading mt-12 text-5xl font-semibold text-sky-950 lg:text-6xl">
              <h1>Crafted Fizz</h1>
            </div>
            <h1 className="hero-body text-2xl font-normal text-sky-950">
              3-5g sugar. 9g fiber. 5 delicious flavors
            </h1>
            <Button
              className="mt-12 hero-btn"
              btnText="Shop Now"
              btnLink="https://sykescreatives.net"
              isRedirect={true}
            />
          </div>
        </div>
        <div className="grid text-side relative z-[80] h-screen items-center gap-4 md:grid-cols-2">
          <div>
            <Image
              className="md:hidden w-full"
              src="/next.svg"
              alt=""
              width={300}
              height={300}
            />
            <h2 className="text-side-heading text-balance text-6xl font-black uppercase lg:text-8xl text-sky-950">
              <TextSplitter text={"Try all five flavors"} />
            </h2>
            <div className="text-side-body mt-4 max-w-xl text-balance- text-xl font-normal text-sky-950">
              <h1>
                Dive into a rainbow of bold, bubbly possibilities. From zesty
                citrus twists to wild berry bursts, each sparkling sip is
                crafted to fuel your free-spirited side—no sugar crashes, just
                pure, vibrant flavor. Why pick one? Life’s too spontaneous to
                settle. Your taste buds deserve the adventure.
              </h1>
            </div>
          </div>
        </div>
      </div>
    </Bounded>
  );
};

export default Hero;
