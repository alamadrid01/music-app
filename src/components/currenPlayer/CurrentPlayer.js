import React, { useState, useContext } from "react";
import "./currentPlayer.scss";
import shuffle from "./assets/shuffle.svg";
import play from "./assets/play.svg";
import pause from "./assets/pause.svg";
import previous from "./assets/backward.svg";
import next from "./assets/forward.svg";
import {User} from "../../App";

function CurrentPlayer() {
  const [show, setShow] = useState(false);
  const [percentage, setPercentage] = useState(0);

  const { currentSong } = useContext(User);
  console.log(currentSong);

  const percentageHandler = (e) => {
    setPercentage(e.target.value);
  };

  const clickHandler = () => {
    setShow(!show)
    let beat = new Audio(currentSong.audio);
    if (show) {
      beat.pause();
    } else {
      beat.play();
    }
  }


  return (
    <div>
      <div className="currentPlayer">
        <div className="left">
          <div className="songImage">
            <img src={currentSong.cover} alt="aint loading" />
          </div>
          <div className="text">
            <span>{currentSong.title}</span>
            <small>{currentSong.artist}</small>
          </div>
        </div>
        <div className="middle">
          <div className="image">
            <img src={shuffle} alt="" />
            <img src={previous} alt="" />
            <div onClick={clickHandler} >
              {
                show ? <img className="play" src={pause} alt="" /> : <img className="play" src={play} alt="" />
              }
            </div>
            <img src={next} alt="" />
          </div>
          <div className="progressBar">
            <input
              onChange={percentageHandler}
              type="range"
              steps="0.01"
              id="range"
            />
          </div>
        </div>
        <div className="right">{percentage}</div>
      </div>
    </div>
  );
}

export default CurrentPlayer;
