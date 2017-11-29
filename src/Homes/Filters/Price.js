import React from "react";
import styled from "styled-components";
import Rheostat from "rheostat";
import "rheostat/css/slider.css";
import "rheostat/css/slider-horizontal.css";

import { Footer, Cancel, Apply } from "../UI";
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
  onValuesUpdated = sliderState => {
    this.props.onPricesChange({
      prices: {
        min: sliderState.values[0],
        max: sliderState.values[1]
      }
    });
  };

  onCancel = () => {
    this.props.onPricesChange({
      prices: { min: 10, max: 1000 }
    });

    this.onClose();
  };

  onClose = () => {
    this.props.onClose("Price");
  };

  render() {
    return (
      <div>
        <Price>
          <Title>
            ${this.props.prices.min} — ${this.props.prices.max >= 1000
              ? `${this.props.prices.max}+`
              : this.props.prices.max}
          </Title>
          <Subtitle>The average nightly price is $75.</Subtitle>
          <Wrapper>
            <Img src={price} />
            <Rheostat
              min={10}
              max={1000}
              values={[this.props.prices.min, this.props.prices.max]}
              onValuesUpdated={this.onValuesUpdated}
            />
          </Wrapper>
        </Price>
        <Footer>
          <Cancel onClick={this.onCancel}>Cancel</Cancel>
          <Apply onClick={this.onClose}>Apply</Apply>
        </Footer>
      </div>
    );
  }
}
