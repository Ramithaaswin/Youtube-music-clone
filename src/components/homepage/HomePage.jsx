import React, { useEffect, useState } from "react";
import "./homepage.css";
import TopSection from "./TopSection";
import Sidebar from "../sidebar/Sidebar";
import MusicSection from "./MusicSection";

const HomePage = ({ setFav, fav }) => {
  return (
    <>
      <Sidebar />
      <div className="homepageMainContainer">
        <div>
          <TopSection />
        </div>
        <div>
          <MusicSection setFav={setFav} fav={fav} />
        </div>
      </div>
    </>
  );
};

export default HomePage;
