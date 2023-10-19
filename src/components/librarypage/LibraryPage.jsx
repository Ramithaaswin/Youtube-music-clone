import React from "react";
import "./librarypage.css";
import Sidebar from "../sidebar/Sidebar";
import { Container } from "@mui/material";
import { Link } from "react-router-dom";
import PushPin from "@mui/icons-material/PushPin";

function LibraryPage() {
  return (
    <>
      <Sidebar />
      <Container>
        <div className="librarypage-maincontainer">
          <div className="library-topsection">
            <ul>
              <li>Playlist</li>
              <li>Podcasts</li>
              <li>Songs</li>
              <li>Albums</li>
              <li>Artists</li>
            </ul>
          </div>
          <div className="library-bottomsection">
            <img
              className="librarypage-likeimage"
              src="https://www.gstatic.com/youtube/media/ytm/images/pbg/liked-music-@576.png"
              alt="like"
            />
            <Link to="/likedmusic" className="linktolikes">
              <p className="librarypage-likeimgdescription">Liked Music</p>
            </Link>
            <div className="autoplaylist-div">
              <PushPin className="pushpin-icon"/>
              <p className="autoplaylist">Autoplaylist</p>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}

export default LibraryPage;
