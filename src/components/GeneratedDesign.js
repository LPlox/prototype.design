import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import "./styles/GeneratedDesign.scss";

import Webdesigns from "./webdesigns/index";
import fontGenData from "./data/fontCombo.json";
const WebFont = require("webfontloader");

function GeneratedDesign() {
  // const [generatedWeb, setGeneratedWeb] = useState();
  const WebIndex = 3;

  const [colorScheme, setColorScheme] = useState("");
  const [colorDiv, setColorDiv] = useState([]);

  const [fontData] = useState(fontGenData);
  const [font, setFont] = useState();
  const [changeFont, setChangeFont] = useState(false);

  useEffect(() => {
    const type = "Web01";
    const ComponentToRender = Webdesigns[type];
    return <ComponentToRender />;
  }, []);

  function colormindApi() {
    fetch("http://colormind.io/api/", {
      method: "POST",
      body: JSON.stringify({ model: "ui" }),
    })
      .then((response) => response.json())
      .then((json) => setColorScheme(Object.values(json)))
      .catch((error) => console.error(error));
  }

  useEffect(() => {
    function arrayToRgb(arr) {
      arr.map((color) => {
        const colorRgb = "rgb(" + color.join() + ")";
        const divStyle = {
          background: `${colorRgb}`,
          display: "inline-block",
          width: "50px",
          height: "50px",
          border: "solid black 2px",
          margin: "0 5px",
        };

        return setColorDiv((colorDiv) => [
          ...colorDiv,
          <div key={uuidv4()} style={divStyle}>
            {}
          </div>,
        ]);
      });
    }

    if (colorScheme) {
      colorScheme.map((color) => arrayToRgb(color));
    }
  }, [colorScheme]);

  // useEffect(() => {
  //   if (webData) {
  //     const randoIndex = () => {
  //       return Math.floor(Math.random() * webData.length);
  //     };
  //     const web = webData[randoIndex()];
  //     setGeneratedWeb(web.jsx);
  //   }
  // }, [webData]);

  useEffect(() => {
    if (fontData || changeFont === true) {
      const randoIndex = () => {
        return Math.floor(Math.random() * fontData.length);
      };
      setFont(fontData[randoIndex()]);
      setChangeFont(false);
    }
  }, [changeFont, fontData]);

  useEffect(() => {
    if (font) {
      WebFont.load({
        google: {
          families: [font.header.font],
        },
      });
    }
  }, [font]);

  function renderWebDesign({ header, subheader, body }) {
    const type = "Web01";
    const ComponentToRender = Webdesigns[type];
    return (
      <ComponentToRender
        header={font.header}
        subheader={font.subheader}
        body={font.body}
      />
    );
  }

  return (
    <section className="generated">
      <div className="generated__render">
        {font ? renderWebDesign(font.header, font.subheader, font.body) : null}
      </div>
      <div>
        <button
          onClick={() => {
            colormindApi();
          }}
        >
          Change Colors
        </button>
        <div style={{ width: "350px" }}>
          {colorDiv.map((colorblock) => {
            return colorblock;
          })}
        </div>
        <button onClick={() => setChangeFont(true)}>Change Fonts</button>
      </div>
    </section>
  );
}

export default GeneratedDesign;
