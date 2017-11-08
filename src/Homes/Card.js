import React from "react";
import { Price } from "../Styled";
import Star from "../Star";
import {
  Card,
  Link,
  Img,
  PriceInfo,
  Title,
  Description,
  Type,
  Amount,
  Ratio,
  Review
} from "./Styled";

export default function(props) {
  return (
    <Card>
      <Link href="">
        <Img src={props.image} alt="Home" />
        <PriceInfo>
          <Price>{props.price}</Price>
          <Title>{props.title}</Title>
        </PriceInfo>
        <Description>
          <Type>{props.type}</Type>
          <Amount>{props.amount}</Amount>
        </Description>
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
