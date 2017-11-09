import React from "react";
import { Price } from "../Styled";
import { Card, Img, Link, PriceInfo, Title, Ratio, Reviews } from "./Styled";
import Star from "../Star";

export default function(props) {
  var reviews = props.reviews + " review";
  if (props.reviews > 1) {
    reviews += "s";
  }

  return (
    <Card>
      <Link href="">
        <Img src={props.image} alt="Home" />
        <PriceInfo>
          <Price>{props.price}$</Price>
          <Title>{props.title}</Title>
        </PriceInfo>
        <Ratio>
          <Star />
          <Star />
          <Star />
          <Star />
          <Star />
          <Reviews>{reviews}</Reviews>
        </Ratio>
      </Link>
    </Card>
  );
}
