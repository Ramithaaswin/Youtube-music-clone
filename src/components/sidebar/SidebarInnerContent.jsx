import React, { useState } from "react";
import "./sidebarinnercontent.css";
import HomeIcon from "@mui/icons-material/Home";
import ExploreIcon from "@mui/icons-material/Explore";
import LibraryMusicIcon from "@mui/icons-material/LibraryMusic";
import AddIcon from "@mui/icons-material/Add";
import PushPinIcon from "@mui/icons-material/PushPin";
import { Link } from "react-router-dom";
import NewPlaylist from "../newplaylist/NewPlaylist";

const SidebarInnerContent = () => {
  const [showNewPlaylist, setShowNewPlaylist] = useState(false);

  return (
    <>
      <div className="sidebarInnercontentMainContainer">
        <ul>
          <li>
            <Link to="/" className="homeiconlink">
              <div>
                <HomeIcon className="homeicon" />
              </div>
              <div className="home">Home</div>
            </Link>
          </li>
          <li>
            <div>
              <ExploreIcon />
            </div>
            <div>Explore</div>
          </li>
          <li>
            <Link to="/library" className="libraryicon">
              <div>
                <LibraryMusicIcon />
              </div>
              <div>Library</div>
            </Link>
          </li>
        </ul>
        <hr className="horizontalline" />
        <br />
        <br />
        <ul>
          <li
            className="playlistSidebar"
            onClick={() => setShowNewPlaylist(true)}
          >
            <AddIcon />
            New playlist
          </li>
          <br />
          <li className="likesandplaylist">
            <Link to="/likedmusic" className="likedMusic">
              <div>Your likes</div>
              <div className="autoplaylist-containerdiv">
                <PushPinIcon className="pushpincon" sx={{ fontSize: 17 }}/>
                <p className="autoplaylist">Auto playlist</p>
              </div>
            </Link>
          </li>
        </ul>
      </div>
      {showNewPlaylist && (
        <NewPlaylist setShowNewPlaylist={setShowNewPlaylist} />
      )}
    </>
  );
};

export default SidebarInnerContent;
