import React, { useState, useRef } from "react";
import "./musicPlayerBottomWindow.css";
import MusicControls from "./MusicControls";
import MusicInfo from "./MusicInfo";
import CloseIcon from "@mui/icons-material/Close";

function MusicPlayerBottomWindow({ setIsMusicWindowVisible, song }) {
  const [isPlaying, setIsPlaying] = useState(true);
  const audioRef = useRef(null);

  const handleCloseOnClick = () => {
    setIsMusicWindowVisible(false);
  };

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
  };

  return (
    <div className="musicplayerContainer">
      <MusicControls isPlaying={isPlaying} togglePlayPause={togglePlayPause} />
      <MusicInfo item={song} />
      <CloseIcon
        className="close-icon"
        sx={{ fontSize: 20 }}
        onClick={() => handleCloseOnClick()}
      />
      {/* {console.log(item.item.audio_url)} */}
      {/* <audio autoPlay src={item.item.audio_url} type="audio/mp3"> */}
      <audio ref={audioRef} autoPlay src={song.audio_url} type="audio/mp3">
        audio
      </audio>
    </div>
  );
}

export default MusicPlayerBottomWindow;
