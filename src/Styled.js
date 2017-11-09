import styled from "styled-components";
import nextscroll from "./assets/next-scroll.png";

export const Wrapper = styled.div`
  width: 86.032028%;
  margin: 0 auto;
  @media (max-width: 768px) {
    width: 97.91666%;
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
`;
export const List = styled.ul`
  position: relative;
  display: flex;
  justify-content: space-between;
  list-style: none;
  padding: 0;
  @media (max-width: 768px) {
    overflow-x: scroll;
    overflow-y: hidden;
    -webkit-overflow-scrolling: touch;
    -ms-overflow-style: -ms-autohiding-scrollbar;
  }
`;
export const Price = styled.span`
  margin-top: 8px;
  font-family: CircularBold, "Helvetica Neue", Helvetica, sans-serif;
  font-size: 15px;
  line-height: 18px;
  color: #383838;
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
  @media (max-width: 768px) {
    display: none;
  }
`;
export default function() {}
