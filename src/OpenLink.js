import React from "react";
import styled from "styled-components";
import arrowright from "./assets/arrow-right.png";

const OpenLink = styled.a`
  text-decoration: none;
  font-size: 14px;
  line-height: 24px;
  font-family: CircularBook, "Helvetica Neue", Helvetica, sans-serif;
  color: #383838;

  &: after {
    margin-left: 8px;
    width: 6px;
    height: 10px;
    display: inline-block;
    vertical-align: baseline;
    content: "";
    background-image: url(${arrowright});
    background-repeat: no-repeat;
    background-size: cover;
  }
`;

export default function(props) {
  return <OpenLink href="">See all</OpenLink>;
}
