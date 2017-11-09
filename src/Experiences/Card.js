import React from "react";
import { Price } from "../Styled";
import { Card, Img, Link, PriceInfo, Title, Ratio, Review } from "./Styled";
import Star from "../Star";

export default function(props) {
  return (
    <Card>
      <Link href="">
        <Img src={props.image} alt="Home" />
        <PriceInfo>
          <Price>{props.price}</Price>
          <Title>{props.title}</Title>
        </PriceInfo>
        <Ratio>
          <Star />
          <Star />
          <Star />
          <Star />
          <Star />
          <Review>{props.review}</Review>
        </Ratio>
      </Link>
    </Card>
  );
}
