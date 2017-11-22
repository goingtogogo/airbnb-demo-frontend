import React from "react";
import styled from "styled-components";

import entire from "../UI/entire.svg";
import privat from "../UI/privat.svg";
import shared from "../UI/shared.svg";
import check from "../UI/check.svg";

const Room = styled.div`
  padding: 4px 16px;
`;

const Type = styled.div`
  margin-bottom: 16px;
  width: 294px;
  display: flex;
  justify-content: flex-start;

  &:last-child {
    margin-bottom: 0;
  }
`;
const Checkbox = styled.div`
  position: relative;
  width: 24px;
  height: 24px;
  border: 1px solid rgba(72, 72, 72, 0.3);
  border-radius: 4px;
  background-color: #fff;
  cursor: pointer;
  &:after {
    position: absolute;
    content: " ";
    width: 26px;
    height: 26px;
    background-image: url(${check});
    background-repeat: no-repeat;
    backroung-size: 60%;
    visibility: ${props => (props.isChecked ? "visible" : "hidden")};
  }
`;
const Title = styled.h3`
  flex-basis: 68%;
  margin: 0 30px 4px 12px;
  display: flex;
  flex-direction: column;
  font-family: CircularLight, "Helvetica Neue", Helvetica, sans-serif;
  line-height: 19px;
  font-size: 16px;
  color: #383838;
`;
const Subtitle = styled.span`
  line-height: 14px;
  font-size: 12px;
  margin-top: 6px;
`;
const Icon = styled.img`
  width: 32px;
  height: auto;
`;

export default class extends React.Component {
  state = {
    rooms: []
  };
  handleCheck = check => {
    if ([...this.state.rooms].filter(x => x === check).length > 0) {
      this.setState({ rooms: [...this.state.rooms].filter(x => x !== check) });
    } else {
      this.setState({ rooms: [...this.state.rooms, check] });
    }
  };
  render() {
    return (
      <Room>
        <Type>
          <Checkbox
            isChecked={this.state.rooms.includes("entire")}
            onClick={() => this.handleCheck("entire")}
          />
          <Title>
            Entire home<Subtitle>Have a place to yourself</Subtitle>
          </Title>
          <Icon src={entire} />
        </Type>
        <Type>
          <Checkbox
            isChecked={this.state.rooms.includes("privat")}
            onClick={() => this.handleCheck("privat")}
          />
          <Title>
            Private room<Subtitle>
              Have your own room and share some common spaces
            </Subtitle>
          </Title>
          <Icon src={privat} />
        </Type>
        <Type>
          <Checkbox
            isChecked={this.state.rooms.includes("shared")}
            onClick={() => this.handleCheck("shared")}
          />
          <Title>
            Shared room<Subtitle>
              Stay in a shared space, like a common room
            </Subtitle>
          </Title>
          <Icon src={shared} />
        </Type>
      </Room>
    );
  }
}
