import React from "react";
import { Wrapper } from "../../UI";
import { StickyContainer, Sticky } from "react-sticky";

import styled from "styled-components";

import Nav from "./Nav";
import Gallery from "./Gallery";
import BookRequest from "./BookRequest";
import Overview from "./Overview/";
import Reviews from "./Reviews/";
import Host from "./Host/";
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
const Border = styled.div`
  position: fixed;
  top: 0px;
  left: 0px;
  width: 100%;
  z-index: 1;
`;

function stickBookRequest({ isSticky, style }) {
  return (
    <div
      style={{
        ...style,
        distanceFromTop: isSticky ? 200 : 0
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
      <StickyContainer>
        <Sticky>{stickBookRequest}</Sticky>
        <Sticky>
          {({ distanceFromTop }) => {
            if (distanceFromTop <= 0) {
              return (
                <Border>
                  <Nav hide={true} />
                </Border>
              );
            } else {
              return (
                <div>
                  <Nav hide={false} />
                </div>
              );
            }
          }}
        </Sticky>
      </StickyContainer>
      <Wrapper>
        {/* <Nav /> */}
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
