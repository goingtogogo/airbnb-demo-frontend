import React from "react";
import styled from "styled-components";

import PopUp from "./PopUp";

const Wrapper = styled.span``;
const Button = styled.button`
  margin: 16px 12px 14px 0;
  padding: 6px 16px;
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
  state = {
    isOpen: false
  };
  handleClick = () => {
    this.setState(prevState => ({ isOpen: !prevState.isOpen }));
  };

  render() {
    return (
      <Wrapper>
        <Button onClick={this.handleClick} isOpen={this.state.isOpen}>
          {this.props.title}
        </Button>
        <PopUp isOpen={this.state.isOpen} toClose={this.handleClick}>
          {this.props.children}
        </PopUp>
      </Wrapper>
    );
  }
}
