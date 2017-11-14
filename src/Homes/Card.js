import React from "react";
import { Price } from "../UI";
import Star from "../UI/Star";
import {
  Card,
  Img,
  PriceInfo,
  Title,
  Description,
  Type,
  Amount,
  Ratio,
  Reviews,
  Owner
} from "./Styled";

export default function(props) {
  return (
    <Card href="">
      <Img src={props.image} alt="Home" />
      <PriceInfo>
        <Price>${props.price}</Price>
        <Title>{props.title}</Title>
      </PriceInfo>
      <Description>
        <Type>{props.type}</Type>
        <Amount>{props.amount} beds</Amount>
      </Description>
      <Ratio>
        <Star />
        <Star />
        <Star />
        <Star />
        <Star />
        <Reviews>{props.reviews}</Reviews>
        <Owner>&#183; {props.owner}</Owner>
      </Ratio>
    </Card>
  );
}
