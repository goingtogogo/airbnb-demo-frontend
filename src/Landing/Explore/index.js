import React from "react";
import explore1 from "./explore-1.png";
import explore2 from "./explore-2.png";
import explore3 from "./explore-3.png";
import { SectionTitle, List } from "../Styled";
import Card from "./Card";

export default function() {
  return (
    <section>
      <SectionTitle>Explore Airbnb</SectionTitle>
      <List>
        <Card to="/homes" title="Homes" image={explore1} />
        <Card to="/" title="Experiences" image={explore2} />
        <Card to="/" title="Restourants" image={explore3} />
      </List>
    </section>
  );
}
