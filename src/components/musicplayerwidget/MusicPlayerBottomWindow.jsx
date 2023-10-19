import React from "react";
import "./musicPlayerBottomWindow.css";
import MusicControls from "./MusicControls";
import MusicInfo from "./MusicInfo";
import CloseIcon from "@mui/icons-material/Close";

function MusicPlayerBottomWindow({ item, setIsMusicWindowVisible }) {
  const handleCloseOnClick = () => {
    setIsMusicWindowVisible(false);
  };

  return (
    <div className="musicplayerContainer">
      <MusicControls />
      <MusicInfo item={item} />
      <CloseIcon
        className="close-icon"
        sx={{ fontSize: 20 }}
        onClick={() => handleCloseOnClick()}
      />
      {/* {console.log(item.item.audio_url)} */}
      <audio autoPlay src={item.item.audio_url} type="audio/mp3">
        audio
      </audio>
    </div>
  );
}

export default MusicPlayerBottomWindow;
