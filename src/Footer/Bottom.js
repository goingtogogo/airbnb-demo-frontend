import React from "react";
import { Wrapper } from "./Styled";
import styled from "styled-components";
import logo from "./footer-logo.svg";
import instagram from "./instagram.svg";
import twitter from "./twitter.svg";
import facebook from "./facebook.svg";

const Bottom = Wrapper.extend`border-top: 1px solid rgba(72, 72, 72, 0.08);`;
const Left = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-basis: 12.82316%;
`;

const Nav = styled.nav`
  padding: 34px 0;
  flex-basis: 32.05791%;
  display: flex;
  justify-content: space-between;
`;
const Link = styled.a`
  text-decoration: none;
  font-family: CircularBook, Helvetica, sans-serif;
  font-size: 15px;
  line-height: 18px;
  color: #636363;
`;
const Copyright = styled.h3`
  margin-top: 34px;
  font-family: CircularBook, Helvetica, sans-serif;
  font-size: 15px;
  line-height: 18px;
  color: #636363;
`;

const Logo = styled.img`margin-top: 20px;`;
const Twitter = styled.img``;
const Facebook = styled.img``;
const Instagram = styled.img``;

export default function(props) {
  return (
    <Bottom>
      <Left>
        <Logo src={logo} alt="logo" />
        <Copyright>&#9400; AirBnb inc.</Copyright>
      </Left>
      <Nav>
        <Link href="#">Terms</Link>
        <Link href="#">Privacy</Link>
        <Link href="#">Site map</Link>
        <Link href="#">
          <Facebook src={facebook} alt="facebook" />
        </Link>
        <Link href="#">
          <Twitter src={twitter} alt="twitter" />
        </Link>
        <Link href="#">
          <Instagram src={instagram} alt="instagram" />
        </Link>
      </Nav>
    </Bottom>
  );
}
