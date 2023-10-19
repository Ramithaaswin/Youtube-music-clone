import React, { useState } from "react";
import "./navbar.css";
import Searchbar from "./Searchbar";
import LogoComp from "./LogoComp";
import MenuIcon from "@mui/icons-material/Menu";
import CastIcon from "@mui/icons-material/Cast";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import AccountInfo from "./AccountInfo";

const Navbar = () => {
  const [showAccountDetails, setshowAccountDetails] = useState(false);

  const handleClick = () => {
    setshowAccountDetails(!showAccountDetails);
  };

  const handleOptionSelect = () => {
    setshowAccountDetails(false);
  };

  return (
    <div className="navbarMainContainer">
      <div className="leftSideNavbar">
        <MenuIcon />
        <LogoComp />
      </div>
      <Searchbar />
      <div className="rightSideNavbar">
        <CastIcon />
        {showAccountDetails && <AccountInfo onOptionSelect={handleOptionSelect}/>}
        <AccountCircleIcon onClick={handleClick}>
          <AccountInfo />
        </AccountCircleIcon>
      </div>
    </div>
  );
};

export default Navbar;
