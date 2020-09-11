import React from "react";
import "./styles/GeneratedDesign.scss";

function GeneratedDesign({
  font,
  colorScheme,
  handleFontChange,
  handleColorChange,
  renderWebDesign,
  handleWebTempChange,
  divStyle,
  windowWidth,
}) {
  return (
    <div className="generated__render" style={divStyle}>
      {font ? renderWebDesign() : null}
    </div>
  );
}

export default GeneratedDesign;
