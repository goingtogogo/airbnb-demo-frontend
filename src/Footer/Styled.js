import styled from "styled-components";
import arrowdown from "./arrow-down.png";

export const Footer = styled.footer`
  width: 100%;
  padding: 0;
  padding-top: 48px;
  margin-top: 64px;
  box-shadow: 0px 0px 1px rgba(72, 72, 72, 0.3);
  line-height: 24px;
`;

export const Wrapper = styled.div`
  width: 86%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  @media (max-width: 768px) {
    width: 97.9%;
  }
`;
export const Settings = styled.div`flex-basis: 23.3%;`;

export const Form = styled.form`
  margin-bottom: 16px;
  display: inline-block;
  width: 100%;
  position: relative;
`;
export const DropDown = styled.select`
  width: 100%;
  padding: 12px 16px;
  border: 1px solid rgba(72, 72, 72, 0.2);
  border-radius: 4px;
  font-family: CircularLight, "Helvetica Neue", Helvetica, sans-serif;
  color: #383838;
  font-size: 18px;
  line-height: 21px;
  -webkit-appearance: none;
  -moz-appearance: none;
  text-indent: 0.01px;
  text-overflow: "";
  appearance: none;
  background-image: url(${arrowdown});
  background-position: 93% center;
  background-repeat: no-repeat;
  cursor: pointer;
  ::-ms-expand {
    display: none;
  }
  @media (max-width: 768px) {
    font-size: 15px;
    line-height: 18px;
    padding: 14px 8px;
    background-size: 15px 8px;
  }
`;

export const Lists = styled.div`
  margin-bottom: 48px;
  flex-basis: 65%;
  display: flex;
  justify-content: space-between;
  @media (max-width: 768px) {
    flex-basis: 66%;
  }
`;

export const Link = styled.a`
  margin-bottom: 8px;
  text-decoration: none;
  font-family: CircularBook, "Helvetica Neue", Helvetica, sans-serif;
  font-size: 15px;
  line-height: 18px;
  color: #636363;
  @media (max-width: 768px) {
    margin-bottom: 11px;
    font-size: 12px;
    line-height: 14px;
  }
`;
export const List = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Title = styled.h3`
  margin-top: 0;
  margin-bottom: 16px;
  font-family: CircularBold, "Helvetica Neue", Helvetica, sans-serif;
  font-size: 15px;
  line-height: 18px;
  color: #383838;
  @media (max-width: 768px) {
    margin-bottom: 19px;
    font-size: 12px;
    line-height: 14px;
  }
`;

export const Logo = styled.img`
  display: inline-block;
  vertical-align: middle;
`;
