import React, { useState, useEffect, lazy, Suspense } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.scss";

import Nav from "./components/Nav";
import Home from "./pages/Home";
import fontGenData from "./components/data/fontCombo.json";
import colorData from "./components/data/colorSchemes.json";

const Resources = lazy(() => import("./pages/Resources"));
const Why = lazy(() => import("./pages/Why"));
const Layout = lazy(() => import("./pages/Layout"));
const Font = lazy(() => import("./pages/Font"));
const Color = lazy(() => import("./pages/Color"));
const Render = lazy(() => import("./pages/Render"));
const NoMatch = lazy(() => import("./pages/NoMatch"));
const WebFont = require("webfontloader");

function App() {
  //load raw font data
  const [fontData] = useState(fontGenData);

  //Most important states
  const [colorScheme, setColorScheme] = useState();
  const [font, setFont] = useState();
  const [windowWidth, setWindowWidth] = useState();
  const [webTemp, setWebTemp] = useState(
    Math.floor(Math.random() * Math.floor(3)) + 1
  );

  //Change state of the font, color and webtempleta
  const [changeFont, setChangeFont] = useState(false);
  const [changeColor, setChangeColor] = useState(true);
  const [changeWebTemp, setChangeWebTemp] = useState(false);
  const [random, setRandom] = useState(true);

  useEffect(() => {
    console.log(colorScheme);
  }, [colorScheme]);

  useEffect(() => {
    console.log("webtemp " + webTemp);
  }, [webTemp]);

  useEffect(() => {
    if (changeWebTemp)
      setWebTemp(Math.floor(Math.random() * Math.floor(3)) + 1);
    setChangeWebTemp(false);
    //Should randomize until its not the same one...
  }, [changeWebTemp]);

  // Fetch a new color scheme
  useEffect(() => {
    // if (changeColor) {
    //   fetch("https://cors-anywhere.herokuapp.com/http://colormind.io/api/", {
    //     method: "POST",
    //     body: JSON.stringify({ model: "ui" }),
    //   })
    //     .then((response) => response.json())
    //     .then((json) => {
    //       const rawColorArrayObject = Object.values(json.result);
    //       setColorScheme(rawToRBG(rawColorArrayObject));
    //     })
    //     .catch((error) => console.error(error));
    //   setChangeColor(false);
    // }

    // function componentToHex(c) {
    //   var hex = c.toString(16);
    //   return hex.length === 1 ? "0" + hex : hex;
    // }

    // function rgbToHex(r, g, b) {
    //   return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
    // }

    // function rawToRBG(arr) {
    //   const hexColor = arr.map((color) =>
    //     rgbToHex(color[0], color[1], color[2])
    //   );
    //   return hexColor;
    // }

    if (changeColor) {
      setColorScheme(
        colorData[Math.floor(Math.random() * Math.floor(colorData.length))]
      );
      setChangeColor(false);
    }
  }, [changeColor]);

  // fetch a new font combination
  useEffect(() => {
    if (fontData || changeFont) {
      const randoIndex = () => {
        return Math.floor(Math.random() * fontData.length);
      };
      setFont(fontData[randoIndex()]);
      setChangeFont(false);
    }
  }, [changeFont, fontData]);

  //Load the selected fonts
  useEffect(() => {
    if (font) {
      WebFont.load({
        google: {
          families: [
            `${font.header.font}: ${
              font.header.weight ? font.header.weight : 400
            }`,
            `${font.subheader.font}: ${
              font.subheader.weight ? font.subheader.weight : 400
            }`,
            `${font.body.font}: ${font.body.weight ? font.body.weight : 400}`,
          ],
        },
        classes: false,
      });
      console.log(
        `${font.header.font}: ${font.header.weight ? font.header.weight : 400}`,
        `${font.subheader.font}: ${
          font.subheader.weight ? font.subheader.weight : 400
        }`,
        `${font.body.font}: ${font.body.weight ? font.body.weight : 400}`
      );
    }
  }, [font]);

  //Window width
  useEffect(() => {
    function handleResize() {
      setWindowWidth(window.innerWidth);
    }
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  //Routing
  return (
    <Router>
      <div className="App">
        <Nav />

        <Suspense
          fallback={<div className="suspence__loading">Loading...</div>}
        >
          <Switch>
            <Route exact path="/">
              <Home
                font={font}
                colorScheme={colorScheme}
                designIndex={webTemp}
                handleFontChange={() => {
                  if (random) setChangeFont(true);
                }}
                handleColorChange={() => {
                  if (random) setChangeColor(true);
                }}
                handleWebTempChange={() => {
                  if (random) setChangeWebTemp(true);
                }}
                windowWidth={windowWidth}
                setRandom={setRandom}
              />
            </Route>
            <Route path="/resources">
              <Resources />
            </Route>
            <Route path="/why">
              <Why />
            </Route>
            <Route path="/prototype/layout">
              <Layout windowWidth={windowWidth} setWebTemp={setWebTemp} />
            </Route>
            <Route path="/prototype/font">
              <Font
                windowWidth={windowWidth}
                fontData={fontData}
                font={font}
                setFont={setFont}
              />
            </Route>
            <Route path="/prototype/color">
              <Color
                font={font}
                setColorScheme={setColorScheme}
                designIndex={webTemp}
                windowWidth={windowWidth}
              />
            </Route>
            <Route path="/prototype/render">
              <Render
                font={font}
                colorScheme={colorScheme}
                designIndex={webTemp}
                windowWidth={windowWidth}
              />
            </Route>
            <Route>
              <NoMatch />
            </Route>
          </Switch>
        </Suspense>
      </div>
    </Router>
  );
}

export default App;
