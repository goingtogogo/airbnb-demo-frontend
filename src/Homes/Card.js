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
  Reviews,
  Owner
} from "./Styled";

export default function(props) {
  var amount = props.amount + " bed";
  if (props.amount > 1) {
    amount += "s";
  }
  return (
    <Card>
      <Link href="">
        <Img src={props.image} alt="Home" />
        <PriceInfo>
          <Price>{props.price}$ </Price>
          <Title>{props.title}</Title>
        </PriceInfo>
        <Description>
          <Type>{props.type}</Type>
          <Amount>{amount}</Amount>
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
      </Link>
    </Card>
  );
}
