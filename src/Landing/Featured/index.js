import React from "react";
import feature1 from "./feature-1.png";
import feature2 from "./feature-2.png";
import feature3 from "./feature-3.png";
import feature4 from "./feature-4.png";
import feature5 from "./feature-5.png";
import feature6 from "./feature-6.png";
import { SectionTitle, List, Scroll } from "../Styled";
import Card from "./Card";

export default function() {
  return (
    <section>
      <SectionTitle>Featured destinations</SectionTitle>
      <List>
        <Card title="Paris" image={feature1} />
        <Card title="Miami" image={feature2} />
        <Card title="Tokyo" image={feature3} />
        <Card title="Cape town" image={feature4} />
        <Card title="Seoul" image={feature5} />
        <Card title="Los Angeles" image={feature6} />
        <Scroll />
      </List>
    </section>
  );
}
