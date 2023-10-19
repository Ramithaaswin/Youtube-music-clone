import React, { useEffect, useState } from "react";
import "./homepage.css";
import { Container } from "@mui/material";
import { Link } from "react-router-dom";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";

const requestOptions = {
  method: "GET",
  headers: new Headers({
    projectId: "tkhrn0iil36t",
  }),
};

function Songs({ setFav, fav }) {
  const [data, setData] = useState([]);
  // const [isClicked, setIsClicked] = useState(false);

  const url = "https://academics.newtonschool.co/api/v1/music/song?limit=100";

  useEffect(() => {
    fetch(url, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        console.log(result.data);
        setData(result.data);
      })
      .catch((error) => console.log("error", error));
  }, []);

  return (
    <Container>
      <h1 className="title-recommendedsongs">Featured Songs</h1>
      <div className="musicsection-maincontainer">
        {data.map((item, index) => {
          return (
            <div className="musiclist" key={index}>
              <Link
                to="/musicplayer"
                className="musicplayer-link"
                state={{ from: {item} }}
              >
                <img
                  className="song-thumbnail"
                  src={item.thumbnail}
                  alt="thumbnail"
                />
                <p className="song-title">{item.title}</p>
                {item.artist.map((ele, idx) => {
                  return (
                    <div key={idx}>
                      <p>{ele.name}</p>
                    </div>
                  );
                })}
              </Link>
              <ThumbUpIcon
                className="thumbsupicon"
                // style={{ color: isClicked ? "blue" : "white" }}
                onClick={() => {
                  // setIsClicked(!isClicked);
                  setFav([...fav, item]);
                }}
              />
            </div>
          );
        })}
      </div>
    </Container>
  );
}

export default Songs;
