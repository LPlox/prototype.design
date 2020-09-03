import React from "react";
import { Link } from "react-router-dom";
import "./styles/Nav.scss";

function Nav() {
  return (
    <header>
      <nav className="nav main-grid-layout">
        <div className="logo">
          <Link to="/">
            <img className="logo__img" src="logo.png" alt="logo" />
          </Link>
        </div>
        <ul className="nav__links">
          <li>
            <Link to="/prototype/layout">PROTOTYPE</Link>
          </li>
          <li>
            <Link to="/about">RESOURCES</Link>
          </li>
          <li>
            <Link to="/contact">CONTACT</Link>
          </li>
        </ul>
      </nav>
      <div className="nav--empty"></div>
    </header>
  );
}

export default Nav;
