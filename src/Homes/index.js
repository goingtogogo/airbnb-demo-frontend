import React from "react";

import { Wrapper } from "../UI";

import Filters from "./Filters";
import Content from "./Content";
import Map from "./Map";

const HomeWrapper = Wrapper.extend`
  position: relative;
  top: 133px;
  display: flex;
  justify-content: space-between;
`;

export default function() {
  return (
    <div>
      <Filters />
      <HomeWrapper>
        <Content />
        <Map />
      </HomeWrapper>
    </div>
  );
}
