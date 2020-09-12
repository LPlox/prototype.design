import React from "react";
import "./styles/NextPageBtn.scss";
import { Link } from "react-router-dom";

function NextPageBtn({ linkTo }) {
  return (
    <Link to={linkTo} className="next-btn">
      &#8702;
    </Link>
  );
}

export default NextPageBtn;
