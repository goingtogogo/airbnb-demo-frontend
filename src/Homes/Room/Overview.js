import React from "react";
import styled from "styled-components";

import yudy from "../UI/yudy.png";
import bed from "../UI/bed.svg";
import bathtub from "../UI/bathtub.svg";
import door from "../UI/door.svg";
import guest from "../UI/guest.svg";
import arrowdown from "../UI/arrow-down.svg";

const Overview = styled.div`
  color: #383838;
  font-family: CircularLight, "Helvetica Neue", Helvetica, sans-serif;
  line-height: 21px;
  font-size: 18px;
`;
const Preview = styled.div`
  width: 83%;
  padding: 24px 0;
`;
const Title = styled.h3`
  margin: 4px 0;
  font-family: CircularBold, "Helvetica Neue", Helvetica, sans-serif;
  line-height: 42px;
  font-size: 36px;
`;
const Subtitle = styled.span`
  font-family: CircularLight, "Helvetica Neue", Helvetica, sans-serif;
  line-height: 19px;
  font-size: 16px;
`;
const Host = styled.div`
  margin-top: 8px;
  display: flex;
  flex-direction: column;
  flex-basis: 10%;
  text-align: center;
  align-items: center;
  align-self: center;
`;
const Main = styled.div`
  width: 100%;
  display: flex;
`;
const Left = styled.div`
  flex-basis: 65%;
`;

const Photo = styled.img`
  width: 64px;
  height: 64px;
  margin-bottom: 18px;
`;
const Options = styled.div`
  margin-top: 50px;
  width: 65%;
  display: flex;
  justify-content: space-between;
`;
const Option = styled.span`
margin-right:30px
  font-family: CircularLight, "Helvetica Neue", Helvetica, sans-serif;
  line-height: 16px;
  font-size: 14px;
  display: flex;
  align-items: center;
`;

const Description = styled.p`
  margin-top: 32px;
  margin-bottom: 24px;
  width: 78%;
`;
const Contact = styled.a`
  display: block;
  font-family: CircularBook, "Helvetica Neue", Helvetica, sans-serif;
  line-height: 19px;
  font-size: 16px;
  color: #0f7276;
  cursor: pointer;
`;
const ReadMore = Contact.extend`
  display: block;
  margin-bottom: 23px;
  &:after {
    margin-left: 8px;
    width: 11px;
    height: 6px;
    display: inline-block;
    vertical-align: baseline;
    content: "";
    background-image: url(${arrowdown});
    background-repeat: no-repeat;
    background-size: 100%;
  }
`;
const Icon = styled.img`
  width: 20px;
  height: auto;
  margin-right: 13px;
`;
const Amenities = styled.div`
  padding: 24px 0;
  border-top: 1px solid #dbdbdb;
`;
const Hint = styled.div`
  padding: 24px 0;
  border-top: 1px solid #dbdbdb;
`;
const Rules = styled.div`
  padding: 24px 0;
  border-top: 1px solid #dbdbdb;
`;
const Cancellations = styled.div`
  padding: 24px 0;
  border-top: 1px solid #dbdbdb;
`;

export default function() {
  return (
    <Overview>
      <Preview>
        <Main>
          <Left>
            <Title>Romantic Cabana with view</Title>
            <Subtitle>Entire cabin · Armenia</Subtitle>
            <Options>
              <Option>
                <Icon src={guest} />2 guests
              </Option>
              <Option>
                <Icon src={door} />Studio
              </Option>
              <Option>
                <Icon src={bed} />2 beds
              </Option>
              <Option>
                <Icon src={bathtub} />1 bath
              </Option>
            </Options>
          </Left>
          <Host>
            <Photo src={yudy} />Yudi & Victoria
          </Host>
        </Main>
        <Description>
          Located in the coffee region, in the Andean mountains of Colombia,
          South America, a charming cabana made from bamboo, with a great view
          and a "sendero" or pathway through the bamboo forest which
          criss-crosses our 5 acre organic farm, leading down to a stream. A
          place to relax and commune with nature.
        </Description>
        <ReadMore>Read more about the space</ReadMore>
        <Contact>Contact host</Contact>
      </Preview>
      <Amenities />
      <Hint />
      <Rules />
      <Cancellations />
    </Overview>
  );
}
