import React from "react";
import GenTitle from "./GenTitle";
import GenSubHeader from "./GenSubHeader";
import GenBodyText from "./GenBodyText";
import "./styles/web02.scss";

function Web2({ header, subheader, body, colorScheme, fontMultiplier }) {
  return (
    <div
      className="website-temp"
      style={
        colorScheme
          ? {
              backgroundColor: colorScheme[2],
              border: `2px solid ${colorScheme[4]}`,
              overflow: "hidden",
            }
          : { overflow: "hidden" }
      }
    >
      <div className="content-temp">
        <div className="temp2__top">
          <GenTitle
            className="temp2__title"
            font={header.font}
            size={fontMultiplier ? 1.2 * fontMultiplier + "vw" : "1.2vw"}
            weight={700}
            color={colorScheme ? colorScheme[0] : ""}
            content={"Brand"}
          />
          <div className="temp2__links">
            <GenSubHeader
              className="temp2__link"
              font={subheader.font}
              size={fontMultiplier ? 1 * fontMultiplier + "vw" : "1vw"}
              weight={subheader.weight}
              color={colorScheme ? colorScheme[0] : ""}
              content={"About"}
            />
            <GenSubHeader
              className="temp2__link"
              font={subheader.font}
              size={fontMultiplier ? 1 * fontMultiplier + "vw" : "1vw"}
              weight={subheader.weight}
              color={colorScheme ? colorScheme[0] : ""}
              content={"Contact"}
            />
          </div>
        </div>

        <GenSubHeader
          className="temp2__subheader"
          font={subheader.font}
          size={fontMultiplier ? 1.6 * fontMultiplier + "vw" : "1.6vw"}
          weight={subheader.weight}
          color={colorScheme ? colorScheme[4] : ""}
          content={"About Us"}
        />

        <div className="temp2__main">
          <GenBodyText
            className="temp2__body"
            font={body.font}
            size={fontMultiplier ? 3 * fontMultiplier + "vw" : "3vw"}
            weight={body.weight}
            color={colorScheme ? colorScheme[4] : ""}
            content={
              "Our team is made up of professionals who work together on a daily basis working towards common goals such as efficiency, quality, customer service skills & processes, product development, online/offline marketing, brand management, strategic planning etc."
            }
          />
        </div>
      </div>
    </div>
  );
}

export default Web2;
