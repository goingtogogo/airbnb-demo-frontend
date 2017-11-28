import React from "react";
import styled from "styled-components";

import { Footer, Cancel, Apply } from "../../UI";
import switcher from "../../UI/switcher.svg";
import switched from "../../UI/switched.svg";

const Instant = styled.div`
  padding: 0px 16px;
  display: flex;
  justify-content: space-between;
  width: 294px;
`;
const Title = styled.h3`
  flex-basis: 70%;
  margin-top: 4px;
  display: flex;
  flex-direction: column;
  font-family: CircularBook, "Helvetica Neue", Helvetica, sans-serif;
  line-height: 21px;
  font-size: 18px;
  color: #383838;
`;

const Subtitle = styled.span`
  margin-top: 7px;
  font-family: CircularLight, "Helvetica Neue", Helvetica, sans-serif;
  line-height: 17px;
  font-size: 14px;
`;

const Label = styled.label`
  cursor: pointer;
  align-self: center;
  display: flex;
  justify-content: strecth;
  width: 64px;
  height: 40px;
`;

const Switcher = styled.input`
  position: absolute;
  height: 1px;
  width: 1px;
  visibility: hidden;
`;

const Off = styled.img`
  display: block;
  ${Switcher}:checked ~ & {
    display: none;
  }
`;
const On = styled.img`
  display: none;
  ${Switcher}:checked ~ & {
    display: block;
  }
`;

export default class extends React.Component {
  onSwitch = switcher => {
    this.props.onInstantChange({ instant: !this.props.instant });
  };
  onCancel = () => {
    this.props.onInstantChange({
      instant: false
    });

    this.onClose();
  };

  onClose = () => {
    this.props.onClose("Instant book");
  };
  render() {
    return (
      <div>
        <Instant>
          <Title>
            Instant Book
            <Subtitle>
              Listings you can book without waiting for host approval.
            </Subtitle>
          </Title>
          <Label>
            <Switcher
              type="checkbox"
              onClick={this.onSwitch}
              checked={this.props.instant}
            />
            <Off src={switcher} />
            <On src={switched} />
          </Label>
        </Instant>
        <Footer>
          <Cancel onClick={this.onCancel}>Cancel</Cancel>
          <Apply onClick={this.onClose}>Apply</Apply>
        </Footer>
      </div>
    );
  }
}
