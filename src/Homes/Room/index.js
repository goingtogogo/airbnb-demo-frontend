import React from "react";
import { Wrapper } from "../../UI";

import Gallery from "./Gallery";
import Overview from "./Overview";
import Reviews from "./Reviews";
import Host from "./Host";
import Location from "./Location";
import Offers from "./Offers";
import Explore from "./Explore";
import Footer from "../../Footer/";

export default function() {
  return (
    <div>
      <Gallery />
      <Wrapper>
        <Overview />
        <Reviews />
        <Host />
        <Location />
        <Offers />
        <Explore />
      </Wrapper>
      <Footer />
    </div>
  );
}
