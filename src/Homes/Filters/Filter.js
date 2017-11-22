import React from "react";
import styled from "styled-components";

import PopUp from "./PopUp";
import Dates from "./Dates";

const Wrapper = styled.div`
  display: inline-block;
`;
const Button = styled.button`
  margin: 10px 10px 12px 0;
  padding: 7px 16px;
  border: 1px solid rgba(72, 72, 72, 0.2);
  border-radius: 4px;
  font-family: CircularBook, "Helvetica Neue", Helvetica, sans-serif;
  font-size: 14px;
  line-height: 16px;
  color: #383838;
  background-color: ${props => (props.isOpen ? "#008489" : "#fff")};
  color: ${props => (props.isOpen ? "#fff" : "#383838")};
  cursor: pointer;
`;
export const formatDatesLabel = (start, end) => {
  if (!start) return "Check in — Check out";
  const formatDateStart = start.format("MMM DD");
  if (start && end) return `${formatDateStart}  —  ${end.format("MMM DD")}`;
  if (start && !end) return `${formatDateStart}  —   Check out`;
};

export default class extends React.Component {
  state = {
    title: null
  };

  selectDates = (start, end) => {
    this.setState({
      title: formatDatesLabel(start, end)
    });
  };
  handleClick = () => {
    this.props.handleClick(this.props.title);
  };

  render() {
    if (this.state.title === null) {
      this.setState({ title: this.props.title });
    }

    return (
      <Wrapper>
        <Button isOpen={this.props.isOpen} onClick={this.handleClick}>
          {this.state.title}
        </Button>
        <PopUp isOpen={this.props.isOpen} toClose={this.handleClick}>
          {this.props.isDateComponent ? (
            <Dates dateChanged={this.selectDates} />
          ) : (
            this.props.children
          )}
        </PopUp>
      </Wrapper>
    );
  }
}
