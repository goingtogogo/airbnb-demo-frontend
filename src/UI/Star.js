import React from "react";
import styled from "styled-components";
import star from "./assets/star.png";

const Star = styled.div.attrs({
  width: props => props.width || "12px",
  height: props => props.height || "13px"
})`
  margin-right: 4px;
  background-image: url(${star});
  background-repeat: no-repeat;
  background-size: cover;
  width: ${props => props.width};
  height: ${props => props.height};
`;

export default function(props) {
  return <Star width={props.width} heigh={props.height} />;
}
