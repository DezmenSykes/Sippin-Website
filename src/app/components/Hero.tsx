"use client";
import React from "react";
import { Bounded } from "./Bounded";
import Link from "next/link";
import Image from "next/image";
import Button from "./Button";
import { TextSplitter } from "./TextSplitter";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import FloatingCan from "./FloatingCan";
import Scene from "./Scene";
import { View } from "@react-three/drei";

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  useGSAP(() => {
    const introTl = gsap.timeline();

    introTl
      .set(".hero", { opacity: 1 })
      .from(".hero-header-word", {
        scale: 3,
        opacity: 0,
        ease: "power4.in",
        delay: 0.3,
        stagger: 0.5,
      })
      .from(
        ".hero-subheading",
        {
          opacity: 0,
          y: 30,
        },
        "+=.8"
      )
      .from(".hero-body", {
        opacity: 0,
        y: 10,
      })
      .from(".hero-btn", {
        opacity: 0,
        y: 10,
        duration: 0.6,
      });

    const scrollTl = gsap.timeline({
      scrollTrigger: {
        trigger: ".hero",
        start: "top top",
        end: "bottom bottom",
        scrub: 1.5,
      },
    });

    scrollTl
      .fromTo(
        "body",
        {
          backgroundColor: "#fde047",
        },
        {
          backgroundColor: "#d9f99d",
          overwrite: "auto",
        },
        1
      )
      .from(".text-side-heading .split-char", {
        scale: 1.3,
        y: 40,
        rotate: -25,
        opacity: 0,
        stagger: 0.1,
        ease: "back.out(3)",
        duration: 0.5,
      })
      .from(".text-side-body", {
        y: 20,
        opacity: 0,
      });
  });

  return (
    <Bounded className="hero red-border opacity-0">
      <View className="hero-scene pointer-events-none sticky top-0 z-50 -mt-[100vh] hidden h-screen w-screen md:block">
        <Scene />
      </View>
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
            <h2 className="text-side-heading text-balance text-6xl font-black uppercase text-sky-950 lg:text-8xl">
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
