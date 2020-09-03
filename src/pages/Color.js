import React from "react";
import { Link } from "react-router-dom";

function Color() {
  return (
    <div className="Color">
      <h1>Color</h1>
      <Link to="/prototype/render">
        <button>Continue</button>
      </Link>
    </div>
  );
}

export default Color;
