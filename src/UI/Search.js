import React from "react";
import styled from "styled-components";
import searchicon from "./assets/search.svg";

const Search = styled.input`
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
    padding: 7px 28px;
    padding-left: 28px;
    font-size: 14px;
  }
`;
const SearchIcon = styled.button`
  position: absolute;
  border: none;
  width: 22px;
  height: 22px;
  top: 9px;
  left: 4%;
  background-color: transparent;
  background-image: url(${searchicon});
  background-repeat: no-repeat;
  background-size: 16px;

  @media (min-width: 768px) {
    background-size: 16px;
  }
`;
const Form = styled.form`
  position: relative;
  width: 100%;
`;

export default function(props) {
  return (
    <div>
      <Form>
        <SearchIcon type="submit" />
        <Search type="search" placeholder={props.placeholder} />
      </Form>
    </div>
  );
}
