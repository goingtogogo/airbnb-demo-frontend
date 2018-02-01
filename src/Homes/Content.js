import React from "react";
import styled from "styled-components";
import Card from "./Card";
import Pagination from "./Pagination";

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
              type={home.kind}
              beds={home.bedsCount}
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
