import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Price } from "../UI";
import Star from "../UI/Star";

const Card = styled(Link)`
  flex-direction: column;
  display: flex;
  flex-wrap: wrap;
  flex-grow: 0;
  flex-shrink: 0;
  text-decoration: none;
  justify-content: space-between;
  cursor: pointer;
  color: #383838;
`;

const Img = styled.img`
  width: 100%;
`;
const PriceInfo = styled.div`
  flex-basis: 100%;
  display: flex;
`;
const Title = styled.h3`
  margin: 8px 0px 0px 8px;
  font-family: CircularBold, "Helvetica Neue", Helvetica, sans-serif;
  font-size: 13px;
  line-height: 15px;
  @media (min-width: 768px) {
    font-size: 15px;
    line-height: 18px;
  }
`;

const Description = styled.div`
  flex-basis: 100%;
  display: flex;
`;
const Type = styled.span`
  font-family: CircularLight, "Helvetica Neue", Helvetica, sans-serif;
  font-size: 12px;
  line-height: 14px;
  margin-top: 2px;

  @media (min-width: 768px) {
    font-size: 15px;
    line-height: 18px;
  }
`;
const Amount = styled.span`
  margin: 2px 0px 0px 8px;
  font-family: CircularLight, "Helvetica Neue", Helvetica, sans-serif;
  font-size: 12px;
  line-height: 14px;

  @media (min-width: 768px) {
    font-size: 15px;
    line-height: 18px;
  }
`;

const Ratio = styled.div`
  display: flex;
  margin-top: 6px;
`;
const Reviews = styled.span`
  margin-top: 2px;
  margin-left: 8px;
  font-family: CircularBook, "Helvetica Neue", Helvetica, sans-serif;
  font-size: 12px;
  line-height: 14px;
`;
const Owner = styled.span`
  margin-top: 2px;
  margin-left: 4px;
  font-family: CircularBook, "Helvetica Neue", Helvetica, sans-serif;
  font-size: 12px;
  line-height: 14px;
`;

export default function(props) {
  return (
    <Card to="/homes/cabana">
      <Img src={props.image} alt="Home" />
      <PriceInfo>
        <Price>${props.price}</Price>
        <Title>{props.title}</Title>
      </PriceInfo>
      <Description>
        {/* <Type>{props.type}</Type> */}
        <Type>
          {`${props.type[0].toUpperCase()}${props.type
            .slice(1)
            .replace(/_/, " ")}`}
        </Type>
        <Amount>{props.beds} beds</Amount>
      </Description>
      <Ratio>
        <Star />
        <Star />
        <Star />
        <Star />
        <Star />
        <Reviews>{props.reviews}</Reviews>
        <Owner>{props.owner && "  ·  Superhost"}</Owner>
      </Ratio>
    </Card>
  );
}
