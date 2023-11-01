import React, { useState } from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import HomePage from "./components/homepage/HomePage";
import Musicplayer from "./components/musicplayer/Musicplayer";
import SubscriptionPage from "./components/subscriptionpage/SubscriptionPage";
import SignInPage from "./components/signinpage/SignInPage";
import LikedMusicPge from "./components/likedmusic/LikedMusicPge";
import LibraryPage from "./components/librarypage/LibraryPage";
import SignupPage from "./components/signinpage/SignupPage";


function App() {
  const [fav, setFav] = useState([]);

  return (
    <>
      <BrowserRouter>
        <div className="appMainContainer">
          <div className="navContainerInApp">
            <Navbar />
          </div>
          <div className="appContainer">
            <Routes>
              <Route
                path="/"
                element={<HomePage setFav={setFav} fav={fav} />}
              ></Route>
              <Route path="/musicplayer" element={<Musicplayer />}></Route>
              <Route
                path="/subscription"
                element={<SubscriptionPage />}
              ></Route>
              <Route path="/signin" element={<SignInPage />}></Route>
              <Route path="/signup" element={<SignupPage />}></Route>
              <Route
                path="/likedmusic"
                element={<LikedMusicPge fav={fav} setFav={setFav} />}
              ></Route>
              <Route path="/library" element={<LibraryPage />}></Route>
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
