import React from "react";
import styled from "styled-components";

import { Title, ReadText } from "../../UI/";
import Search from "../../../UI/Search";
import Ratio from "./Ratio";
import Review from "./Review";
import Pagination from "../../Pagination";

import marlee from "./marlee.png";
import michelle from "./michelle.png";

const Reviews = styled.div`
  padding-top: 48px;
  border-top: 1px solid #dbdbdb;
  width: 100%;
  color: #383838;
  font-family: CircularLight, "Helvetica Neue", Helvetica, sans-serif;
  line-height: 21px;
  font-size: 18px;
  @media (min-width: 992px) {
    width: 66%;
  }
`;

const Header = styled.div`
  margin-bottom: 24px;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  flex-wrap: wrap;
  @media (min-width: 768px) {
    margin-bottom: 0;
  }
`;
const Left = styled.div`
  display: flex;
  flex-basis: 100%;
  @media (min-width: 768px) {
    flex-basis: auto;
  }
`;
const Ratings = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  border-bottom: 1px solid #dbdbdb;
  padding-bottom: 14px;
`;
const Option = styled.div`
  flex-basis: 100%;
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  margin-bottom: 8px;
  font-family: CircularLight, "Helvetica Neue", Helvetica, sans-serif;
  font-size: 18px;
  line-height: 21px;
  @media (min-width: 768px) {
    flex-basis: 48%;
  }
`;

const ratings = [
  {
    id: 123,
    value: "Accuracy"
  },
  {
    id: 124,
    value: "Location"
  },
  {
    id: 125,
    value: "Communication"
  },
  {
    id: 126,
    value: "Check In"
  },
  {
    id: 127,
    value: "Cleanliness"
  },
  {
    id: 128,
    value: "Value"
  }
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
        {ratings.map(rating => (
          <Option key={rating.id}>
            {rating.value}
            <Ratio />
          </Option>
        ))}
      </Ratings>
      <Review name="Marlee" when="November 2017" avatar={marlee}>
        This was one of my favourite places we stayed in all on Colombia. A very
        peaceful setting and a great spot to unwind.
      </Review>

      <Review name="Michelle" when="November 2017" avatar={michelle}>
        What an absolutely wonderful place to stay! Yudy and Victoria were so
        kind and lovely, even after we arrived super late due to problems at the
        airport, and Hernando our driver was super friendly and really patient
        with our little Spanish. Victoria was a lovely host and gave us so...
        <ReadText>Read more</ReadText>
      </Review>
      <Pagination />
    </Reviews>
  );
}
