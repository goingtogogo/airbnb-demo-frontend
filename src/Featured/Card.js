import React from "react";
import styled from "styled-components";

const Card = styled.a`
  flex-basis: 15%;
  text-decoration: none;
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  cursor: pointer;
  @media (max-width: 991px) {
    flex-basis: 23.4%;
    margin-right: 16px;
    flex-grow: 0;
    flex-shrink: 0;
  }
  @media (max-width: 576px) {
    flex-basis: 29.6%;
  }
`;

const Img = styled.img`
  width: 100%;
  height: auto;
`;

const Title = styled.h3`
  flex-basis: 100%;
  font-family: CircularBold, "Helvetica Neue", Helvetica, sans-serif;
  font-size: 15px;
  line-height: 18px;
  color: #383838;
  margin-top: 8px;
  @media (max-width: 576px) {
    font-size: 12px;
    line-height: 14px;
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
