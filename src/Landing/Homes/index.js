import React from "react";
import styled from "styled-components";
import { Preview, List, Scroll, SeeAll } from "../Styled";
import Card from "../../Homes/All/Card";
import home1 from "../../Homes/All/home-1.png";
import home2 from "../../Homes/All/home-2.png";
import home3 from "../../Homes/All/home-3.png";

export const SectionTitle = styled.h2`
  margin-top: 68px;
  font-family: CircularBold, "Helvetica Neue", Helvetica, sans-serif;
  font-size: 24px;
  line-height: 28px;
  color: #383838;
  @media (min-width: 768px) {
    font-size: 32px;
    line-height: 34px;
  }
`;
export const CardWrap = styled.div`
  flex-basis: 64%;
  flex-grow: 0;
  flex-shrink: 0;
  margin-right: 16px;

  @media (min-width: 768px) {
    flex-basis: 40%;
    flex-grow: 0;
    flex-shrink: 0;
  }

  @media (min-width: 992px) {
    flex-basis: 32%;
    margin-right: 0;
  }
`;

export default function() {
  return (
    <section>
      <Preview>
        <SectionTitle>Homes</SectionTitle>
        <SeeAll to="/homes">See all</SeeAll>
      </Preview>
      <List>
        <CardWrap>
          <Card
            title="La Salentina, see, nature, relax"
            image={home1}
            price={82}
            type="Entire house"
            amount={9}
            reviews={91}
            owner="Superhost"
          />
        </CardWrap>
        <CardWrap>
          <Card
            title="Your private 3 bedr. riad exclusiv.."
            image={home2}
            price={82}
            type="Entire house"
            amount={5}
            reviews={161}
            owner="Superhost"
          />
        </CardWrap>
        <CardWrap>
          <Card
            title="Dreamy Tropical Tree House"
            image={home3}
            price={200}
            type="Entire treehouse"
            amount={1}
            reviews={364}
            owner="Superhost"
          />
        </CardWrap>
        <Scroll />
      </List>
    </section>
  );
}
