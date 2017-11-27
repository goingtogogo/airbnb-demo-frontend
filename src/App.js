import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import "./App.css";
import "normalize.css";

import Header from "./Header/";

import Landing from "./Landing";
import Homes from "./Homes/All";
import Room from "./Homes/Room";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Header />
          <Route path="/" exact component={Landing} />
          <Route path="/homes" exact component={Homes} />
          <Route path="/homes/cabana" exact component={Room} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
