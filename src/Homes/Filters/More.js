import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: inline-block;
`;

const More = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: -1;
  top: 0px;
  left: 0;
  visibility: ${props => (props.isOpen ? "visible" : "hidden")};
  flex-direction: column;
  padding: 0;
  background-color: #fff;
  font-family: CircularBook, "Helvetica Neue", Helvetica, sans-serif;
  color: #383838;
  @media (min-width: 768px) {
    border-top: 1px solid rgba(0, 0, 0, 0.15);
    margin: 0 auto;
    padding-top: 18px;
    height: 500px;
    max-height: 900px;
    width: 658px;
    left: 192px;
    top: 54px;
    overflow-y: scroll;
  }
`;
// const Cancel = styled.button`
//   padding: 16px;КНОПКИ ДЕЛАЕМ ТЕПЕРЬ ОПППА
//   font-family: CircularBook, "Helvetica Neue", Helvetica, sans-serif;
//   color: #636363;
//   background-color: transparent;
//   border: none;
//   cursor: pointer;
// `;
// const Apply = styled.button`
//   padding: 16px;
//   font-family: CircularBook, "Helvetica Neue", Helvetica, sans-serif;
//   color: #0f7276;
//   background-color: transparent;
//   border: none;
//   cursor: pointer;
// `;
// const Footer = styled.footer`
//   padding: 0 10px;
//   padding-bottom: 16px;
//   display: flex;
//   justify-content: space-between;
//   font-size: 16px;
//   line-height: 19px;
// `;
const Content = styled.div`
  font-size: 14px;
  line-height: 16px;
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
        <More
          isOpen={this.props.isOpen}
          toClose={this.handleClick}
          toCancel={this.handleCancelClick}
        >
          <Content>{this.props.children}</Content>
          {/* <Footer>
          <Cancel onClick={this.props.toCancel}>Cancel</Cancel>
          <Apply onClick={this.props.toClose}>Apply</Apply>
        </Footer> */}
        </More>
      </Wrapper>
    );
  }
}
