import React from "react";
import popular1 from "./popular-1.png";
import popular2 from "./popular-2.png";
import popular3 from "./popular-3.png";
import popular4 from "./popular-4.png";
import { SectionTitle, Preview, List, Scroll, SeeAll } from "../Styled";
import Card from "./Card";

export default function() {
  return (
    <section>
      <Preview>
        <SectionTitle>Popular reservations around the world</SectionTitle>
        <SeeAll to="/">See all</SeeAll>
      </Preview>
      <List>
        <Card
          title="Chumley’s"
          image={popular1}
          type="Speakeasy"
          pricing={60}
        />
        <Card
          title="Hanjan"
          image={popular2}
          type="Korean gastropub"
          pricing={55}
        />
        <Card
          title="Prime Meats"
          image={popular3}
          type="German american"
          pricing={50}
        />
        <Card
          title="Seaprice"
          image={popular4}
          type="Fine seafood"
          pricing={70}
        />
        <Scroll />
      </List>
    </section>
  );
}
