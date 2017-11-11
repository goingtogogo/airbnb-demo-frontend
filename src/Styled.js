import styled from "styled-components";
import nextscroll from "./assets/next-scroll.png";
import arrowright from "./assets/arrow-right.png";

export const Wrapper = styled.div`
  max-width: 962px;
  margin: 0 auto;
  padding: 0 8px;
  @media (max-width: 991px) {
    max-width: 768px;
  }
  @media (max-width: 576px) {
    max-width: 320px;
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
  font-size: 32px;
  line-height: 34px;
  color: #383838;
  @media (max-width: 576px) {
    font-size: 24px;
    line-height: 28px;
  }
`;
export const List = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  @media (max-width: 991px) {
    +: scroll;
  }
`;
export const Price = styled.span`
  margin-top: 8px;
  font-family: CircularBold, "Helvetica Neue", Helvetica, sans-serif;
  font-size: 15px;
  line-height: 18px;
  color: #383838;
  @media (max-width: 991px) {
    font-size: 13px;
    line-height: 15px;
  }
`;
export const Scroll = styled.a`
  width: 40px;
  height: 40px;
  display: block;
  position: absolute;
  left: calc(100% - 20px);
  top: calc(50% - 60px);
  background-image: url(${nextscroll});
  background-repeat: no-repeat;
  background-size: cover;
  @media (max-width: 991px) {
    display: none;
  }
`;
export const SeeAll = styled.a`
  text-decoration: none;
  font-size: 14px;
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
  @media (max-width: 576px) {
    font-size: 12px;
    line-height: 24px;
  }
`;
