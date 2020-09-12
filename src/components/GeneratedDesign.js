import React from "react";
import "./styles/GeneratedDesign.scss";

function GeneratedDesign({
  font,
  colorScheme,
  designIndex,
  handleFontChange,
  handleColorChange,
  renderWebDesign,
  handleWebTempChange,
  divStyle,
  windowWidth,
}) {
  return (
    <div className="generated__render" style={divStyle}>
      {font ? renderWebDesign(designIndex) : null}
    </div>
  );
}

export default GeneratedDesign;
