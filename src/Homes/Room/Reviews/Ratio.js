//fix

import React from "react";
import styled from "styled-components";
import Star from "../../../UI/Star";

const Ratio = styled.div`
  padding-top: 8px;
  display: flex;
  align-items: baseline;
`;

export default function(props) {
  return (
    <Ratio>
      <Star width="16px" height="16px" />
      <Star width="16px" height="16px" />
      <Star width="16px" height="16px" />
      <Star width="16px" height="16px" />
      <Star width="16px" height="16px" />
    </Ratio>
  );
}
