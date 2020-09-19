import React from "react";
import "./styles/GeneratedInfo.scss";
import { v4 as uuidv4 } from "uuid";

function GeneratedInfo({ font, colorScheme, theme, divStyle, windowWidth }) {
  return (
    <div className="generated__info" style={divStyle}>
      <div className="generated__fonts">
        {font ? (
          <p key="font1" style={{ fontFamily: font.header.font }}>
            {font.header.font}
          </p>
        ) : (
          <p>Loading Fonts...</p>
        )}
        {font ? (
          <p key="font2" style={{ fontFamily: font.subheader.font }}>
            {font.subheader.font}
          </p>
        ) : null}
        {font ? (
          <p key="font3" style={{ fontFamily: font.body.font }}>
            {font.body.font}
          </p>
        ) : null}
      </div>
      <div className="generated__colors">
        {colorScheme ? (
          colorScheme.map((color) => {
            const divStyle = {
              background: `${color}`,
              display: "inline-block",
              width: windowWidth > 768 ? "50px" : "30px",
              height: windowWidth > 768 ? "50px" : "30px",
              border: "0.4px solid black",
              margin: "5px 5px",
            };

            const textStyle = {
              position: "relative",
              top: windowWidth > 768 ? "50px" : "30px",
              fontSize: windowWidth > 768 ? "0.8rem" : "0.4rem",
            };

            return (
              <div key={uuidv4()} style={divStyle}>
                <p style={textStyle}>{color}</p>
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

export default GeneratedInfo;
