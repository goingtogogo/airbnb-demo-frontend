import React from "react";
import styled from "styled-components";

import plus from "../UI/counter-plus.svg";
import minus from "../UI/counter-minus.svg";

const Guests = styled.div`
  padding: 10px 14px;
`;

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
  padding: 5px;
  align-self: center;
  width: 48px;
  height: 32px;
  border: none;
  background-color: transparent;
  background-image: url(${plus});
  background-repeat: no-repeat;
  background-size: 100%;
  cursor: pointer;
`;
const Minus = styled.button`
  padding: 5px;
  align-self: center;
  width: 48px;
  height: 32px;
  border: none;
  background-color: transparent;
  background-image: url(${minus});
  background-repeat: no-repeat;
  background-size: 100%;
  cursor: pointer;
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
  decCount = index => {
    if (this.props.guests[index] > 0)
      this.props.onGuestsChange({
        guests: Object.values({
          ...this.props.guests,
          [index]: this.props.guests[index] - 1
        })
      });
  };

  incCount = index => {
    this.props.onGuestsChange({
      guests: Object.values({
        ...this.props.guests,
        [index]: this.props.guests[index] + 1
      })
    });
  };

  render() {
    return (
      <Guests>
        <Type>
          <Title>Adults</Title>
          <Minus onClick={() => this.decCount(0)} />
          <Counter>{this.props.guests[0]}</Counter>
          <Plus onClick={() => this.incCount(0)} />
        </Type>
        <Type>
          <Title>
            Children<Subtitle>Ages 2 — 12</Subtitle>
          </Title>
          <Minus onClick={() => this.decCount(1)} />
          <Counter>{this.props.guests[1]}</Counter>
          <Plus onClick={() => this.incCount(1)} />
        </Type>
        <Type>
          <Title>
            Infants<Subtitle>Under 2</Subtitle>
          </Title>
          <Minus onClick={() => this.decCount(2)} />
          <Counter>{this.props.guests[2]}</Counter>
          <Plus onClick={() => this.incCount(2)} />
        </Type>
      </Guests>
    );
  }
}
