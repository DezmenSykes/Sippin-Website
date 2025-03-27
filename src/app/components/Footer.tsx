'use client'
import React from "react";
import SippinLogo from "./SippinLogo";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP)


const Footer = () => {

  useGSAP(()=>{

  })

  return (
    <footer className="bg-[#fee832] text-[#fe6334] pt-[10rem] pb-[2rem] flex justify-center">
      <div className="relative">
        <SippinLogo />
      </div>
    </footer>
  );
};

export default Footer;
