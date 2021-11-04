import React, { Component } from "react";
import {
  Collapse,
  Nav,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  NavItem,
  NavLink,
} from "reactstrap";
import { Link } from "react-router-dom";
import logo from "./face.jpeg";

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = { isOpen: false };
    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }

  closeNavbar() {
    if (this.state.isOpen !== true) {
      this.toggle();
    }
  }

  render() {
    return (
      <Navbar
        style={{
          "padding-bottom": 0,
          "padding-top": 0,
          "padding-left": 3,
          "padding-right": 3,
          "border-color": "black",
          "border-width": "1px",
        }}
        id="navbar"
        collapseOnSelect
        fixed="top"
        className="shadow text-lg bg-white sticky mb-10 border-solid lg:rounded-b-3xl opacity-90"
        color="white"
        light
        variant="light"
        expand="md"
      >
        <NavbarBrand tag={Link} to="/">
          <a href="#">
            <img
              src={logo}
              style={{ width: 50, "margin-left": 5, "border-radius": "50px" }}
            />
          </a>{" "}
        </NavbarBrand>

        <br />
        <NavbarToggler
          style={{ color: "black" }}
          className="navitem"
          onClick={this.toggle}
        />
        <Collapse
          collapseOnSelect
          className="navitem"
          isOpen={this.state.isOpen}
          navbar
        >
          <Nav className="navitem ml-auto" navbar>
            <br />

            <NavItem>
              <NavLink
                eventKey="1"
                onClick={this.toggle}
                style={{ color: "black" }}
                className="navitem"
                href="/Articles"
              >
                Blogs
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                onClick={this.toggle}
                eventKey="2"
                style={{ color: "black" }}
                className="navitem"
                href="./#about"
              >
                About
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                onClick={this.toggle}
                eventKey="3"
                style={{ color: "black" }}
                className="navitem"
                href=".#projects"
              >
                Projects
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                onClick={this.toggle}
                eventKey="4"
                style={{ color: "black" }}
                className="navitem"
                href=".#skills"
              >
                Skills
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                onClick={this.toggle}
                eventKey="5"
                style={{ color: "black" }}
                className="navitem"
                href=".#testimonials"
              >
                Testimonials
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                onClick={this.toggle}
                eventKey="6"
                style={{ color: "black" }}
                className="navitem"
                href=".#contact"
              >
                📩
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                onClick={this.toggle}
                eventKey="7"
                style={{ color: "black" }}
                className="navitem"
                href="https://github.com/nick-ang"
                target="_blank"
              >
                <i class="fab fa-github"></i>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                onClick={this.toggle}
                eventKey="8"
                style={{ color: "black" }}
                href="https://www.linkedin.com/in/nick-c-ang/"
                target="_blank"
              >
                <i class="fab fa-linkedin"></i>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                onClick={this.toggle}
                eventKey="9"
                style={{ color: "black" }}
                href="/"
              >
                <i class="fas fa-home"></i>
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    );
  }
}

export default NavBar;
