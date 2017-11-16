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
          <Burger to="/">
            <Logo src={logo} alt="logo" />
          </Burger>
          <Form>
            <SearchIcon type="submit" />
            <Search type="search" placeholder="Try &quot;Miami&quot;" />
          </Form>
        </Left>
        <Nav>
          <Link to="/">Become a host</Link>
          <Link to="/">Help</Link>
          <Link to="/">Sign Up</Link>
          <Link to="/">Sign In</Link>
        </Nav>
      </Wrapper>
    </Header>
  );
}
