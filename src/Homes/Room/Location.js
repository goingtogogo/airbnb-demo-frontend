import React from "react";
import styled from "styled-components";
import ReactMap from "google-map-react";

import { Title, ReadMore } from "../UI/";

const Wrapper = styled.div`
  margin-bottom: 16px;
  width: 100%;
  @media (min-width: 992px) {
    width: 66%;
  }
`;
const MapWrapper = styled.div`
  width: 100%;
  height: 192px;
  @media (min-width: 768px) {
    height: 474px;
  }
  @media (min-width: 992px) {
    height: 612px;
  }
`;

const Description = styled.p`
  margin-top: 10px;
  margin-bottom: 16px;
  color: #383838;
  font-family: CircularLight, "Helvetica Neue", Helvetica, sans-serif;
  line-height: 21px;
  font-size: 18px;
`;

export default function() {
  return (
    <div>
      <Wrapper>
        <Title>The neighborhood</Title>
        <Description>
          Yudy &amp; Victoria’s home is located in Armenia, Quindio, Colombia..
        </Description>
        <Description>
          We are situated in the heart of the coffee region in the Andean
          mountains in Colombia. We are in "Vereda La Pradera" neighborhood,
          near the small town of "El Caimo", 20 minutes from Armenia and 20
          minutes from the airport, by car. Close enough for comfort and easy
          access, far enough from the hustle of traffic and city noise that you
          can commune with nature. Sleep to the sound of the crickets and awaken
          to the sound of birds.
        </Description>
        <ReadMore>Read more about neighborhood</ReadMore>
      </Wrapper>
      <MapWrapper>
        <ReactMap
          apiKey={process.env.REACT_APP_GOOGLE_API_KEY}
          center={[4.53388, -75.68111]}
          zoom={12}
        />
      </MapWrapper>
      <Description>
        Exact location information is provided after a booking is confirmed.
      </Description>
    </div>
  );
}
