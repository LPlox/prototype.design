import React from "react";
import "../components/styles/ProtoPage.scss";
import InfoBtn from "../components/InfoBtn";
import GeneratedDesign from "../components/GeneratedDesign";

function Render({
  font,
  colorScheme,
  designIndex,
  fontMultiplier,
  windowWidth,
}) {
  const divStyle = {
    width: "100%",
    gridColumn: "grid2 / grid11",
  };

  const renderInfoStyle = {
    backgroundColor: colorScheme ? colorScheme[2] : "white",
    color: colorScheme ? colorScheme[4] : "black",
    height: windowWidth > 768 ? "70vh" : "30vh",
    padding: "0.1px",
  };

  return (
    <div className="proto">
      <p className="proto__deco">20.821.001</p>
      <p className="proto__links">Layout &gt; Fonts &gt; Colors &gt; Render</p>
      <h1 className="proto__header">DESIGN RENDER</h1>
      <InfoBtn />
      {font && colorScheme && designIndex ? (
        <div style={divStyle}>
          <GeneratedDesign
            font={font}
            colorScheme={colorScheme}
            designIndex={designIndex}
            divStyle={renderInfoStyle}
            fontMultiplier={fontMultiplier}
            divHeight={"80%"}
          />
        </div>
      ) : (
        <p>Something is missing...</p>
      )}
    </div>
  );
}

export default Render;
