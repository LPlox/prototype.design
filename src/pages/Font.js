import React, { useState, useEffect } from "react";
import "../components/styles/ProtoPage.scss";
import NextPageBtn from "../components/NextPageBtn";
import InfoBtn from "../components/InfoBtn";
import FontDisplay from "../components/FontDisplay";

function Font({ windowWidth, fontData, setFont }) {
  const [next, setNext] = useState(false);
  const [checked, setChecked] = useState();
  let bgIndex = 0;

  const backgroundColor = [
    "#FAF9F4",
    "#E2DEDB",
    "#E9D0BA",
    "#D1C7BE",
    "#F0E2D7",
    "#FBF8F1",
    "#FAF9F7",
    "#C18E7B",
  ];

  const handleClick = (e, i, font) => {
    e.preventDefault();
    setFont(font);
    setChecked(i);
  };

  useEffect(() => {
    if (checked > -1) setNext(true);
  }, [checked]);

  return (
    <section className="proto">
      <p className="proto__deco">20.821.001</p>
      <p className="proto__links">
        Layout &gt; Fonts &gt;{" "}
        <span className="proto__links--deactivate">Colors &gt; Render</span>
      </p>
      <h1 className="proto__header">FONT COMBINATIONS</h1>
      <InfoBtn />
      <div className="proto__info">
        <h2 className="proto__subheader">CHOOSE A FONT SET</h2>
        <p className="proto__desc">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
      <div className="proto__keywords">
        <ul>
          <li>Keywords</li>
          <li>Kerning</li>
          <li>Line Height</li>
          <li>Letter spacing</li>
          <li>Text Align</li>
          <li>Letter case</li>
          <li>Serif</li>
          <li>Sans sherif</li>
        </ul>
      </div>
      {fontData
        ? fontData.map((font, i) => {
            let gridOrder, webHeight;

            if (bgIndex === 7) {
              bgIndex = 0;
            } else {
              bgIndex++;
            }

            if (windowWidth < 468) {
              gridOrder = "grid1 / grid12";
              webHeight = "26vh";
            } else if (windowWidth > 468 && windowWidth < 768) {
              gridOrder = "grid1 / grid12";
              webHeight = "50vh";
            } else {
              gridOrder = i % 2 === 0 ? "grid1 / grid6" : "grid7 / grid12";
              webHeight = "50vh";
            }

            const divStyle = {
              width: "100%",
              gridColumn: gridOrder,
              cursor: "pointer",
            };

            const renderStyle = {
              width: "100%",
              height: webHeight,
              backgroundColor: backgroundColor[bgIndex],
              border: "3px solid #f5f5f5",
            };

            const checkedStyle = {
              width: "100%",
              height: webHeight,
              backgroundColor: backgroundColor[bgIndex],
              border: "3px solid #E52222",
            };

            return (
              <div
                key={i}
                style={divStyle}
                onClick={(e) => handleClick(e, i, font)}
              >
                <FontDisplay
                  font={font}
                  divStyle={checked === i ? checkedStyle : renderStyle}
                  fontMultiplier={0.5}
                />
              </div>
            );
          })
        : null}
      {next ? <NextPageBtn linkTo={"/prototype/color"} /> : null}
    </section>
  );
}

export default Font;
