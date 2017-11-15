import React from "react";
import styled from "styled-components";

import { Wrapper } from "../UI";
import Header from "../Header";

import Filters from "./Filters";
import Content from "./Content";
import Map from "./Map";

const HomeWrapper = Wrapper.extend`
  position: relative;
  top: 56px;
  display: flex;
  justify-content: space-between;
`;

const FixedHeader = styled(Header)`
  position: fixed;
  top: 0;
  background-color: #fff;
  z-index: 2;
`;

export default function() {
  return (
    <div>
      <FixedHeader />
      <Filters />
      <HomeWrapper>
        <Content />
        <Map />
      </HomeWrapper>
    </div>
  );
}
