import React, { Component } from 'react';
import { Collapse, Nav, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';
import { ArrowRightIcon } from "@heroicons/react/solid";

class NavBar extends Component {

  constructor(props) {
    super(props);
    this.state = {isOpen: false};
    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    return (
      <Navbar color="light" light expand="md">
        <NavbarBrand tag={Link} to="/">
          Home
        </NavbarBrand>
        <NavbarBrand tag={Link} to="/Articles">
          Blogs
        </NavbarBrand>

        <NavbarToggler onClick={this.toggle} />
        <Collapse isOpen={this.state.isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink href="https://www.linkedin.com/in/nick-c-ang/">
                LinkedIn
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://github.com/nick-ang">GitHub</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    );
  }
}

export default NavBar;
