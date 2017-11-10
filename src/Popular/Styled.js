import styled from "styled-components";

export const Card = styled.div`
  flex-basis: 23.27235%;
  display: flex;
  @media (max-width: 768px) {
    flex-basis: 31.9148936%;
    margin-right: 16px;
    flex-grow: 0;
    flex-shrink: 0;
  }
`;

export const Img = styled.img`
  width: 100%;
  height: auto;
`;
export const Link = styled.a`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  cursor: pointer;
  text-decoration: none;
  color: #383838;
`;
export const Title = styled.h3`
  margin-top: 2px;
  margin-bottom: 0px;
  flex-basis: 100%;
  font-family: CircularBold, "Helvetica Neue", Helvetica, sans-serif;
  font-size: 18px;
  line-height: 21px;
`;

export const Type = styled.span`
  margin-top: 12px;
  margin-bottom: 0;
  flex-basis: 100%;
  font-family: CircularBold, "Helvetica Neue", Helvetica, sans-serif;
  font-size: 10px;
  line-height: 12px;
  text-transform: uppercase;
`;
export const Pricing = styled.span`
  margin-top: 4px;
  flex-basis: 100%;
  font-family: CircularLight, "Helvetica Neue", Helvetica, sans-serif;
  font-size: 18px;
  line-height: 21px;
`;
