import React from "react";
import { SectionTitle, Preview, List, Scroll, SeeAll } from "../Styled";
import Card from "./Card";
import experience1 from "./experience-1.png";
import experience2 from "./experience-2.png";
import experience3 from "./experience-3.png";
import experience4 from "./experience-4.png";

export default function() {
  return (
    <section>
      <Preview>
        <SectionTitle>Experiences</SectionTitle>
        <SeeAll href="/all">See all</SeeAll>
      </Preview>
      <List>
        <Card
          title="Forest Therapy"
          image={experience1}
          price={29}
          reviews={44}
        />
        <Card
          title="Whale watching"
          image={experience2}
          price={69}
          reviews={46}
        />
        <Card
          title="Table Mountain Summit, Cable Car Downing"
          image={experience3}
          price={69}
          reviews={44}
        />
        <Card title="Salsa night" image={experience4} price={50} reviews={44} />
        <Scroll />
      </List>
    </section>
  );
}
