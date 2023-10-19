import React from "react";
import "./newPlaylist.css";

function NewPlaylist({ setShowNewPlaylist }) {
  return (
    <>
      <div className="background-blur">
        <div className="newplaylistFormMainContainer">
          <h2 className="newplaylistWindowtitle">New playlist</h2>
          <div className="inputdiv-newplaylist">
            <input placeholder="Title" />
            <input placeholder="Description" />
          </div>
          <div className="buttonDiv-newplaylistwindow">
            <button
              className="cancel-btn"
              onClick={() => setShowNewPlaylist(false)}
            >
              Cancel
            </button>
            <button className="create-btn">Create</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default NewPlaylist;
