import React from "react";
import { Wrapper } from "../../UI";
import { StickyContainer, Sticky } from "react-sticky";

import styled from "styled-components";

import Nav from "./Nav";
import Gallery from "./Gallery";
import BookRequest from "./BookRequest";
import Overview from "./Overview";
import Reviews from "./Reviews/";
import Host from "./Host";
import Location from "./Location";
import Offers from "./Offers/";
import Explore from "./Explore";
import Footer from "../../Footer/";

const StickyWrapper = styled.div`
  top: 24px;
  right: 0;
  position: absolute;
  width: 31%;
`;

function stickBookRequest({ isSticky, style }) {
  return (
    <div
      style={{
        ...style
      }}
    >
      <StickyWrapper>
        <BookRequest />
      </StickyWrapper>
    </div>
  );
}
export default function() {
  return (
    <div>
      <Gallery />
      <Wrapper>
        <StickyContainer>
          <Sticky>{stickBookRequest}</Sticky>
          <Nav />
          <Overview />
          <Reviews />
          <Host />
        </StickyContainer>
        <Location />
        <Offers />
        <Explore />
      </Wrapper>
      <Footer />
    </div>
  );
}
