import React, { useContext } from "react";
import { User } from "../../App";
import "./songs.scss";
import option from "./assets/option.svg";
import heart from "./assets/heart.svg";
import play from "./assets/play.svg";
import collection from "./assets/collection.svg";

function Songs() {
  const { data, currentSong } = useContext(User);

  return (
    <div
      className="song"
      style={{ backgroundImage: `url(${currentSong.cover})` }}
    >
      <div className="top">
        <div className="image">
          <img src={currentSong.cover} alt="song" />
        </div>
        <div className="text">
          <p>{currentSong.title}</p>
          <p>{currentSong.artist}</p>
          <div className="button">
            <button>
              {" "}
              <img src={play} alt="test" /> Play all
            </button>
            <button>
              {" "}
              <img src={collection} alt="test" /> Add to collection
            </button>
            <button>
              {" "}
              <img src={heart} alt="test" />{" "}
            </button>
          </div>
        </div>
      </div>
      <div className="bottom">
        {data.map((items) => (
          <div>
            <div className="songs_holder" key={items.key}>
              <div className="image">
                <img src={items.share.image} alt="song" />
              </div>
              <div className="title">
                <p>{items.title}</p>
              </div>
              <div className="subtitle">
                <p>{items.subtitle}</p>
              </div>
              <div className="option">
                <img src={option} alt="option" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Songs;
