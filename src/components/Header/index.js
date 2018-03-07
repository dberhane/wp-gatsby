import React from "react"
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap"

import Link from "gatsby-link"

const Header = () => (
  <div>
    <Navbar
      style={{
        background: "rebeccapurple",
        marginBottom: "1.45rem"
      }}
      color="rebeccapurple"
      light
      expanded="md"
    >
      <NavbarBrand
        href="/"
        style={{
          marginLeft: 50,
          color: "white",
          textDecoration: "none"
        }}
      >
        <h1>BMJ Open blogs (powered by Gatsby.JS)</h1>
      </NavbarBrand>
    </Navbar>
  </div>
)

export default Header
