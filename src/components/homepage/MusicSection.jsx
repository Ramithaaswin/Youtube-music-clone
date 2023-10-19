import React from "react";
import Songs from "./Songs";
import "./homepage.css";
import { Container } from "@mui/material";
import Albums from "./Albums";

function MusicSection({ setFav, fav }) {
  return (
    <>
      <Container>
        <Songs setFav={setFav} fav={fav} />
        <Albums setFav={setFav} fav={fav} />
      </Container>
    </>
  );
}

export default MusicSection;
