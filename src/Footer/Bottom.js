import React from "react";
import { Wrapper } from "./Styled";
import styled from "styled-components";
import logo from "./footer-logo.svg";
import instagram from "./instagram.svg";
import twitter from "./twitter.svg";
import facebook from "./facebook.svg";

const Bottom = Wrapper.extend`
  border-top: 1px solid rgba(72, 72, 72, 0.08);
  @media (max-width: 576px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;
const Left = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-basis: 12.8%;
  @media (max-width: 991px) {
    flex-basis: 14%;
  }
  @media (max-width: 576px) {
    width: 34%;
    justify-content: space-between;
  }
`;

const Nav = styled.nav`
  padding: 34px 0;
  flex-basis: 32%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 991px) {
    padding: 36px 0;
    flex-basis: 36.2%;
  }
  @media (max-width: 576px) {
    width: 69%;
    justify-content: space-between;
    padding-top: 12px;
    padding-bottom: 16px;
  }
`;
const Link = styled.a`
  text-decoration: none;
  font-family: CircularBook, "Helvetica Neue", Helvetica, sans-serif;
  font-size: 15px;
  line-height: 18px;
  color: #636363;
  @media (max-width: 991px) {
    font-size: 12px;
    line-height: 14px;
  }
`;
const Copyright = styled.h3`
  margin-top: 34px;
  font-family: CircularBook, "Helvetica Neue", Helvetica, sans-serif;
  font-size: 15px;
  line-height: 18px;
  color: #636363;
  @media (max-width: 991px) {
    font-size: 12px;
    line-height: 14px;
    margin-top: 36px;
  }
  @media (max-width: 576px) {
    margin-top: 18px;
  }
`;

const Logo = styled.img`
  margin-top: 34px;
  @media (max-width: 991px) {
    font-size: 12px;
    line-height: 14px;
  }
  @media (max-width: 576px) {
    margin-top: 16px;
  }
`;
const Icon = styled.img`
  @media (max-width: 991px) {
    width: 16px;
    height: auto;
  }
`;

export default function(props) {
  return (
    <Bottom>
      <Left>
        <Logo src={logo} alt="logo" />
        <Copyright>&#9400; AirBnb inc.</Copyright>
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
