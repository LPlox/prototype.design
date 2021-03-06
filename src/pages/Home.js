import React from "react";
import "../components/styles/Home.scss";
import { Link } from "react-router-dom";

import GeneratedDesign from "../components/GeneratedDesign";
import GeneratedInfo from "../components/GeneratedInfo";

function Home({
  font,
  colorScheme,
  designIndex,
  handleColorChange,
  handleFontChange,
  handleWebTempChange,
  windowWidth,
  setRandom,
  divHeight,
}) {
  const renderStyle = {
    // height: windowWidth > 768 ? "90vh" : "40vh",
    width: "100%",
    position: "relative",
    margin: "0 auto",
    //Thicc border
    // padding: "8% 10%",
    // backgroundColor: colorScheme ? colorScheme[2] : "none",
  };

  const renderInfoStyle = {
    display: "flex",
    flexDirections: "row",
    justifyContent: "space-between",
    color: colorScheme ? colorScheme[4] : "black",
    gridColumn: "grid1 / grid12",
    gridRow: "4",
    // top: windowWidth > 768 ? "-24vh" : "-14vh",
    padding: "0 5%",
    height: "auto",
    width: "100%",
    marginTop: "10vh",
  };

  return (
    <main className="home">
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
          2020.09.25
        </p>
        <p className="title__deco--right">{"20.56." + windowWidth}</p>
      </section>
      <section className="generated-design">
        <h1 className="generated-design__title">Generated Design</h1>
        <p className="generated-design__desc">
          An example of generated design: The main functionality, simplified.
          Try out design with 3 buttons. Take the design further or start
          Prototyping!
        </p>
        <div
          style={{
            width: "100%",
            height: "100%",
            gridColumn: "grid1 / grid12",
            gridRow: "3",
          }}
        >
          <GeneratedDesign
            font={font}
            colorScheme={colorScheme}
            designIndex={designIndex}
            handleFontChange={handleFontChange}
            handleColorChange={handleColorChange}
            handleWebTempChange={handleWebTempChange}
            divStyle={renderStyle}
            windowWidth={windowWidth}
          />
          <GeneratedInfo
            font={font}
            colorScheme={colorScheme}
            divStyle={renderInfoStyle}
            windowWidth={windowWidth}
          />
        </div>
        <div className="generated-design__btns">
          <button className="generated-design__btn" onClick={handleColorChange}>
            Change Colors
          </button>
          <button className="generated-design__btn" onClick={handleFontChange}>
            Change Fonts
          </button>
          <button
            className="generated-design__btn"
            onClick={handleWebTempChange}
          >
            Change Templet
          </button>
        </div>

        <Link
          to="/prototype/render"
          style={{
            gridArea: "6 / grid1 / 6 / grid3",
            textDecoration: "none",
          }}
        >
          <div className="generated-design__cta">Render Prototype</div>
        </Link>
      </section>
      <section className="resources">
        <h2 className="resources__title">External Resources</h2>
        <div className="recources__box1">
          <h2 className="resource__sub-title">Font Combinations</h2>
          <p className="resources__body-text">
            — Fonts and font combinations Generate or choose your mood and feel
            of the fonts. The fonts are avaliable on Google Fonts and can be
            used freely after testing.
          </p>
          <Link to="/resources" className="resource__link">
          Leads to nowhere for now... sry &#8702;{" "}
          </Link>
        </div>
        <div className="recources__box2">
          <h2 className="resource__sub-title">Color Scheme</h2>
          <p className="resources__body-text">
            — Colors and color schemes Make color combinations for your brand or
            purpose of website. Make your statement stronger with a color scheme
            that speaks to your purpose.{" "}
          </p>
          <Link to="/resources" className="resource__link">
          Leads to nowhere for now... sry &#8702;{" "}
          </Link>
        </div>
        <div className="recources__box3">
          <h2 className="resource__sub-title">Design System</h2>
          <p className="resources__body-text">
            — Customise and render Make or generate design for presentation,
            design suggestion or for your final designs. Save your design by
            rendering the collection to save on your own{" "}
          </p>
          <Link to="/resources" className="resource__link">
            Leads to nowhere for now... sry &#8702;{" "}
          </Link>
        </div>
      </section>
    </main>
  );
}

export default Home;
