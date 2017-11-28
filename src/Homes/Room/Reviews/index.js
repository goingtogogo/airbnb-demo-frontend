import React from "react";
import styled from "styled-components";

import { Title } from "../../UI/";
import Search from "../../../UI/Search";
import Ratio from "./Ratio";
import Review from "./Review";
import Pagination from "../../All/Pagination";

import marlee from "./marlee.png";
import michelle from "./michelle.png";

const Reviews = styled.div`
  padding-top: 32px;
  border-top: 1px solid #dbdbdb;
  width: 66%;
  color: #383838;
  font-family: CircularLight, "Helvetica Neue", Helvetica, sans-serif;
  line-height: 21px;
  font-size: 18px;
`;

const Header = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
`;
const Left = styled.div`
  display: flex;
`;
const Ratings = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  border-bottom: 1px solid #dbdbdb;
  padding-bottom: 18px;
`;
const Option = styled.div`
  flex-basis: 48%;
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  margin-bottom: 8px;
  font-family: CircularLight, "Helvetica Neue", Helvetica, sans-serif;
  font-size: 18px;
  line-height: 21px;
`;

const ratings = [
  "Accuracy",
  "Location",
  "Communication",
  "Check In",
  "Cleanliness",
  "Value"
];

export default function(props) {
  return (
    <Reviews>
      <Header>
        <Left>
          <Title>113 Reviews</Title>
          <Ratio />
        </Left>
        <Search placeholder="Search reviews" />
      </Header>
      <Ratings>
        {ratings.map((item, index) => (
          <Option>
            {item}
            <Ratio />
          </Option>
        ))}
      </Ratings>
      <Review name="Marlee" date="November 2017" avatar={marlee}>
        This was one of my favourite places we stayed in all on Colombia. A very
        peaceful setting and a great spot to unwind.
      </Review>

      <Review name="Michelle" date="November 2017" avatar={michelle}>
        What an absolutely wonderful place to stay! Yudy and Victoria were so
        kind and lovely, even after we arrived super late due to problems at the
        airport, and Hernando our driver was super friendly and really patient
        with our little Spanish. Victoria was a lovely host and gave us so.
      </Review>
      <Pagination />
    </Reviews>
  );
}
