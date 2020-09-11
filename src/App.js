import React, { useState, useEffect, lazy, Suspense } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.scss";

import Nav from "./components/Nav";
import Home from "./pages/Home";
import fontGenData from "./components/data/fontCombo.json";
import Webdesigns from "./components/webdesigns";

const Resources = lazy(() => import("./pages/Resources"));
const Contact = lazy(() => import("./pages/Contact"));
const Layout = lazy(() => import("./pages/Layout"));
const Font = lazy(() => import("./pages/Font"));
const Color = lazy(() => import("./pages/Color"));
const Render = lazy(() => import("./pages/Render"));
const WebFont = require("webfontloader");

function App() {
  //load raw font data
  const [fontData] = useState(fontGenData);

  //Most important states
  const [colorScheme, setColorScheme] = useState();
  const [font, setFont] = useState();
  const [windowWidth, setWindowWidth] = useState();
  const [randomWebTemp, setRandomWebTemp] = useState(
    // Math.floor(Math.random() * Math.floor(3)) + 1
    1
  );

  //Change state of the font, color and webtempleta
  const [fontMultiplier, setFontMultiplier] = useState(2);
  const [changeFont, setChangeFont] = useState(false);
  const [changeColor, setChangeColor] = useState(true);
  const [changeWebTemp, setChangeWebTemp] = useState(false);

  //Render a website template
  function renderWebDesign() {
    const type = "Web0" + randomWebTemp;
    const ComponentToRender = Webdesigns[type];
    return (
      <ComponentToRender
        header={font.header}
        subheader={font.subheader}
        body={font.body}
        colorScheme={colorScheme}
        fontMultiplier={fontMultiplier}
      />
    );
  }

  useEffect(() => {
    if (windowWidth) {
      if (windowWidth > 768) {
        setFontMultiplier(2);
      } else {
        setFontMultiplier(1);
      }
    }
  }, [windowWidth]);

  useEffect(() => {
    if (changeWebTemp)
      setRandomWebTemp(Math.floor(Math.random() * Math.floor(3)) + 1);
    setChangeWebTemp(false);
    //Should randomize until its not the same one...
  }, [changeWebTemp]);

  // Fetch a new color scheme
  useEffect(() => {
    if (changeColor) {
      fetch("https://cors-anywhere.herokuapp.com/http://colormind.io/api/", {
        method: "POST",
        body: JSON.stringify({ model: "ui" }),
      })
        .then((response) => response.json())
        .then((json) => {
          const rawColorArrayObject = Object.values(json.result);
          setColorScheme(rawToRBG(rawColorArrayObject));
        })
        .catch((error) => console.error(error));
      setChangeColor(false);
    }

    function rawToRBG(arr) {
      const newRGB = arr.map((colorNum) => {
        return "rgb(" + colorNum.join() + ")";
      });
      return newRGB;
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

        <Suspense fallback={<div>Loading...</div>}>
          <Switch>
            <Route exact path="/">
              <Home
                font={font}
                colorScheme={colorScheme}
                handleFontChange={() => {
                  setChangeFont(true);
                }}
                handleColorChange={() => {
                  setChangeColor(true);
                }}
                renderWebDesign={renderWebDesign}
                handleWebTempChange={() => {
                  setChangeWebTemp(true);
                }}
                windowWidth={windowWidth}
              />
            </Route>
            <Route path="/resources">
              <Resources />
            </Route>
            <Route path="/contact">
              <Contact />
            </Route>
            <Route path="/prototype/layout">
              <Layout />
            </Route>
            <Route path="/prototype/font">
              <Font />
            </Route>
            <Route path="/prototype/color">
              <Color />
            </Route>
            <Route path="/prototype/render">
              <Render />
            </Route>
          </Switch>
        </Suspense>
      </div>
    </Router>
  );
}

export default App;
