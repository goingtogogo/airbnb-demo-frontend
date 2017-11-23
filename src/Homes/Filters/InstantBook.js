import React from "react";
import styled from "styled-components";

import switcher from "../UI/switcher.svg";
import switched from "../UI/switched.svg";

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
const Switcher = styled.button`
  align-self: center;
  width: 64px;
  height: 40px;
  border: none;
  background-color: transparent;
  background-image: url(${props => (props.switcher ? switched : switcher)});
  background-repeat: no-repeat;
  background-size: 100%;
`;
export default class extends React.Component {
  onSwitch = switcher => {
    this.props.onInstantChange(!this.props.instant);
  };

  render() {
    return (
      <Instant>
        <Title>
          Instant Book
          <Subtitle>
            Listings you can book without waiting for host approval.
          </Subtitle>
        </Title>
        <Switcher switcher={this.props.instant} onClick={this.onSwitch} />
      </Instant>
    );
  }
}
