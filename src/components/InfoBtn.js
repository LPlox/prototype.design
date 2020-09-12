import React from "react";
import "./styles/InfoBtn.scss";

function InfoBtn() {
  return (
    <button className="info">
      INFO
      <svg
        className="info__svg"
        width="20"
        height="20"
        viewBox="0 0 6 12"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M0 12V0L6 6L0 12Z" fill="#E14529" />
      </svg>
    </button>
  );
}

export default InfoBtn;
