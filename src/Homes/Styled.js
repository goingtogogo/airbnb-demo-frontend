import styled from "styled-components";

export const Card = styled.a`
  flex-basis: 64%;
  margin-right: 16px;
  flex-grow: 0;
  flex-shrink: 0;
  text-decoration: none;
  display: flex;
  flex-wrap: wrap;
  cursor: pointer;
  color: #383838;

  @media (min-width: 768px) {
    flex-basis: 40.4%;
  }
  @media (min-width: 992px) {
    flex-basis: 32%;
    margin-right: 0;
  }
`;

export const Img = styled.img`
  width: 100%;
  height: auto;
`;
export const PriceInfo = styled.div`
  flex-basis: 100%;
  display: flex;
  align-items: center;
`;
export const Title = styled.h3`
  margin: 8px 0px 0px 8px;
  font-family: CircularBold, "Helvetica Neue", Helvetica, sans-serif;
  font-size: 13px;
  line-height: 15px;

  @media (min-width: 768px) {
    font-size: 15px;
    line-height: 18px;
  }
`;

export const Description = styled.div`
  flex-basis: 100%;
  display: flex;
`;
export const Type = styled.span`
  font-family: CircularLight, "Helvetica Neue", Helvetica, sans-serif;
  font-size: 12px;
  line-height: 14px;
  margin-top: 2px;

  @media (min-width: 768px) {
    font-size: 15px;
    line-height: 18px;
  }
`;
export const Amount = styled.span`
  margin: 2px 0px 0px 8px;
  font-family: CircularLight, "Helvetica Neue", Helvetica, sans-serif;
  font-size: 12px;
  line-height: 14px;

  @media (min-width: 768px) {
    font-size: 15px;
    line-height: 18px;
  }
`;

export const Ratio = styled.div`
  display: flex;
  margin-top: 6px;
`;
export const Reviews = styled.span`
  margin-top: 2px;
  margin-left: 8px;
  font-family: CircularBook, "Helvetica Neue", Helvetica, sans-serif;
  font-size: 12px;
  line-height: 14px;
`;
export const Owner = styled.span`
  margin-top: 2px;
  margin-left: 4px;
  font-family: CircularBook, "Helvetica Neue", Helvetica, sans-serif;
  font-size: 12px;
  line-height: 14px;
`;
