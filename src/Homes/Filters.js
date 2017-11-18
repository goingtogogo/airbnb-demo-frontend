import React from "react";
import styled from "styled-components";

import Filter from "./Filter";

const Filters = styled.div`
  position: fixed;
  top: 76px;
  z-index: 1;
  background-color: #fff;
  width: 100%;
  box-shadow: rgba(0, 0, 0, 0.117188) 0 1px 1px,
    rgba(255, 255, 255, 0.167969) 0 1px 0;
`;

const DesktopFilters = styled.div`
  display: none;
  @media (min-width: 992px) {
    display: inline-block;
  }
`;
const Wrapper = styled.div`
  max-width: 304px;
  padding: 0 8px;
  margin: 0 auto;
  @media (min-width: 768px) {
    max-width: 752px;
    padding: 0;
  }
  @media (min-width: 992px) {
    max-width: 962px;
  }
`;

export default function() {
  return (
    <Filters>
      <Wrapper>
        <Filter title="Dates" isDateComponent />
        <Filter title="Guests" />
        <DesktopFilters>
          <Filter title="Room Type" />
          <Filter title="Price" />
          <Filter title="Instant book" />
        </DesktopFilters>
        <Filter title="More filters" />
      </Wrapper>
    </Filters>
  );
}
