import { NavLink } from "react-router-dom";

import styled from "styled-components";
import arrowdown from "../UI/assets/arrow-down.svg";
import searchicon from "../UI/assets/search.svg";

export const Header = styled.header`
  width: 100%;
  padding: 16px 0;
  border-bottom: 1px solid #e4e4e4;
  line-height: 24px;
`;

export const Wrapper = styled.div`
  max-width: 304px;
  margin: 0 auto;
  padding: 0 8px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  @media (min-width: 768px) {
    max-width: 752px;
    padding: 0;
  }
  @media (min-width: 992px) {
    max-width: 962px;
    justify-content: space-between;
  }
`;

export const Left = styled.div`
  flex-basis: 94.5%;
  display: flex;
  justify-content: space-between;
  @media (min-width: 768px) {
    flex-basis: 62%;
  }
  @media (min-width: 992px) {
    flex-basis: 49%;
  }
`;

export const Nav = styled.nav`
  display: none;
  @media (min-width: 992px) {
    flex-basis: 30%;
    display: flex;
    justify-content: space-between;
  }
`;

export const Link = styled.a`
  text-decoration: none;
  font-family: CircularBook, "Helvetica Neue", Helvetica, sans-serif;
  font-size: 14px;
  color: #383838;
  cursor: pointer;
`;

export const Logo = styled(NavLink)`
  width: 48px;
  margin-right: 16px;
  background-image: url(${arrowdown});
  background-repeat: no-repeat;
  background-position: right;
  background-size: 10px 6px;
  @media (min-width: 992px) {
    background: none;
  }
`;

export const Form = styled.form`
  position: relative;
  width: 83%;
`;
export const Search = styled.input`
  width: 100%;
  padding: 12px 35px;
  border: 1px solid rgba(72, 72, 72, 0.2);
  border-radius: 4px;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
  font-family: CircularBook, "Helvetica Neue", Helvetica, sans-serif;
  color: #383838;
  font-size: 14px;
  appearance: none;
  @media (min-width: 768px) {
    padding: 14px 53px;
    font-size: 16px;
  }
`;
export const SearchIcon = styled.button`
  position: absolute;
  border: none;
  width: 22px;
  height: 22px;
  top: 12px;
  left: 4%;
  background-color: transparent;
  background-image: url(${searchicon});
  background-repeat: no-repeat;
  background-size: 16px;
  @media (min-width: 768px) {
    background-size: 22px;
  }
`;

export const Img = styled.img`
  margin-top: 8px;
`;
