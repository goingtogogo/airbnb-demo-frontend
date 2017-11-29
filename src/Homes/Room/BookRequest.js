import React from "react";
import styled from "styled-components";

import Ratio from "./Reviews/Ratio";
import arrowdown from "../../UI/assets/arrow-down.svg";
import lamp from "../UI/lamp.svg";
import flag from "../UI/flag.svg";

const Form = styled.div`
  padding: 15px 22px 0 22px;
  border: 1px solid #dbdbdb;
  background: #ffffff;
  font-family: CircularBook, "Helvetica Neue", Helvetica, sans-serif;
`;

const Price = styled.p`
  margin-top: 0;
  margin-bottom: 0;
  color: #383838;
  font-family: CircularBold, "Helvetica Neue", Helvetica, sans-serif;
  font-size: 24px;
`;

const Caption = styled.span`
  color: #636363;
  font-family: CircularBook, "Helvetica Neue", Helvetica, sans-serif;
  font-size: 12px;
  line-height: 14px;
`;

const Wrapper = styled.div`
  margin-bottom: 15px;
  padding-bottom: 22px;
  border-bottom: 1px solid #dbdbdb;
`;
const Bottom = styled.div`
  font-family: CircularBook, "Helvetica Neue", Helvetica, sans-serif;
  font-size: 14px;
  line-height: 16px;
  background-image: url(${lamp});
  background-repeat: no-repeat;
  background-size: 48px;
  background-position: 103%;
`;
const Viewed = styled.p`
  margin-top: 4px;
  font-family: CircularLight, "Helvetica Neue", Helvetica, sans-serif;
  width: 80%;
`;

const Report = styled.div`
  font-family: CircularBook, "Helvetica Neue", Helvetica, sans-serif;
  font-size: 14px;
  line-height: 16px;
  margin-top: 16px;
  text-align: center;
  background-image: url(${flag});
  background-repeat: no-repeat;
  background-size: 16px;
  background-position: 25%;
`;

const Inputs = styled.div`
  display: flex;
  margin-bottom: 16px;
`;

const Label = styled.label`
  font-size: 12px;
`;

const Input = styled.input`
  font-family: CircularBook, "Helvetica Neue", Helvetica, sans-serif;
  display: block;
  width: 100%;
  margin-top: 8px;
  padding: 12px;
  border: 1px solid #dbdbdb;
  color: #636363;
  font-size: 14px;
  background: #ffffff;
  &::placeholder {
    color: #636363;
  }
`;
const CheckIn = Input.extend`
  border-right: none;
`;
const CheckOut = Input.extend`
  width: 80%;
`;

const Guests = styled.select`
  width: 100%;
  cursor: pointer;
  font-family: CircularBook, "Helvetica Neue", Helvetica, sans-serif;
  margin-top: 8px;
  margin-bottom: 20px;
  padding: 12px;
  border: 1px solid rgba(118, 118, 118, 0.2);
  color: #636363;
  font-size: 14px;
  text-align: left;
  background: #ffffff url(${arrowdown}) right 12px center no-repeat;
  text-indent: 0.01px;
  text-overflow: "";
  appearance: none;
  ::-ms-expand {
    display: none;
  }
`;

const Request = styled.button`
  display: block;
  width: 100%;
  border: none;
  text-align: center;
  text-decoration: none;
  cursor: pointer;
  padding: 10px 55px;
  margin-bottom: 10px;
  border-radius: 4px;
  font-family: CircularBold, "Helvetica Neue", Helvetica, sans-serif;
  font-size: 18px;
  line-height: 19px;
  background: #ff5a5f;
  color: #ffffff;
`;

const Hint = styled.p`
  margin-bottom: 14px;
  padding-bottom: 24px;
  border-bottom: 1px solid #dbdbdb;
  color: #383838;
  font-size: 12px;
  line-height: 19px;
  text-align: center;
`;

export default function() {
  return (
    <div>
      <Form>
        <Price>
          $41 <Caption>per night</Caption>
        </Price>
        <Wrapper>
          <Ratio />
        </Wrapper>
        <Inputs>
          <Label>
            Check in
            <CheckIn placeholder="mm/dd/yyyy" />
          </Label>
          <Label>
            Check out
            <CheckOut placeholder="mm/dd/yyyy" />
          </Label>
        </Inputs>
        <Label>
          Guests
          <Guests>
            <option value="">1 guest</option>
          </Guests>
        </Label>
        <Request>Request a book</Request>
        <Hint>You won’t be charged yet</Hint>
        <Bottom>
          This home is on people’s minds.
          <Viewed>It’s been viewed 500+ times in the past week.</Viewed>
        </Bottom>
      </Form>
      <Report>Report this listing</Report>
    </div>
  );
}
