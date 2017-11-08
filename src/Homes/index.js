import React from "react";
import home1 from "./home-1.png";
import home2 from "./home-2.png";
import home3 from "./home-3.png";
import styled from "styled-components";
import { Preview, List, Scroll } from "../Styled";
import Card from "./Card";
import OpenLink from "../OpenLink";

export const SectionTitle = styled.h2`
  margin-top: 68px;
  font-family: CircularBold, "Helvetica Neue", Helvetica, sans-serif;
  font-size: 32px;
  line-height: 34px;
  color: #383838;
`;

export default function() {
  return (
    <section>
      <Preview>
        <SectionTitle>Homes</SectionTitle>
        <OpenLink />
      </Preview>
      <List>
        <Card
          title="La Salentina, see, nature, relax"
          image={home1}
          price="82$"
          type="Entire house"
          amount="9 beds"
          review="91 Superhost"
        />
        <Card
          title="Your private 3 bedr. riad exclusiv.."
          image={home2}
          price="82$"
          type="Entire house"
          amount="5 beds"
          review="161 Superhost"
        />
        <Card
          title="Dreamy Tropical Tree House"
          image={home3}
          price="200$"
          type="Entire treehouse"
          amount="1 bed"
          review="364 Superhost"
        />
        <Scroll />
      </List>
    </section>
  );
}
