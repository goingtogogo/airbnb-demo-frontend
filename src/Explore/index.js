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
        <Card title="Home" image={explore1} />
        <Card title="Experiences" image={explore2} />
        <Card title="Restourants" image={explore3} />
      </List>
    </section>
  );
}
