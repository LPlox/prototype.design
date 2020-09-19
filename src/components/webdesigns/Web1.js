import React from "react";
import GenTitle from "./GenTitle";
import GenSubHeader from "./GenSubHeader";
import GenBodyText from "./GenBodyText";
import "./styles/web01.scss";

function Web1({ header, subheader, body, colorScheme, fontMultiplier }) {
  // function hexToRgb(hex) {
  //   var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  //   return result
  //     ? {
  //         r: parseInt(result[1], 16),
  //         g: parseInt(result[2], 16),
  //         b: parseInt(result[3], 16),
  //       }
  //     : null;
  // }

  // const shadeColor = hexToRgb(colorScheme[4]);
  // boxShadow: `0px 0px 12px -3px rgba(${
  //   shadeColor.r.toString() +
  //   "," +
  //   shadeColor.g.toString() +
  //   "," +
  //   shadeColor.b.toString() +
  //   "," +
  //   "0.8"
  // })`,

  return (
    <div
      className="website-temp"
      style={
        colorScheme
          ? {
              backgroundColor: colorScheme[0],
              border: `2px solid ${colorScheme[2]}`,
            }
          : {}
      }
    >
      <div className="content-temp">
        <GenTitle
          className="temp-title"
          font={header.font}
          size={fontMultiplier ? 5 * fontMultiplier + "vw" : "5vw"}
          weight={header.weight}
          color={colorScheme ? colorScheme[4] : ""}
          content={header.font.toString() + " 01"}
        />
        <GenSubHeader
          className="temp-subheader"
          font={subheader.font}
          size={fontMultiplier ? 2 * fontMultiplier + "vw" : "2vw"}
          weight={subheader.weight}
          color={colorScheme ? colorScheme[4] : ""}
          content={subheader.font.toString()}
        />
        <GenBodyText
          className="temp-body"
          font={body.font}
          size={fontMultiplier ? 1.6 * fontMultiplier + "vw" : "1.6vw"}
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

export default Web1;
