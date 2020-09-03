import React from "react";
import { Link } from "react-router-dom";

function Layout() {
  return (
    <div className="Layout">
      <h1>Layout</h1>
      <Link to="/prototype/font">
        <button>Continue</button>
      </Link>
    </div>
  );
}

export default Layout;
