import React from "react";
import "./styles/GeneratedInfo.scss";
import { v4 as uuidv4 } from "uuid";
import "../components/styles/ColorInfo.scss";
import GeneratedDesign from "./GeneratedDesign";

function ColorDisplay({ font, colorScheme, theme, divStyle, windowWidth }) {
  let textDisplay;

  if (windowWidth < 468) {
    textDisplay = "none";
  } else if (windowWidth > 468 && windowWidth < 768) {
    textDisplay = "block";
  } else {
    textDisplay = "block";
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
      <div className="color-display__colors" style={{ height: "70px" }}>
        {colorScheme ? (
          colorScheme.map((color) => {
            const textStyle = {
              top: "70px",
              fontSize: "0.8rem",
              display: textDisplay,
            };

            return (
              <div
                key={uuidv4()}
                className="color-block"
                style={{
                  background: `${color}`,
                  height: "60px",
                }}
              >
                <p className="color__desc" style={textStyle}>
                  {color}
                </p>
              </div>
            );
          })
        ) : (
          <p>Loading Colors...</p>
        )}
      </div>
    </div>
  );
}

export default ColorDisplay;
