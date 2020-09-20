import React from "react";
import "./styles/GeneratedInfo.scss";
import { v4 as uuidv4 } from "uuid";
import "../components/styles/ColorInfo.scss";
import GeneratedDesign from "./GeneratedDesign";

function ColorDisplay({ font, colorScheme, theme, divStyle, windowWidth }) {
  let blockBorder, blockHeight, blockPadding;

  if (windowWidth < 468) {
    blockBorder = "none";
    blockHeight = "50px";
    blockPadding = false;
  } else if (windowWidth > 468 && windowWidth < 768) {
    blockBorder = "solid";
    blockHeight = "50px";
    blockPadding = true;
  } else {
    blockBorder = "solid";
    blockHeight = "60px";
    blockPadding = true;
  }

  return (
    <div className="color-display__info" style={divStyle}>
      <div className="theme-render">
        <GeneratedDesign
          font={font}
          colorScheme={colorScheme}
          designIndex={theme}
          divStyle={{}}
          fontMultiplier={windowWidth > 768 ? 0.5 : 1}
        />
      </div>
      <div
        className="color-display__colors"
        style={{
          height: blockHeight,
          backgroundColor: "#ffffff",
          paddingLeft: blockPadding ? "2px" : "",
          paddingRight: blockPadding ? "2px" : "",
        }}
      >
        {colorScheme
          ? colorScheme.map((color) => {
              const textStyle = {
                top: blockHeight,
                fontSize: "0.7rem",
                display: "block",
                textAlign: "center",
              };

              return (
                <div
                  key={uuidv4()}
                  className="color-block"
                  style={{
                    background: `${color}`,
                    height: blockHeight,
                    borderWidth: "3px 1.5px 3px 1.5px",
                    borderStyle: blockBorder,
                    borderColor: "#ffffff",
                  }}
                >
                  <p className="color__desc" style={textStyle}>
                    {color.slice(1).toUpperCase()}
                  </p>
                </div>
              );
            })
          : ""}
      </div>
    </div>
  );
}

export default ColorDisplay;
