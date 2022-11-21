import React,{useState, useEffect} from 'react'
import './currentPlayer.scss';
import axios from 'axios'
import shuffle from './assets/shuffle.svg'
import play from './assets/play.svg'
import pause from './assets/pause.svg'
import previous from './assets/backward.svg'
import next from './assets/forward.svg'

function CurrentPlayer() {
    const [artist, setArtist]= useState('');
    const [title, setTitle]= useState('');
    const [duration, setDuration]= useState('');
    const [image, setImage]= useState('');
    const [data, setData]= useState();
    const [percentage, setPercentage]= useState(0);

    useEffect(()=>{
      axios
        .get("https://musica-api.up.railway.app/popular")
        .then((response) => {
          setData(response.data[0]);
          setArtist(data.artist);
          setImage(data.cover);
          setDuration(data.duration);
          setTitle(data.title);
        })
        .catch((err) => {
          console.log("This is the error:" + err);
        });

     

    },[data])

    const percentageHandler =(e) =>{
      setPercentage(e.target.value)
    }

  return (
    <div>
        <div className="currentPlayer">
          <div className="left">
            <div className="songImage">
              <img src={image} alt="picture" />
              
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
              <input onChange={percentageHandler} type="range" steps='0.01' id="range" />
            </div>

          </div>
          <div className="right">
            {
              percentage
            }
          </div>
        </div>
    </div>
  )
}

export default CurrentPlayer