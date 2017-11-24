import React from "react";
import styled from "styled-components";
import MediaQuery from "react-responsive";

import "../UI/react_dates_overrides.css";
import "react-dates/initialize";
import "react-dates/lib/css/_datepicker.css";
import { DayPickerRangeController } from "react-dates";
import moment from "moment";

import longarrow from "../UI/long-arrow.svg";

const Dates = styled.div`
  width: 100%;
  padding: 25px 8px;
  background: #ffffff;
  box-shadow: 0px 0.5px 0px rgba(72, 72, 72, 0.3);
`;

const Check = styled.span`
  font-family: CircularLight, "Helvetica Neue", Helvetica, sans-serif;
  line-height: 21px;
  font-size: 18px;
  color: ${props => (props.Selected ? "#0f7276" : "#636363")};
  border-bottom: ${props => (props.Selected ? "1px solid #008489" : "none")};
  padding-bottom: 4px;
`;

const Arrow = styled.img`
  width: 18px;
  height: 11px;
  display: inline-block;
  margin: 0 16px;
`;
const Title = styled.div`
  position: absolute;
  top: 16px;
  left: calc(50% - 20px);
  font-size: 14px;
  font-family: CircularBook, "Helvetica Neue", Helvetica, sans-serif;
  color: #383838;
`;

export default class extends React.Component {
  state = {
    focusedInput: "startDate"
  };

  onFocusChange = focusedInput => {
    this.setState({
      focusedInput: !focusedInput ? "startDate" : focusedInput
    });
  };

  onDatesChange = ({ startDate, endDate }) => {
    this.props.dateChanged({
      dates: { startDate: startDate, endDate: endDate }
    });
  };

  render() {
    return (
      <div>
        <MediaQuery minWidth={992}>
          <DayPickerRangeController
            startDate={this.props.startDate}
            endDate={this.props.endDate}
            onDatesChange={this.onDatesChange}
            onFocusChange={this.onFocusChange}
            focusedInput={this.state.focusedInput}
            numberOfMonths={2}
            isDayBlocked={day => day.isBefore(moment(), "day")}
          />
        </MediaQuery>
        <MediaQuery minWidth={768} maxWidth={992}>
          <DayPickerRangeController
            startDate={this.props.startDate}
            endDate={this.props.endDate}
            onDatesChange={this.onDatesChange}
            onFocusChange={this.onFocusChange}
            focusedInput={this.state.focusedInput}
            numberOfMonths={1}
            isDayBlocked={day => day.isBefore(moment(), "day")}
          />
        </MediaQuery>
        <MediaQuery maxWidth={767}>
          <Title>When</Title>
          <Dates>
            <Check>Check-in</Check>
            <Arrow src={longarrow} />
            <Check>Check-out</Check>
          </Dates>
          <DayPickerRangeController
            startDate={this.props.startDate}
            endDate={this.props.endDate}
            onDatesChange={this.onDatesChange}
            onFocusChange={this.onFocusChange}
            focusedInput={this.state.focusedInput}
            numberOfMonths={2}
            orientation="vertical"
            isDayBlocked={day => day.isBefore(moment(), "day")}
          />
        </MediaQuery>
      </div>
    );
  }
}
