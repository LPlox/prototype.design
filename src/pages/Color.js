import React from "react";
import { Link } from "react-router-dom";
import "../components/styles/Color.scss";

function Color() {
  return (
    <section className="color">
      <h1 className="color__header">WEB UI COLOR SCHEME</h1>
      <button className="color__info">INFO</button>
      <h2 className="color__subheader">CHOOSE A COLOR SCHEME</h2>
      <p className="color__desc">
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
        dolore eu fugiat nulla pariatur.{" "}
      </p>
      <Link to="/prototype/render">
        <button>Continue</button>
      </Link>
    </section>
  );
}

export default Color;
