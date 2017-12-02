import React from "react";
import styled from "styled-components";

import flag from "../../UI/flag.svg";

const Wrapper = styled.div`
  padding-top: 16px;
  padding-bottom: 4px;
  margin-top: 12px;
  border-bottom: 1px solid #dbdbdb;
`;
const Avatar = styled.img`
  display: block;
  margin-right: 16px;
  width: 48px;
  height: auto;
`;

const Name = styled.p`
  margin-top: 0;
  margin-bottom: 2px;
  font-size: 20px;
  font-family: CircularBook, "Helvetica Neue", Helvetica, sans-serif;
`;

const When = styled.time`
  margin-top: 0;
  margin-bottom: 2px;
  font-size: 16px;
  line-height: 19px;
`;

const Text = styled.blockquote`
  margin: 16px 0 24px;
  color: #383838;
  font-family: CircularLight, "Helvetica Neue", Helvetica, sans-serif;
  line-height: 21px;
  font-size: 18px;
`;

const Flag = styled.button`
  align-self: flex-start;
  margin-left: auto;
  padding: 0;
  border: none;
  background-color: #fff;
  background-image: url(${flag});
  cursor: pointer;
`;
const Header = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
`;

export default function(props) {
  return (
    <Wrapper>
      <Header>
        <Avatar src={props.avatar} alt="" width="48" height="48" />
        <div>
          <Name>{props.name}</Name>
          <When>{props.when}</When>
        </div>
        <Flag />
      </Header>
      <Text>{props.children}</Text>
    </Wrapper>
  );
}
