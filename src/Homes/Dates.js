import React from "react";
import styled from "styled-components";
import MediaQuery from "react-responsive";

import "./react_dates_overrides.css";
import "react-dates/initialize";
import "react-dates/lib/css/_datepicker.css";
import { DayPickerRangeController } from "react-dates";
import moment from "moment";

import close from "./close.svg";

const Close = styled.button`
  width: 16px;
  height: 16px;
  border: none;
  background-color: #fff;
  background-image: url(${close});
  background-repeat: no-repeat;
  background-size: cover;
  cursor: pointer;
`;

const Title = styled.div`
  display: inline-block;
  font-size: 14px;
  font-family: CircularBook, "Helvetica Neue", Helvetica, sans-serif;
  color: #383838;
`;

const Reset = styled.button`
  font-size: 14px;
  font-family: CircularBook, "Helvetica Neue", Helvetica, sans-serif;
  color: #0f7276;
  border: none;
  background-color: inherit;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 16px 8px 20px 8px;
`;

export default class extends React.Component {
  state = {
    startDate: null,
    endDate: null,
    focusedInput: "startDate",
    isOpen: false
  };

  onFocusChange = focusedInput => {
    this.setState({
      focusedInput: !focusedInput ? "startDate" : focusedInput
    });
  };

  onDatesChange = ({ startDate, endDate }) => {
    this.setState({ startDate, endDate });
    this.props.dateChanged(startDate, endDate);
  };

  handleClick = () => {
    this.setState(prevState => ({ isOpen: !prevState.isOpen }));
  };
  render() {
    return (
      <div>
        <MediaQuery minWidth={992}>
          <DayPickerRangeController
            startDate={this.state.startDate}
            endDate={this.state.endDate}
            onDatesChange={this.onDatesChange}
            onFocusChange={this.onFocusChange}
            focusedInput={this.state.focusedInput}
            numberOfMonths={2}
            isDayBlocked={day => day.isBefore(moment(), "day")}
          />
        </MediaQuery>
        <MediaQuery minWidth={768} maxWidth={992}>
          <DayPickerRangeController
            startDate={this.state.startDate}
            endDate={this.state.endDate}
            onDatesChange={this.onDatesChange}
            onFocusChange={this.onFocusChange}
            focusedInput={this.state.focusedInput}
            numberOfMonths={1}
            isDayBlocked={day => day.isBefore(moment(), "day")}
          />
        </MediaQuery>
        <MediaQuery maxWidth={767}>
          <Header>
            <Close onClick={this.handleClick} />
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
        </MediaQuery>
      </div>
    );
  }
}
