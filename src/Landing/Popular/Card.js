import React from "react";
import { Card, Img, Type, Title, Pricing } from "./Styled";

export default function(props) {
  return (
    <Card href="">
      <Img src={props.image} alt="Home" />
      <Type>{props.type}</Type>
      <Title>{props.title}</Title>
      <Pricing>About {props.pricing}$ per person</Pricing>
    </Card>
  );
}
