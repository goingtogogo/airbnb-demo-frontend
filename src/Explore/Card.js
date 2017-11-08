import React from "react";
import styled from "styled-components";

const Card = styled.li`
  flex-basis: 31.50406%;
  display: flex;
  border: 1px solid rgba(72, 72, 72, 0.2);
  border-radius: 4px;
  box-shadow: 0px 0px 2px rgba(72, 72, 72, 0.08);
`;

const Img = styled.img`
  width: 96px;
  height: 100%;
  border-bottom-left-radius: 4px;
  border-top-left-radius: 4px;
`;
const Title = styled.h3`
  margin-left: 24px;
  font-family: CircularBold, "Helvetica Neue", Helvetica, sans-serif;
  font-size: 17px;
  line-height: 20px;
  color: #383838;
`;
const Link = styled.a`
  text-decoration: none;
  display: flex;
  align-items: center;
  cursor: pointer;
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
