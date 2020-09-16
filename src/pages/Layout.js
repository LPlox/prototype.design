import React, { useEffect, useState } from "react";
import Webdesigns from "../components/webdesigns";
import GeneratedDesign from "../components/GeneratedDesign";
import "../components/styles/ProtoPage.scss";
import NextPageBtn from "../components/NextPageBtn";
import InfoBtn from "../components/InfoBtn";

function Layout({ windowWidth, setWebTemp }) {
  const [next, setNext] = useState(false);
  const [checked, setChecked] = useState();
  const websites = [1, 2, 3];

  const handleClick = (e, i) => {
    e.preventDefault();
    setWebTemp(i);
    setChecked(i);
  };

  useEffect(() => {
    if (checked) setNext(true);
  }, [checked]);

  const colorSchemeTemp = [
    "#f3f3ef",
    "#9c9d9b",
    "#7b7b80",
    "#808391",
    "#292b34",
  ];

  const fontTemp = {
    id: "001",
    keywords: "",
    header: {
      font: "Playfair Display",
      weight: 400,
      style: "",
      size: 1,
    },
    subheader: {
      font: "Montserrat",
      weight: 100,
      style: "",
      size: 0.6,
    },
    body: {
      font: "Montserrat",
      weight: 100,
      style: "",
      size: 0.4,
    },
  };

  function WebDesignTemp(num) {
    const type = "Web" + num;
    const ComponentToRender = Webdesigns[type];
    return (
      <ComponentToRender
        header={fontTemp.header}
        subheader={fontTemp.subheader}
        body={fontTemp.body}
        colorScheme={colorSchemeTemp}
        divHeight="80%"
        fontMultiplier={1}
      />
    );
  }

  return (
    <section className="proto">
      <p className="proto__deco">20.821.001</p>
      <p className="proto__links">
        Layout &gt;{" "}
        <span className="proto__links--deactivate">
          Fonts &gt; Colors &gt; Render
        </span>
      </p>
      <h1 className="proto__header">GENERATE WEBSITE LAYOUT</h1>
      <InfoBtn />
      <div className="proto__info">
        <h2 className="proto__subheader">CHOOSE A WEBSITE LAYOUT</h2>
        <p className="proto__desc">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
      <div className="proto__keywords">
        <ul>
          <li>Keywords</li>
        </ul>
      </div>
      {websites.map((i) => {
        let gridOrder, webHeight;
        if (windowWidth < 468) {
          gridOrder = "grid1 / grid12";
          webHeight = "26vh";
        } else if (windowWidth > 468 && windowWidth < 768) {
          gridOrder = "grid1 / grid12";
          webHeight = "38vh";
        } else {
          gridOrder = i % 2 === 0 ? "grid7 / grid12" : "grid1 / grid6";
          webHeight = "38vh";
        }
        const divStyle = {
          gridColumn: gridOrder,
          cursor: "pointer",
        };

        const renderStyle = {
          paddingTop: "0.1%",
          backgroundColor: colorSchemeTemp[2],
          height: webHeight,
        };

        const checkedStyle = {
          paddingTop: "0.1%",
          backgroundColor: colorSchemeTemp[4],
          height: webHeight,
        };

        return (
          <div key={i} style={divStyle} onClick={(e) => handleClick(e, i)}>
            <GeneratedDesign
              font={fontTemp}
              designIndex={i}
              renderWebDesign={WebDesignTemp}
              divStyle={checked === i ? checkedStyle : renderStyle}
            />
          </div>
        );
      })}
      {next ? <NextPageBtn linkTo={"/prototype/font"} /> : null}
    </section>
  );
}

export default Layout;
