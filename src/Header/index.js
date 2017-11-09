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
  Link,
  Burger
} from "./Styled";
import logo from "./logo.svg";

export default function() {
  return (
    <Header>
      <Wrapper>
        <Left>
          <Burger href="">
            <Logo src={logo} alt="logo" />
          </Burger>
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
