import React from "react";

function GenBodyText({ className, font, size, weight, content }) {
  return (
    <p
      className={className}
      style={{ fontStyle: font, fontSize: size, fontWeight: weight }}
    >
      {content}
    </p>
  );
}

export default GenBodyText;
