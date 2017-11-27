import React from "react";
import styled from "styled-components";

import { Contact, ReadMore } from "../../UI/index.js";
import yudy from "../../UI/yudy.png";
import bed from "./bed.svg";
import bathtub from "./bathtub.svg";
import door from "./door.svg";
import guest from "./guest.svg";
import wifi from "./wifi.svg";
import parking from "./parking.svg";
import family from "./family.svg";
import internet from "./internet.svg";
import shield from "./shield.svg";

const Overview = styled.div`
  width: 66%;
  color: #383838;
  font-family: CircularLight, "Helvetica Neue", Helvetica, sans-serif;
  line-height: 19px;
  font-size: 16px;
`;
const Preview = styled.div`
  padding-bottom: 24px;
`;
const Title = styled.h3`
  margin: 4px 0;
  font-family: CircularBold, "Helvetica Neue", Helvetica, sans-serif;
  line-height: 42px;
  font-size: 36px;
`;
const Caption = styled.h4`
  margin: 0;
  font-family: CircularBold, "Helvetica Neue", Helvetica, sans-serif;
  line-height: 19px;
  font-size: 16px;
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
  flex-basis: 83%;
`;
const Side = styled.div`
  width: 93%;
  display: inline-block;
`;

const Photo = styled.img`
  width: 64px;
  height: 64px;
  margin-bottom: 18px;
`;
const Options = styled.div`
  margin-top: 50px;
  width: 76%;
  display: flex;
  justify-content: space-between;
`;
const Option = styled.span`
  font-family: CircularLight, "Helvetica Neue", Helvetica, sans-serif;
  line-height: 16px;
  font-size: 14px;
  display: flex;
  align-items: center;
`;

const Description = styled.p`
  margin-top: 32px;
  margin-bottom: 28px;
  line-height: 21px;
  font-size: 18px;
`;

const Icon = styled.img`
  width: 20px;
  height: auto;
  margin-right: 13px;
`;
const Shield = styled.img`
  width: 40px;
  height: auto;
  margin-right: 0;
`;
const Amenities = styled.div`
  padding-top: 20px;
  border-top: 1px solid #dbdbdb;
`;
const Properties = styled.div`
  margin-top: 16px;
  display: flex;
  flex-wrap: wrap;
`;
const Property = styled.div`
  font-family: CircularLight, "Helvetica Neue", Helvetica, sans-serif;
  line-height: 19px;
  font-size: 16px;
  flex-basis: 50%;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`;
const Hint = styled.div`
  padding: 24px 0;
  border-top: 1px solid #dbdbdb;
`;
const Rules = styled.div`
  padding-top: 20px;
  border-top: 1px solid #dbdbdb;
`;
const Cancellations = styled.div`
  padding: 20px 0;
  border-top: 1px solid #dbdbdb;
`;
const Hr = styled.hr`
  max-width: 67px;
  height: 1px;
  margin: 4px 0px;
  border: none;
  color: #dbdbdb;
  background-color: #dbdbdb;
`;
const Free = styled.p`
  font-family: CircularBook, "Helvetica Neue", Helvetica, sans-serif;
  margin-bottom: 0;
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
      <Amenities>
        <Caption>Amenities</Caption>
        <Properties>
          <Property>
            <Icon src={internet} /> Internet
          </Property>
          <Property>
            <Icon src={family} /> Family/kid friendly
          </Property>
          <Property>
            <Icon src={wifi} /> Wireless Internet
          </Property>
          <Property>
            <Icon src={parking} /> Free parking on premises
          </Property>
        </Properties>
        <ReadMore>Show all amenities</ReadMore>
      </Amenities>
      <Hint>
        <Caption>Always communicate through Airbnb</Caption>
        <p>
          To protect your payment, never transfer money or communicate outside
          of the Airbnb website or app.
        </p>
        <Contact>Learn more</Contact>
      </Hint>
      <Rules>
        <Caption>House rules</Caption>
        <p>
          Check-in is anytime after 1PM<br />
          Check out by 11AM
        </p>
        <ReadMore>Read all rules</ReadMore>
      </Rules>
      <Cancellations>
        <Caption>Cancellations</Caption>
        <Side>
          <Free>Free cancellation</Free>
          <p>Cancel within 48 hours of booking to get a full refund.</p>
        </Side>
        <Shield src={shield} />
        <Hr />
        <p>Flexible</p>
        <p>
          Cancel up to 24 hours before check in and get a full refund (minus
          service fees). Cancel within 24 hours of your trip and the firs…
        </p>
      </Cancellations>
    </Overview>
  );
}
