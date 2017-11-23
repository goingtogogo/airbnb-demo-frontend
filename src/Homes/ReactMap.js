import React from "react";
import styled from "styled-components";

import ReactMap from "google-map-react";

const Wrapper = styled.div`
  display: none;
  position: fixed;
  width: 38%;
  height: 79.5vh;
  top: 133px;
  left: 24vw;
  margin-left: 520px;

  @media (min-width: 992px) {
    display: block;
  }
`;
export default function() {
  return (
    <Wrapper>
      <ReactMap
        apiKey={process.env.REACT_APP_GOOGLE_API_KEY}
        center={[48.20849, 16.37208]}
        zoom={3}
      />
    </Wrapper>
  );
}
