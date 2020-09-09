import React from "react";

function GenTitle({ className, font, size, weight, content, color }) {
  return (
    <h1
      className={className}
      style={{
        fontFamily: font,
        fontSize: size,
        fontWeight: weight,
        color: color,
      }}
    >
      {content}
    </h1>
  );
}

export default GenTitle;
