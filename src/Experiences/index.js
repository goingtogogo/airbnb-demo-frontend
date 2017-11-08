import React from "react";
import { SectionTitle, Preview, List, Scroll } from "../Styled";
import Card from "./Card";
import OpenLink from "../OpenLink";
import experience1 from "./experience-1.png";
import experience2 from "./experience-2.png";
import experience3 from "./experience-3.png";
import experience4 from "./experience-4.png";

export default function() {
  return (
    <section>
      <Preview>
        <SectionTitle>Experiences</SectionTitle>
        <OpenLink />
      </Preview>
      <List>
        <Card
          title="Forest Therapy"
          image={experience1}
          price="29$"
          review="44 reviews"
        />
        <Card
          title="Whale watching"
          image={experience2}
          price="69$"
          review="46 reviews"
        />
        <Card
          title="Table Mountain Summit, Cable Car Downing"
          image={experience3}
          price="69$"
          review="44 reviews"
        />
        <Card
          title="Salsa night"
          image={experience4}
          price="50$"
          review="44 reviews"
        />
        <Scroll />
      </List>
    </section>
  );
}
