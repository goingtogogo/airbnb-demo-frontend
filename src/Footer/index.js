import React from "react";
import { Footer, Wrapper, Lists, Logo } from "./Styled";
import Settings from "./Settings";
import List from "./List";
import Bottom from "./Bottom";

export default function() {
  return (
    <Footer>
      <Wrapper>
        <Settings />
        <Lists>
          <List
            title="AirBnb"
            links={[
              "About us",
              "Careers",
              "Press",
              "Policies",
              "Help",
              "Diversity & Belonging"
            ]}
            href=""
          />
          <List
            title="Discover"
            links={[
              "Trust & Safety",
              "Travel Credit",
              "Gift Cards",
              "Airbnb Citizen",
              "Business Travel",
              "Guidebooks",
              "Airbnbmag"
            ]}
            href=""
          />
          <List
            title="Hosting"
            links={[
              "Why Host",
              "Hospitality",
              "Responsible Hosting",
              "Community Center"
            ]}
            href=""
          />
        </Lists>
      </Wrapper>
      <Bottom />
    </Footer>
  );
}
