import React from "react";
import styled from "styled-components";
import Ratio from "../Reviews/Ratio";

const Card = styled.a`
  display: flex;
  flex-wrap: wrap;
  flex-grow: 0;
  flex-shrink: 0;
  text-decoration: none;
  justify-content: space-between;
  cursor: pointer;
  color: #383838;
  @media (min-width: 768px) {
    margin-right: 0;
  }
`;

const Img = styled.img`
  width: 100%;
  height: auto;
`;
const Info = styled.div`
  flex-basis: 100%;
  display: flex;
  color: #8d1f13;
  font-family: CircularBold, "Helvetica Neue", Helvetica, sans-serif;
  margin-top: 10px;
  font-size: 10px;
  line-height: 12px;
  text-transform: uppercase;
`;
const Price = styled.div`
  flex-basis: 100%;
  font-family: CircularLight, "Helvetica Neue", Helvetica, sans-serif;
  font-size: 15px;
  line-height: 18px;
`;
const RoomType = styled.div`
  margin-right: 2px;
`;
const Beds = styled.div`
  margin-left: 2px;
`;
const Title = styled.h3`
  margin: 2px 0;
  font-family: CircularBold, "Helvetica Neue", Helvetica, sans-serif;
  font-size: 13px;
  line-height: 15px;

  @media (min-width: 768px) {
    font-size: 15px;
    line-height: 18px;
  }
`;

export default function(props) {
  return (
    <Card href="/homes/cabana">
      <Img src={props.image} alt="Home" />
      <Info>
        <RoomType>{props.type}</RoomType> ·
        <Beds>{props.beds} beds</Beds>
      </Info>
      <Title>{props.title}</Title>
      <Price>${props.price} per night</Price>
      <Ratio />
    </Card>
  );
}
