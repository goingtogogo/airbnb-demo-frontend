import React from "react";
import styled from "styled-components";

// import RoomType from "./RoomType";
import check from "../UI/check.svg";
import plus from "../UI/counter-plus.svg";
import minus from "../UI/counter-minus.svg";
import switcher from "../UI/switcher.svg";
import switched from "../UI/switched.svg";

import arrowdown from "../UI/arrow-down.svg";

const MoreFilters = styled.div`
  padding: 4px;
`;

const Beds = styled.div`
  display: flex;
  flex-direction: column;
`;
const Section = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 30px;
  padding-top: 4px;
  border-top: 1px solid rgba(72, 72, 72, 0.3);
`;
const Type = styled.div`
  width: 60%;
  flex-basis: 50%;
  display: flex;
  align-items: center;
`;
const Title = styled.h3`
  flex-basis: 100%;
  margin: 24px 0;
  font-family: CircularBook, "Helvetica Neue", Helvetica, sans-serif;
  line-height: 23px;
  font-size: 20px;
`;
const Option = styled.span`
  flex-basis: 65%;
  font-family: CircularLight, "Helvetica Neue", Helvetica, sans-serif;
  line-height: 21px;
  font-size: 18px;
`;
const Impovements = Type.extend`
  margin-top: 16px;
`;
const Subtitle = styled.p`
  margin-top: 4px;
  font-family: CircularLight, "Helvetica Neue", Helvetica, sans-serif;
  line-height: 19px;
  font-size: 16px;
`;

const Description = styled.div`
  display: flex;
  flex-direction: column;
  flex-basis: 50%;
`;

const Plus = styled.button`
  width: 32px;
  height: 32px;
  border: none;
  background-color: transparent;
  background-image: url(${plus});
  background-repeat: no-repeat;
  background-size: 100%;
`;
const Minus = styled.button`
  width: 32px;
  height: 32px;
  border: none;
  background-color: transparent;
  background-image: url(${minus});
  background-repeat: no-repeat;
  background-size: 100%;
`;

const Counter = styled.span`
  aling-self: baseline;
  width: 48px;
  text-align: center;
  font-family: CircularLight, "Helvetica Neue", Helvetica, sans-serif;
  line-height: 42px;
  font-size: 18px;
`;
const Switcher = styled.button`
  align-self: center;
  width: 64px;
  height: 40px;
  border: none;
  background-color: transparent;
  background-image: url(${props => (props.switcher ? switched : switcher)});
  background-repeat: no-repeat;
  background-size: 100%;
`;

const LearnMore = styled.a`
  font-family: CircularLight, "Helvetica Neue", Helvetica, sans-serif;
  line-height: 19px;
  font-size: 16px;
  color: #008489;
  cursor: pointer;
`;
const SeeAll = LearnMore.extend`
  margin-top: 24px;
  font-family: CircularBook, "Helvetica Neue", Helvetica, sans-serif;
  &:after {
    margin-left: 8px;
    width: 12px;
    height: 7px;
    display: inline-block;
    vertical-align: baseline;
    content: "";
    background-image: url(${arrowdown});
    background-repeat: no-repeat;
    background-size: 100%;
  }
`;

const Checkbox = styled.div`
  margin-right: 12px;
  border: 1px solid red;
  position: relative;
  width: 24px;
  height: 24px;
  border: 1px solid rgba(72, 72, 72, 0.3);
  border-radius: 4px;
  background-color: #fff;
  cursor: pointer;
  &:after {
    position: absolute;
    content: " ";
    width: 26px;
    height: 26px;
    background-image: url(${check});
    background-repeat: no-repeat;
    backroung-size: 60%;
    visibility: ${props => (props.isChecked ? "visible" : "hidden")};
  }
