import React from "react";
import styled from "styled-components";

import ReactMap from "google-map-react";

const Wrapper = styled.div`
  display: none;
  position: fixed;
  width: 36%;
  height: 82vh;
  top: 133px;
  left: calc((100% - 962px + 16px) / 2);
  margin-left: calc((992px / 3) * 2);

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
