import React from "react";
import styled from "styled-components";

const Filters = styled.div`
  position: fixed;
  top: 76px;
  z-index: 1;
  background-color: #fff;
  width: 100%;
  box-shadow: rgba(0, 0, 0, 0.117188) 0 1px 1px,
    rgba(255, 255, 255, 0.167969) 0 1px 0;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;
const Filter = styled.button`
  margin: 12px 12px 12px 0;
  padding: 7px 16px;
  border: 1px solid rgba(72, 72, 72, 0.2);
  border-radius: 4px;
  font-family: CircularBook, "Helvetica Neue", Helvetica, sans-serif;
  font-size: 14px;
  line-height: 16px;
  color: #383838;
  background-color: #fff;
  cursor: pointer;
`;
const DesktopFilters = styled.div`
  display: none;
  @media (min-width: 992px) {
    display: inline-block;
  }
`;
export const Wrapper = styled.div`
  width: 100%;
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
        <Filter>Dates</Filter>
        <Filter>Guests</Filter>
        <DesktopFilters>
          <Filter>Room Type</Filter>
          <Filter>Price</Filter>
          <Filter>Instant book</Filter>
        </DesktopFilters>
        <Filter>More filters</Filter>
      </Wrapper>
    </Filters>
  );
}
