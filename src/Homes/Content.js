import React from "react";
import styled from "styled-components";
import "whatwg-fetch";
import Card from "./Card";
import Pagination from "./Pagination";

import home1 from "./home-1.png";
import home2 from "./home-2.png";
import home3 from "./home-3.png";
import home4 from "./home-4.png";
import home5 from "./home-5.png";
import home6 from "./home-6.png";
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
  &:last-child {
    margin-bottom: 64px;
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

export default class Cards extends React.Component {
  state = { homes: [] };

  componentWillMount() {
    fetch("https://airbnb-demo-api.now.sh/v1/homes")
      .then(response => response.json())
      .then(homes => {
        console.log("Данные получены");
        this.setState({ homes: homes.items });
      })
      .catch(() => {
        console.log("Произошла ошибка!");
      });
  }

  render() {
    return (
      <Content>
        {this.state.homes.map(home => (
          <CardWrap key={home.id}>
            <Card
              title={home.name}
              image={home.images[0].picture}
              price={home.price}
              type={`${home.kind[0].toUpperCase()}${home.kind
                .slice(1)
                .replace(/_/, " ")}`}
              beds={home.guestsCount}
              reviews={home.reviewsCount}
              owner={home.isSuperhost}
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
}
