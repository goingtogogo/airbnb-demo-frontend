import React from "react";
import styled from "styled-components";

import cabana from "../UI/Cabana.png";
import heart from "../UI/heart.svg";
import share from "../UI/share.svg";

const Gallery = styled.div`
  position: relative;
  width: 100%;
  text-align: center;
  color: #383838;
`;
const Photo = styled.img`
  width: 100%;
  height: 440px;
`;
export const Wrapper = styled.div`
  max-width: 304px;
  padding: 0 8px;
  margin: 0 auto;
  @media (min-width: 768px) {
    max-width: 752px;
    padding: 0;
  }
  @media (min-width: 992px) {
    position: relative;
    max-width: 962px;
  }
`;
const Share = styled.button`
  border: 1px solid red;
  right: 0;
  top: 14px;
  padding: 9px 17px;
  position: absolute;
  background-color: #fff;
  border: none;
  box-shadow: rgba(72, 72, 72, 0.08);
  border-radius: 4px;
  cursor: pointer;
  color: #383838;
  font-family: CircularBook, "Helvetica Neue", Helvetica, sans-serif;
  font-size: 14px;
  line-height: 24px;
  &:before {
    margin-right: 8px;
    width: 15px;
    height: 15px;
    display: inline-block;
    vertical-align: baseline;
    content: "";
    background-image: url(${share});
    background-repeat: no-repeat;
    background-size: 100%;
  }
`;
const Save = styled.button`
  right: 189px;
  top: 14px;
  padding: 9px 17px;
  position: absolute;
  background-color: #fff;
  border: none;
  box-shadow: rgba(72, 72, 72, 0.08);
  border-radius: 4px;
  cursor: pointer;
  color: #383838;
  font-family: CircularBook, "Helvetica Neue", Helvetica, sans-serif;
  font-size: 14px;
  line-height: 24px;
  &:before {
    padding-bottom: 4px;
    margin-right: 8px;
    width: 16px;
    height: 16px;
    display: inline-block;
    vertical-align: middle;
    content: "";
    background-image: url(${heart});
    background-repeat: no-repeat;
    background-size: 100%;
  }
`;
const ViewPhotos = styled.button`
  ${"" /* FIX */} left:14%;
  top: 84%;
  padding: 9px 17px;
  position: absolute;
  background-color: #fff;
  border: none;
  box-shadow: rgba(72, 72, 72, 0.08);
  border-radius: 4px;
  cursor: pointer;
  color: #383838;
  font-family: CircularBold, "Helvetica Neue", Helvetica, sans-serif;
  font-size: 14px;
  line-height: 24px;
`;

export default function() {
  return (
    <Gallery>
      <Photo src={cabana} alt="Cabana" />
      <Wrapper>
        <Share>Share</Share>
        <Save>Save</Save>
        <ViewPhotos>View photos</ViewPhotos>
      </Wrapper>
    </Gallery>
  );
}
