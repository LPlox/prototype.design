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
      <div className="content__temp">
        <div className="temp2__top">
          <GenTitle
            className="temp2__title"
            font={header.font}
            size={fontMultiplier ? 1.2 * fontMultiplier + "vw" : "1.2vw"}
            weight={700}
            color={colorScheme ? colorScheme[0] : ""}
            content={"Brand"}
          />
          <div className="socials__svg">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="10"
              height="10"
              viewBox="0 0 24 24"
            >
              <path
                fill={colorScheme[0]}
                d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="10"
              height="10"
              viewBox="0 0 24 24"
            >
              <path
                fill={colorScheme[0]}
                d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="10"
              height="10"
              viewBox="0 0 24 24"
            >
              <path
                fill={colorScheme[0]}
                d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"
              />
            </svg>
          </div>
        </div>

        <GenSubHeader
          className="temp2__subheader"
          font={subheader.font}
          size={fontMultiplier ? 1.6 * fontMultiplier + "vw" : "1.6vw"}
          weight={subheader.weight}
          color={colorScheme ? colorScheme[4] : ""}
          content={"Statement"}
        />

        <div className="temp2__main">
          {/* <GenBodyText
            className="temp2__body"
            font={body.font}
            size={fontMultiplier ? 2.4 * fontMultiplier + "vw" : "2.4vw"}
            weight={body.weight}
            color={colorScheme ? colorScheme[4] : ""}
            content={
              "Our team is made up of professionals who work together on a daily basis working towards common goals such as efficiency, quality, customer service skills & processes, product development, online/offline marketing, brand management, strategic planning etc."
            }
          /> */}

          <p
            className="temp2__body"
            style={{
              fontFamily: body.font,
              fontSize: fontMultiplier ? 2.4 * fontMultiplier + "vw" : "2.4vw",
              color: colorScheme ? colorScheme[4] : "",
              weight: 700,
            }}
          >
            Our team is made up of professionals who work together on a daily
            basis working towards common goals such as efficiency, quality,
            customer service skills & processes, product development,
            online/offline marketing, brand management, strategic planning etc.
          </p>
        </div>
        <GenBodyText
          className="temp2__note"
          font={body.font}
          size={fontMultiplier ? 0.6 * fontMultiplier + "vw" : "0.6vw"}
          weight={body.weight}
          color={colorScheme ? colorScheme[4] : ""}
          content={
            "Note: We are a leading UK design studio working with commercial and retail projects for major brands and individuals."
          }
        />
      </div>
    </div>
  );
}

export default Web2;
