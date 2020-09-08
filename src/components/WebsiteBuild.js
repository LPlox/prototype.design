import React, { useState, useEffect } from "react";
// eslint-disable-next-line
import GenTitle from "./GenTitle";
// eslint-disable-next-line
import GenSubHeader from "./GenSubHeader";
// eslint-disable-next-line
import GenBodyText from "./GenBodyText";
import webGenData from "./data/websites.json";

function WebsiteBuild() {
  const [webData] = useState(webGenData);
  const [generatedWeb, setGeneratedWeb] = useState("");

  useEffect(() => {
    if (webData) {
      const randoIndex = () => {
        return Math.floor(Math.random() * webData.length);
      };
      const web = webData[randoIndex()];
      setGeneratedWeb(web.jsx);
    }
  }, [webData]);

  return generatedWeb;
}

export default WebsiteBuild;
