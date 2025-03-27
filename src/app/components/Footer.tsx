'use client'
import React, { useRef } from "react";
import SippinLogo from "./SippinLogo";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP)


const Footer = () => {

  const logoRef = useRef(null)
  useGSAP(()=>{
   const tl =  gsap.timeline();
   
   tl.to('.logo', {
    x: "+=5",         // Move right
    duration: 0.5,
    repeat: 200,        // Shake 5 times
                yoyo: true,       // Go back and forth
                ease: "sine.inOut",
                }, 0)
                .to('.logo', {
                  x: 0,
      delay:0.45
    })
  })

  return (
    <footer className="bg-[#fee832] text-[#fe6334] pt-[10rem] pb-[2rem] flex justify-center">
      <div className="relative">
        <SippinLogo  className="logo"/>
      </div>
    </footer>
  );
};

export default Footer;
