import React from "react";
import styled from "styled-components";

import PopUp from "./PopUp";

const Wrapper = styled.div`
  display: inline-block;
`;
const Button = styled.button`
  margin: 10px 10px 12px 0;
  padding: 7px 16px;
  border: 1px solid rgba(72, 72, 72, 0.2);
  border-radius: 4px;
  font-family: CircularBook, "Helvetica Neue", Helvetica, sans-serif;
  font-size: 14px;
  line-height: 16px;
  color: #383838;
  background-color: ${props => (props.isOpen ? "#008489" : "#fff")};
  color: ${props => (props.isOpen ? "#fff" : "#383838")};
  cursor: pointer;
`;

export default class extends React.Component {
  handleClick = () => {
    this.props.handleClick(this.props.type);
  };

  handleCancelClick = () => {
    this.props.handleCancel(this.props.type);
  };

  render() {
    return (
      <Wrapper>
        <Button isOpen={this.props.isOpen} onClick={this.handleClick}>
          {this.props.title}
        </Button>
        <PopUp
          isOpen={this.props.isOpen}
          onClose={this.handleClick}
          onCancel={this.handleCancelClick}
        >
          {this.props.children}
        </PopUp>
      </Wrapper>
    );
  }
}
