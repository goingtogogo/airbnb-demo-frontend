import React from "react";
import styled from "styled-components";
import MediaQuery from "react-responsive";

import Filter from "./Filter";
import More from "./More";
import Dates from "./Dates";
import RoomType from "./RoomType";
import Guests from "./Guests";
import Instant from "./InstantBook";
import Price from "./Price";
import MoreFilters from "./MoreFilters";

const Filters = styled.div`
  position: fixed;
  top: 79px;
  left: 0;
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

export const formatDatesLabel = (start, end) => {
  if (!start) return "Dates";
  const formatDateStart = start.format("MMM DD");
  if (start && end) return `${formatDateStart}  —  ${end.format("MMM DD")}`;
  if (start && !end) return `${formatDateStart}  —   Check out`;
};

export const formatGuestsLabel = guests => {
  if (
    Object.values(guests).reduce((common, current) => (common += current)) > 1
  ) {
    return `${Object.values(guests).reduce(
      (common, current) => (common += current)
    )} guests`;
  }
  return "Guests";
};

export const formatRoomsLabel = rooms => {
  if (rooms.length > 0) {
    return `Room type · ${rooms.length}`;
  }
  return "Room type";
};

export const formatPriceLabel = (min, max) => {
  if (min === 10 && max === 1000) {
    return "Prices";
  }
  return `From $${min} to $${max}`;
};

export default class extends React.Component {
  state = {
    rooms: [],
    guests: { adults: 1, childrens: 0, infants: 0 },
    prices: { min: 10, max: 1000 },
    instant: false,
    dates: {
      startDate: null,
      endDate: null
    },
    beds: { bedrooms: 0, beds: 0, bathrooms: 0 },
    superhost: false,
    amenities: [],
    facilities: []
  };

  handleClick = title => {
    if (title === this.state.openedFilter || !this.state.isOpen) {
      this.setState(prevState => ({ isOpen: !prevState.isOpen }));
    }
    this.setState({ openedFilter: title });
  };

  onChange = payload => {
    this.setState(payload);
  };

  render() {
    return (
      <Filters>
        <Wrapper>
          <Filter
            title={formatDatesLabel(
              this.state.dates.startDate,
              this.state.dates.endDate
            )}
            type="Dates"
            isOpen={this.state.isOpen && this.state.openedFilter === "Dates"}
            handleClick={this.handleClick}
          >
            <Dates
              dateChanged={this.onChange}
              startDate={this.state.dates.startDate}
              endDate={this.state.dates.endDate}
              onClose={this.handleClick}
            />
          </Filter>
          <Filter
            title={formatGuestsLabel(this.state.guests)}
            type="Guests"
            isOpen={this.state.isOpen && this.state.openedFilter === "Guests"}
            handleClick={this.handleClick}
          >
            <Guests
              onGuestsChange={this.onChange}
              onClose={this.handleClick}
              guests={this.state.guests}
            />
          </Filter>
          <MediaQuery minWidth={992}>
            <Filter
              title={formatRoomsLabel(this.state.rooms)}
              type="Room Type"
              handleClick={this.handleClick}
              isOpen={
                this.state.isOpen && this.state.openedFilter === "Room Type"
              }
            >
              <RoomType
                isOpen={
                  this.state.isOpen && this.state.openedFilter === "Room Type"
                }
                onRoomsChange={this.onChange}
                onClose={this.handleClick}
                rooms={this.state.rooms}
              />
            </Filter>
            <Filter
              title={formatPriceLabel(
                this.state.prices.min,
                this.state.prices.max
              )}
              type="Price"
              handleClick={this.handleClick}
              isOpen={this.state.isOpen && this.state.openedFilter === "Price"}
            >
              <Price
                isOpen={
                  this.state.isOpen && this.state.openedFilter === "Price"
                }
                onPricesChange={this.onChange}
                prices={this.state.prices}
                onClose={this.handleClick}
              />
            </Filter>
            <Filter
              title="Instant book"
              type="Instant book"
              handleClick={this.handleClick}
              isOpen={
                this.state.isOpen && this.state.openedFilter === "Instant book"
              }
            >
              <Instant
                isOpen={
                  this.state.isOpen &&
                  this.state.openedFilter === "Instant book"
                }
                onInstantChange={this.onChange}
                onClose={this.handleClick}
                instant={this.state.instant}
              />
            </Filter>
          </MediaQuery>
          <More
            title="More filters"
            type="More filters"
            handleClick={this.handleClick}
            isOpen={
              this.state.isOpen && this.state.openedFilter === "More filters"
            }
          >
            <MoreFilters
              isOpen={
                this.state.isOpen && this.state.openedFilter === "More filters"
              }
              onChange={this.onChange}
              onClose={this.handleClick}
              beds={this.state.beds}
              superhost={this.state.superhost}
              amenities={this.state.amenities}
              facilities={this.state.facilities}
            />
          </More>
        </Wrapper>
      </Filters>
    );
  }
}
