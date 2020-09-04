import React from "react";
import "../components/styles/Home.scss";
import { Link } from "react-router-dom";

import GeneratedDesign from "../components/GeneratedDesign";

function Home() {
  return (
    <main className="Home">
      <section className="title">
        <h1 className="title__main--top">PROTOTYPE.</h1>
        <div className="title__mid">
          <h3>FONTS</h3>
          <h3>COLORS</h3>
          <h3>DESIGN</h3>
        </div>
        <h1 className="title__main--bottom">DESIGN</h1>
        <h2 className="title__desc">
          Choose a font combination, choose a color scheme, and see new designs
          come to life.
        </h2>
        <div className="title__cta">
          <Link to="/prototype/layout">
            <button className="cta__btn">
              <p>Start Prototyping</p>
            </button>
          </Link>
        </div>
        <p className="title__intro">
          This tool helps you to explore new designs with fonts and colors. The
          content can be generated or be tweeked to your liking. Render out your
          designs for mood boards or design presentations.
        </p>
        <p className="title__deco--left">
          Last
          <br />
          Update <br />
          2020.09.04
        </p>
        <p className="title__deco--right">20.56.4332</p>
      </section>
      <GeneratedDesign />
      <section className="resources">
        <h2 className="resources__title">External Resources</h2>
        <div className="recources__box1">
          <h2 className="resource__sub-title">Font Combinations</h2>
          <p className="resources__body-text">
            — Fonts and font combinations Generate or choose your mood and feel
            of the fonts. The fonts are avaliable on Google Fonts and can be
            used freely after testing.
          </p>
          <a className="resource__link">Font combinations resources &#8702; </a>
        </div>
        <div className="recources__box2">
          <h2 className="resource__sub-title">Color Scheme</h2>
          <p className="resources__body-text">
            — Colors and color schemes Make color combinations for your brand or
            purpose of website. Make your statement stronger with a color scheme
            that speaks to your purpose.{" "}
          </p>
          <a className="resource__link">Color scheme resources &#8702; </a>
        </div>
        <div className="recources__box3">
          <h2 className="resource__sub-title">Design System</h2>
          <p className="resources__body-text">
            — Customise and render Make or generate design for presentation,
            design suggestion or for your final designs. Save your design by
            rendering the collection to save on your own{" "}
          </p>
          <a className="resource__link">Design System resources &#8702; </a>
        </div>
      </section>
    </main>
  );
}

export default Home;
