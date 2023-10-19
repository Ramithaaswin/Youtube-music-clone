import React from "react";
import "./musicPlayerBottomWindow.css";
import PauseIcon from "@mui/icons-material/Pause";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";

function MusicControls() {
  return (
    <div className="MusicControlsmaincontainer">
      <PauseIcon className="pauseicon"/>
      <PlayArrowIcon className="playicon"/>
    </div>
  );
}

export default MusicControls;
