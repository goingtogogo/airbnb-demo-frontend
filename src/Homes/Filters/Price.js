import React from "react";
import styled from "styled-components";
import Rheostat from "rheostat";
import "rheostat/css/slider.css";
import "rheostat/css/slider-horizontal.css";

import "../UI/rheostat.css";
import price from "../UI/price.svg";

const Price = styled.div`
  padding: 4px 16px;
  display: flex;
  flex-direction: column;
  width: 294px;
`;
const Title = styled.h3`
  margin: 0;
  display: flex;
  flex-direction: column;
  font-family: CircularLight, "Helvetica Neue", Helvetica, sans-serif;
  line-height: 19px;
  font-size: 16px;
  color: #383838;
`;

const Subtitle = styled.span`
  margin-top: 8px;
  font-family: CircularLight, "Helvetica Neue", Helvetica, sans-serif;
  line-height: 14px;
  font-size: 12px;
`;

const Wrapper = styled.div`
  position: relative;
  padding: 0px 16px;
  padding-top: 112px;
  padding-bottom: 30px;
`;
const Img = styled.img`
  position: absolute;
  left: 36px;
  top: 34px;
  width: 144px;
  height: auto;
`;

export default class extends React.Component {
  state = {
    values: { min: this.props.min || 10, max: this.props.max || "1000+" }
  };

  onValuesUpdated = sliderState => {
    this.setState({
      values: { min: sliderState.values[0], max: sliderState.values[1] }
    });
  };
  render() {
    return (
      <Price>
        <Title>
          ${this.state.values.min} — ${this.state.values.max}
        </Title>
        <Subtitle>The average nightly price is $75.</Subtitle>
        <Wrapper>
          <Img src={price} />
          <Rheostat
            min={10}
            max={1000}
            values={[10, 1000]}
            onValuesUpdated={this.onValuesUpdated}
          />
        </Wrapper>
      </Price>
    );
  }
}
