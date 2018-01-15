import styled from "styled-components";
import arrowdown from "../UI/assets/arrow-down.svg";

export const Footer = styled.footer`
  width: 100%;
  padding-top: 16px;
  margin-top: 40px;
  border-top: 1px solid #dbdbdb;
  line-height: 24px;
  @media (min-width: 768px) {
    margin-top: 50px;
    padding-top: 48px;
  }
`;

export const Wrapper = styled.div`
  max-width: 304px;
  padding: 0 8px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  @media (min-width: 768px) {
    max-width: 752px;
    padding: 0;
  }

  @media (min-width: 992px) {
    max-width: 962px;
  }
`;
export const Settings = styled.div`
  display: flex;
  justify-content: space-between;
  flex-basis: 100%;

  @media (min-width: 768px) {
    flex-basis: 24%;
    display: block;
  }
`;

export const Form = styled.form`
  margin-bottom: 16px;
  display: inline-block;
  width: 47%;
  position: relative;

  @media (min-width: 768px) {
    width: 100%;
  }
`;
export const DropDown = styled.select`
  width: 100%;
  padding: 12px 8px;
  border: 1px solid rgba(72, 72, 72, 0.2);
  border-radius: 4px;
  font-family: CircularLight, "Helvetica Neue", Helvetica, sans-serif;
  color: #383838;
  font-size: 12px;
  line-height: 14px;
  text-indent: 0.01px;
  text-overflow: "";
  appearance: none;
  background-color: #fff;
  background-image: url(${arrowdown});
  background-position: 93% center;
  background-repeat: no-repeat;
  background-size: 12px 6px;
  cursor: pointer;
  ::-ms-expand {
    display: none;
  }

  @media (min-width: 768px) {
    font-size: 15px;
    line-height: 18px;
    padding: 14px 8px;
    background-size: 15px 8px;
  }
  @media (min-width: 992px) {
    padding: 12px 16px;
    font-size: 18px;
    line-height: 21px;
  }
`;

export const Lists = styled.div`
  display: none;
  margin-bottom: 48px;

  @media (min-width: 768px) {
    display: flex;
    justify-content: space-between;
    flex-basis: 66%;
  }
  @media (min-width: 992px) {
    flex-basis: 66%;
    margin-bottom: 34px;
  }
`;

export const Link = styled.a`
  margin-bottom: 10px;
  text-decoration: none;
  font-family: CircularBook, "Helvetica Neue", Helvetica, sans-serif;
  font-size: 12px;
  line-height: 14px;
  color: #636363;

  @media (min-width: 768px) {
    font-size: 15px;
    line-height: 18px;
  }
`;
export const List = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 768px) {
    flex-basis: 20%;
  }
  @media (min-width: 992px) {
    flex-basis: 23%;
  }
`;

export const Title = styled.h3`
  margin-top: 0;
  margin-bottom: 19px;
  font-family: CircularBold, "Helvetica Neue", Helvetica, sans-serif;
  font-size: 12px;
  line-height: 14px;
  color: #383838;

  @media (min-width: 768px) {
    margin-bottom: 16px;
    font-size: 15px;
    line-height: 18px;
  }
`;

export const Logo = styled.img`
  display: inline-block;
  vertical-align: middle;
`;
