import React from "react";
// import { v4 as uuidv4 } from "uuid";
import "./styles/GeneratedDesign.scss";

function GeneratedDesign({
  font,
  colorScheme,
  handleFontChange,
  handleColorChange,
  renderWebDesign,
  handleWebTempChange,
}) {
  // const [colorDiv, setColorDiv] = useState([]);

  // useEffect(() => {
  //   function arrayToRgb(arr) {
  //     arr.map((color) => {
  //       const colorRgb = "rgb(" + color.join() + ")";
  //       const divStyle = {
  //         background: `${colorRgb}`,
  //         display: "inline-block",
  //         width: "50px",
  //         height: "50px",
  //         border: "solid black 2px",
  //         margin: "0 5px",
  //       };

  //       return setColorDiv((colorDiv) => [
  //         ...colorDiv,
  //         <div key={uuidv4()} style={divStyle}>
  //           {}
  //         </div>,
  //       ]);
  //     });
  //   }

  //   if (colorScheme) {
  //     colorScheme.map((color) => arrayToRgb(color));
  //   }
  // }, [colorScheme]);

  return (
    <section className="generated">
      <div className="generated__render">{font ? renderWebDesign() : null}</div>
      <div>
        <button onClick={handleColorChange}>Change Colors</button>
        <button onClick={handleFontChange}>Change Fonts</button>
        <button onClick={handleWebTempChange}>Change Templet</button>
      </div>
    </section>
  );
}

export default GeneratedDesign;
