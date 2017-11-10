import React from "react";
import { Price } from "../Styled";
import { Card, Img, PriceInfo, Title, Ratio, Reviews } from "./Styled";
import Star from "../Star";

export default function(props) {
  return (
    <Card href="">
      <Img src={props.image} alt="Home" />
      <PriceInfo>
        <Price>${props.price}</Price>
        <Title>{props.title}</Title>
      </PriceInfo>
      <Ratio>
        <Star />
        <Star />
        <Star />
        <Star />
        <Star />
        <Reviews>{props.reviews} reviews</Reviews>
      </Ratio>
    </Card>
  );
}
