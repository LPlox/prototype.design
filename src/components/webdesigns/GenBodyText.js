import React from "react";

function GenBodyText({ className, font, size, weight, content, color }) {
  return (
    <p
      className={className}
      style={{
        fontFamily: font,
        fontSize: size,
        fontWeight: weight,
        color: color,
      }}
    >
      {content}
    </p>
  );
}

export default GenBodyText;
