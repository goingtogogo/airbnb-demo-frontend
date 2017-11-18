import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  padding: 0 8px;
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
        <Content>{this.props.children}</Content>
        <Footer>
          <Cancel onClick={this.props.toClose}>Cancel</Cancel>
          <Apply onClick={this.props.toClose}>Apply</Apply>
        </Footer>
      </Wrapper>
    );
  }
}
