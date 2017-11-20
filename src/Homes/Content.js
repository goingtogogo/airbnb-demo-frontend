import React from "react";
import styled from "styled-components";
import Card from "./Card";
import Pagination from "./Pagination";

import home1 from "./UI/home-1.png";
import home2 from "./UI/home-2.png";
import home3 from "./UI/home-3.png";
import home4 from "./UI/home-4.png";
import home5 from "./UI/home-5.png";
import home6 from "./UI/home-6.png";
import pin from "./UI/pin.svg";

const Content = styled.div`
  margin-top: 24px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;

  @media (min-width: 992px) {
    width: 66%;
  }
`;
const Hint = styled.p`
  margin: 39px auto;
  margin-bottom: 59px;
  width: 90%;
  font-family: CircularBook, "Helvetica Neue", Helvetica, sans-serif;
  font-size: 16px;
  line-height: 19px;
  text-align: center;
  color: #636363;

  @media (min-width: 992px) {
    margin-bottom: 25px;
    width: 85%;
  }
`;
const CardWrap = styled.div`
  flex-basis: 100%;
  margin-bottom: 40px;

  @media (min-width: 768px) {
    flex-basis: 49%;
  }
  @media (min-width: 992px) {
    flex-basis: 48%;
  }
`;
const Pin = styled.a`
  width: 40px;
  height: 40px;
  position: fixed;
  bottom: 5%;
  right: 8px;
  background-image: url(${pin});
  background-repeat: no-repeat;
  background-size: cover;
  cursor: pointer;
  @media (min-width: 992px) {
    display: none;
  }
`;

export default function(props) {
  return (
    <Content>
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
          title="Your private 3 bedr. riad and exclusi…"
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
          type="Entire house"
          amount={1}
          reviews={364}
          owner="Superhost"
        />
      </CardWrap>
      <CardWrap>
        <Card
          title="Best location old town luxury loft"
          image={home4}
          price={110}
          type="Entire apartment"
          amount={1}
          reviews={369}
          owner="Superhost"
        />
      </CardWrap>
      <CardWrap>
        <Card
          title="Lussuoso. Vista incantevole."
          image={home5}
          price={83}
          type="Entire apartment"
          amount={6}
          reviews={105}
          owner="Superhost"
        />
      </CardWrap>
      <CardWrap>
        <Card
          title="In the historical center of Lecce"
          image={home6}
          price={72}
          type="Entire apartment"
          amount={3}
          reviews={221}
          owner="Superhost"
        />
      </CardWrap>
      <Pagination />
      <Pin />
      <Hint>
        Enter dates to see full pricing. Additional fees apply. Taxes may be
        added.
      </Hint>
    </Content>
  );
}
