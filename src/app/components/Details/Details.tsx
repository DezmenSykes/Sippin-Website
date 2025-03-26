import React from "react";
import { Bounded } from "../Bounded";

const Details = () => {
  return (
    <Bounded className="details-container relative text-sky-950">
      <div className="grid relative">
        <div className="details-section grid h-screen place-items-center gap-x-12 md:grid-cols-2">
          <div className="col-start-1 md:col-start-2">
            <h2>Body-Friendly Freshness</h2>
            <p>
              Made with only the best natural ingredients, our soda is free from
              artificial sweeteners and flavors. It’s a crisp, clean taste that
              feels as good as it tastes, giving you a boost of real, natural
              refreshment.
            </p>
          </div>
        </div>
        <div className="details-section grid h-screen place-items-center gap-x-12 md:grid-cols-2">
          <div className="col-start-1 md:col-start-1">
            <h2>Light Calories, Big Flavor</h2>
            <p>
              Indulge in bold, refreshing taste without the guilt. At just 20
              calories per can, you can enjoy all the flavor you crave with none
              of the compromise.
            </p>
          </div>
        </div>
        <div className="details-section grid h-screen place-items-center gap-x-12 md:grid-cols-2">
          <div className="col-start-1 md:col-start-2">
            <h2>Naturally Refreshing</h2>
            <p>
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
