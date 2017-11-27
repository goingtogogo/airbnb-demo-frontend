import React from "react";
import styled from "styled-components";

import { List, Scroll } from "../../../Landing/Styled";
import { Title } from "../../UI/";
import Card from "./Card";
import similar1 from "../../UI/similar-1.png";
import similar2 from "../../UI/similar-2.png";
import similar3 from "../../UI/similar-3.png";

const Offers = styled.div`
  padding: 48px 0;
`;
export const CardWrap = styled.div`
  flex-basis: 64%;
  flex-grow: 0;
  flex-shrink: 0;
  margin-right: 16px;

  @media (min-width: 768px) {
    flex-basis: 40%;
    flex-grow: 0;
    flex-shrink: 0;
  }

  @media (min-width: 992px) {
    flex-basis: 32%;
    margin-right: 0;
  }
`;

export default function() {
  return (
    <Offers>
      <Title>Similar listings</Title>
      <List>
        <CardWrap>
          <Card
            title="Apartamento, piscina y parqueadero para 8 personas"
            image={similar1}
            price={50}
            type="Entire apartment"
            beds={3}
          />
        </CardWrap>
        <CardWrap>
          <Card
            title="Full apartment in the best area of the city"
            image={similar2}
            price={51}
            type="Entire apartment"
            beds={4}
          />
        </CardWrap>
        <CardWrap>
          <Card
            title="Beautiful Apartament North Armenia Quindio"
            image={similar3}
            price={45}
            type="Entire apartment"
            beds={4}
          />
        </CardWrap>
        <Scroll />
      </List>
    </Offers>
  );
}
