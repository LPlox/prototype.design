import React from "react";
import "../components/styles/ProtoPage.scss";
import "../components/styles/Render.scss";
import InfoBtn from "../components/InfoBtn";
import GeneratedDesign from "../components/GeneratedDesign";
import html2canvas from "html2canvas";
import GeneratedInfo from "../components/GeneratedInfo";

function Render({ font, colorScheme, designIndex, windowWidth }) {
  const ref = React.createRef();

  const divStyle =
    windowWidth > 768
      ? {
          width: "100%",
          gridColumn: "grid1 / grid12",
          zIndex: 2,
          translateX: "-5px",
          cursor: "pointer",
          paddingRight: "2%",
        }
      : {
          width: "100%",
          gridColumn: "grid1 / grid12",
          zIndex: 2,
          translateX: "-5px",
          cursor: "pointer",
        };

  const renderInfoStyle = {
    display: "flex",
    flexDirections: "row",
    justifyContent: "space-between",
    color: colorScheme ? colorScheme[4] : "black",
    gridColumn: "grid1 / grid12",
    gridRow: "4",
    padding: "0 5%",
    height: "auto",
    width: "100%",
    marginTop: "10vh",
  };

  const renderScale = windowWidth > 768 ? 6 : 10;

  const renderWebsite = (e) => {
    // e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
    setTimeout(function () {
      html2canvas(ref.current, {
        scale: renderScale,
        backgroundColor: colorScheme[2],
      }).then((render) => {
        const a = document.createElement("a");
        a.href = render.toDataURL();
        a.download = "render.png";
        a.click();
      });
    }, 2000);
  };

  return (
    <div className="proto" style={{ overflow: "hidden" }}>
      <p className="proto__deco">20.821.001</p>
      <p className="proto__links">Layout &gt; Fonts &gt; Colors &gt; Render</p>
      <h1 className="proto__header">DESIGN RENDER</h1>
      <InfoBtn />

      <div style={{ gridColumn: "grid1 / grid12" }}>
        {font && colorScheme && designIndex ? (
          <div style={divStyle} ref={ref}>
            <div
              style={{ transform: "scale(0.9, 0.9)" }}
              onClick={renderWebsite}
            >
              <GeneratedDesign
                font={font}
                colorScheme={colorScheme}
                designIndex={designIndex}
              />
            </div>
            <div className="render__edit" style={{ display: "block" }}>
              <GeneratedInfo
                font={font}
                colorScheme={colorScheme}
                divStyle={renderInfoStyle}
                windowWidth={windowWidth}
              />
            </div>
          </div>
        ) : null}
      </div>
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
      {/* <div className="render__edit" style={{ display: "block" }}>
        <GeneratedInfo
          font={font}
          colorScheme={colorScheme}
          divStyle={renderInfoStyle}
          windowWidth={windowWidth}
        />
        <p data-html2canvas-ignore="true" className="render__desc">
          Click to download
        </p>
      </div> */}
      <p data-html2canvas-ignore="true" className="render__desc">
        Click render download
      </p>
    </div>
  );
}

export default Render;
