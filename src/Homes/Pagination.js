import React from "react";
import styled from "styled-components";

import arrowright from "./UI/arrow-right.svg";

const Pagination = styled.div`
  margin: 0 auto;
  margin-top: 20px;
  width: 80%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  @media (min-width: 768px) {
    width: 40%;
  }
`;

const Page = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 32px;
  height: 32px;
  text-decoration: none;
  background-color: #fff;
  color: #0f7276;
  font-family: CircularBook, "Helvetica Neue", Helvetica, sans-serif;
  font-size: 16px;
  line-height: 19px;
  border-radius: 50%;
  cursor: pointer;
`;
const ActivePage = Page.extend`
  background-color: #008489;
  color: #fff;
  cursor: pointer;
`;
const Next = styled.a`
  width: 32px;
  height: 32px;
  background-image: url(${arrowright});
  background-repeat: no-repeat;
  background-size: cover;
  cursor: pointer;
`;

export default function() {
  return (
    <Pagination>
      <ActivePage>1</ActivePage>
      <Page>2</Page>
      <Page>3</Page>
      <Page>...</Page>
      <Page>17</Page>
      <Next />
    </Pagination>
  );
}
