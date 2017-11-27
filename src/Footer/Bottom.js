import React from "react";
import { Wrapper } from "./Styled";
import styled from "styled-components";
import logo from "../UI/assets/footer-logo.svg";
import instagram from "../UI/assets/instagram.svg";
import twitter from "../UI/assets/twitter.svg";
import facebook from "../UI/assets/facebook.svg";

const Bottom = Wrapper.extend`
  border-top: 1px solid #dbdbdb;
  flex-direction: column;
  align-items: flex-start;

  @media (min-width: 768px) {
    flex-direction: row;
    align-items: space-between;
  }
`;
const Left = styled.div`
  width: 34%;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;

  @media (min-width: 768px) {
    flex-basis: 18%;
  }
  @media (min-width: 992px) {
    flex-basis: 12.8%;
  }
`;

const Nav = styled.nav`
  width: 69%;
  padding: 16px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (min-width: 768px) {
    padding: 32px 0;
    flex-basis: 36.2%;
  }
  @media (min-width: 992px) {
    flex-basis: 32%;
  }
`;
const Link = styled.a`
  text-decoration: none;
  font-family: CircularBook, "Helvetica Neue", Helvetica, sans-serif;
  font-size: 12px;
  line-height: 14px;
  color: #636363;
  @media (min-width: 992px) {
    font-size: 15px;
    line-height: 18px;
  }
`;
const Copyright = styled.h3`
  margin-top: 34px;
  font-family: CircularLight, "Helvetica Neue", Helvetica, sans-serif;
  font-size: 12px;
  line-height: 14px;
  color: #636363;

  @media (min-width: 768px) {
    font-size: 15px;
    line-height: 18px;
    margin-top: 36px;
  }
  @media (min-width: 992px) {
    margin-top: 34px;
  }
`;

const Logo = styled.img`
  margin-top: 32px;
`;
const Icon = styled.img`
  width: 16px;
  height: auto;
  @media (min-width: 768px) {
    width: 20px;
  }
`;

export default function(props) {
  return (
    <Bottom>
      <Left>
        <Logo src={logo} alt="logo" />
        <Copyright>© Airbnb Inc.</Copyright>
      </Left>
      <Nav>
        <Link href="/terms">Terms</Link>
        <Link href="/privacy">Privacy</Link>
        <Link href="/site-map">Site map</Link>
        <Link href="/facebook">
          <Icon src={facebook} alt="facebook" />
        </Link>
        <Link href="/twitter">
          <Icon src={twitter} alt="twitter" />
        </Link>
        <Link href="/instagram">
          <Icon src={instagram} alt="instagram" />
        </Link>
      </Nav>
    </Bottom>
  );
}
