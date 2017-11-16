import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Card = styled(Link)`
  flex-basis: 46.7%;
  flex-grow: 0;
  flex-shrink: 0;
  margin-right: 16px;
  border: 1px solid rgba(72, 72, 72, 0.2);
  border-radius: 4px;
  box-shadow: 0px 0px 2px rgba(72, 72, 72, 0.08);
  text-decoration: none;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  cursor: pointer;
  @media (min-width: 768px) {
    flex-basis: 40%;
    flex-direction: row;
    align-items: center;
  }
  @media (min-width: 992px) {
    flex-basis: 31.5%;
    margin-right: 0;
  }
`;

const Img = styled.img`
  width: 100%;
  height: auto;
  border-top-right-radius: 4px;
  border-bottom-left-radius: 0px;
  @media (min-width: 768px) {
    width: 96px;
    height: 100%;
    border-bottom-left-radius: 4px;
    border-top-right-radius: 0px;
  }
`;
const Title = styled.h3`
  font-family: CircularBold, "Helvetica Neue", Helvetica, sans-serif;
  font-size: 12px;
  line-height: 14px;
  margin-left: 12px;
  color: #383838;
  @media (min-width: 768px) {
    margin-left: 24px;
    font-size: 17px;
    line-height: 20px;
  }
`;
export default function(props) {
  return (
    <Card to={props.to}>
      <Img src={props.image} alt="Home" />
      <Title>{props.title}</Title>
    </Card>
  );
}
