import React from "react";
import Card from "./Card";
import { Wrapper } from "../UI";
import { List } from "./Styled";

import home1 from "./home-1.png";

export default function(props) {
  return (
    <Wrapper>
      <List>
        <Card
          title="La Salentina, see, nature, relax"
          image={home1}
          price={82}
          type="Entire house"
          amount={9}
          reviews={91}
          owner="Superhost"
        />
        <Card
          title="La Salentina, see, nature, relax"
          image={home1}
          price={82}
          type="Entire house"
          amount={9}
          reviews={91}
          owner="Superhost"
        />
        <Card
          style={{ flexBasis: "49%" }}
          title="La Salentina, see, nature, relax"
          image={home1}
          price={82}
          type="Entire house"
          amount={9}
          reviews={91}
          owner="Superhost"
        />
        <Card
          title="La Salentina, see, nature, relax"
          image={home1}
          price={82}
          type="Entire house"
          amount={9}
          reviews={91}
          owner="Superhost"
        />
      </List>
    </Wrapper>
  );
}