`;

export default class extends React.Component {
  decCount = index => {
    this.props.onChange({
      beds: Object.values({
        ...this.props.beds,
        [index]: this.props.beds[index] - 1
      })
    });
  };

  incCount = index => {
    this.props.onChange({
      beds: Object.values({
        ...this.props.beds,
        [index]: this.props.beds[index] + 1
      })
    });
  };

  onSwitch = switcher => {
    this.props.onChange({ superhost: !this.props.superhost });
  };

  handleAmenities = amenity => {
    if (this.props.amenities.filter(x => x === amenity).length > 0) {
      this.props.onChange({
        amenities: this.props.amenities.filter(x => x !== amenity)
      });
    } else {
      this.props.onChange({ amenities: [...this.props.amenities, amenity] });
    }
  };

  handleFacilities = facility => {
    if (this.props.facilities.filter(x => x === facility).length > 0) {
      this.props.onChange({
        facility: this.props.facilities.filter(x => x !== facility)
      });
    } else {
      this.props.onChange({ facility: [...this.props.facilities, facility] });
    }
  };

  render() {
    return (
      <MoreFilters>
        {/* <MediaQuery minWidth={768} maxWidth={992}>
          <RoomType />
        </MediaQuery> */}
        <Beds>
          <Title>Rooms and beds</Title>
          <Type>
            <Option>Bedrooms</Option>
            <Minus onClick={() => this.decCount(0)} />
            <Counter>{this.props.beds[0]}</Counter>
            <Plus onClick={() => this.incCount(0)} />
          </Type>
          <Type>
            <Option>Beds</Option>
            <Minus onClick={() => this.decCount(1)} />
            <Counter>{this.props.beds[1]}</Counter>
            <Plus onClick={() => this.incCount(1)} />
          </Type>
          <Type>
            <Option>Bathrooms</Option>
            <Minus onClick={() => this.decCount(2)} />
            <Counter>{this.props.beds[2]}</Counter>
            <Plus onClick={() => this.incCount(2)} />
          </Type>
        </Beds>
        <Section>
          <Title>More options</Title>
          <Description>
            <Option>Superhost</Option>
            <Subtitle>Stay with recognized hosts.</Subtitle>
            <LearnMore>Learn more</LearnMore>
          </Description>
          <Switcher switcher={this.props.superhost} onClick={this.onSwitch} />
        </Section>
        <Section>
          <Title>Amenities</Title>
          <Impovements>
            <Checkbox
              isChecked={
                this.props.amenities.includes("heating") && this.props.isOpen
              }
              onClick={() => this.handleAmenities("heating")}
            />
            <Option>Heating</Option>
          </Impovements>
          <Impovements>
            <Checkbox
              isChecked={
                this.props.amenities.includes("kitchen") && this.props.isOpen
              }
              onClick={() => this.handleAmenities("kitchen")}
            />
            <Option>Kitchen</Option>
          </Impovements>
          <Impovements>
            <Checkbox
              isChecked={
                this.props.amenities.includes("tv") && this.props.isOpen
              }
              onClick={() => this.handleAmenities("tv")}
            />
            <Option>TV</Option>
          </Impovements>
          <Impovements>
            <Checkbox
              isChecked={
                this.props.amenities.includes("wifi") && this.props.isOpen
              }
              onClick={() => this.handleAmenities("wifi")}
            />
            <Option>Wireless Internet</Option>
          </Impovements>
          <SeeAll>See all amenities</SeeAll>
        </Section>
        <Section>
          <Title>Facilities</Title>
          <Impovements>
            <Checkbox
              isChecked={
                this.props.facilities.includes("elevator") && this.props.isOpen
              }
              onClick={() => this.handleFacilities("elevator")}
            />
            <Option>Elevator</Option>
          </Impovements>
          <Impovements>
            <Checkbox
              isChecked={
                this.props.facilities.includes("freeparking") &&
                this.props.isOpen
              }
              onClick={() => this.handleFacilities("freeparking")}
            />
            <Option>Free parking on premises</Option>
          </Impovements>
          <Impovements>
            <Checkbox
              isChecked={
                this.props.facilities.includes("pool") && this.props.isOpen
              }
              onClick={() => this.handleFacilities("pool")}
            />
            <Option>Pool</Option>
          </Impovements>
          <Impovements>
            <Checkbox
              isChecked={
                this.props.facilities.includes("wheelchair") &&
                this.props.isOpen
              }
              onClick={() => this.handleFacilities("wheelchair")}
            />
            <Option>Wheelchair accessible</Option>
          </Impovements>
          <SeeAll>See all facilities</SeeAll>
        </Section>
      </MoreFilters>
    );
  }
}
