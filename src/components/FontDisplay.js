import React from "react";
import "./styles/FontDisplay.scss";
const WebFont = require("webfontloader");

function FontDisplay({ font, divStyle }) {
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
      <h1
        style={{
          fontFamily: font.header.font,
          fontSize: "2.4rem",
          fontWeight: font.header.weight,
        }}
      >
        {font.header.font}
      </h1>
      <h2
        style={{
          fontFamily: font.subheader.font,
          fontSize: "1.6rem",
          fontWeight: font.subheader.weight,
        }}
      >
        {font.subheader.font}
      </h2>
      <p
        style={{
          fontFamily: font.body.font,
          fontSize: "1rem",
          fontWeight: font.body.weight,
        }}
      >
        {font.body.font +
          " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}
      </p>
    </div>
  );
}

export default FontDisplay;
