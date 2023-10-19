import React from "react";

function MusicInfo({ item }) {
  return (
    <div className="musicInfoMainContainer">
      {console.log(item.item.thumbnail)}
      <img className="musicinfo-thumbnail" src={item.item.thumbnail} />
      <div className="musicinfo-details">
        <p>{item.item.title}</p>
        {item.item.artist.map((ele, idx) => {
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
