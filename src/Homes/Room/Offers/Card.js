import React from "react";
import styled from "styled-components";
import Ratio from "../Reviews/Ratio";

import like from "../../UI/like.svg";

const Card = styled.a`
  position: relative;
  margin-top: 8px;
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

const Like = styled.button`
  top: 10px;
  right: 5px;
  position: absolute;
  width: 31px;
  height: 27px;
  background-color: transparent;
  background-image: url(${like});
  background-repeat: no-repeat;
  background-size: 100%;
  border: none;
  cursor: pointer;
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
      <Like />
    </Card>
  );
}
