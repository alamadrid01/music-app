import React, { useState, useEffect } from "react";
import "./currentPlayer.scss";
import axios from "axios";
import shuffle from "./assets/shuffle.svg";
import play from "./assets/play.svg";
import pause from "./assets/pause.svg";
import previous from "./assets/backward.svg";
import next from "./assets/forward.svg";

function CurrentPlayer() {
  const [artist, setArtist] = useState("");
  const [title, setTitle] = useState("");
  const [duration, setDuration] = useState("");
  const [image, setImage] = useState("");
  const [data, setData] = useState();
  const [percentage, setPercentage] = useState(0);

  const percentageHandler = (e) => {
    setPercentage(e.target.value);
  };

  const options = {
    method: "GET",
    url: "https://shazam-core.p.rapidapi.com/v1/charts/world",
    headers: {
      "X-RapidAPI-Key": "aa52058a48msha779089f63619d6p10d638jsn24e7f022859c",
      "X-RapidAPI-Host": "shazam-core.p.rapidapi.com",
    },
  };

  useEffect(() => {

  axios
    .request(options)
    .then(function (response) {
      console.log(response.data);
    })
    .catch(function (error) {
      console.error(error);
    });
  }, []);

  return (
    <div>
      <div className="currentPlayer">
        <div className="left">
          <div className="songImage">
            <img src={image} alt="aint loading" />
          </div>
          <div className="text">
            <span>{title}</span>
            <small>{artist}</small>
          </div>
        </div>
        <div className="middle">
          <div className="image">
            <img src={shuffle} alt="" />
            <img src={previous} alt="" />
            <img src={play} alt="" />
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
