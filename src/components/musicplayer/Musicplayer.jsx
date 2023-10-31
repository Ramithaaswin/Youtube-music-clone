import React from "react";
import "./musicplayer.css";
import Sidebar from "../sidebar/Sidebar";
import { useLocation } from "react-router-dom";
// import PlayCircleIcon from "@mui/icons-material/PlayCircle";
// import MusicPlayerBottomWindow from "../musicplayerwidget/MusicPlayerBottomWindow";

function Musicplayer() {
  // const [isMusicWindowVisible, setIsMusicWindowVisible] = useState(false);

  // const handlePlayIconClick = () => {
  //   setIsMusicWindowVisible(true);
  // };

  // const song = location.state.song;

  const location = useLocation();
  const { from } = location.state;

  return (
    <div className="musicplayerdiv">
      <Sidebar />
      {Object.keys(from).map((item, idx) => {
        return (
          <div className="musicplayerMainContainer" key={idx}>
            <div className="musicplayer">
              {console.log(typeof from)}
              {console.log(from)}
              <img
                src={from.item.thumbnail}
                alt="song thumbnail"
                className="musicplayer-imgthumbnail"
              />
              {/* <PlayCircleIcon
                className="musicplay-icon"
                sx={{ fontSize: 70 }}
                onClick={() => handlePlayIconClick(from.item.audio_url)}
              />
              {isMusicWindowVisible && (
                <MusicPlayerBottomWindow
                  item={from}
                  setIsMusicWindowVisible={setIsMusicWindowVisible}
                />
              )} */}
            </div>
            <div className="musicDetails">
              <h1>{from.item.title}</h1>
              {from.item.artist.map((ele, idx) => {
                return (
                  <div className="artistdetails" key={idx}>
                    <p>Artist:{ele.name}</p>
                    <p>{ele.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Musicplayer;
