import React from "react";

function GenSubHeader({ className, font, size, weight, content, color }) {
  return (
    <h2
      className={className}
      style={{
        fontFamily: font,
        fontSize: size,
        fontWeight: weight,
        color: color,
      }}
    >
      {content}
    </h2>
  );
}

export default GenSubHeader;
