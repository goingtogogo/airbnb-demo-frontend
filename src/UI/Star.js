import React from "react";
import styled from "styled-components";
import star from "./assets/star.png";

const Star = styled.div`
  width: 12px;
  height: 13px;
  margin-right: 4px;
  background-image: url(${star});
  background-repeat: no-repeat;
  background-size: cover;
`;

export default function(props) {
  return <Star />;
}
