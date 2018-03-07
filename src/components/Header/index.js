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
        style={{
          marginLeft: 50,
        }}
      >
        <Link
          to="/"
          style={{
            color: "white",
            textDecoration: "none"
          }}
        >
          <h1>BMJ Open blogs (powered by Gatsby.JS2)</h1>
        </Link>
      </NavbarBrand>
    </Navbar>
  </div>
)

export default Header
