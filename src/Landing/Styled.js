import { Link } from "react-router-dom";

import styled from "styled-components";
import scroll from "./scroll.png";
import arrowright from "./arrow-right.png";

export const Preview = styled.div`
  max-width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  box-sizing: border-box;
`;

export const SectionTitle = styled.h2`
  margin-top: 48px;
  margin-bottom: 24px;
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
  overflow-y: hidden;
  @media (min-width: 992px) {
    overflow: visible;
  }
`;

export const Scroll = styled.a`
  display: none;

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

export const SeeAll = styled(Link)`
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
    margin-right: 0;
  }
`;
