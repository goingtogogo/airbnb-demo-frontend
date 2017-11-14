import React from "react";
import { Price } from "../../UI";
import Star from "../../UI/Star";
import { Card, Img, PriceInfo, Title, Ratio, Reviews } from "./Styled";

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
