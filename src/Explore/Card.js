import React from "react";
import styled from "styled-components";

const Card = styled.a`
  flex-basis: 31.5%;
  border: 1px solid rgba(72, 72, 72, 0.2);
  border-radius: 4px;
  box-shadow: 0px 0px 2px rgba(72, 72, 72, 0.08);
  text-decoration: none;
  display: flex;
  align-items: center;
  cursor: pointer;
  @media (max-width: 991px) {
    flex-basis: 40.4%;
    margin-right: 16px;
    flex-grow: 0;
    flex-shrink: 0;
  }
  @media (max-width: 576px) {
    flex-basis: 46.8%;
    flex-direction: column;
    align-items: flex-start;
  }
`;

const Img = styled.img`
  width: 96px;
  height: 100%;
  border-bottom-left-radius: 4px;
  border-top-left-radius: 4px;
  @media (max-width: 576px) {
    width: 100%;
    height: auto;
    border-top-right-radius: 4px;
    border-bottom-left-radius: 0px;
  }
`;
const Title = styled.h3`
  margin-left: 24px;
  font-family: CircularBold, "Helvetica Neue", Helvetica, sans-serif;
  font-size: 17px;
  line-height: 20px;
  color: #383838;
  @media (max-width: 576px) {
    font-size: 12px;
    line-height: 14px;
    margin-left: 12px;
  }
`;
export default function(props) {
  return (
    <Card href="">
      <Img src={props.image} alt="Home" />
      <Title>{props.title}</Title>
    </Card>
  );
}
