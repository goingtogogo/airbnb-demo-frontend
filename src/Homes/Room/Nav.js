import React from "react";
import styled from "styled-components";

const Nav = styled.nav`
  width: 66%;
  padding: 14px 0;
  margin-bottom: 24px;
  border-bottom: 1px solid #dbdbdb;
  font-family: CircularBold, "Helvetica Neue", Helvetica, sans-serif;
  font-size: 14px;
  line-height: 16px;
`;

const Link = styled.a`
  margin: 0 8px;
  display: inline-block;
  color: ${props => (props.selected ? "#383838" : "#0f7276;")};
  text-decoration: none;
  &:first-child {
    margin-left: 0;
  }
`;

export default function() {
  return (
    <Nav>
      <Link href="overview" selected>
        Overview
      </Link>·
      <Link href="#reviews">Reviews</Link>·
      <Link href="#host">The host</Link>·
      <Link href="#location">Location</Link>
    </Nav>
  );
}
