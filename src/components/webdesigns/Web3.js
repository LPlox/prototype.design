import React from "react";
import GenTitle from "./GenTitle";
import GenSubHeader from "./GenSubHeader";
import GenBodyText from "./GenBodyText";
import "./styles/web03.scss";

function Web3({ header, subheader, body, colorScheme, fontMultiplier }) {
  return (
    <div
      className="website-temp"
      style={
        colorScheme
          ? {
              backgroundColor: colorScheme[0],
              border: `2px solid ${colorScheme[2]}`,
              overflow: "hidden",
            }
          : { overflow: "hidden" }
      }
    >
      <div className="content__temp">
        <div className="temp3__links">
          <GenSubHeader
            className="temp3__link"
            font={subheader.font}
            size={fontMultiplier ? 1.6 * fontMultiplier + "vw" : "1.6vw"}
            weight={subheader.weight}
            color={colorScheme ? colorScheme[2] : ""}
            content={"MEN"}
          />
          <GenSubHeader
            className="temp3__link"
            font={subheader.font}
            size={fontMultiplier ? 1.6 * fontMultiplier + "vw" : "1.6vw"}
            weight={subheader.weight}
            color={colorScheme ? colorScheme[2] : ""}
            content={"WOMEN"}
          />
          <GenSubHeader
            className="temp3__link"
            font={subheader.font}
            size={fontMultiplier ? 1.6 * fontMultiplier + "vw" : "1.6vw"}
            weight={subheader.weight}
            color={colorScheme ? colorScheme[2] : ""}
            content={"KIDS"}
          />
          <GenSubHeader
            className="temp3__link"
            font={subheader.font}
            size={fontMultiplier ? 1.6 * fontMultiplier + "vw" : "1.6vw"}
            weight={subheader.weight}
            color={colorScheme ? colorScheme[2] : ""}
            content={"ACCESSORIES"}
          />
          <GenSubHeader
            className="temp3__link"
            font={subheader.font}
            size={fontMultiplier ? 1.6 * fontMultiplier + "vw" : "1.6vw"}
            weight={subheader.weight}
            color={colorScheme ? colorScheme[2] : ""}
            content={"SHOES"}
          />
        </div>

        <h1
          className="temp3__title"
          style={{
            fontFamily: header.font,
            fontSize: fontMultiplier ? 5.5 * fontMultiplier + "vw" : "5.5vw",
            color: colorScheme ? colorScheme[1] : "",
            weight: 700,
          }}
        >
          FASHION STYLING <br /> TAILORING <br /> HIGH FASHION ACCESSORIES
        </h1>

        <GenSubHeader
          className="temp3__subheader"
          font={subheader.font}
          size={fontMultiplier ? 1.6 * fontMultiplier + "vw" : "1.6vw"}
          weight={subheader.weight}
          color={colorScheme ? colorScheme[4] : ""}
          content={"BRAND"}
        />
        <div className="temp3__main">
          <GenBodyText
            className="temp3__note"
            font={body.font}
            size={fontMultiplier ? 0.6 * fontMultiplier + "vw" : "0.6vw"}
            weight={body.weight}
            color={colorScheme ? colorScheme[4] : ""}
            content={
              "WE OFFER FASHION STORE FOR MORE THAN 20 YEARS, WE PROVIDE YOU THE SAME FASHION ACCESSIBILITY AT A FASTER TIMES."
            }
          />
        </div>
      </div>
    </div>
  );
}

export default Web3;
