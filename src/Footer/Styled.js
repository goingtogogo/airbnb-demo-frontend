import styled from "styled-components";
import arrowdown from "./arrow-down.png";

export const Footer = styled.footer`
  width: 100%;
  padding: 0;
  padding-top: 48px;
  box-shadow: 0px 0px 1px rgba(72, 72, 72, 0.3);
  line-height: 24px;
`;

export const Wrapper = styled.div`
  width: 86.032028%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
`;
export const Settings = styled.div`flex-basis: 23.27235%;`;

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
  font-family: CircularLight, Helvetica, sans-serif;
  color: #383838;
  font-size: 18px;
  line-height: 21px;
  -webkit-appearance: none;
  /* for FF */
  -moz-appearance: none;
  text-indent: 0.01px;
  text-overflow: "";
  /* for IE */
  -ms-appearance: none;
  appearance: none !important;
  background-image: url(${arrowdown});
  background-position: 93% center;
  background-repeat: no-repeat;
  cursor: pointer;
`;

export const Lists = styled.div`
  margin-bottom: 48px;
  flex-basis: 64.93902%;
  display: flex;
  justify-content: space-between;
`;

export const Link = styled.a`
  margin-bottom: 8px;
  text-decoration: none;
  font-family: CircularBook, Helvetica, sans-serif;
  font-size: 15px;
  line-height: 18px;
  color: #636363;
`;
export const Links = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Title = styled.h3`
  margin-top: 0;
  margin-bottom: 16px;
  font-family: CircularBold, Helvetica, sans-serif;
  font-size: 15px;
  line-height: 18px;
  color: #383838;
`;

export const Logo = styled.img`
  display: inline-block;
  vertical-align: middle;
`;
export default function() {}
