import React from "react";
import { Card, Link, Img, Type, Title, Pricing } from "./Styled";

export default function(props) {
  return (
    <Card>
      <Link href="">
        <Img src={props.image} alt="Home" />
        <Type>{props.type}</Type>
        <Title>{props.title}</Title>
        <Pricing>About {props.pricing}$ per person</Pricing>
      </Link>
    </Card>
  );
}
