import React from "react";
import styled from "styled-components";

import plus from "../UI/counter-plus.svg";
import minus from "../UI/counter-minus.svg";

const Guests = styled.div`padding: 10px 14px;`;

const Type = styled.div`
  margin-bottom: 10px;
  width: 294px;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  &:last-child {
    margin-bottom: 0;
  }
`;
const Title = styled.h3`
  flex-basis: 82%;
  margin: 0 42px 4px 12px;
  display: flex;
  flex-direction: column;
  font-family: CircularBook, "Helvetica Neue", Helvetica, sans-serif;
  line-height: 23px;
  font-size: 20px;
  color: #383838;
`;
const Subtitle = styled.span`
  font-family: CircularLight, "Helvetica Neue", Helvetica, sans-serif;
  line-height: 19px;
  font-size: 16px;
  margin-top: 8px;
`;
const Plus = styled.button`
  align-self: center;
  width: 48px;
  height: 32px;
  border: none;
  background-color: transparent;
  background-image: url(${plus});
  background-repeat: no-repeat;
  background-size: 100%;
`;
const Minus = styled.button`
  padding-top: 5px;
  align-self: center;
  width: 48px;
  height: 32px;
  border: none;
  background-color: transparent;
  background-image: url(${minus});
  background-repeat: no-repeat;
  background-size: 100%;
`;

const Counter = styled.span`
  padding: 0 10px;
  align-self: center;
  width: 40px;
  text-align: center;
  font-family: CircularLight, "Helvetica Neue", Helvetica, sans-serif;
  line-height: 42px;
  font-size: 18px;
`;

export default class extends React.Component {
  state = { count: 0 };
  onClick() {
    this.setState({ count: this.state.count + 1 });
  }
  render() {
    return (
      <Guests>
        <Type>
          <Title>Adults</Title>
          <Minus onClick={this.onClick.bind(this)} />
          <Counter>{this.state.count}</Counter>
          <Plus />
        </Type>
        <Type>
          <Title>
            Children<Subtitle>Ages 2 — 12</Subtitle>
          </Title>
          <Minus />
          <Counter>{this.state.count}</Counter>
          <Plus />
        </Type>
        <Type>
          <Title>
            Infants<Subtitle>Under 2</Subtitle>
          </Title>
          <Minus />
          <Counter>{this.state.count}</Counter>
          <Plus />
        </Type>
      </Guests>
    );
  }
}
