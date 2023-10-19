import React from "react";
import "./sidebar.css";
import SidebarInnerContent from "./SidebarInnerContent";

const Sidebar = () => {
  return (
    <>
      <div className="sidebarMainContainer">
        <SidebarInnerContent />
      </div>
    </>
  );
};

export default Sidebar;
