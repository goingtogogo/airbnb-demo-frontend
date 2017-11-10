import React from "react";
import { Footer, Wrapper, Lists } from "./Styled";
import Settings from "./Settings";
import List from "./List";
import Bottom from "./Bottom";

export default function() {
  const Airbnb = [
    "About us",
    "Careers",
    "Press",
    "Policies",
    "Help",
    "Diversity & Belonging"
  ];
  const Discover = [
    "Trust & Safety",
    "Travel Credit",
    "Gift Cards",
    "Airbnb Citizen",
    "Business Travel",
    "Guidebooks",
    "Airbnbmag"
  ];
  const Hosting = [
    "Why Host",
    "Hospitality",
    "Responsible Hosting",
    "Community Center"
  ];
  return (
    <Footer>
      <Wrapper>
        <Settings />
        <Lists>
          <List title="AirBnb" links={Airbnb} href="" />
          <List title="Discover" links={Discover} href="" />
          <List title="Hosting" links={Hosting} href="" />
        </Lists>
      </Wrapper>
      <Bottom />
    </Footer>
  );
}
