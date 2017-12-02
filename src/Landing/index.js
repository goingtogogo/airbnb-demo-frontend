import React from "react";
import { Wrapper } from "../UI";
import Explore from "./Explore/";
import Experiences from "./Experiences/";
import Homes from "./Homes/";
import Popular from "./Popular/";
import Featured from "./Featured/";
import Footer from "../Footer";

export default function() {
  return (
    <div>
      <Wrapper>
        <Explore />
        <Experiences />
        <Homes />
        <Popular />
        <Featured />
      </Wrapper>
      <Footer />
    </div>
  );
}
