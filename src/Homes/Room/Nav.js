import React from "react";
import styled from "styled-components";

import { Wrapper } from "../../UI";

const Nav = styled.nav`
  width: 100%;
  z-index: 2;
  background-color: #fff;
  padding: 14px 0;
  border-bottom: ${props => (props.hide ? 0 : 1)}px solid #dbdbdb;
  font-family: CircularBold, "Helvetica Neue", Helvetica, sans-serif;
  font-size: 12px;
  line-height: 14px;
  @media (min-width: 768px) {
    font-size: 14px;
    line-height: 16px;
    width: 82%;
  }
  @media (min-width: 992px) {
    width: 66%;
  }
`;

const Link = styled.a`
  margin: 0 7px;
  display: inline-block;
  color: ${props => (props.selected ? "#383838" : "#0f7276;")};
  text-decoration: none;
  &:first-child {
    margin-left: 0;
  }
`;

export default function(props) {
  return (
    <Nav hide={props.hide}>
      <Wrapper>
        <Link href="overview" selected>
          Overview
        </Link>·
        <Link href="#reviews">Reviews</Link>·
        <Link href="#host">The host</Link>·
        <Link href="#location">Location</Link>
      </Wrapper>
    </Nav>
  );
}
