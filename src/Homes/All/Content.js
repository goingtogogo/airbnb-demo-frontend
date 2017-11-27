import React from "react";
import styled from "styled-components";
import Card from "./Card";
import Pagination from "./Pagination";

import home1 from "./home-1.png";
import home2 from "./home-2.png";
import home3 from "./home-3.png";
import home4 from "./home-4.png";
import home5 from "./home-5.png";
import home6 from "./home-6.png";
import pin from "../UI/pin.svg";

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

const cards = [
  {
    title: "La Salentina, see, nature & relax",
    image: home1,
    price: 82,
    type: "Entire house",
    reviews: 91,
    amount: 9,
    owner: "Superhost"
  },
  {
    title: "Your private 3 bedr. riad and exclusi…",
    image: home2,
    price: 82,
    type: "Entire house",
    reviews: 5,
    amount: 161,
    owner: "Superhost"
  },
  {
    title: "Dreamy Tropical Tree House",
    image: home3,
    price: 200,
    type: "Entire house",
    reviews: 364,
    amount: 1,
    owner: "Superhost"
  },
  {
    title: "Best location old town luxury loft",
    image: home4,
    price: 110,
    type: "Entire apartmant",
    reviews: 369,
    amount: 1,
    owner: "Superhost"
  },
  {
    title: "Lussuoso. Vista incantevole.",
    image: home5,
    price: 83,
    type: "Entire apartment",
    reviews: 105,
    amount: 6,
    owner: "Superhost"
  },
  {
    title: "In the historical center of Lecce",
    image: home6,
    price: 72,
    type: "Entire apartment",
    reviews: 221,
    amount: 3,
    owner: "Superhost"
  }
];

export default function() {
  return (
    <Content>
      {cards.map((item, index) => (
        <CardWrap>
          <Card
            key={index}
            title={item.title}
            image={item.image}
            price={item.price}
            type={item.type}
            beds={item.beds}
            reviews={item.reviews}
            owner={item.owner}
          />
        </CardWrap>
      ))}
      <Pagination />
      <Pin />
      <Hint>
        Enter dates to see full pricing. Additional fees apply. Taxes may be
        added.
      </Hint>
    </Content>
  );
}
