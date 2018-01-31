import styled from "styled-components";
import arrowdown from "./arrow-down.svg";

export const Title = styled.h2`
  margin-top: 0;
  margin-right: 16px;
  display: inline-block;
  margin-bottom: 16px;
  font-family: CircularBold, "Helvetica Neue", Helvetica, sans-serif;
  font-size: 24px;
  line-height: 28px;
  color: #383838;
  @media (min-width: 768px) {
    font-size: 28px;
    line-height: 33px;
  }
`;
export const Cancel = styled.button`
  padding: 16px;
  font-family: CircularBook, "Helvetica Neue", Helvetica, sans-serif;
  color: #636363;
  background-color: transparent;
  border: none;
  cursor: pointer;
`;
export const Apply = styled.button`
  padding: 16px;
  font-family: CircularBook, "Helvetica Neue", Helvetica, sans-serif;
  color: #0f7276;
  background-color: transparent;
  border: none;
  cursor: pointer;
`;
export const Footer = styled.footer`
  padding: 0 10px;
  padding-bottom: 16px;
  display: flex;
  justify-content: space-between;
  font-size: 16px;
  line-height: 19px;
`;
export const Contact = styled.a`
  display: block;
  font-family: CircularBook, "Helvetica Neue", Helvetica, sans-serif;
  line-height: 19px;
  font-size: 16px;
  color: #0f7276;
  cursor: pointer;
`;
export const ReadMore = Contact.extend`
  display: block;
  margin-bottom: 24px;
  &:after {
    margin-left: 8px;
    width: 11px;
    height: 6px;
    display: inline-block;
    vertical-align: baseline;
    content: "";
    background-image: url(${arrowdown});
    background-repeat: no-repeat;
    background-size: 100%;
  }
`;
export const ReadText = styled.a`
  font-family: CircularLight, "Helvetica Neue", Helvetica, sans-serif;
  line-height: 19px;
  font-size: 16px;
  color: #0f7276;
  cursor: pointer;
`;
