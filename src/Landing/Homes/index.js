import React from "react";
import styled from "styled-components";
import { Preview, List, SeeAll } from "../Styled";
import Card from "../../Homes/Card";

export const SectionTitle = styled.h2`
  margin-top: 68px;
  font-family: CircularBold, "Helvetica Neue", Helvetica, sans-serif;
  font-size: 24px;
  line-height: 28px;
  color: #383838;
  @media (min-width: 768px) {
    font-size: 32px;
    line-height: 34px;
  }
`;
export const CardWrap = styled.div`
  flex-basis: 64%;
  flex-grow: 0;
  flex-shrink: 0;
  margin-right: 16px;

  @media (min-width: 768px) {
    flex-basis: 40%;
    flex-grow: 0;
    flex-shrink: 0;
  }

  @media (min-width: 992px) {
    flex-basis: 32%;
  }
`;

export default class Homes extends React.Component {
  state = { homes: [] };

  componentWillMount() {
    fetch("https://airbnb-demo-api.now.sh/v1/homes?limit=6")
      .then(response => response.json())
      .then(homes => {
        this.setState({ homes: homes.items });
      })
      .catch(error => {
        console.log("Произошла ошибка!", error);
      });
  }

  render() {
    return (
      <section>
        <Preview>
          <SectionTitle>Homes</SectionTitle>
          <SeeAll to="/homes">See all</SeeAll>
        </Preview>
        <List>
          {this.state.homes.map(home => (
            <CardWrap key={home.id}>
              <Card
                title={home.name}
                image={home.images[0].picture}
                price={home.price}
                type={home.kind}
                rating={home.rating}
                beds={home.bedsCount}
                reviews={home.reviewsCount}
                owner={home.isSuperhost}
              />
            </CardWrap>
          ))}
        </List>
      </section>
    );
  }
}
