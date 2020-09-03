import React from "react";
import "../components/styles/Home.scss";
import { Link } from "react-router-dom";

function Home() {
  return (
    <main className="Home">
      <section className="title main-grid-layout">
        <h1 className="title__main--1">PROTOTYPE.</h1>
        <div className="title__mid">
          <h3>FONTS</h3>
          <h3>COLORS</h3>
          <h3>DESIGN</h3>
        </div>
        <h1 className="title__main--2">DESIGN</h1>
        <h3 className="title__desc">
          Choose a font combination, choose a color scheme, and see new designs
          come to life.
        </h3>
        <div className="title__cta">
          <Link to="/prototype/layout">
            <button className="cta__btn">Start Prototyping</button>
          </Link>
        </div>
        <p className="title__intro">
          This tool helps you to explore new designs with fonts and colors. The
          content can be generated or be tweeked to your liking. Render out your
          designs for mood boards or design presentations.{" "}
        </p>
      </section>
      <section></section>
    </main>
  );
}

export default Home;
