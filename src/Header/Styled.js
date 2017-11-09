import styled from "styled-components";
import arrowdown from "./arrow-down.png";
import searchicon from "./search.svg";

export const Header = styled.header`
  width: 100%;
  padding: 16px 0;
  box-shadow: 0px 0px 2px rgba(72, 72, 72, 0.3);
  line-height: 24px;
`;

export const Wrapper = styled.div`
  width: 86.032028%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 768px) {
    width: 97.91666%;
    justify-content: flex-start;
  }
`;

export const Left = styled.div`
  display: flex;
  justify-content: space-between;
  flex-basis: 49.12099%;
  @media (max-width: 768px) {
    flex-basis: 62.76595%;
    justify-content: space-between;
  }
`;

export const Nav = styled.nav`
  padding-top: 11px;
  flex-basis: 32.16132%;
  display: flex;
  justify-content: space-between;

  @media (max-width: 768px) {
    display: none;
  }
`;
export const Link = styled.a`
  text-decoration: none;
  font-family: CircularBook, "Helvetica Neue", Helvetica, sans-serif;
  font-size: 14px;
  color: #383838;
`;
export const Burger = styled.a`
  @media (max-width: 768px) {
    width: 48px;
    margin-right: 16px;
    background-image: url(${arrowdown});
    background-repeat: no-repeat;
    background-position: right;
    background-size: 10px 6px;
  }
`;
export const Form = styled.form`
  position: relative;
  width: 91.52542%;
`;
export const Search = styled.input`
  width: 100%;
  padding: 12px 53px;
  border: 1px solid rgba(72, 72, 72, 0.2);
  border-radius: 4px;
  box-shadow: 0px 0px 2px rgba(72, 72, 72, 0.08);
  font-family: CircularBook, "Helvetica Neue", Helvetica, sans-serif;
  color: #383838;
  font-size: 16px;
`;
export const SearchIcon = styled.button`
  position: absolute;
  border: none;
  width: 20px;
  height: 20px;
  right: 91.56122%;
  top: 12px;
  background-color: transparent;
  background-image: url(${searchicon});
  backround-repeat: no-repeat;
  background-size: cover;
`;

export const Logo = styled.img`margin-top: 6px;`;
export default function() {}
