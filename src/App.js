import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import "./App.css";
import "normalize.css";

import Header from "./Header/";
import Footer from "./Footer/";

import Landing from "./Landing";
import Homes from "./Homes";

const footer = window.location.pathname === "/homes" ? null : <Footer />;

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Header />
          <Route path="/" exact component={Landing} />{" "}
          <Route path="/homes" exact component={Homes} />
          {footer}
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
