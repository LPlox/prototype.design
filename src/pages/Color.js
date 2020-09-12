import React, { useState } from "react";
import "../components/styles/Color.scss";
import NextPageBtn from "../components/NextPageBtn";
import InfoBtn from "../components/InfoBtn";

function Color() {
  const [next] = useState(false);
  // const [checked, setChecked] = useState();
  // const [colorArray,setColorArray] = useState()

  // const handleClick = (e, i) => {
  //   e.preventDefault();
  //   setWebTemp(i);
  //   setChecked(i);
  // };

  // useEffect(() => {
  //   if (changeColor) {
  //     fetch("https://cors-anywhere.herokuapp.com/http://colormind.io/api/", {
  //       method: "POST",
  //       body: JSON.stringify({ model: "ui" }),
  //     })
  //       .then((response) => response.json())
  //       .then((json) => {
  //         const rawColorArrayObject = Object.values(json.result);
  //         setColorScheme(rawToRBG(rawColorArrayObject));
  //       })
  //       .catch((error) => console.error(error));
  //     setChangeColor(false);
  //   }

  //   function rawToRBG(arr) {
  //     const newRGB = arr.map((colorNum) => {
  //       return "rgb(" + colorNum.join() + ")";
  //     });
  //     return newRGB;
  //   }
  // }, [changeColor]);

  return (
    <section className="color">
      <p className="color__deco">20.821.001</p>
      <p className="color__links">
        Layout &gt; Fonts &gt; Colors &gt;{" "}
        <span className="color__links--deactivate">Render</span>
      </p>
      <h1 className="color__header">WEB UI COLOR SCHEME</h1>
      <InfoBtn />
      <div className="color__info">
        <h2 className="color__subheader">CHOOSE COLOR SCHEME</h2>
        <p className="color__desc">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
      <div className="color__keywords">
        <ul>
          <li>Keywords</li>
        </ul>
      </div>

      {next ? <NextPageBtn linkTo={"/prototype/render"} /> : null}
    </section>
  );
}

export default Color;
