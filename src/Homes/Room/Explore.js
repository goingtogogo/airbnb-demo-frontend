import React from "react";
import styled from "styled-components";

import { Title } from "../UI/";

const Wrapper = styled.div`
  width: 100%;
  font-family: CircularLight, "Helvetica Neue", Helvetica, sans-serif;
  font-size: 14px;
  line-height: 16px;
  padding-top: 16px;
  margin-bottom: 48px;
  display: flex;
  justify-content: space-between;
`;

const Places = styled.div`
  font-family: CircularLight, "Helvetica Neue", Helvetica, sans-serif;
  font-size: 18px;
  line-height: 21px;
  color: #383838;
`;
const Place = styled.a`
  margin-left: 6px;
  display: inline-block;
  font-family: CircularLight, "Helvetica Neue", Helvetica, sans-serif;
  font-size: 16px;
  line-height: 28px;
  color: #636363;
  cursor: pointer;
`;

const MorePlaces = styled.div`
  flex-basis: 33%;
  margin-left: 28px;
  &:last-shild {
    margin-left: 0;
  }
`;

const Link = styled.a`
  display: block;
  margin-bottom: 4px;
  color: #636363;
  cursor: pointer;
`;

export default function() {
  return (
    <div>
      <Title>Explore other options in and around Armenia</Title>
      <Places>
        More places to stay in Armenia:
        <Place>Apartments</Place> ·
        <Place>Houses</Place> ·
        <Place>Beds &amp; Breakfasts</Place> ·
        <Place>Lofts</Place>·
        <Place>Villas</Place>
      </Places>
      <Wrapper>
        <MorePlaces>
          <Link>Cartagena Vacation Rentals</Link>
          <Link>Bucaramanga</Link>
          <br />
          <Link>Manuel Antonio</Link>
          <Link>Cartagena De Indias (Distrito Turistico Y Cultural)</Link>
          <Link>Quito</Link>
          <Link>Santander de Quilichao</Link>
        </MorePlaces>
        <MorePlaces>
          <Link>San Andrés Vacation Rentals</Link>
          <Link>Bogota</Link>
          <Link>
            Santa Marta (Distrito Turistico Cultural E<br /> Historico)
          </Link>
          <Link>Rionegro</Link>
          <Link>Anapoima</Link>
          <Link>Puerto Rico</Link>
        </MorePlaces>
        <MorePlaces>
          <Link>Willemstad Vacation Rentals</Link>
          <Link>Cali</Link>
          <Link>Chia</Link>
          <Link>Ibague</Link>
          <Link>Medellin</Link>
          <Link>Tabio</Link>
        </MorePlaces>
      </Wrapper>
    </div>
  );
}
