import React from "react";

function MusicInfo({ item }) {
  return (
    <div className="musicInfoMainContainer">
      {console.log(item.thumbnail)}
      <img
        className="musicinfo-thumbnail"
        src={item.thumbnail}
        alt="song-thumbnail"
      />
      <div className="musicinfo-details">
        <p>{item.title}</p>
        {item.artist.map((ele, idx) => {
          return (
            <div key={idx}>
              <p>{ele.name}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default MusicInfo;
