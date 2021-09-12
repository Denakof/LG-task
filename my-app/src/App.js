import "./App.css";
import Contact from "./components/Contact";
import Products from "./components/Products";
import Main from "./components/Main";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import React, { Component } from "react";
import { Navbar } from "react-bootstrap";

export class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <NavBar />
          <Switch>
            <Route exact path="/" component={Main} />
            <Route exact path="/products" component={Products} />
            <Route exact path="/contact" component={Contact} />
          </Switch>
          <Footer />
        </Router>
        {/* <Contact/>
        <Products/> */}
      </div>
    );
  }
}

export default App;
