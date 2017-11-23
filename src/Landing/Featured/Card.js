import React from "react";
import styled from "styled-components";

const Card = styled.a`
  flex-basis: 30%;
  margin-right: 16px;
  flex-grow: 0;
  flex-shrink: 0;
  text-decoration: none;
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  cursor: pointer;

  @media (min-width: 768px) {
    flex-basis: 23.4%;
  }
  @media (min-width: 992px) {
    flex-basis: 15%;
    margin-right: 0;
  }
`;

const Img = styled.img`
  width: 100%;
  height: auto;
`;

const Title = styled.h3`
  flex-basis: 100%;
  font-family: CircularBold, "Helvetica Neue", Helvetica, sans-serif;
  font-size: 12px;
  line-height: 14px;
  color: #383838;
  margin-top: 8px;

  @media (min-width: 768px) {
    font-size: 15px;
    line-height: 18px;
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
