import React from "react";
import "./musicPlayerBottomWindow.css";
import PauseIcon from "@mui/icons-material/Pause";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";

function MusicControls({ isPlaying, togglePlayPause }) {
  // const togglePlayPause = () => {
  //   setIsPlaying(!isPlaying);
  // };

  return (
    <div className="MusicControlsmaincontainer">
      {isPlaying ? (
        <PauseIcon className="pauseicon" onClick={togglePlayPause} />
      ) : (
        <PlayArrowIcon className="playicon" onClick={togglePlayPause} />
      )}
      {/* <PauseIcon className="pauseicon" />
      <PlayArrowIcon className="playicon" /> */}
    </div>
  );
}

export default MusicControls;
