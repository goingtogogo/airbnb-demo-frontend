import React from "react";
import "./react_dates_overrides.css";
import "react-dates/initialize";
import "react-dates/lib/css/_datepicker.css";
import { DayPickerRangeController } from "react-dates";
import styled from "styled-components";
import moment from "moment";

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
  display: block;
  @media (min-width: 768px) {
    display: none;
  }
`;
export default class extends React.Component {
  state = {
    startDate: null,
    endDate: null,
    focusedInput: "startDate"
  };
  onFocusChange = focusedInput => {
    console.log(focusedInput);
    this.setState({
      focusedInput: !focusedInput ? "startDate" : focusedInput
    });
  };
  onDatesChange = ({ startDate, endDate }) => {
    this.setState({ startDate, endDate });
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
