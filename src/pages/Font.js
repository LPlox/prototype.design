import React from "react";
import { Link } from "react-router-dom";
import "../components/styles/Font.scss";

function Font() {
  return (
    <section className="font">
      <h1 className="font__header">FONT COMBINATIONS</h1>
      <button className="font__info">INFO</button>
      <h2 className="font__subheader">CHOOSE A FONT SET</h2>
      <p className="font__desc">
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
        dolore eu fugiat nulla pariatur.{" "}
      </p>
      <Link to="/prototype/color">
        <button>Continue</button>
      </Link>
    </section>
  );
}

export default Font;
