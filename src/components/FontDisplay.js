import React from "react";
import "./styles/FontDisplay.scss";
const WebFont = require("webfontloader");

function FontDisplay({ font, divStyle, mobile }) {
  if (font) {
    WebFont.load({
      google: {
        families: [
          `${font.header.font}: ${
            font.header.weight ? font.header.weight : 400
          }`,
          `${font.subheader.font}: ${
            font.subheader.weight ? font.subheader.weight : 400
          }`,
          `${font.body.font}: ${font.body.weight ? font.body.weight : 400}`,
        ],
      },
      classes: false,
    });
  }

  return (
    <div className="font-display" style={divStyle}>
      <p
        className="font__id"
        style={mobile ? { fontSize: "0.4rem" } : { fontSize: "0.8rem" }}
      >
        {font.id}
      </p>
      <p
        className="font__header-type"
        style={mobile ? { fontSize: "0.5rem" } : { fontSize: "0.8rem" }}
      >
        {font.header.font}
      </p>
      <p
        className="font__subheader-type"
        style={mobile ? { fontSize: "0.5rem" } : { fontSize: "0.8rem" }}
      >
        {font.subheader.font}
      </p>
      <p
        className="font__body-type"
        style={mobile ? { fontSize: "0.5rem" } : { fontSize: "0.8rem" }}
      >
        {font.body.font}
      </p>
      <h1
        className="font__header"
        style={{
          fontFamily: font.header.font,
          fontSize: mobile ? "1.8rem" : "2.4rem",
          fontWeight: font.header.weight,
        }}
      >
        Title
      </h1>
      <h2
        className="font__subheader"
        style={{
          fontFamily: font.subheader.font,
          fontSize: mobile ? "0.9rem" : "1.2rem",
          fontWeight: font.subheader.weight,
          paddingBottom: "10%",
        }}
      >
        Sub header
      </h2>
      <p
        className="font__body"
        style={{
          fontFamily: font.body.font,
          fontSize: mobile ? "0.6rem" : "0.8rem",
          fontWeight: font.body.weight,
        }}
      >
        {mobile
          ? "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat"}
      </p>
    </div>
  );
}

export default FontDisplay;
