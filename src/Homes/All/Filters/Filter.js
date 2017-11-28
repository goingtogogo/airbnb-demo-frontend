import React from "react";
import styled from "styled-components";

import MediaQuery from "react-responsive";
// import PopUp from "./PopUp";

import close from "../../UI/close.svg";

const Filter = styled.div`
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

const PopUp = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0px;
  left: 0;
  visibility: ${props => (props.isOpen ? "visible" : "hidden")};
  z-index: 2;
  flex-direction: column;
  padding: 0;
  background-color: #fff;
  font-family: CircularBook, "Helvetica Neue", Helvetica, sans-serif;
  color: #383838;
  @media (min-width: 768px) {
    margin: 0 auto;
    padding-top: 18px;
    top: 132px;
    left: auto;
    display: block;
    width: auto;
    height: auto;
    box-shadow: 0 14px 36px 2px rgba(0, 0, 0, 0.15);
    border: 1px solid rgba(0, 0, 0, 0.2);
    border-radius: 4px;
  }
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 16px 8px 20px 8px;
`;

const Close = styled.button`
  width: 16px;
  height: 16px;
  border: none;
  background-color: #fff;
  background-image: url(${close});
  background-repeat: no-repeat;
  background-size: cover;
  cursor: pointer;
`;

const Reset = styled.button`
  font-size: 14px;
  font-family: CircularBook, "Helvetica Neue", Helvetica, sans-serif;
  color: #0f7276;
  border: none;
  background-color: inherit;
  cursor: pointer;
`;

const Content = styled.div`
  font-size: 14px;
  line-height: 16px;
`;

export default class extends React.Component {
  handleClick = () => {
    this.props.handleClick(this.props.type);
  };

  render() {
    return (
      <Filter>
        <Button isOpen={this.props.isOpen} onClick={this.handleClick}>
          {this.props.title}
        </Button>
        <PopUp isOpen={this.props.isOpen}>
          <MediaQuery maxWidth={767}>
            <Header>
              <Close onClick={this.props.onClose} />
              <Reset onClick={this.props.onClose}>Reset</Reset>
            </Header>
          </MediaQuery>
          <Content>{this.props.children}</Content>
        </PopUp>
      </Filter>
    );
  }
}
