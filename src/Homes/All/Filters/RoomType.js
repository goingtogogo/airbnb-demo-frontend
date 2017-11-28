import React from "react";
import styled from "styled-components";

import { Footer, Cancel, Apply } from "../../UI";
import entire from "../../UI/entire.svg";
import separate from "../../UI/separate.svg";
import shared from "../../UI/shared.svg";
import check from "../../UI/check.svg";

const Room = styled.div`
  padding: 4px 16px;
`;

const Type = styled.div`
  padding: 6px;
  margin-bottom: 10px;
  width: 294px;
  display: flex;
  justify-content: flex-start;
  cursor: pointer;

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
  handleCheck = check => {
    if (this.props.rooms.filter(x => x === check).length > 0) {
      this.props.onRoomsChange({
        rooms: this.props.rooms.filter(x => x !== check)
      });
    } else {
      this.props.onRoomsChange({ rooms: [...this.props.rooms, check] });
    }
  };

  onCancel = () => {
    this.props.onRoomsChange({
      rooms: []
    });

    this.onClose();
  };

  onClose = () => {
    this.props.onClose("Room type");
  };

  render() {
    return (
      <div>
        <Room>
          <Type
            onClick={() => this.handleCheck("entire")}
            onKeyPress={() => this.handleCheck("entire")}
            tabIndex="0"
          >
            <Checkbox
              isChecked={
                this.props.rooms.includes("entire") && this.props.isOpen
              }
            />
            <Title>
              Entire home<Subtitle>Have a place to yourself</Subtitle>
            </Title>
            <Icon src={entire} />
          </Type>
          <Type
            onClick={() => this.handleCheck("separate")}
            onKeyPress={() => this.handleCheck("separate")}
            tabIndex="0"
          >
            <Checkbox
              isChecked={
                this.props.rooms.includes("separate") && this.props.isOpen
              }
            />
            <Title>
              Private room<Subtitle>
                Have your own room and share some common spaces
              </Subtitle>
            </Title>
            <Icon src={separate} />
          </Type>
          <Type
            onClick={() => this.handleCheck("shared")}
            onKeyPress={() => this.handleCheck("shared")}
            tabIndex="0"
          >
            <Checkbox
              isChecked={
                this.props.rooms.includes("shared") && this.props.isOpen
              }
            />
            <Title>
              Shared room<Subtitle>
                Stay in a shared space, like a common room
              </Subtitle>
            </Title>
            <Icon src={shared} />
          </Type>
        </Room>
        <Footer>
          <Cancel onClick={this.onCancel}>Cancel</Cancel>
          <Apply onClick={this.onClose}>Apply</Apply>
        </Footer>
      </div>
    );
  }
}
