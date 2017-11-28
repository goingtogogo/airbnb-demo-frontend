import React from "react";
import styled from "styled-components";

import check from "../../UI/check.svg";
import plus from "../../UI/counter-plus.svg";
import minus from "../../UI/counter-minus.svg";
import switcher from "../../UI/switcher.svg";
import switched from "../../UI/switched.svg";

import arrowdown from "../../UI/arrow-down.svg";

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
  flex-basis: 49%;
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
  padding: 2px;
  margin-top: 14px;
  cursor: pointer;
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
  cursor: pointer;
`;
const Minus = styled.button`
  width: 32px;
  height: 32px;
  border: none;
  background-color: transparent;
  background-image: url(${minus});
  background-repeat: no-repeat;
  background-size: 100%;
  cursor: pointer;
`;

const Counter = styled.span`
  aling-self: baseline;
  width: 48px;
  text-align: center;
  font-family: CircularLight, "Helvetica Neue", Helvetica, sans-serif;
  line-height: 42px;
  font-size: 18px;
`;
const Label = styled.label`
  cursor: pointer;
  align-self: flex-start;
  margin-top: 10px;
  display: flex;
  justify-content: strecth;
  width: 64px;
  height: 40px;
`;

const Switcher = styled.input`
  position: absolute;
  height: 1px;
  width: 1px;
  visibility: hidden;
`;

const Off = styled.img`
  display: block;
  ${Switcher}:checked ~ & {
    display: none;
  }
`;
const On = styled.img`
  display: none;
  ${Switcher}:checked ~ & {
    display: block;
  }
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
const amenities = ["Heating", "Kitchen", "TV", "Wireless Internet"];
const facilities = [
  "Elevator",
  "Free parking on premises",
  "Pool",
  "Wheelchair accessible"
];

export default class extends React.Component {
  decCount = index => {
    if (this.props.beds[index] > 0)
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
        facilities: this.props.facilities.filter(x => x !== facility)
      });
    } else {
      this.props.onChange({ facilities: [...this.props.facilities, facility] });
    }
  };

  render() {
    return (
      <MoreFilters>
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
          <Label onKeyPress={this.onSwitch} tabIndex="0">
            <Switcher
              type="checkbox"
              onClick={this.onSwitch}
              checked={this.props.superhost}
            />
            <Off src={switcher} />
            <On src={switched} />
          </Label>
        </Section>
        <Section>
          <Title>Amenities</Title>
          {amenities.map((item, index) => (
            <Impovements
              onClick={() => this.handleAmenities(item)}
              onKeyPress={() => this.handleAmenities(item)}
              tabIndex="0"
            >
              <Checkbox
                isChecked={
                  this.props.amenities.includes(item) && this.props.isOpen
                }
              />
              <Option>{item}</Option>
            </Impovements>
          ))}
          <SeeAll tabIndex="0">See all amenities</SeeAll>
        </Section>
        <Section>
          <Title>Facilities</Title>
          {facilities.map((item, index) => (
            <Impovements
              onClick={() => this.handleFacilities(item)}
              onKeyPress={() => this.handleFacilities(item)}
              tabIndex="0"
            >
              <Checkbox
                isChecked={
                  this.props.facilities.includes(item) && this.props.isOpen
                }
              />
              <Option>{item}</Option>
            </Impovements>
          ))}
          <SeeAll tabIndex="0">See all facilities</SeeAll>
        </Section>
      </MoreFilters>
    );
  }
}
