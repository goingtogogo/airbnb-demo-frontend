import styled from "styled-components";

export const Card = styled.a`
  flex-basis: 45.2%;
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  flex-grow: 0;
  flex-shrink: 0;
  margin-right: 16px;
  cursor: pointer;
  text-decoration: none;
  color: #383838;

  @media (min-width: 768px) {
    flex-basis: 31.9%;
  }

  @media (min-width: 992px) {
    flex-basis: 23.3%;
    margin-right: 0;
  }
`;

export const Img = styled.img`
  width: 100%;
  height: auto;
`;
export const Title = styled.h3`
  margin-top: 2px;
  margin-bottom: 0px;
  flex-basis: 100%;
  font-family: CircularBold, "Helvetica Neue", Helvetica, sans-serif;
  font-size: 12px;
  line-height: 14px;

  @media (min-width: 768px) {
    font-size: 18px;
    line-height: 21px;
  }
`;

export const Type = styled.span`
  margin-top: 12px;
  margin-bottom: 0;
  flex-basis: 100%;
  font-family: CircularBold, "Helvetica Neue", Helvetica, sans-serif;
  font-size: 8px;
  line-height: 9px;
  text-transform: uppercase;

  @media (min-width: 768px) {
    font-size: 10px;
    line-height: 12px;
  }
`;
export const Pricing = styled.span`
  margin-top: 4px;
  flex-basis: 100%;
  font-family: CircularLight, "Helvetica Neue", Helvetica, sans-serif;
  font-size: 12px;
  line-height: 14px;

  @media (min-width: 768px) {
    font-size: 18px;
    line-height: 21px;
  }
`;
