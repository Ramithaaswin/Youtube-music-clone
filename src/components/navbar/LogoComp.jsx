import React from "react";
import "./navbar.css";
import { Link } from "react-router-dom";

function LogoComp() {
  return (
    <>
      <div className="LogoMainContainer">
        <Link to="/">
          <img
            src="https://music.youtube.com/img/on_platform_logo_dark.svg"
            alt="Youtube Music"
          />
        </Link>
      </div>
    </>
  );
}

export default LogoComp;
