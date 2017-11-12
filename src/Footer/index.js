import React from "react";
import { Footer, Wrapper, Lists, List, Title, Link } from "./Styled";
import Settings from "./Settings";
import Bottom from "./Bottom";

export default function() {
  return (
    <Footer>
      <Wrapper>
        <Settings />
        <Lists>
          <List>
            <Title>AirBnb</Title>
            <Link href="/about-us">About us</Link>
            <Link href="/careers">Careers</Link>
            <Link href="/press">Press</Link>
            <Link href="/policies">Policies</Link>
            <Link href="/help">Help</Link>
            <Link href="/diversity-and-belonging">Diversity & Belonging</Link>
          </List>
          <List>
            <Title>Discover</Title>
            <Link href="/about-us">Trust & Safety</Link>
            <Link href="/travel-credit">Travel Credit</Link>
            <Link href="/gift-cards">Gift Cards</Link>
            <Link href="/airbnb-citizen">Airbnb Citizen</Link>
            <Link href="/business-travel">Business Travel</Link>
            <Link href="/guidebooks">Guidebooks</Link>
            <Link href="/aitbnbmag">Airbnbmag</Link>
          </List>
          <List>
            <Title>Hosting</Title>
            <Link href="/why-host">Why Host</Link>
            <Link href="/hospitality">Hospitality</Link>
            <Link href="/responsible-hosting">Responsible Hosting</Link>
            <Link href="/community-center">Community Center</Link>
          </List>
        </Lists>
      </Wrapper>
      <Bottom />
    </Footer>
  );
}
