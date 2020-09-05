import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./styles/Nav.scss";

function Nav() {
  return (
    <header>
      <nav className="nav">
        <div className="logo">
          <Link to="/">
            <img className="logo__img" src="logo.png" alt="logo" />
          </Link>
        </div>
        <ul className="nav__links">
          <li>
            <NavLink
              activeClassName="nav__link--selected"
              to="/prototype/layout"
            >
              PROTOTYPE
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName="nav__link--selected" to="/about">
              RESOURCES
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName="nav__link--selected" to="/contact">
              CONTACT
            </NavLink>
          </li>
        </ul>
      </nav>
      <div className="nav--empty"></div>
    </header>
  );
}

export default Nav;
