import styled from "styled-components";
import scroll from "./assets/scroll.png";
import arrowright from "./assets/arrow-right.png";

export const Wrapper = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 0 8px;
  @media (min-width: 992px) {
    max-width: 962px;
    padding: 0;
  }
`;

export const Preview = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: baseline;
`;

export const SectionTitle = styled.h2`
  margin-top: 48px;
  font-family: CircularBold, "Helvetica Neue", Helvetica, sans-serif;
  font-size: 24px;
  line-height: 28px;
  color: #383838;
  @media (min-width: 768px) {
    font-size: 32px;
    line-height: 34px;
  }
`;

export const List = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  overflow-x: scroll;
  @media (min-width: 992px) {
    overflow: visible;
  }
`;

export const Price = styled.span`
  margin-top: 8px;
  font-family: CircularBold, "Helvetica Neue", Helvetica, sans-serif;
  font-size: 13px;
  line-height: 15px;
  color: #383838;
  @media (min-width: 768px) {
    font-size: 15px;
    line-height: 18px;
  }
`;

export const Scroll = styled.a`
  visibility: hidden;
  @media (min-width: 992px) {
    width: 40px;
    height: 40px;
    display: block;
    position: absolute;
    left: calc(100% - 20px);
    top: calc(50% - 60px);
    background-image: url(${scroll});
    background-repeat: no-repeat;
    background-size: cover;
  }
`;
export const SeeAll = styled.a`
  text-decoration: none;
  font-size: 12px;
  line-height: 24px;
  font-family: CircularBook, "Helvetica Neue", Helvetica, sans-serif;
  color: #383838;

  &:after {
    margin-left: 8px;
    width: 6px;
    height: 10px;
    display: inline-block;
    vertical-align: baseline;
    content: "";
    background-image: url(${arrowright});
    background-repeat: no-repeat;
    background-size: cover;
  }
  @media (min-width: 768px) {
    font-size: 14px;
    line-height: 24px;
  }
`;
