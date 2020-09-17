import React from "react";
import "./styles/GeneratedDesign.scss";
import Webdesigns from "../components/webdesigns";

function GeneratedDesign({
  font,
  colorScheme,
  designIndex,
  divStyle,
  fontMultiplier,
  divHeight,
}) {
  function renderWebDesign(num) {
    const type = "Web" + num;
    const ComponentToRender = Webdesigns[type];
    return (
      <ComponentToRender
        header={font.header}
        subheader={font.subheader}
        body={font.body}
        colorScheme={colorScheme}
        divHeight={divHeight}
        fontMultiplier={fontMultiplier}
      />
    );
  }

  return (
    <div className="generated__render" style={divStyle}>
      {font ? renderWebDesign(designIndex) : null}
    </div>
  );
}

export default GeneratedDesign;
