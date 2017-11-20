import React from "react";
import styled from "styled-components";
import MediaQuery from "react-responsive";

import Filter from "./Filter";

const Filters = styled.div`
  position: fixed;
  top: 79px;
  z-index: 2;
  background-color: #fff;
  width: 100%;
  border-top: 1px solid #e4e4e4;
  box-shadow: rgba(0, 0, 0, 0.117188) 0 1px 1px,
    rgba(255, 255, 255, 0.167969) 0 1px 0;
  @media (min-width: 992px) {
    display: inline-block;
  }
`;

const Wrapper = styled.div`
  max-width: 304px;
  padding: 0 8px;
  margin: 0 auto;
  @media (min-width: 768px) {
    max-width: 752px;
    padding: 0;
  }
  @media (min-width: 992px) {
    max-width: 962px;
  }
`;

export default class extends React.Component {
  state = {
    isOpen: true,
    title: null,
    openedFilter: null
  };
  handleClick = title => {
    if (title === this.state.openedFilter || !this.state.isOpen) {
      this.setState(prevState => ({ isOpen: !prevState.isOpen }));
    }
    this.setState({ openedFilter: title });
  };

  render() {
    return (
      <Filters>
        <Wrapper>
          <Filter
            title="Dates"
            isDateComponent
            isOpen={this.state.isOpen && this.state.openedFilter === "Dates"}
            handleClick={this.handleClick}
          />
          <Filter
            title="Guests"
            isOpen={this.state.isOpen && this.state.openedFilter === "Guests"}
            handleClick={this.handleClick}
          />
          <MediaQuery minWidth={992}>
            <Filter
              title="Room Type"
              handleClick={this.handleClick}
              isOpen={
                this.state.isOpen && this.state.openedFilter === "Room Type"
              }
            />
            <Filter
              title="Price"
              handleClick={this.handleClick}
              isOpen={this.state.isOpen && this.state.openedFilter === "Price"}
            />
            <Filter
              title="Instant book"
              handleClick={this.handleClick}
              isOpen={
                this.state.isOpen && this.state.openedFilter === "Instant book"
              }
            />
          </MediaQuery>
          <Filter
            title="More filters"
            handleClick={this.handleClick}
            isOpen={
              this.state.isOpen && this.state.openedFilter === "More filters"
            }
          />
        </Wrapper>
      </Filters>
    );
  }
}
