import React, { useState } from "react";
import "./sectionOne.scss";
import firstPicture from "./assets/man-picture.svg";
import golden from "./assets/golden.svg";
import reggae from "./assets/reggae.svg";
import tomorrow from "./assets/tommorow.svg";
import love from "./assets/love.svg";

function Section() {
  // const [name, setName] = useState('')
  // const [artist, setArtist] = useState('')
  // const [duration, setDuration] = useState('')
  // const [picture, setPicture] = useState()

  // switch (currentSection) {
  //   case 'hiphop':
  //       setName("Golden age of 80's");
  //       setArtist('Sean Swadder');
  //       setDuration('2:32:45');
  //       setPicture(golden)

  //     break;

  //   case 'reggae':
  //       setName("Reggae 'n' blues");
  //       setArtist('Dj Yk Mule');
  //       setDuration('1:02:45');
  //       setPicture(reggae)

  //     break;

  //   case 'fuji':
  //       setName("Tomorrow's tunes");
  //       setArtist('Obi Datti');
  //       setDuration('1:00:45');
  //       setPicture(tomorrow)

  //     break;

  //   default:
  //     break;
  // }

  const data = [
    {
      name: "Golden age of 80's",
      artist: "Sean Swadder",
      duration: "2:32:45",
      picture: golden,
      love: love
    },
    {
      name: "Golden age of 80's",
      artist: "Sean Swadder",
      duration: "2:32:45",
      picture: reggae,
      love: love
    },
    {
      name: "Golden age of 80's",
      artist: "Sean Swadder",
      duration: "2:32:45",
      picture: tomorrow,
      love: love
    },
  ];

  return (
    <div>
      <div className="sectionOne">
        <div className="left">
          <div className="text">
            <div className="a">
              <p>Currated playlist</p>
            </div>
            <div className="b">
              <h2>R & B Hits</h2>
              <p>
                All mine, Lie again, Petty call me everyday, Out of time, No
                love, Bad habit and so much
              </p>
            </div>
            <div className="c">
              <p>33K Likes</p>
            </div>
          </div>
          <div className="shape">
            <img src={firstPicture} alt="man-picture" />
          </div>
        </div>
        <div className="right">
          <div className="topChart">
            <strong>Top charts</strong>
          </div>
          <div className="topChartMenu">
            {data.map((chart) => 
              <div key={chart.name} className="a">
                <div className="b">
                  <img src={chart.picture} alt="chart-picture" />
                </div>
                <div className="c">
                  <p>{chart.name}</p>
                  <span>{chart.artist}</span>
                  <small>{chart.duration}</small>
                </div>
                <div className="d"><img src={chart.love} alt="love" /></div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section;
