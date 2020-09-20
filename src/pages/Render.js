import React from "react";
import "../components/styles/ProtoPage.scss";
import "../components/styles/Render.scss";
import InfoBtn from "../components/InfoBtn";
import GeneratedDesign from "../components/GeneratedDesign";
import html2canvas from "html2canvas";

function Render({ font, colorScheme, designIndex, windowWidth }) {
  const ref = React.createRef();

  const divStyle = {
    width: "100%",
    gridColumn: "grid1 / grid12",
    transform: "scale(0.8, 0.8)",
  };

  const renderScale = windowWidth > 768 ? 6 : 10;

  const renderWebsite = (e) => {
    // e.preventDefault();
    // window.scrollTo(0, ref.current.offsetTop - 100);
    // setTimeout(function () {
    html2canvas(ref.current, { scale: renderScale }).then((render) => {
      const a = document.createElement("a");
      a.href = render.toDataURL();
      a.download = "receipt.png";
      a.click();
    });
    // }, 2000);
  };

  return (
    <div className="proto">
      <p className="proto__deco">20.821.001</p>
      <p className="proto__links">Layout &gt; Fonts &gt; Colors &gt; Render</p>
      <h1 className="proto__header">DESIGN RENDER</h1>
      <InfoBtn />
      {font && colorScheme && designIndex ? (
        <div style={divStyle} ref={ref}>
          <GeneratedDesign
            font={font}
            colorScheme={colorScheme}
            designIndex={designIndex}
          />
        </div>
      ) : (
        <p>Something is missing...</p>
      )}
      {/* {renderPage ? (
        <div
          style={{
            width: "100vw",
            height: "110vh",
            overflow: "hidden",
            position: "absolute",
          }}
        >
          <div
            className="render"
            ref={ref}
            style={colorScheme ? { backgroundColor: colorScheme[2] } : {}}
          >
            <GeneratedDesign
              font={font}
              colorScheme={colorScheme}
              designIndex={designIndex}
              divStyle={renderInfoStyle}
              fontMultiplier={0.6}
            />
            <button
              data-html2canvas-ignore="true"
              className="download__btn"
              onClick={renderWebsite}
            >
              Download render as png
            </button>
          </div>
        </div>
      ) : null} */}
      <button className="download__btn" id="download" onClick={renderWebsite}>
        Download render as png
      </button>
    </div>
  );
}

export default Render;
