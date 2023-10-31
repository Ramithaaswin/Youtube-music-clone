import React from "react";
import "./likedMusic.css";
import { Link } from "react-router-dom";
import { Container } from "@mui/material";
import Sidebar from "../sidebar/Sidebar";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";

function LikedMusicPge({ fav, setFav }) {
  return (
    <>
      <Sidebar />
      <Container>
        <div className="likeedmusicpage-maincontainer">
          <div className="likedmusic-logo">
            <img
              src="https://www.gstatic.com/youtube/media/ytm/images/pbg/liked-music-@576.png"
              alt="likedmusics"
              className="likedmusic-image"
            />
            <div className="likedmusic-details">
              <h1 className="likedmusic-detail-heading">Liked Music</h1>
              <div className="likedmusic-detaild-para">
                <p>Auto playlist</p>
                <p> songs</p>
              </div>
              <p className="likedmusic-message">
                Music you like in any YouTube app will show here. You can change
                this in Settings
              </p>
            </div>
          </div>
          <div className="likedmusicSection-container">
            {fav.length > 0 &&
              fav.map((item, index) => {
                return (
                  <>
                    <div className="musiclist-likedmusicpage" key={index}>
                      <Link to="/musicplayer" className="musicplayer-link">
                        <img
                          className="likedmusicpage-song-thumbnail"
                          src={item.thumbnail}
                          alt="thumbnail"
                        />
                        <p className="song-title">{item.title}</p>
                        <p>{item.mood}</p>
                        {/* <ThumbUpIcon
                          className="thumbsupicon-likedmusicpage"
                          onClick={() => {
                            setFav(fav.filter((i) => i !== item));
                          }}
                        /> */}
                      </Link>
                      <ThumbUpIcon
                        className="thumbsupicon-likedmusicpage"
                        onClick={() => {
                          setFav(fav.filter((i) => i !== item));
                        }}
                      />
                    </div>
                  </>
                );
              })}
          </div>
        </div>
      </Container>
    </>
  );
}

export default LikedMusicPge;
