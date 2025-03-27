'use client'
import React, { useRef } from "react";
import SippinLogo from "./SippinLogo";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP)


const Footer = () => {

  const logoRef = useRef(null)
  useGSAP(()=>{
   const tl =  gsap.timeline({
    repeat: -1
   });
   
   tl.to('.logo', {
    y: "+=10", 
    transformOrigin: 'center',       // Move right
    duration: 1,       // Shake 5 times       // Go back and forth
    ease: "bounce.out",
    }, 0)
    .to('.logo', {
      y: 0,
      delay:0.7
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
