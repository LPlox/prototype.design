import React from "react";
import "./styles/GeneratedDesign.scss";
import Webdesigns from "../components/webdesigns";

function GeneratedDesign({
  font,
  colorScheme,
  designIndex,
  divStyle,
  fontMultiplier,
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
        fontMultiplier={fontMultiplier}
      />
    );
  }

  return (
    <div className="generated__render" style={divStyle}>
      <div
        className="wrapper"
        style={{
          top: 0,
          height: 0,
          paddingBottom: "65%",
          position: "relative",
          width: "100%",
        }}
      >
        {font ? renderWebDesign(designIndex) : null}
      </div>
    </div>
  );
}

export default GeneratedDesign;
