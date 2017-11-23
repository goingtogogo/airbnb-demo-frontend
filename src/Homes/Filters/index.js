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

export default class extends React.Component {
  state = {
    isOpen: true,
    openedFilter: null,
    rooms: [],
    guests: [1, 0, 0],
    prices: { min: 10, max: 1000 },
    instant: false,
    dates: {
      startDate: null,
      endDate: null
    },
    beds: [0, 0, 0],
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

  handleCancel = title => {
    if (title === "Dates") this.onDatesChange(null, null);
    if (title === "Guests") this.onGuestsChange([1, 0, 0]);
    if (title === "Room Type") this.onRoomsChange([]);
    if (title === "Price") this.onPricesChange({ min: 10, max: 1000 });
    if (title === "Instant book") this.onInstantChange(false);
    this.handleClick(title);
  };

  onRoomsChange = rooms => {
    this.setState({ rooms: rooms });
  };
  onGuestsChange = guests => {
    this.setState({ guests: guests });
  };
  onPricesChange = prices => {
    this.setState({ prices: prices });
  };
  onInstantChange = instant => {
    this.setState({ instant: instant });
  };
  onDatesChange = (start, end) => {
    this.setState({ dates: { startDate: start, endDate: end } });
  };
  onBedsChange = beds => {
    this.setState({ beds: beds });
  };
  onSuperhostChange = superhost => {
    this.setState({ superhost: superhost });
  };
  onAmenitiesChange = amenities => {
    this.setState({ amenities: amenities });
  };

  onFacilitiesChange = facilities => {
    this.setState({ facilities: facilities });
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
            handleCancel={this.handleCancel}
          >
            <Dates
              dateChanged={this.onDatesChange}
              startDate={this.state.dates.startDate}
              endDate={this.state.dates.endDate}
            />
          </Filter>
          <Filter
            title="Guests"
            type="Guests"
            isOpen={this.state.isOpen && this.state.openedFilter === "Guests"}
            handleClick={this.handleClick}
            handleCancel={this.handleCancel}
          >
            <Guests
              onGuestsChange={this.onGuestsChange}
              guests={this.state.guests}
            />
          </Filter>
          <MediaQuery minWidth={992}>
            <Filter
              title="Room Type"
              type="Room Type"
              handleClick={this.handleClick}
              handleCancel={this.handleCancel}
              isOpen={
                this.state.isOpen && this.state.openedFilter === "Room Type"
              }
            >
              <RoomType
                isOpen={
                  this.state.isOpen && this.state.openedFilter === "Room Type"
                }
                onRoomsChange={this.onRoomsChange}
                rooms={this.state.rooms}
              />
            </Filter>
            <Filter
              title="Price"
              type="Price"
              handleClick={this.handleClick}
              handleCancel={this.handleCancel}
              isOpen={this.state.isOpen && this.state.openedFilter === "Price"}
            >
              <Price
                isOpen={
                  this.state.isOpen && this.state.openedFilter === "Price"
                }
                onPricesChange={this.onPricesChange}
                prices={this.state.prices}
              />
            </Filter>
            <Filter
              title="Instant book"
              type="Instant book"
              handleClick={this.handleClick}
              handleCancel={this.handleCancel}
              isOpen={
                this.state.isOpen && this.state.openedFilter === "Instant book"
              }
            >
              <Instant
                isOpen={
                  this.state.isOpen &&
                  this.state.openedFilter === "Instant book"
                }
                onInstantChange={this.onInstantChange}
                instant={this.state.instant}
              />
            </Filter>
          </MediaQuery>
          <More
            title="More filters"
            type="More filters"
            handleClick={this.handleClick}
            handleCancel={this.handleCancel}
            isOpen={
              this.state.isOpen && this.state.openedFilter === "More filters"
            }
          >
            <MoreFilters
              isOpen={
                this.state.isOpen && this.state.openedFilter === "More filters"
              }
              onBedsChange={this.onBedsChange}
              onSuperhostChange={this.onSuperhostChange}
              onAmenitiesChange={this.onAmenitiesChange}
              onFacilitiesChange={this.onFacilitiesChange}
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
