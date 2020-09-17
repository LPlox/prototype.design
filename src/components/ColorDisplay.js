import React from "react";
import "./styles/GeneratedInfo.scss";
import { v4 as uuidv4 } from "uuid";
import "../components/styles/ColorInfo.scss";
import GeneratedDesign from "./GeneratedDesign";

function ColorDisplay({ font, colorScheme, theme, divStyle, windowWidth }) {
  let webHeight, textDisplay;

  if (windowWidth < 468) {
    textDisplay = "none";
    webHeight = "24vh";
  } else if (windowWidth > 468 && windowWidth < 768) {
    textDisplay = "block";
    webHeight = "36vh";
  } else {
    textDisplay = "block";
    webHeight = "50vh";
  }

  const renderStyle = {
    paddingTop: "0.1%",
    backgroundColor: colorScheme[2],
    height: webHeight,
  };

  return (
    <div className="color-display__info" style={divStyle}>
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
                  height: "70px",
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
      <div className="theme-render">
        {/* <ComponentToRender
          header={font.header}
          subheader={font.subheader}
          body={font.body}
          colorScheme={colorScheme}
          divHeight="100%"
          fontMultiplier={windowWidth > 768 ? 2 : 1}
        /> */}
        <GeneratedDesign
          font={font}
          colorScheme={colorScheme}
          designIndex={theme}
          divStyle={renderStyle}
          divHeight={"60%"}
          fontMultiplier={1}
        />
      </div>
    </div>
  );
}

export default ColorDisplay;
