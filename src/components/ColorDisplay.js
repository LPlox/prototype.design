import React from "react";
import "./styles/GeneratedInfo.scss";
import { v4 as uuidv4 } from "uuid";
import Webdesigns from "./webdesigns";
import "../components/styles/ColorInfo.scss";

function ColorDisplay({ font, colorScheme, theme, divStyle, windowWidth }) {
  const ComponentToRender = Webdesigns["Web" + theme];

  return (
    <div className="generated__info" style={divStyle}>
      <div className="generated__colors">
        {colorScheme ? (
          colorScheme.map((color) => {
            const textStyle = {
              top: "70px",
              fontSize: "0.8rem",
            };

            return (
              <div
                key={uuidv4()}
                className="color-block"
                style={{ background: `${color}` }}
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
      <div className="theme-render">
        <ComponentToRender
          header={font.header}
          subheader={font.subheader}
          body={font.body}
          colorScheme={colorScheme}
          divHeight="100%"
          fontMultiplier={windowWidth > 768 ? 2 : 1}
        />
      </div>
    </div>
  );
}

export default ColorDisplay;
