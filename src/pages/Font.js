import React from "react";
import { Link } from "react-router-dom";

function Font() {
  return (
    <div className="Font">
      <h1>Font</h1>
      <Link to="/prototype/color">
        <button>Continue</button>
      </Link>
    </div>
  );
}

export default Font;
