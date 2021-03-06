import React from "react";
import styled from "styled-components";
import MediaQuery from "react-responsive";

import { Footer, Cancel, Apply } from "../UI";
import plus from "../UI/counter-plus.svg";
import minus from "../UI/counter-minus.svg";

const Guests = styled.div`
  padding: 8px 15px;
`;

const Type = styled.div`
  margin-bottom: 10px;
  width: 294px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  &:last-child {
    margin-bottom: 0;
    padding-top: 8px;
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
  margin-top: 10px;
`;
const Plus = styled.button`
  padding: 5px;
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
  padding: 0 13px;
  width: 40px;
  text-align: center;
  font-family: CircularLight, "Helvetica Neue", Helvetica, sans-serif;
  line-height: 42px;
  font-size: 18px;
`;

export default class extends React.Component {
  decCount = type => {
    if (this.props.guests[type] > 0)
      this.props.onGuestsChange({
        guests: {
          ...this.props.guests,
          [type]: this.props.guests[type] - 1
        }
      });
  };

  incCount = type => {
    this.props.onGuestsChange({
      guests: {
        ...this.props.guests,
        [type]: this.props.guests[type] + 1
      }
    });
  };

  onCancel = () => {
    this.props.onGuestsChange({
      guests: { adults: 1, childrens: 0, infants: 0 }
    });

    this.onClose();
  };

  onClose = () => {
    this.props.onClose("Guests");
  };

  render() {
    return (
      <div>
        <Guests>
          <Type>
            <Title>Adults</Title>
            <Minus
              onClick={() => this.decCount("adults")}
              disabled={this.props.guests.adults <= 1}
            />
            <Counter>{this.props.guests.adults}</Counter>
            <Plus onClick={() => this.incCount("adults")} />
          </Type>
          <Type>
            <Title>
              Children<Subtitle>Ages 2 — 12</Subtitle>
            </Title>
            <Minus
              onClick={() => this.decCount("childrens")}
              disabled={this.props.guests.childrens <= 0}
            />
            <Counter>{this.props.guests.childrens}</Counter>
            <Plus onClick={() => this.incCount("childrens")} />
          </Type>
          <Type>
            <Title>
              Infants<Subtitle>Under 2</Subtitle>
            </Title>
            <Minus
              onClick={() => this.decCount("infants")}
              disabled={this.props.guests.infants <= 0}
            />
            <Counter>{this.props.guests.infants}</Counter>
            <Plus onClick={() => this.incCount("infants")} />
          </Type>
        </Guests>
        <MediaQuery minWidth={768}>
          <Footer>
            <Cancel onClick={this.onCancel}>Cancel</Cancel>
            <Apply onClick={this.onClose}>Apply</Apply>
          </Footer>
        </MediaQuery>
      </div>
    );
  }
}
