import React, { Component } from "react";
import { Navbar, Nav } from "react-bootstrap";
import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";

export class NavBar extends Component {
  render() {
    return (
      <>
        <Navbar className="navbar" sticky="top" bg="black">
          <Navbar.Brand classname="DK" style={{ color: "White" }}>
            DK
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Main</Nav.Link>
            <Nav.Link href="/products">Products</Nav.Link>
            <Nav.Link href="/contact">Contact us</Nav.Link>
          </Nav>
        </Navbar>
      </>
    );
  }
}

export default NavBar;
