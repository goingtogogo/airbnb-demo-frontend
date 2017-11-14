import styled from "styled-components";
import arrowdown from "./arrow-down.png";
import searchicon from "./search.svg";

export const Header = styled.header`
  position: fixed;
  top: 0;
  background-color: #fff;
  z-index: 2;
  width: 100%;
  padding: 16px 0;
  box-shadow: 0px 0px 2px rgba(72, 72, 72, 0.3);
  line-height: 24px;
`;

export const Wrapper = styled.div`
  width: 100%;
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
    padding-top: 11px;
    flex-basis: 32%;
    display: flex;
    justify-content: space-between;
  }
`;

export const Link = styled.a`
  text-decoration: none;
  font-family: CircularBook, "Helvetica Neue", Helvetica, sans-serif;
  font-size: 14px;
  color: #383838;
`;

export const Burger = styled.a`
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
  width: 82.7%;
`;
export const Search = styled.input`
  width: 100%;
  padding: 12px 35px;
  border: 1px solid rgba(72, 72, 72, 0.2);
  border-radius: 4px;
  box-shadow: 0px 0px 2px rgba(72, 72, 72, 0.08);
  font-family: CircularBook, "Helvetica Neue", Helvetica, sans-serif;
  color: #383838;
  font-size: 14px;
  appearance: none;
  @media (min-width: 768px) {
    padding: 12px 53px;
    font-size: 16px;
  }
`;
export const SearchIcon = styled.button`
  position: absolute;
  border: none;
  width: 20px;
  height: 20px;
  top: 14px;
  left: 3.4%;
  background-color: transparent;
  background-image: url(${searchicon});
  background-repeat: no-repeat;
  background-size: 16px;

  @media (min-width: 768px) {
    top: 12px;
    background-size: 20px;
  }
`;

export const Logo = styled.img`margin-top: 6px;`;
