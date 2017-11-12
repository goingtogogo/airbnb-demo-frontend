import React, { Component } from "react";
import "./App.css";
import "normalize.css";
import Header from "./Header/";
import Explore from "./Explore/";
import Experiences from "./Experiences/";
import Homes from "./Homes/";
import Popular from "./Popular/";
import Featured from "./Featured/";
import Footer from "./Footer/";

import { Wrapper } from "./Styled";

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Wrapper>
          <Explore />
          <Experiences />
          <Homes />
          <Popular />
          <Featured />
        </Wrapper>
        <Footer />
      </div>
    );
  }
}

export default App;
