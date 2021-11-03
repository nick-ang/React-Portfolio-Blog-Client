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

  render() {
    return (
      <Navbar color="red " dark expand="md">
        <NavbarBrand tag={Link} to="/"></NavbarBrand>

        <NavbarToggler onClick={this.toggle} />
        <Collapse isOpen={this.state.isOpen} navbar>
          <Nav className="ml-auto sm-p20" navbar>
          <br/>
            <NavItem>
              <NavLink href="/Articles">Blogs</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#about">About</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#projects">Projects</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#skills">Skills</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#testimonials">Testimonials</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#contact">Hi 👋🏼</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://github.com/nick-ang" target="_blank">
                <i class="fab fa-github"></i>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                href="https://www.linkedin.com/in/nick-c-ang/"
                target="_blank"
              >
                <i class="fab fa-linkedin"></i>
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    );
  }
}

export default NavBar;
