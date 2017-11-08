import React from "react";
import {
  Wrapper,
  Left,
  Header,
  Logo,
  Form,
  Search,
  SearchIcon,
  Nav,
  Link
} from "./Styled";
import logo from "./logo.svg";

export default function() {
  return (
    <Header>
      <Wrapper>
        <Left>
          <Logo src={logo} alt="logo" />
          <Form>
            <Search type="search" placeholder="Try Miami" />
            <SearchIcon type="submit" />
          </Form>
        </Left>
        <Nav>
          <Link href="#">Become a host</Link>
          <Link href="#">Help</Link>
          <Link href="#">Sign Up</Link>
          <Link href="#">Sign In</Link>
        </Nav>
      </Wrapper>
    </Header>
  );
}
