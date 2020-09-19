import React from "react";
import GenTitle from "./GenTitle";
import GenSubHeader from "./GenSubHeader";
import GenBodyText from "./GenBodyText";
import "./styles/web01.scss";

function Web3({ header, subheader, body, colorScheme, fontMultiplier = 2 }) {
  return (
    <div
      className="website-temp"
      style={
        colorScheme
          ? {
              backgroundColor: colorScheme[0],
              border: `2px solid ${colorScheme[2]}`,
              borderRadius: "3px",
            }
          : {}
      }
    >
      <div className="content-temp">
        <GenTitle
          className="temp-title"
          font={header.font}
          size={fontMultiplier === 1 ? 2 * 0.5 + "vw" : "2vw"}
          weight={header.weight}
          color={colorScheme ? colorScheme[4] : ""}
          content={header.font.toString() + " 03"}
        />
        <GenSubHeader
          className="temp-subheader"
          font={subheader.font}
          size={fontMultiplier === 1 ? 3 * 0.5 + "vw" : "3vw"}
          weight={subheader.weight}
          color={colorScheme ? colorScheme[4] : ""}
          content={subheader.font.toString()}
        />
        <GenBodyText
          className="temp-body"
          font={body.font}
          size={fontMultiplier === 1 ? 3.2 * 0.5 + "vw" : "3.2vw"}
          weight={body.weight}
          color={colorScheme ? colorScheme[4] : ""}
          content={
            body.font.toString() +
            " Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae tenetur vero accusantium porro necessitatibus quasi totam inventore odio fuga iusto eum, iure sequi, consequatur sit. Accusantium iusto placeat eligendi rerum?"
          }
        />
      </div>
    </div>
  );
}

export default Web3;
