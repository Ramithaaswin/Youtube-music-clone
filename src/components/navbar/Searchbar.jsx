import React from "react";
import "./navbar.css";

function Searchbar() {
  return (
    <>
      <div className="searchbarMainContainer">
        <input
          type="search"
          placeholder="Search songs, albums, artists, podcasts"
        />
      </div>
    </>
  );
}

export default Searchbar;
