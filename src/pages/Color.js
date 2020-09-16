import React, { useState, useEffect } from "react";
import "../components/styles/ProtoPage.scss";
import NextPageBtn from "../components/NextPageBtn";
import InfoBtn from "../components/InfoBtn";
import colorData from "../components/data/colorSchemes.json";

const ColorDisplay = React.lazy(() => import("../components/ColorDisplay"));

function Color({ font, setColorScheme, designIndex, windowWidth }) {
  const [next, setNext] = useState(false);
  const [colorArray, setColorArray] = useState([]); //generated colorschemes from api
  const [isFetching, setIsFetching] = useState(true); //reaches the end of component
  const [checked, setChecked] = useState();

  const handleClick = (e, index, color) => {
    e.preventDefault();
    setColorScheme(color);
    setChecked(index);
    setNext(true);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll); //listening to scroll
  }, []);

  const handleScroll = () => {
    if (
      Math.ceil(window.innerHeight + document.documentElement.scrollTop + 500) >
      document.documentElement.offsetHeight
    ) {
      setIsFetching(true);
    }
  };

  useEffect(() => {
    if (isFetching) {
      fetch(
        "https://cors-anywhere.herokuapp.com/http://colormind.io/api/"
      ).then((response) => {
        if (response.ok) fetchColor();
        else fetchFromArray();
      });

      setIsFetching(false);
    }
  }, [isFetching, next]);

  const fetchColor = async () => {
    setTimeout(async () => {
      const result = await fetch(
        "https://cors-anywhere.herokuapp.com/http://colormind.io/api/",
        {
          method: "POST",
          body: JSON.stringify({ model: "ui" }),
        }
      )
        .then((response) => {
          if (response.ok) {
            console.log("response.ok");
            return response;
          } else {
            console.log("response not ok");
          }
        })
        .catch(() => {
          console.log("response not ok catched");
        });

      const data = await result.json();
      const rawColorArrayObject = Object.values(data.result);
      const colorScheme = rawToRBG(rawColorArrayObject);
      setColorArray((colors) => [...colors, colorScheme]);
    }, 1000);

    function componentToHex(c) {
      var hex = c.toString(16);
      return hex.length === 1 ? "0" + hex : hex;
    }

    function rgbToHex(r, g, b) {
      return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
    }

    function rawToRBG(arr) {
      const hexColor = arr.map((color) =>
        rgbToHex(color[0], color[1], color[2])
      );
      return hexColor;
    }
  };

  const fetchFromArray = async () => {
    setColorArray((color) => [
      ...color,
      colorData[Math.floor(Math.random() * Math.floor(colorData.length))],
    ]);
  };

  return (
    <section className="proto">
      <p className="proto__deco">20.821.001</p>
      <p className="proto__links">
        Layout &gt; Fonts &gt; Colors &gt;{" "}
        <span className="proto__links--deactivate">Render</span>
      </p>
      <h1 className="proto__header">WEB UI COLOR SCHEME</h1>
      <InfoBtn />
      <div className="proto__info">
        <h2 className="proto__subheader">CHOOSE COLOR SCHEME</h2>
        <p className="proto__desc">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
      <div className="proto__keywords">
        <ul>
          <li>Keywords</li>
        </ul>
      </div>

      {colorArray ? (
        colorArray.map((color, index) => {
          let gridOrder, webHeight;

          if (windowWidth < 468) {
            gridOrder = "grid1 / grid12";
            webHeight = "26vh";
          } else if (windowWidth > 468 && windowWidth < 768) {
            gridOrder = "grid1 / grid12";
            webHeight = "50vh";
          } else {
            gridOrder = index % 2 === 0 ? "grid1 / grid6" : "grid7 / grid12";
            webHeight = "50vh";
          }

          const divStyle = {
            width: "100%",
            gridColumn: gridOrder,
            cursor: "pointer",
            height: webHeight,
          };

          const renderInfoStyle = {
            backgroundColor: colorData[3] ? colorData[3][0] : "white",
            color: colorData[3] ? colorData[3][4] : "white",
          };

          const checkedInfoStyle = {
            backgroundColor: colorData[3] ? colorData[3][0] : "white",
            color: colorData[3] ? colorData[3][4] : "white",
            border: "1px solid #E52222",
          };

          return (
            <div
              style={divStyle}
              key={index}
              onClick={(e) => handleClick(e, index, color)}
            >
              <ColorDisplay
                font={font}
                colorScheme={color}
                theme={designIndex}
                divStyle={
                  checked === index ? checkedInfoStyle : renderInfoStyle
                }
                windowWidth={windowWidth}
              />
            </div>
          );
        })
      ) : (
        <p>Loading...</p>
      )}

      {next ? <NextPageBtn linkTo={"/prototype/render"} /> : null}
      {isFetching && <h1>Loading more colors...</h1>}
      <p>Loading...</p>
    </section>
  );
}

export default Color;
