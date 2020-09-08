import React, { useState, useEffect } from "react";
import fontGenData from "./data/fontCombo.json";

function FontGenerator({ setFont }) {
  const [fontData] = useState(fontGenData);
  useEffect(() => {
    if (fontData || changeFont === true) {
      const randoIndex = () => {
        return Math.floor(Math.random() * fontData.length);
      };
      setFont(fontData[randoIndex()]);
      setChangeFont(false);
    }
  }, [changeFont, fontData]);

  return;
}

export default FontGenerator;
