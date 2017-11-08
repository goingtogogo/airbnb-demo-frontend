import React from "react";
import popular1 from "./popular-1.png";
import popular2 from "./popular-2.png";
import popular3 from "./popular-3.png";
import popular4 from "./popular-4.png";
import { SectionTitle, Preview, List, Scroll } from "../Styled";
import Card from "./Card";
import OpenLink from "../OpenLink";

export default function() {
  return (
    <section>
      <Preview>
        <SectionTitle>Popular reservations around the world</SectionTitle>
        <OpenLink />
      </Preview>
      <List>
        <Card
          title="Chumley’s"
          image={popular1}
          type="Speakeasy"
          prising="About $60 per person"
        />
        <Card
          title="Hanjan"
          image={popular2}
          type="Korean gastropub"
          prising="About $55 per person"
        />
        <Card
          title="Prime Meats"
          image={popular3}
          type="German american"
          prising="About $50 per person"
        />
        <Card
          title="Seaprice"
          image={popular4}
          type="Fine seafood"
          prising="About $70 per person"
        />
        <Scroll />
      </List>
    </section>
  );
}
