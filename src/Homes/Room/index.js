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
  display: none;
  top: 22px;
  right: 0;
  position: absolute;
  width: 32%;
  @media (min-width: 992px) {
    display: block;
  }
`;
const Border = styled.div`
  position: fixed;
  top: 0px;
  left: 0px;
  width: 100%;
  z-index: 5;
  background-color: #fff;
  border-bottom: 1px solid #dbdbdb;
`;
const stickyNav = ({ distanceFromTop }) => {
  if (distanceFromTop <= 0) {
    return (
      <Border>
        <Wrapper>
          <Nav hide={true} />
        </Wrapper>
      </Border>
    );
  } else {
    return (
      <div>
        <Nav />
      </div>
    );
  }
};
const stickyAside = ({ isSticky, style }) => {
  return (
    <div
      style={{
        ...style,
        top: isSticky ? 44 : 0
      }}
    >
      <StickyWrapper>
        <BookRequest />
      </StickyWrapper>
    </div>
  );
};

export default function(props) {
  return (
    <div>
      <Gallery />

      <Wrapper>
        <StickyContainer>
          <Sticky>{stickyAside}</Sticky>
          <Sticky>{stickyNav}</Sticky>
          <Overview />
          <Reviews />
        </StickyContainer>
        <Host />
        <Location />
        <Offers />
        <Explore />
      </Wrapper>

      <Footer />
    </div>
  );
}
