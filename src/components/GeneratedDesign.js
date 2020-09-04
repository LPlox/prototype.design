import React, { useState, useEffect } from "react";
import "./styles/GeneratedDesign.scss";

import webGenData from "./data/websites.json";

function GeneratedDesign() {
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

  return (
    <section className="generated">
      <div
        className="generated__render"
        dangerouslySetInnerHTML={{ __html: generatedWeb }}
      ></div>
    </section>
  );
}

export default GeneratedDesign;
