import React from "react";
import styled from "styled-components";

const Card = styled.div`
  flex-basis: 14.93902%;
  display: flex;
`;

const Img = styled.img`
  width: 100%;
  height: auto;
`;
const Link = styled.a`
  text-decoration: none;
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  cursor: pointer;
`;
const Title = styled.h3`
  flex-basis: 100%;
  font-family: CircularBold, "Helvetica Neue", Helvetica, sans-serif;
  font-size: 15px;
  line-height: 18px;
  color: #383838;
  margin-top: 8px;
`;

export default function(props) {
  return (
    <Card>
      <Link href="">
        <Img src={props.image} alt="Home" />
        <Title>{props.title}</Title>
      </Link>
    </Card>
  );
}
