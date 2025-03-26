"use client";
import React from "react";
import { Bounded } from "../Bounded";
import { View } from "@react-three/drei";
import DetailsScene from "./DetailsScene";

const Details = () => {
  return (
    <Bounded className="details-container relative text-sky-950">
      <div className="grid relative">
        <View className="details-text-view absolute left-0 top-0 h-screen w-full">
          <DetailsScene />
        </View>
        <div className="details-section grid h-screen place-items-center gap-x-12 md:grid-cols-2">
          <div className="col-start-1 md:col-start-2">
            <h2 className="text-balance text-6xl font-bold">
              Body-Friendly Freshness
            </h2>
            <p className="text-xl mt-4">
              Made with only the best natural ingredients, our soda is free from
              artificial sweeteners and flavors. It’s a crisp, clean taste that
              feels as good as it tastes, giving you a boost of real, natural
              refreshment.
            </p>
          </div>
        </div>
        <div className="details-section grid h-screen place-items-center gap-x-12 md:grid-cols-2">
          <div className="col-start-1 md:col-start-1">
            <h2 className="text-balance text-6xl font-bold">
              Light Calories, Big Flavor
            </h2>
            <p className="text-xl mt-4">
              Indulge in bold, refreshing taste without the guilt. At just 20
              calories per can, you can enjoy all the flavor you crave with none
              of the compromise.
            </p>
          </div>
        </div>
        <div className="details-section grid h-screen place-items-center gap-x-12 md:grid-cols-2">
          <div className="col-start-1 md:col-start-2">
            <h2 className="text-balance text-6xl font-bold">
              Naturally Refreshing
            </h2>
            <p className="text-xl mt-4">
              Our soda is packed with prebiotics and 1 billion probiotics,
              giving your gut the love it deserves. Say goodbye to bloating and
              hello to a happy, healthy digestive system with every sip.
            </p>
          </div>
        </div>
      </div>
    </Bounded>
  );
};

export default Details;
