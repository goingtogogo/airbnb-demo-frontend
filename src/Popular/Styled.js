import styled from "styled-components";

export const Card = styled.div`
  flex-basis: 23.3%;
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  cursor: pointer;
  text-decoration: none;
  color: #383838;
  @media (max-width: 991px) {
    flex-basis: 31.9%;
    margin-right: 16px;
    flex-grow: 0;
    flex-shrink: 0;
  }
  @media (max-width: 576px) {
    flex-basis: 46.9%;
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
  font-size: 18px;
  line-height: 21px;
  @media (max-width: 576px) {
    font-size: 12px;
    line-height: 14px;
  }
`;

export const Type = styled.span`
  margin-top: 12px;
  margin-bottom: 0;
  flex-basis: 100%;
  font-family: CircularBold, "Helvetica Neue", Helvetica, sans-serif;
  font-size: 10px;
  line-height: 12px;
  text-transform: uppercase;
  @media (max-width: 576px) {
    font-size: 8px;
    line-height: 9px;
  }
`;
export const Pricing = styled.span`
  margin-top: 4px;
  flex-basis: 100%;
  font-family: CircularLight, "Helvetica Neue", Helvetica, sans-serif;
  font-size: 18px;
  line-height: 21px;
  @media (max-width: 576px) {
    font-size: 12px;
    line-height: 14px;
  }
`;
