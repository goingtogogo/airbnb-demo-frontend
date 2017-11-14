import styled from "styled-components";

export const Card = styled.a`
  flex-basis: 45.2%;
  flex-grow: 0;
  flex-shrink: 0;
  text-decoration: none;
  display: flex;
  flex-wrap: wrap;
  margin-right: 16px;
  cursor: pointer;
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
export const PriceInfo = styled.div`
  margin-top: 0;
  flex-basis: 100%;
  display: flex;
  align-items: flex-start;
`;
export const Title = styled.h3`
  margin: 8px 0px 0px 8px;
  font-family: CircularLight, "Helvetica Neue", Helvetica, sans-serif;
  font-size: 13px;
  line-height: 15px;
  @media (min-width: 768px) {
    font-size: 15px;
    line-height: 18px;
  }
`;
export const Ratio = styled.div`
  margin-top: 7px;
  display: flex;
  align-items: baseline;
`;
export const Reviews = styled.span`
  margin-left: 4px;
  font-family: CircularBook, "Helvetica Neue", Helvetica, sans-serif;
  font-size: 12px;
  line-height: 14px;
  @media (min-width: 768px) {
    margin-left: 8px;
  }
`;