import React from "react";
import styled from "styled-components";

import Map from "google-map-react";

const MapWrapper = styled.div`
  display: none;
  position: fixed;
  width: 34%;
  height: 82vh;
  top: 133px;
  right: 0;
  margin-left: 50vw;

  @media (min-width: 992px) {
    display: block;
  }
`;
export default function() {
  return (
    <MapWrapper>
      <Map
        apiKey="AIzaSyAL_dDT6ijw1aFLBZqHWjfaCwBwjl526Gc"
        center={[48.20849, 16.37208]}
        zoom={3}
      />
    </MapWrapper>
  );
}
