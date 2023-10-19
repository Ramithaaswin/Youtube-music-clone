import React from "react";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import LogoutIcon from "@mui/icons-material/Logout";
import SubscriptionsIcon from "@mui/icons-material/Subscriptions";
import { Link } from "react-router-dom";

function AccountInfo({onOptionSelect}) {
  return (
    <div className="blur-div">
      <div className="account-dropdown-container">
        <ul>
          <li onClick={onOptionSelect}>
            <Link to="/signin" className="signinLink">
              <ExitToAppIcon className="signInIcon" />
              <p className="signin-menu">SignIn</p>
            </Link>
          </li>
          <li onClick={onOptionSelect}>
            <LogoutIcon />
            <p>SignOut</p>
          </li>
          <li onClick={onOptionSelect}>
            <Link to="/subscription" className="subscription-link">
              <SubscriptionsIcon className="subscription-icon" />
              <p className="subscription-menu">Subscription</p>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default AccountInfo;
