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
          <Link href="/host">Become a host</Link>
          <Link href="/help">Help</Link>
          <Link href="/signup">Sign Up</Link>
          <Link href="/signin">Sign In</Link>
        </Nav>
      </Wrapper>
    </Header>
  );
}
