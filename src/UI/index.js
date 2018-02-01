import styled from "styled-components";

export const Wrapper = styled.div`
  max-width: 304px;
  padding: 0 8px;
  margin: 0 auto;
  @media (min-width: 768px) {
    max-width: 752px;
    padding: 0;
  }
  @media (min-width: 992px) {
    position: relative;
    max-width: 962px;
  }
`;

export const Price = styled.span`
  margin-top: 8px;
  font-family: CircularBold, "Helvetica Neue", Helvetica, sans-serif;
  font-size: 13px;
  line-height: 15px;
  color: #383838;
  @media (min-width: 768px) {
    display: inline;
    font-size: 15px;
    line-height: 18px;
  }
`;
