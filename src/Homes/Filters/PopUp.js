import React from "react";
import styled from "styled-components";
import MediaQuery from "react-responsive";

import close from "../UI/close.svg";

const Wrapper = styled.div`
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

const Cancel = styled.button`
  padding: 16px;
  font-family: CircularBook, "Helvetica Neue", Helvetica, sans-serif;
  color: #636363;
  background-color: transparent;
  border: none;
  cursor: pointer;
`;
const Apply = styled.button`
  padding: 16px;
  font-family: CircularBook, "Helvetica Neue", Helvetica, sans-serif;
  color: #0f7276;
  background-color: transparent;
  border: none;
  cursor: pointer;
`;
const Footer = styled.footer`
  padding: 0 10px;
  padding-bottom: 16px;
  display: flex;
  justify-content: space-between;
  font-size: 16px;
  line-height: 19px;
`;
const Content = styled.div`
  font-size: 14px;
  line-height: 16px;
`;

export default class extends React.Component {
  render() {
    return (
      <Wrapper isOpen={this.props.isOpen}>
        <MediaQuery maxWidth={767}>
          <Header>
            <Close onClick={this.props.toClose} />
            <Reset onClick={this.props.toClose}>Reset</Reset>
          </Header>
        </MediaQuery>
        <Content>{this.props.children}</Content>
        <MediaQuery minWidth={768}>
          <Footer>
            <Cancel onClick={this.props.toCancel}>Cancel</Cancel>
            <Apply onClick={this.props.toClose}>Apply</Apply>
          </Footer>
        </MediaQuery>
      </Wrapper>
    );
  }
}
