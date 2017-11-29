import React from "react";
import styled from "styled-components";

import { Title, ReadText } from "../../UI";

import yudy from "../../UI/yudy.png";
import verified from "./verified.svg";

const Main = styled.div`
  width: 100%;
  display: flex;
`;
const Left = styled.div`
  flex-basis: 83%;
`;

const Wrapper = styled.div`
  width: 66%;
  padding-top: 58px;
  padding-bottom: 52px;
  font-family: CircularLight, "Helvetica Neue", Helvetica, sans-serif;
`;

const Subtitle = styled.p`
  margin-top: 0;
  margin-bottom: 4px;
  color: #636363;
  font-size: 16px;
`;

const Characters = styled.div`
  display: flex;
`;

const Character = styled.div`
  display: flex;
  align-items: center;
  margin-right: 33px;
  margin-bottom: 24px;
  color: #636363;
  font-size: 18px;
  line-height: 21px;
`;

const Counter = styled.div`
  margin-right: 16px;
  padding: 6px 10px;
  border-radius: 6px;
  color: #ffffff;
  font-size: 18px;
  text-align: center;
  font-weight: bold;
  background: linear-gradient(
    137.16deg,
    rgba(255, 195, 51, 0.8) 0%,
    #ffc333 41.52%,
    #ffb400 41.62%,
    #ffb400 100%
  );
`;

const Verified = styled.img`
  margin-right: 16px;
`;

const Description = styled.p`
  margin-top: 0;
  margin-bottom: 16px;
  color: #383838;
  font-size: 18px;
  line-height: 21px;
`;

const Contact = styled.button`
  display: inline-block;
  padding: 7px 12px;
  border: 1px solid #008489;
  border-radius: 2px;
  color: #0f7276;
  font-size: 14px;
  vertical-align: middle;
  text-align: center;
  text-decoration: none;
  cursor: pointer;
  background: #ffffff;
`;

const Options = styled.div`
  margin-top: 24px;
`;
const Option = styled.p`
  margin: 0;
  margin-bottom: 18px;
  color: #383838;
  font-size: 18px;
  line-height: 14px;
  &:last-child {
    margin-bottom: 0;
  }
`;
const Value = styled.span`
  font-family: CircularBook, "Helvetica Neue", Helvetica, sans-serif;
`;
const Photo = styled.img`
  width: 88px;
  height: 88px;
`;

export default function() {
  return (
    <Wrapper>
      <Main>
        <Left>
          <Title>Hosted by Yudy & Victoria</Title>
          <Subtitle>
            Santa Ana, California, United States · Joined in August 2014
          </Subtitle>
        </Left>
        <Photo src={yudy} />
      </Main>
      <Characters>
        <Character>
          <Counter>153</Counter>Reviews
        </Character>
        <Character>
          <Verified src={verified} alt="" width="32" height="32" />Verified
        </Character>
      </Characters>
      <Description>
        Yudy and I (Victoria) are sisters-in law. Yudy lives in Colombia and
        would be your hostess on the property. I live in California and am the
        owner of the property. It is my goal to create a "boutique eco-resort"
        on the approximately 5 acre farm we have in the coffee growing reg…
        <ReadText> Read more</ReadText>
      </Description>
      <Contact>Contact host</Contact>
      <Options>
        <Option>
          Languages: <Value>English, Español</Value>
        </Option>
        <Option>
          Response rate: <Value>100%</Value>
        </Option>
        <Option>
          Response time: <Value>within a few hours</Value>
        </Option>
      </Options>
    </Wrapper>
  );
}
