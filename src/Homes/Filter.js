import React from "react";
import styled from "styled-components";

import moment from "moment";
import PopUp from "./PopUp";
import Dates from "./Dates";

const Wrapper = styled.div`display: inline-block;`;
const Button = styled.button`
  margin: 16px 12px 14px 0;
  padding: 6px 16px;
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

export default class extends React.Component {
  state = {
    isOpen: false,
    title: null
  };

  handleClick = () => {
    this.setState(prevState => ({ isOpen: !prevState.isOpen }));

    if (this.props.isDateComponent) {
      //for Dates logic
      if (this.state.isOpen) {
        this.setState({ title: "Dates" });
      } else {
        this.setState({ title: "Check in-Check out" });
      }
    }
  };

  selectDates = (start, end) => {
    this.setState({
      title:
        start.format("MMM DD") +
        " - " +
        (end
          ? end
          : moment(start.format("MMM DD"), "MMM DD").add("days", 1)
        ).format("MMM DD")
    });
  };

  render() {
    if (this.state.title === null) {
      this.setState({ title: this.props.title });
    }

    return (
      <Wrapper>
        <Button onClick={this.handleClick} isOpen={this.state.isOpen}>
          {this.state.title}
        </Button>
        <PopUp isOpen={this.state.isOpen} toClose={this.handleClick}>
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
