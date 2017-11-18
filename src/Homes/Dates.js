import React from "react";
import "./react_dates_overrides.css";
import "react-dates/initialize";
import "react-dates/lib/css/_datepicker.css";
import { DayPickerRangeController } from "react-dates";
import styled from "styled-components";
import moment from "moment";
import close from "./close.svg";

const Desktop = styled.div`
  display: none;
  @media (min-width: 992px) {
    display: block;
  }
`;
const Tablet = styled.div`
  display: none;
  @media (min-width: 768px) {
    display: block;
  }
  @media (min-width: 992px) {
    display: none;
  }
`;
const Mobile = styled.div`
  width: 100vw;
  display: block;
  @media (min-width: 768px) {
    display: none;
  }
`;
const Close = styled.a`
  width: 16px;
  height: 16px;
  background-image: url(${close});
  background-repeat: no-repeat;
  background-size: cover;
  cursor: pointer;
`;

const Title = styled.div`
  display: inline-block;
  font-size: 14px;
  font-family: "Circular Air Book", "Arial", sans-serif;
  color: #383838;
`;

const Reset = styled.button`
  font-size: 14px;
  font-family: "Circular Air Book", "Arial", sans-serif;
  color: #0f7276;
  border: none;
  background-color: inherit;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 16px 8px 40px 8px;
`;

export default class extends React.Component {
  state = {
    startDate: null,
    endDate: null,
    focusedInput: "startDate"
  };
  onFocusChange = focusedInput => {
    this.setState({
      focusedInput: !focusedInput ? "startDate" : focusedInput
    });
  };
  onDatesChange = ({ startDate, endDate }) => {
    this.setState({ startDate, endDate });
    console.log(this);
    this.props.dateChanged(startDate, endDate);
  };

  render() {
    return (
      <div>
        <Desktop>
          <DayPickerRangeController
            startDate={this.state.startDate}
            endDate={this.state.endDate}
            onDatesChange={this.onDatesChange}
            onFocusChange={this.onFocusChange}
            focusedInput={this.state.focusedInput}
            numberOfMonths={2}
            isDayBlocked={day => day.isBefore(moment(), "day")}
          />
        </Desktop>
        <Tablet>
          <DayPickerRangeController
            startDate={this.state.startDate}
            endDate={this.state.endDate}
            onDatesChange={this.onDatesChange}
            onFocusChange={this.onFocusChange}
            focusedInput={this.state.focusedInput}
            numberOfMonths={1}
            isDayBlocked={day => day.isBefore(moment(), "day")}
          />
        </Tablet>
        <Mobile>
          <Header>
            <Close />
            <Title>When</Title>
            <Reset>Reset</Reset>
          </Header>
          <DayPickerRangeController
            startDate={this.state.startDate}
            endDate={this.state.endDate}
            onDatesChange={this.onDatesChange}
            onFocusChange={this.onFocusChange}
            focusedInput={this.state.focusedInput}
            numberOfMonths={2}
            orientation="vertical"
            isDayBlocked={day => day.isBefore(moment(), "day")}
          />
        </Mobile>
      </div>
    );
  }
}
