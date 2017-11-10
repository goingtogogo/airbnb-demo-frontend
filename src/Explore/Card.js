import React from "react";
import styled from "styled-components";

const Card = styled.div`
  flex-basis: 31.5%;
  border: 1px solid rgba(72, 72, 72, 0.2);
  border-radius: 4px;
  box-shadow: 0px 0px 2px rgba(72, 72, 72, 0.08);
  text-decoration: none;
  display: flex;
  align-items: center;
  cursor: pointer;
  @media (max-width: 768px) {
    flex-basis: 40.42553%;
    margin-right: 16px;
    flex-grow: 0;
    flex-shrink: 0;
  }
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
export default function(props) {
  return (
    <Card href="">
      <Img src={props.image} alt="Home" />
      <Title>{props.title}</Title>
    </Card>
  );
}
