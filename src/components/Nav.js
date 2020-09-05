import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./styles/Nav.scss";

function Nav() {
  const checkActive = (match, location) => {
    if (!location) return false;
    const { pathname } = location;
    return pathname.includes("/prototype");
  };

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
              className="nav__link"
              activeClassName="nav__link--selected"
              to="/prototype/layout"
              isActive={checkActive}
            >
              PROTOTYPE
            </NavLink>
          </li>
          <li>
            <NavLink
              className="nav__link"
              activeClassName="nav__link--selected"
              to="/about"
            >
              RESOURCES
            </NavLink>
          </li>
          <li>
            <NavLink
              className="nav__link"
              activeClassName="nav__link--selected"
              to="/contact"
            >
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
