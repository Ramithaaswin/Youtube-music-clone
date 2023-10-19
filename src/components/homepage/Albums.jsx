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

function Albums({ setFav, fav }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(
      "https://academics.newtonschool.co/api/v1/music/album?limit=100",
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => {
        console.log(result.data);
        setData(result.data);
      })
      .catch((error) => console.log("error", error));
  }, []);

  return (
    <>
      <Container>
        <h1 className="title-recommendedsongs">Recommended Albums</h1>
        <div className="musicsection-maincontainer">
          {data.map((item, index) => {
            return (
              <div className="musiclist" key={index}>
                <Link to="/musicplayer" className="musicplayer-link">
                  <img className="song-thumbnail" src={item.image} />
                  <p className="song-title">{item.title}</p>
                  <p>{item.type}</p>
                </Link>
                <ThumbUpIcon
                  className="thumbsupicon"
                  onClick={() => {
                    setFav([...fav, item]);
                  }}
                />
              </div>
            );
          })}
        </div>
      </Container>
    </>
  );
}

export default Albums;
