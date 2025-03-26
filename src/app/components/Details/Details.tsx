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
      </div>
    </Bounded>
  );
};

export default Details;
