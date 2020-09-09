import React from "react";
import GenTitle from "./GenTitle";
import GenSubHeader from "./GenSubHeader";
import GenBodyText from "./GenBodyText";

function Web03({ header, subheader, body }) {
  return (
    <div className="Web01">
      <div className="website-temp">
        <GenTitle
          className=""
          font={header.font}
          size={header.size}
          weight={header.weight}
          content={header.font.toString() + " 03"}
        />
        <GenSubHeader
          className=""
          font={subheader.font}
          size={subheader.size}
          weight={subheader.weight}
          content={subheader.font.toString()}
        />
        <GenBodyText
          className=""
          font={body.font}
          size={body.size}
          weight={body.weight}
          content={
            body.font.toString() +
            " Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae tenetur vero accusantium porro necessitatibus quasi totam inventore odio fuga iusto eum, iure sequi, consequatur sit. Accusantium iusto placeat eligendi rerum?"
          }
        />
      </div>
    </div>
  );
}

export default Web03;
