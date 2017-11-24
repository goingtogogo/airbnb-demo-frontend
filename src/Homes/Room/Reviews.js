import React from "react";
import styled from "styled-components";

import { Title } from "../UI/";
import Search from "../../UI/Search";
import Star from "../../UI/Star";

const Reviews = styled.div`
  border-top: 1px solid #dbdbdb;
  width: 66%;
  color: #383838;
  font-family: CircularLight, "Helvetica Neue", Helvetica, sans-serif;
  line-height: 21px;
  font-size: 18px;
`;

const Header = styled.div`
  display: flex;
`;

export default function() {
  return (
    <Reviews>
      <Header>
        <Title>113 Reviews</Title>
        <Search placeholder="Search reviews" />
        <Star width="20px" height="20px" />
      </Header>
    </Reviews>
  );
}
