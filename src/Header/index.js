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

export default function(props) {
  return (
    <Header className={props.className}>
      <Wrapper>
        <Left>
          <Burger href="/">
            <Logo src={logo} alt="logo" />
          </Burger>
          <Form>
            <SearchIcon type="submit" />
            <Search type="search" placeholder="Try Miami" />
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
