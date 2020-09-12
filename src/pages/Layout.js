import React from "react";
import { Link } from "react-router-dom";
import Webdesigns from "../components/webdesigns";
import GeneratedDesign from "../components/GeneratedDesign";
import "../components/styles/Layout.scss";
import NextPageBtn from "../components/NextPageBtn";
import InfoBtn from "../components/InfoBtn";

function Layout({ windowWidth }) {
  const websites = [1, 2, 3];
  const colorSchemeTemp = [
    "#F2F2EF",
    "#9C9D9B",
    "#7B7B80",
    "#888E91",
    "#27262D",
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
        fontMultiplier={1}
      />
    );
  }

  return (
    <section className="layout">
      <p className="layout__deco">20.821.001</p>
      <p className="layout__links">
        Layout &gt;{" "}
        <span className="layout__links--deactivate">
          Fonts &gt; Colors &gt; Render
        </span>
      </p>
      <h1 className="layout__header">GENERATE WEBSITE LAYOUT</h1>
      <InfoBtn />
      <div className="layout__info">
        <h2 className="layout__subheader">CHOOSE A WEBSITE LAYOUT</h2>
        <p className="layout__desc">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
      <div className="layout__keywords">
        <ul>
          <li>Keywords</li>
        </ul>
      </div>
      {websites.map((i) => {
        let gridOrder, webHeight;

        if (windowWidth > 768) {
          gridOrder = i % 2 === 0 ? "grid7 / grid12" : "grid1 / grid6";
          webHeight = "50vh";
        } else {
          gridOrder = "grid1 / grid12";
          webHeight = "46vh";
        }
        const renderStyle = {
          width: "100%",
          height: webHeight,
          backgroundColor: colorSchemeTemp[0],
          gridColumn: gridOrder,
          display: "inline",
        };

        return (
          <GeneratedDesign
            key={i}
            font={fontTemp}
            designIndex={i}
            renderWebDesign={WebDesignTemp}
            divStyle={renderStyle}
          />
        );
      })}
      <Link to="/prototype/font">
        <NextPageBtn />
      </Link>
    </section>
  );
}

export default Layout;
