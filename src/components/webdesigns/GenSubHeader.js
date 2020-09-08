import React from "react";

function GenSubHeader({ className, font, size, weight, content }) {
  return (
    <h2
      className={className}
      style={{ fontStyle: font, fontSize: size, fontWeight: weight }}
    >
      {content}
    </h2>
  );
}

export default GenSubHeader;
