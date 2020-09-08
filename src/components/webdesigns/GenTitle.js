import React from "react";

function GenTitle({ className, font, size, weight, content }) {
  return (
    <h1
      className={className}
      style={{ fontStyle: font, fontSize: size, fontWeight: weight }}
    >
      {content}
    </h1>
  );
}

export default GenTitle;
