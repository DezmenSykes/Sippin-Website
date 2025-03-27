import React from "react";
import { Bounded } from "../Bounded";

const BigText = () => {
  return (
    <section className="md:min-h-screen w-screen overflow-hidden bg-[#fe6334] text-[#fee832]">
      <h2 className="grid w-full gap-3vw py-10 text-center font-black uppercase leading-[.75]">
        <div className="text-[34vw]">Soda</div>
        <div className="grid gap-[3vw] text-[34vw] md:flex md:text-[11vw] text-center">
          <span className="inline-block max:md:text-[25vw]">that </span>
          <span className="inline-block max-md:text-[25vw]">makes </span>
          <span className="inline-block max-md:text-[44vw]">you </span>
        </div>
        <div className="text-[32vw]">Smile</div>
      </h2>
    </section>
  );
};

export default BigText;
